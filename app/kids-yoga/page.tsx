import type { Metadata } from "next";
import Link from "next/link";
import VagaroWidget from "@/components/VagaroWidget";
import {
  Sun,
  MapPin,
  Calendar,
  Users,
  Shirt,
  Layers,
  Sparkles,
  Leaf,
  Check,
  Package,
  Clock,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Kids Yoga Summer Series | Neon Fox — College Station, TX",
  description:
    "8-week Kids Yoga Summer Series in College Station, TX. Outdoor animal-pose classes at local parks for children. Every registration includes the Neon Fox Starter Pack.",
  keywords: [
    "Kids Yoga College Station",
    "Summer Youth Camps Bryan TX",
    "Outdoor Kids Activities Brazos Valley",
    "kids yoga Bryan TX",
    "children yoga College Station",
    "youth summer program Brazos Valley",
    "outdoor yoga kids College Station TX",
  ],
  openGraph: {
    title: "Kids Yoga Summer Series — College Station, TX | Neon Fox",
    description:
      "8-week outdoor kids yoga series in College Station, TX. Fun with Animal Poses at local parks — every registration includes the Neon Fox Starter Pack.",
    url: "https://www.neonfoxmethod.com/kids-yoga",
  },
};

const starterPackItems = [
  {
    icon: Shirt,
    name: "Limited Edition T-Shirt",
    desc: "The official Neon Fox Summer Series tee — featuring the Neon Fox logo. Built to move in, designed to last beyond the summer.",
    detail: "Sizes XS – XL · Youth sizing",
  },
  {
    icon: Layers,
    name: "Yoga Mat",
    desc: "A proper non-slip mat — theirs to keep for home practice long after the series ends.",
    detail: "Non-slip · Lightweight · Keep it forever",
  },
  {
    icon: Sparkles,
    name: "Animal Pose Sticker Set",
    desc: "The full Neon Fox animal pose collection — illustrated stickers of every pose from the series so they can remember what they learned.",
    detail: "12-sticker set · Exclusive to Summer Series",
  },
];

const programDetails = [
  { icon: Calendar, stat: "8 Weeks", label: "June 3 – July 22" },
  { icon: Clock, stat: "8:30am", label: "Wednesdays" },
  { icon: MapPin, stat: "Wolf Pen Creek", label: "College Station, TX" },
  { icon: Users, stat: "Ages 4–7", label: "Target Age Range" },
];

const animalPoses = [
  {
    animal: "Lion",
    pose: "Lion's Breath",
    benefit: "Builds confidence and releases tension — roar it out.",
  },
  {
    animal: "Eagle",
    pose: "Eagle Arms",
    benefit: "Improves focus and balance with a wingspan stretch.",
  },
  {
    animal: "Cobra",
    pose: "Cobra Pose",
    benefit: "Opens the chest and strengthens the spine.",
  },
  {
    animal: "Frog",
    pose: "Frog Squat",
    benefit: "Hip mobility and grounding — bounce optional.",
  },
  {
    animal: "Cat & Cow",
    pose: "Cat-Cow Flow",
    benefit: "Warms the spine and teaches breath-movement connection.",
  },
  {
    animal: "Butterfly",
    pose: "Butterfly Pose",
    benefit: "Inner hip flexibility through playful wing flaps.",
  },
];

const bringItems = [
  "Water bottle (hydration is non-negotiable in Texas summer)",
  "Sunscreen applied before arrival",
  "Comfortable, breathable clothes",
  "Your Neon Fox mat (included in Starter Pack)",
  "A great attitude — no prior yoga experience needed",
];

export default function KidsYogaPage() {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────────── */}
      <section className="relative bg-[#0a0a0a] overflow-hidden py-24 px-4 sm:px-6 lg:px-8">
        {/* Accent bar */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-[#2F4F4F]" />
        {/* Subtle grid texture */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.5) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        <div className="relative mx-auto max-w-4xl text-center">
          {/* Badge row */}
          <div className="flex flex-wrap items-center justify-center gap-3 mb-8">
            <span className="inline-flex items-center gap-1.5 bg-[#2F4F4F] px-3 py-1 rounded-full text-xs font-bold text-white uppercase tracking-widest">
              <Sun className="h-3 w-3" />
              Summer 2026
            </span>
            <span className="text-xs text-slate-500 uppercase tracking-widest">
              College Station, TX · Outdoor Series
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-[1.05] mb-6 tracking-tight">
            Fun with Animal Poses —
            <br />
            <span className="text-[#2F4F4F]">Kids Yoga Summer Series.</span>
          </h1>

          <p className="text-lg sm:text-xl text-slate-400 leading-relaxed max-w-2xl mx-auto mb-4">
            An 8-week outdoor yoga series at Wolf Pen Creek — Wednesdays at 8:30am,
            June 3 through July 22. Designed to build coordination, confidence, and
            a love of movement through nature-inspired play. No experience needed.
          </p>

          <div className="inline-flex items-center gap-2 bg-[#2F4F4F]/20 border border-[#2F4F4F]/40 rounded-full px-5 py-2 mb-8">
            <span className="text-xs font-bold text-[#2F4F4F] uppercase tracking-widest">Early Bird</span>
            <span className="text-white font-extrabold text-lg">$125</span>
            <span className="text-slate-400 text-xs">— Limited Time</span>
          </div>

          <div className="flex flex-col items-center gap-4">
            <VagaroWidget />
            <a
              href="#starter-pack"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 hover:border-white/30 px-7 py-3.5 text-sm font-semibold text-slate-300 hover:text-white transition-all"
            >
              <Package className="h-4 w-4" />
              See the Starter Pack
            </a>
          </div>
        </div>
      </section>

      {/* ── PROGRAM STATS ────────────────────────────────── */}
      <section className="bg-[#2F4F4F] py-10 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl grid grid-cols-2 sm:grid-cols-4 gap-6">
          {programDetails.map((d) => {
            const Icon = d.icon;
            return (
              <div key={d.label} className="text-center">
                <Icon className="h-5 w-5 text-white/40 mx-auto mb-2" />
                <p className="text-2xl sm:text-3xl font-extrabold text-white">
                  {d.stat}
                </p>
                <p className="text-xs text-white/60 mt-0.5 leading-snug">
                  {d.label}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* ── ABOUT THE PROGRAM ────────────────────────────── */}
      <section className="bg-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-[#2F4F4F] mb-4">
                The Program
              </p>
              <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight mb-5">
                Movement Through
                <br />
                <span className="text-[#2F4F4F]">the Natural World.</span>
              </h2>
              <p className="text-slate-500 text-sm leading-relaxed mb-4">
                Every session in the Kids Yoga Summer Series is built around a
                different animal and its corresponding yoga pose — giving kids a
                story to connect to their movement. Lion&apos;s Breath for
                confidence. Eagle Arms for focus. Cobra for strength. The animal
                is the hook; the yoga is the outcome.
              </p>
              <p className="text-slate-500 text-sm leading-relaxed mb-4">
                Sessions are held outdoors at College Station parks — because summer is meant to be outside. The program is designed by Lauren Whitehead, a Texas A&M Zoology graduate and RYT-200 certified instructor, who bridges her deep understanding of biology with the science of movement. We keep classes small, structured, and genuinely fun. Neon Fox instructors are RYT-200 certified and bring the same evidence-based movement principles to kids that they apply with adult clients.
              </p>
              <p className="text-slate-500 text-sm leading-relaxed">
                No prior yoga experience is required. Kids just need to show up
                ready to move — we handle the rest.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[
                {
                  icon: Leaf,
                  label: "Nature-Inspired",
                  desc: "Every class is themed around an animal — giving kids a story to anchor movement.",
                },
                {
                  icon: Sun,
                  label: "Outdoor Sessions",
                  desc: "Held at College Station parks all summer long. Fresh air, open space, real movement.",
                },
                {
                  icon: Users,
                  label: "Small Groups",
                  desc: "Intentionally small class sizes so every child gets individual attention and cues.",
                },
                {
                  icon: Calendar,
                  label: "8-Week Progression",
                  desc: "Each week builds on the last — kids finish the series noticeably more coordinated.",
                },
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.label} className="bg-slate-50 rounded-xl p-5 border border-slate-100">
                    <Icon className="h-5 w-5 text-[#2F4F4F] mb-3" />
                    <p className="text-sm font-semibold text-slate-900 mb-1">
                      {item.label}
                    </p>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ── STARTER PACK ─────────────────────────────────── */}
      <section
        id="starter-pack"
        className="bg-[#1A1A1A] py-20 px-4 sm:px-6 lg:px-8 scroll-mt-24"
      >
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-14">
            <span className="inline-block bg-[#2F4F4F] text-white text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4">
              Included with Every Registration
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight mb-4">
              The Neon Fox Starter Pack
            </h2>
            <p className="text-slate-400 max-w-xl mx-auto text-sm leading-relaxed">
              A proper gear kit built to give every kid
              everything they need to practice — during the series and long after
              it ends.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {starterPackItems.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.name}
                  className="group relative bg-[#36454F] rounded-2xl border border-white/10 p-8 hover:border-[#2F4F4F] transition-all duration-200 overflow-hidden"
                >
                  {/* Subtle glow on hover */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-br from-[#2F4F4F]/20 to-transparent transition-opacity duration-300 rounded-2xl pointer-events-none" />

                  <div className="relative">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#2F4F4F] mb-6">
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2">
                      {item.name}
                    </h3>
                    <p className="text-sm text-slate-400 leading-relaxed mb-5">
                      {item.desc}
                    </p>
                    <div className="inline-flex items-center gap-1.5 bg-[#1A1A1A] rounded-lg px-3 py-1.5">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#2F4F4F] shrink-0" />
                      <span className="text-xs text-slate-400 font-medium">
                        {item.detail}
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <p className="text-center text-xs text-slate-600 mt-8">
            Starter Packs are distributed at the first session. Sizes collected at registration.
          </p>
        </div>
      </section>

      {/* ── ANIMAL POSE SERIES ───────────────────────────── */}
      <section className="bg-slate-50 py-20 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-14">
            <p className="text-xs font-semibold uppercase tracking-widest text-[#2F4F4F] mb-3">
              Sample Curriculum
            </p>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
              The Animals We&apos;ll Move Like
            </h2>
            <p className="mt-4 text-slate-500 max-w-xl mx-auto text-sm">
              Each week introduces a new animal and its yoga pose — building a
              library of movement that kids actually remember.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {animalPoses.map((p, i) => (
              <div
                key={p.animal}
                className="bg-white rounded-2xl border border-slate-100 p-6 shadow-sm flex gap-4 items-start"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#2F4F4F]/10 text-sm font-black text-[#2F4F4F]">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-[#2F4F4F] mb-0.5">
                    {p.animal}
                  </p>
                  <h3 className="font-bold text-slate-900 mb-1">{p.pose}</h3>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {p.benefit}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <p className="text-center text-xs text-slate-400 mt-8">
            Final curriculum subject to change. 8 animal poses across 8 weeks — themes announced at registration.
          </p>
        </div>
      </section>

      {/* ── WHAT TO BRING ────────────────────────────────── */}
      <section className="bg-white py-20 px-4 sm:px-6 lg:px-8 border-y border-slate-100">
        <div className="mx-auto max-w-3xl">
          <div className="text-center mb-10">
            <p className="text-xs font-semibold uppercase tracking-widest text-[#2F4F4F] mb-3">
              Prep List
            </p>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
              What to Bring
            </h2>
            <p className="mt-3 text-slate-500 text-sm">
              We handle the curriculum and gear — just make sure your child
              arrives ready for a Texas summer morning.
            </p>
          </div>

          <ul className="space-y-3 max-w-lg mx-auto">
            {bringItems.map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 bg-slate-50 rounded-xl px-5 py-4 border border-slate-100"
              >
                <Check className="h-4 w-4 text-[#2F4F4F] shrink-0 mt-0.5" />
                <span className="text-sm text-slate-600 leading-relaxed">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────── */}
      <section id="register" className="bg-[#1A1A1A] py-24 px-4 sm:px-6 lg:px-8 scroll-mt-24">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#2F4F4F] mb-4">
            Summer 2026 · Limited Spots
          </p>
          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight mb-4">
            Reserve Your Child&apos;s Spot
            <br />
            <span className="text-[#2F4F4F] italic font-bold">
              in the Series.
            </span>
          </h2>

          {/* Early Bird Pricing */}
          <div className="inline-flex flex-col items-center bg-[#2F4F4F]/15 border border-[#2F4F4F]/40 rounded-2xl px-8 py-5 mb-8">
            <span className="text-xs font-bold text-[#2F4F4F] uppercase tracking-widest mb-1">Early Bird Registration Open</span>
            <span className="text-white font-extrabold text-4xl mb-1">$125</span>
            <span className="text-slate-400 text-xs">Limited time · June 3 – July 22 · Wednesdays at 8:30am · Wolf Pen Creek</span>
          </div>

          <p className="text-slate-400 max-w-xl mx-auto text-sm leading-relaxed mb-10">
            Enrollment is limited to keep class sizes small and sessions
            high-quality. Register below to lock in the early bird rate.
          </p>

          <div className="mb-8">
            <VagaroWidget />
          </div>

          <div className="flex justify-center mb-6">
            <Link
              href="/about"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 hover:border-white/30 px-7 py-3.5 text-sm font-semibold text-slate-300 hover:text-white transition-all"
            >
              Meet the Instructors
            </Link>
          </div>

          <p className="text-xs text-slate-600">
            Questions?{" "}
            <a
              href="mailto:neonfoxmethod@gmail.com"
              className="underline hover:text-slate-400 transition-colors"
            >
              neonfoxmethod@gmail.com
            </a>{" "}
            · College Station &amp; Bryan, TX
          </p>
        </div>
      </section>
    </>
  );
}
