import { en } from "./copy.en";
import { pl } from "./copy.pl";
import type { CourseLevel, Locale, SessionStatus, Testimonial, TierId } from "./types";

type Meta = { title: string; description: string };
type TitledText = { title: string; body: string };
type TierCopy = { title: string; price: string; bullets: string[]; cta: string };
type StickyCopy = { label: string; cta: string };
type AgendaLine = { time: string; item: string };
type BriefingTopic = { title: string; outcomes: string[]; agenda: AgendaLine[] };
type LabelledFact = { label: string; body: string };

export type FormMode = "seat" | "briefing" | "scope";
export type BriefingTopicId = "a" | "b" | "c";
export type StackOption = "copilot" | "fabric" | "sql" | "powerbi" | "m365" | "other";
export type DeliveryOption = "remote" | "onsite" | "hybrid";
export type TestimonialTag = Testimonial["tags"][number];

export type MctCopy = {
  meta: {
    hub: Meta;
    briefing: Meta;
    enterprise: Meta;
    course: Meta;
  };
  nav: {
    brand: string;
    hub: string;
    courses: string;
    briefing: string;
    enterprise: string;
    request: string;
    localeSwitch: string;
  };
  hero: {
    eyebrow: string;
    line1: string;
    line2: string;
    sub: string;
    pathTeams: string;
    pathEnterprise: string;
    nextClass: string;
  };
  trust: { eyebrow: string };
  segment: { teams: TitledText & { cta: string }; enterprise: TitledText & { cta: string } };
  tiers: {
    eyebrow: string;
    title: string;
    briefingBadge: string;
    footnote: string;
    items: Record<TierId, TierCopy>;
  };
  schedule: {
    eyebrow: string;
    title: string;
    columns: { course: string; dates: string; hours: string; language: string; status: string; action: string };
    hoursValue: string;
    status: Record<SessionStatus, string>;
    languages: Record<Locale, string>;
    seatsLeft: string;
    rowCta: string;
    empty: TitledText & { notify: string; privateRun: string };
  };
  catalog: {
    eyebrow: string;
    title: string;
    footer: string;
    dayOne: string;
    dayMany: string;
    cardCta: string;
  };
  badges: { condensed: string; official: string; custom: string };
  levels: Record<CourseLevel, string>;
  whyMe: {
    eyebrow: string;
    title: string;
    headers: { them: string; me: string };
    rows: Array<{ them: string; me: string }>;
  };
  proof: {
    eyebrow: string;
    title: string;
    sub: string;
    note: string;
    filters: Record<"all" | TestimonialTag, string>;
    readAll: string;
    showFewer: string;
    empty: string;
  };
  process: {
    eyebrow: string;
    title: string;
    lanes: Record<TierId, { title: string; beats: string[] }>;
  };
  faq: { eyebrow: string; title: string };
  finalCta: { title: string; sub: string; contactLine: string };
  footer: {
    since: string;
    catalog: string;
    formats: string;
    contact: string;
    responseTime: string;
    privacy: string;
  };
  form: {
    eyebrow: string;
    modes: Record<FormMode, string>;
    titles: Record<FormMode, string>;
    labels: {
      name: string;
      email: string;
      company: string;
      phone: string;
      course: string;
      session: string;
      sessionNotify: string;
      seats: string;
      language: string;
      topic: string;
      windows: string;
      leaders: string;
      stack: string;
      teamSize: string;
      timeline: string;
      delivery: string;
      procurement: string;
      message: string;
      consent: string;
      wantsPrivateQuote: string;
    };
    placeholders: {
      briefingMessage: string;
      windows: string;
      teamSize: string;
      timeline: string;
      procurement: string;
      message: string;
    };
    options: {
      topicCustom: string;
      stack: Record<StackOption, string>;
      delivery: Record<DeliveryOption, string>;
      languages: Record<Locale, string>;
    };
    quote: { line: string; discount: string; total: string; addSeat: string; removeSeat: string };
    submit: Record<FormMode, string>;
    sending: string;
    microcopy: { seat: string };
    seatsHint6: string;
    success: { title: string; body: Record<FormMode, string>; calendar: string };
    error: string;
    errors: { required: string; email: string; consent: string };
  };
  sticky: {
    teams: StickyCopy;
    enterprise: StickyCopy;
    course: StickyCopy;
    courseNoDate: StickyCopy;
    briefing: StickyCopy;
    enterprisePage: StickyCopy;
    dismiss: string;
  };
  course: {
    duration: string;
    level: string;
    maxSeats: string;
    liveOnline: string;
    perSeat: string;
    orPrivate: string;
    condensedNotice: string;
    audience: string;
    notFor: string;
    outcomesOne: string;
    outcomes: string;
    agenda: string;
    day: string;
    addOn: string;
    prerequisites: string;
    msLearn: string;
    exam: string;
    format: { title: string; items: string[]; recording: string };
    datesTitle: string;
    trainer: { eyebrow: string; name: string; years: string; trained: string; countries: string };
    related: string;
  };
  briefing: {
    eyebrow: string;
    title: string;
    sub: string;
    cta: string;
    topicsEyebrow: string;
    topicsTitle: string;
    outcomesLabel: string;
    agendaLabel: string;
    topics: Record<BriefingTopicId, BriefingTopic>;
    ownQuestion: string;
  };
  enterprise: {
    eyebrow: string;
    title: string;
    sub: string;
    primaryCta: string;
    secondaryCta: string;
    casesEyebrow: string;
    casesTitle: string;
    cases: Array<TitledText & { id: string }>;
    procurement: { eyebrow: string; title: string; facts: LabelledFact[] };
    privateRun: TitledText;
  };
};

export const getCopy = (locale: Locale): MctCopy => (locale === "pl" ? pl : en);

export const fill = (template: string, vars: Record<string, string | number>): string =>
  template.replace(/\{(\w+)\}/g, (match, key: string) => (Object.prototype.hasOwnProperty.call(vars, key) ? String(vars[key]) : match));
