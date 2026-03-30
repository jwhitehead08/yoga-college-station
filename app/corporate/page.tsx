import type { Metadata } from "next";
import Link from "next/link";
import {
  Building2,
  Clock,
  Users,
  MapPin,
  TrendingUp,
  Shield,
  Check,
  ArrowRight,
  Star,
  Quote,
} from "lucide-react";
import { CorporateContactForm } from "@/components/CorporateContactForm";

export const metadata: Metadata = {
  title: "Corporate Wellness Programs | Neon Fox — College Station & Bryan, TX",
  description:
    "Neon Fox delivers on-site high-performance recovery and mobility programs for College Station businesses, Bryan employers, and Texas A&M departments. Professional. Sharp. Efficient.",
  keywords: [
    "Performance Recovery College Station",
    "High-end Yoga Bryan TX",
    "Mobile Pilates Brazos Valley",
    "corporate wellness College Station",
    "on-site yoga Bryan TX",
    "Neon Fox corporate programs",
  ],
  openGraph: {
    title: "Neon Fox | Corporate Wellness Programs — Brazos Valley",
    description:
      "Neon Fox delivers structured high-performance recovery sessions for Brazos Valley teams. On-site, zero logistics, and proven to reduce desk-related pain and improve productivity.",
  },
  robots: { index: true, follow: true },
};

const benefits = [
  {
    icon: TrendingUp,
    title: "Measurable Productivity Gains",
    desc: "Teams that move during the workday report higher afternoon focus scores and reduced decision fatigue. We track session-over-session improvements.",
  },
  {
    icon: Shield,
    title: "Reduced Workers' Comp Risk",
    desc: "Musculoskeletal injuries are the #1 cost driver in workplace compensation claims. Preventive mobility work is significantly cheaper than reactive treatment.",
  },
  {
    icon: Users,
    title: "An HR Perk That Gets Used",
    desc: "Unlike gym reimbursements that go unclaimed, on-site sessions remove every barrier. We come to your team — no commute, no enrollment, no excuses.",
  },
  {
    icon: Clock,
    title: "Zero Scheduling Overhead",
    desc: "We handle logistics, equipment, and programming. You block 30–60 minutes on a calendar. That's it.",
  },
];

const formats = [
  {
    name: "Lunch & Move",
    duration: "30 min",
    desc: "A focused midday reset — seated mobility, neck decompression, and a 5-minute breath protocol. Fits in any conference room.",
    ideal: "Teams of 5–30",
  },
  {
    name: "Morning Flow",
    duration: "45–60 min",
    desc: "Before the day starts, set the tone. A structured movement session that primes focus and reduces the physical load of the work ahead.",
    ideal: "Teams of 5–50",
  },
  {
    name: "Quarterly Workshop",
    duration: "90 min",
    desc: "A deeper dive into ergonomics, posture assessment, and individualized movement strategies. Great for onsite and hybrid teams.",
    ideal: "Departments & divisions",
  },
  {
    name: "Ongoing Program",
    duration: "Weekly or biweekly",
    desc: "A contracted wellness program with consistent scheduling, progress metrics, and HR reporting. Our most impactful offering.",
    ideal: "Organizations of 20+",
  },
];

const testimonials = [
  {
    name: "Sarah M.",
    role: "Engineering Manager",
    company: "Texas A&M University — IT Division",
    quote:
      "We brought in a pilot session for our 12-person dev team. Two months later it's a standing weekly perk. The team calls it 'decompression hour.' Sick day usage dropped noticeably.",
    rating: 5,
  },
  // {
  //   name: "James T.",
  //   role: "HR Director",
  //   company: "College Station tech startup",
  //   quote:
  //     "Our team works fully remote with standing desks. The virtual corporate sessions were a game-changer for retention — employees actually look forward to Fridays now.",
  //   rating: 5,
  // },
  // {
  //   name: "Dana F.",
  //   role: "Chief of Staff",
  //   company: "Brazos Valley financial firm",
  //   quote:
  //     "We were skeptical. Then we ran a pilot and had 94% participation. Three months later, two team members reported resolution of chronic back pain they'd had for years.",
  //   rating: 5,
  // },
];

const pricingTiers = [
  {
    name: "Pilot Session",
    price: "$350",
    period: "one-time",
    desc: "One session for your team. No commitment. See how it works before signing a contract.",
    features: ["Up to 25 participants", "30 or 60-min format", "Post-session resource handout"],
    cta: "Request a Pilot",
    highlight: false,
  },
  {
    name: "Monthly Program",
    price: "$1,200",
    period: "/ month",
    desc: "Weekly sessions for consistent results. Includes HR progress reporting and curriculum customization.",
    features: [
      "4 sessions per month",
      "Up to 50 participants",
      "Custom desk-body curriculum",
      "Monthly impact report",
      "Priority scheduling",
    ],
    cta: "Start a Program",
    highlight: true,
  },
  {
    name: "Enterprise Contract",
    price: "Custom",
    period: "quote",
    desc: "For large organizations, multiple departments, or Texas A&M-scale implementations.",
    features: [
      "Unlimited participants",
      "Multiple locations / teams",
      "Dedicated account management",
      "Onboarding & assessment",
      "Annual impact review",
    ],
    cta: "Request a Quote",
    highlight: false,
  },
];

export default function CorporatePage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-slate-900 py-20 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-5">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#800000] text-white">
                <Building2 className="h-5 w-5" />
              </div>
              <span className="text-xs font-semibold uppercase tracking-widest text-[#800000]">
                Neon Fox · Corporate Programs
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-black tracking-tight text-white leading-tight mb-6">
              Reduce Desk-Body Damage.
              <br />
              <span className="text-[#800000]">Increase Team Output.</span>
            </h1>
            <p className="text-lg text-slate-400 leading-relaxed mb-8 max-w-2xl">
              On-site mobility sessions for tech firms, Bryan businesses, and Texas A&M
              departments in the Brazos Valley. We bring the program directly to your
              office — 30–60 minutes, no gear required.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="#corporate-contact"
                className="inline-flex items-center gap-2 rounded-full bg-[#800000] hover:bg-[#6b0000] px-6 py-3 text-sm font-bold text-white transition-colors"
              >
                Request a Pilot Session
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="#formats"
                className="inline-flex items-center gap-2 rounded-full border border-slate-600 hover:border-slate-400 px-6 py-3 text-sm font-medium text-slate-300 transition-colors"
              >
                See Program Formats
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-[#800000] py-8 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl grid grid-cols-2 sm:grid-cols-4 gap-6">
          {/* {[
            { v: "40+", l: "Brazos Valley Employers Served" },
            { v: "94%", l: "Average Session Participation" },
            { v: "$0", l: "Equipment Cost to Your Team" },
            { v: "4.9★", l: "Employer Rating" },
          ].map((s) => (
            <div key={s.l} className="text-center">
              <p className="text-2xl sm:text-3xl font-extrabold text-white">{s.v}</p>
              <p className="text-xs text-white/70 mt-0.5">{s.l}</p>
            </div>
          ))} */}
        </div>
      </section>

      {/* Benefits */}
      <section className="bg-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-14">
            <p className="text-xs font-semibold uppercase tracking-widest text-[#800000] mb-3">
              Why It Works
            </p>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
              The Business Case for Mobility
            </h2>
            <p className="mt-4 text-slate-500 max-w-xl mx-auto">
              This isn't about wellness theater. It's about protecting your team's
              physical capacity — and the productivity that depends on it.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {benefits.map((b) => {
              const Icon = b.icon;
              return (
                <div
                  key={b.title}
                  className="flex gap-4 p-6 rounded-2xl border border-slate-100 bg-slate-50"
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#800000]/10">
                    <Icon className="h-5 w-5 text-[#6b0000]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 mb-1">{b.title}</h3>
                    <p className="text-sm text-slate-500 leading-relaxed">{b.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Formats */}
      <section
        id="formats"
        className="bg-slate-50 py-20 px-4 sm:px-6 lg:px-8 scroll-mt-16"
      >
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-14">
            <p className="text-xs font-semibold uppercase tracking-widest text-[#800000] mb-3">
              Program Formats
            </p>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
              Built Around Your Schedule
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {formats.map((f) => (
              <div
                key={f.name}
                className="bg-white rounded-2xl border border-slate-100 p-6 shadow-sm"
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-bold text-slate-900">{f.name}</h3>
                  <span className="text-xs font-semibold bg-[#800000]/10 text-[#6b0000] px-2 py-0.5 rounded-full">
                    {f.duration}
                  </span>
                </div>
                <p className="text-sm text-slate-500 leading-relaxed mb-4">{f.desc}</p>
                <div className="flex items-center gap-1.5 text-xs text-slate-400">
                  <Users className="h-3.5 w-3.5" />
                  {f.ideal}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <p className="text-xs font-semibold uppercase tracking-widest text-[#800000] mb-3">
              Client Stories
            </p>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
              What Brazos Valley Employers Say
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {testimonials.map((t) => (
              <div
                key={t.name}
                className="flex flex-col bg-white rounded-2xl border border-slate-100 p-6 shadow-sm"
              >
                <Quote className="h-6 w-6 text-slate-200 mb-4" />
                <p className="text-sm text-slate-600 leading-relaxed mb-5 flex-1">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="border-t border-slate-100 pt-4">
                  <div className="flex items-center gap-0.5 mb-2">
                    {Array.from({ length: t.rating }).map((_, i) => (
                      <Star key={i} className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <p className="text-sm font-semibold text-slate-900">{t.name}</p>
                  <p className="text-xs text-slate-400">
                    {t.role} · {t.company}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="bg-slate-50 py-20 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-14">
            <p className="text-xs font-semibold uppercase tracking-widest text-[#800000] mb-3">
              Pricing
            </p>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
              Transparent Corporate Pricing
            </h2>
            <p className="mt-4 text-slate-500 max-w-xl mx-auto">
              Start with a no-commitment pilot. Scale to a full program when you see results.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
            {pricingTiers.map((p) => (
              <div
                key={p.name}
                className={`flex flex-col bg-white rounded-2xl border-2 p-8 transition-all ${
                  p.highlight
                    ? "border-[#800000] shadow-xl scale-[1.02]"
                    : "border-slate-200 shadow-sm"
                }`}
              >
                <h3 className="text-lg font-bold text-slate-900 mb-0.5">{p.name}</h3>
                <div className="flex items-baseline gap-1 mb-4">
                  <span className="text-3xl font-extrabold text-slate-900">{p.price}</span>
                  <span className="text-sm text-slate-400">{p.period}</span>
                </div>
                <p className="text-sm text-slate-500 leading-relaxed mb-5">{p.desc}</p>
                <ul className="space-y-2.5 mb-8 flex-1">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-sm text-slate-600">
                      <Check className="h-4 w-4 text-[#800000] shrink-0 mt-0.5" />
                      {f}
                    </li>
                  ))}
                </ul>
                <Link
                  href="#corporate-contact"
                  className={`inline-flex w-full items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition-all ${
                    p.highlight
                      ? "bg-[#800000] hover:bg-[#6b0000] text-white"
                      : "bg-slate-900 hover:bg-slate-700 text-white"
                  }`}
                >
                  {p.cta}
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            ))}
          </div>
          <p className="text-center text-sm text-slate-400 mt-8">
            All prices are for the College Station and Bryan, TX service area.
            Volume and multi-location discounts available.
          </p>
        </div>
      </section>

      {/* Logistics reassurance */}
      <section className="bg-white py-14 px-4 sm:px-6 lg:px-8 border-y border-slate-100">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">
            Zero Logistics On Your End
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-sm text-slate-500">
            {[
              { icon: MapPin, text: "We come to your Bryan or College Station office. No venue coordination needed." },
              { icon: Users, text: "Equipment, mats (optional), and materials are provided. Your team just shows up." },
              { icon: Clock, text: "Sessions run on your timeline — before work, lunch, or end of day." },
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <div key={i} className="flex flex-col items-center gap-2">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#800000]/10">
                    <Icon className="h-5 w-5 text-[#800000]" />
                  </div>
                  <p className="leading-relaxed">{item.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact form */}
      <CorporateContactForm />
    </>
  );
}
