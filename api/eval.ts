type EvalRequest = {
  method?: string;
  body?: unknown;
};

type EvalResponse = {
  status: (code: number) => EvalResponse;
  json: (data: unknown) => void;
};

type Submission = {
  training: string;
  trainingLabel: string;
  enjoyed: string;
  apply: string;
  nps: number;
  testimonial: string;
  improve: string;
  name: string;
  email: string;
  role: string;
  company: string;
  consentQuote: boolean;
  consentContact: boolean;
};

const RESPONSES_REPO = process.env.EVAL_GITHUB_REPO ?? "ludwikc/training-evals";

const text = (value: unknown, max: number): string =>
  typeof value === "string" ? value.trim().slice(0, max) : "";

const slugify = (value: string): string =>
  value
    .toLowerCase()
    .normalize("NFKD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 60) || "anonymous";

const parseSubmission = (body: unknown): Submission | null => {
  if (typeof body !== "object" || body === null) return null;
  const raw = body as Record<string, unknown>;
  const nps = Number(raw.nps);
  const submission: Submission = {
    training: slugify(text(raw.training, 100)),
    trainingLabel: text(raw.trainingLabel, 200),
    enjoyed: text(raw.enjoyed, 5000),
    apply: text(raw.apply, 5000),
    nps,
    testimonial: text(raw.testimonial, 5000),
    improve: text(raw.improve, 5000),
    name: text(raw.name, 200),
    email: text(raw.email, 200),
    role: text(raw.role, 200),
    company: text(raw.company, 200),
    consentQuote: raw.consentQuote === true,
    consentContact: raw.consentContact === true,
  };
  const valid =
    submission.training.length > 0 &&
    submission.enjoyed.length > 0 &&
    submission.testimonial.length > 0 &&
    submission.name.length > 1 &&
    /^\S+@\S+\.\S+$/.test(submission.email) &&
    Number.isInteger(nps) &&
    nps >= 0 &&
    nps <= 10;
  return valid ? submission : null;
};

const toMarkdown = (s: Submission, submittedAt: string): string => {
  const yaml = (value: string | number | boolean) => JSON.stringify(value);
  const section = (heading: string, answer: string) =>
    answer ? `## ${heading}\n\n${answer}\n` : "";
  return [
    "---",
    `training: ${yaml(s.training)}`,
    `training_label: ${yaml(s.trainingLabel)}`,
    `submitted_at: ${yaml(submittedAt)}`,
    `name: ${yaml(s.name)}`,
    `email: ${yaml(s.email)}`,
    `role: ${yaml(s.role)}`,
    `company: ${yaml(s.company)}`,
    `nps: ${s.nps}`,
    `consent_public_quote: ${s.consentQuote}`,
    `consent_contact: ${s.consentContact}`,
    "---",
    "",
    section("What did you enjoy most about the training?", s.enjoyed),
    section("What's the first thing you'll do with what you've learned?", s.apply),
    section(
      "What would you tell a colleague who's wondering whether this training is worth their time?",
      s.testimonial,
    ),
    section("Anything we should make even better next time?", s.improve),
  ]
    .filter((line) => line !== undefined)
    .join("\n");
};

const storeInBlob = async (path: string, markdown: string) => {
  const { put } = await import("@vercel/blob");
  await put(`eval/${path}`, markdown, {
    access: "public",
    addRandomSuffix: true,
    contentType: "text/markdown",
  });
};

const commitToGitHub = async (path: string, markdown: string, message: string) => {
  const token = process.env.EVAL_GITHUB_TOKEN;
  if (!token) throw new Error("EVAL_GITHUB_TOKEN is not configured");
  const response = await fetch(
    `https://api.github.com/repos/${RESPONSES_REPO}/contents/${encodeURI(path)}`,
    {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: "application/vnd.github+json",
        "X-GitHub-Api-Version": "2022-11-28",
        "User-Agent": "siadlak-com-eval",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        message,
        content: Buffer.from(markdown, "utf-8").toString("base64"),
        branch: "main",
      }),
    },
  );
  if (!response.ok) {
    const detail = await response.text();
    throw new Error(`GitHub ${response.status}: ${detail.slice(0, 300)}`);
  }
};

export default async function handler(req: EvalRequest, res: EvalResponse) {
  if (req.method === "GET") {
    res.status(200).json({
      ok: true,
      storage: process.env.EVAL_GITHUB_TOKEN
        ? "github"
        : process.env.BLOB_READ_WRITE_TOKEN
          ? "blob"
          : "missing-token",
    });
    return;
  }
  if (req.method !== "POST") {
    res.status(405).json({ ok: false, error: "method-not-allowed" });
    return;
  }

  const raw = req.body as Record<string, unknown> | undefined;
  if (raw && typeof raw.website === "string" && raw.website.length > 0) {
    res.status(200).json({ ok: true }); // honeypot: pretend success, store nothing
    return;
  }

  const submission = parseSubmission(req.body);
  if (!submission) {
    res.status(400).json({ ok: false, error: "invalid-submission" });
    return;
  }

  // Log-based safety net: if the GitHub write fails, the payload survives in
  // the Vercel function logs.
  console.log("eval-submission", JSON.stringify(submission));

  const submittedAt = new Date().toISOString();
  const stamp = submittedAt.replace(/[:.]/g, "-");
  const path = `responses/${submission.training}/${stamp}-${slugify(submission.name)}.md`;

  const markdown = toMarkdown(submission, submittedAt);
  try {
    if (process.env.EVAL_GITHUB_TOKEN) {
      await commitToGitHub(path, markdown, `eval: ${submission.name} — ${submission.training}`);
    } else {
      await storeInBlob(path, markdown);
    }
    res.status(200).json({ ok: true });
  } catch (error) {
    console.error("eval-store-failed", error instanceof Error ? error.message : error);
    try {
      await storeInBlob(path, markdown);
      res.status(200).json({ ok: true });
    } catch (blobError) {
      console.error(
        "eval-blob-fallback-failed",
        blobError instanceof Error ? blobError.message : blobError,
      );
      res.status(502).json({ ok: false, error: "store-failed" });
    }
  }
}
