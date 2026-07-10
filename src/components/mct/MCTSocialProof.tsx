import { useState } from "react";
import { ChevronDown, Quote } from "lucide-react";

const t = {
  bg: "#0a0a0b",
  surface: "#111113",
  border: "#27272a",
  text: "#fafafa",
  muted: "#a1a1aa",
  accent: "#3b82f6",
  green: "#22c55e",
  mono: "'JetBrains Mono', monospace",
  sans: "'Inter', system-ui, sans-serif",
} as const;

type Testimonial = {
  quote: string;
  detail?: string;
  author: string;
  premium?: boolean;
};

const testimonials: Testimonial[] = [
  // Premium tier
  {
    quote: "He is the absolute best instructor I have ever had!!",
    detail: "I am impressed by all the clear examples he made during the course! He made very useful drawings on the whiteboard. By switching between presentation slides, SQL code examples and the whiteboard, it was easy to maintain full concentration throughout the whole course!",
    author: "Training participant, Data Platform training in Bergen, Norway 🇳🇴",
    premium: true,
  },
  {
    quote: "Best instructor I've had in many years.",
    detail: "Excellent instructor. Extremely knowledgeable, articulate and personable.",
    author: "Betty M. Greenberg",
    premium: true,
  },
  {
    quote: "The best trainer I had the pleasure working with. Top-notch knowledge and communication.",
    author: "Training participant, Modern Work training in Warsaw, Poland 🇵🇱",
    premium: true,
  },
  {
    quote: "Ludwik is the best instructor I have ever met.",
    detail: "His knowledge and teaching skills made this course incredibly interesting even for a person who is quite familiar with this software.",
    author: "Pawel Cerkaski",
    premium: true,
  },
  {
    quote: "Outstanding.",
    author: "Training participant, Modern Work training in Oslo, Norway 🇳🇴",
    premium: true,
  },
  {
    quote: "Extremely professional, top score.",
    author: "Ane Zakariassen",
    premium: true,
  },
  {
    quote: "Very professional, competent and trustworthy.",
    detail: "His hands-on explanation and dissection of problems gave me a better understanding.",
    author: "Goncalo Marques",
    premium: true,
  },
  {
    quote: "Great instructor! … 10/10.",
    detail: "Energetic, knowledgeable, competent and great at teaching.",
    author: "Training participant, M20761 in London, UK 🇬🇧",
    premium: true,
  },
  {
    quote: "With full conviction - the right person in the right place. Don't let him go.",
    author: "Adam Aniola",
    premium: true,
  },
  {
    quote: "Very energetic and knowledgeable teacher. He truly knows what he is talking about.",
    author: "Training participant, Data Platform training in Oslo, Norway 🇳🇴",
    premium: true,
  },
  // Standard tier
  {
    quote: "High flexibility and readiness to work with the group. High level of professionalism. Exemplary communication.",
    author: "Training participant, M2778 in Warsaw, Poland 🇵🇱",
  },
  {
    quote: "First impression: inconspicuous, but later - BEST OF THE BEST.",
    author: "Małyszek",
  },
  {
    quote: "Quite a pleasant trainer. Funny, cheerful, yet competent, delivering reliable information. A real \"powerhouse.\"",
    author: "D. Szymczyk",
  },
  {
    quote: "Really good at explaining and easy to understand.",
    author: "Training participant, Data Platform training in Warsaw, Poland 🇵🇱",
  },
  {
    quote: "Great pace of training, we managed to complete all 20 subjects and were left with 2 hours for extra questions.",
    author: "Training participant, M10775 in London, UK 🇬🇧",
  },
  {
    quote: "Very intelligent - would love for him to return for any refresher.",
    author: "Ahkeel Reid",
  },
  {
    quote: "He was thorough, well paced, and overall patient with the numerous issues we ran into. He found creative and effective solutions for problems ranging from power outages to Hyper-V domain controller issues.",
    author: "Training participant, M20697-1 in London, UK 🇬🇧",
  },
  {
    quote: "He was freaking awesome!",
    author: "Training participant, Modern Work training in London, UK 🇬🇧",
  },
  {
    quote: "The instructor was very knowledgeable on the subject and always kept the class professional and on task.",
    author: "Denny R. Hargrave",
  },
  {
    quote: "No comments. Very good contact, way of conveying information, and personal culture.",
    author: "Training participant, M10774 in Warsaw, Poland 🇵🇱",
  },
  {
    quote: "Extensive subject-matter knowledge combined with strong teaching skills and personal culture.",
    author: "Gosia B.",
  },
  {
    quote: "Extensive knowledge and the ability to convey it effectively.",
    author: "M. Gołczyński",
  },
  {
    quote: "Good knowledge, flexibility to answer any questions in the SQL theme, high level of communication.",
    author: "Jerzy Gebler",
  },
  {
    quote: "Great trainer. Has very good, clear examples. Great guy. Good lunches.",
    author: "Training participant, Data Platform training in Warsaw, Poland 🇵🇱",
  },
  {
    quote: "Excellent instructor, I'd recommend him to anyone!",
    author: "Training participant, technical training in Warsaw, Poland 🇵🇱",
  },
  {
    quote: "A CHANGE - THE LAST DAY WAS EPIC!!!!",
    author: "Training participant, Data Platform training in Warsaw, Poland 🇵🇱",
  },
  {
    quote: "Best instructor I ever had.",
    author: "M.B.",
  },
  {
    quote: "A down-to-earth guy :)",
    author: "A. Harasimiuk",
  },
  {
    quote: "The instructor explained the examples perfectly during the course.",
    author: "Rayner Jacobsen",
  },
  {
    quote: "Highly skillful, flexible, pedagogical.",
    author: "Duc Dung Lam",
  },
  {
    quote: "Easy to understand, clear explanations and a nice teaching personality.",
    author: "Yasith Navoda",
  },
  {
    quote: "Thanks for your enthusiastic presentations these days! It has been a pleasure to be on your course.",
    author: "Training participant, Data Platform training in Oslo, Norway 🇳🇴",
  },
  {
    quote: "Knew the material and used a lot of real-life examples.",
    author: "Training participant, Data Platform training in Oslo, Norway 🇳🇴",
  },
  {
    quote: "The instructor performed very well and willingly answered additional questions outside the main scope.",
    author: "Training participant, technical training in Bergen, Norway 🇳🇴",
  },
  {
    quote: "I found the instructor to be very present and eager to pass on knowledge on any of the covered subjects. The pace of the course was great and every question we had was answered with a very good explanation.",
    author: "Endre Norekval Tillung",
  },
  {
    quote: "Great presentation and really engaged during the lecture. Did not strictly follow the PowerPoint, but still covered the topics in a great way.",
    author: "Jon Martin Mikalsen",
  },
  {
    quote: "Very good.",
    author: "Training participant, technical training in Warsaw, Poland 🇵🇱",
  },
  {
    quote: "Super.",
    author: "P. Starko",
  },
];

const FEATURED_COUNT = 6;

const PremiumCard = ({ item }: { item: Testimonial }) => (
  <div
    className="rounded-xl p-6 md:p-8 relative"
    style={{
      background: `linear-gradient(135deg, ${t.surface}, ${t.accent}08)`,
      border: `1px solid ${t.accent}40`,
    }}
  >
    <Quote
      className="absolute top-4 right-4 w-8 h-8 opacity-20"
      style={{ color: t.accent }}
    />
    <p
      className="text-lg md:text-xl font-bold leading-snug mb-3"
      style={{ color: t.text }}
    >
      "{item.quote}"
    </p>
    {item.detail && (
      <p className="leading-relaxed mb-4 text-sm md:text-base" style={{ color: t.muted }}>
        {item.detail}
      </p>
    )}
    <p
      className="text-xs tracking-wide"
      style={{ fontFamily: t.mono, color: t.accent }}
    >
      - {item.author}
    </p>
  </div>
);

const StandardCard = ({ item }: { item: Testimonial }) => (
  <div
    className="rounded-lg p-5"
    style={{ background: t.surface, border: `1px solid ${t.border}` }}
  >
    <p className="text-sm leading-relaxed mb-3" style={{ color: t.text }}>
      "{item.quote}"
    </p>
    <p
      className="text-xs"
      style={{ fontFamily: t.mono, color: t.muted }}
    >
      - {item.author}
    </p>
  </div>
);

export default function MCTSocialProof() {
  const [expanded, setExpanded] = useState(false);

  const featured = testimonials.filter((item) => item.premium).slice(0, FEATURED_COUNT);
  const rest = testimonials.filter((item) => !featured.includes(item));

  return (
    <section
      className="py-20 md:py-24"
      style={{ borderTop: `1px solid ${t.border}` }}
    >
      <div className="mx-auto max-w-6xl px-6">
        <p
          className="mb-3 text-sm tracking-wider uppercase"
          style={{ fontFamily: t.mono, color: t.accent }}
        >
          // wall of proof
        </p>

        <h2
          className="text-3xl md:text-4xl font-bold mb-4 leading-tight"
          style={{ color: t.text }}
        >
          {testimonials.length} reviews. Zero scripted.
        </h2>
        <p className="mb-12 max-w-2xl text-lg leading-relaxed" style={{ color: t.muted }}>
          Every quote is pulled straight from an actual post-training evaluation form - unedited, unfiltered.
        </p>

        {/* Featured — the strongest reviews, always visible */}
        <div className="grid gap-5 md:grid-cols-2">
          {featured.map((item, i) => (
            <PremiumCard key={i} item={item} />
          ))}
        </div>

        {/* The rest — collapsed by default to keep the page skimmable */}
        {expanded && (
          <div className="mt-5 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {rest.map((item, i) => (
              <StandardCard key={i} item={item} />
            ))}
          </div>
        )}

        <div className="mt-10 text-center">
          <button
            type="button"
            onClick={() => setExpanded((v) => !v)}
            className="inline-flex items-center gap-2 rounded-lg px-6 py-3 text-sm font-medium transition-all duration-200 hover:brightness-125"
            style={{ background: t.surface, border: `1px solid ${t.border}`, color: t.text, fontFamily: t.mono }}
          >
            {expanded ? "Show fewer" : `Read all ${testimonials.length} reviews`}
            <ChevronDown
              className="w-4 h-4 transition-transform duration-200"
              style={{ transform: expanded ? "rotate(180deg)" : "none" }}
            />
          </button>
        </div>
      </div>
    </section>
  );
}
