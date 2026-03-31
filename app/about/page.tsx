import type { Metadata } from "next";
import Link from "next/link";
import { Inter } from "next/font/google";
import {
  ArrowRight,
  Microscope,
  MapPin,
  Zap,
  GraduationCap,
  Award,
  Users,
  TrendingUp,
  Target,
  Heart,
} from "lucide-react";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter-about",
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "About Neon Fox | Yoga • Pilates • High-Performance Recovery — Brazos Valley",
  description:
    "Neon Fox is the evolution of Austin's Greenbird Fitness — a mobile, high-performance recovery concierge bringing elite yoga, Pilates, and biomechanical recovery to College Station and Bryan, TX. Led by Lauren Whitehead, MS Biology.",
  keywords: [
    "Performance Recovery College Station",
    "High-end Yoga Bryan TX",
    "Mobile Pilates Brazos Valley",
    "Neon Fox yoga College Station",
    "Greenbird Fitness Austin evolution",
    "Lauren Whitehead MS Biology yoga",
  ],
  openGraph: {
    title: "About Neon Fox | High-Performance Recovery — College Station, TX",
    description:
      "From Austin's Greenbird Fitness to Neon Fox — a mobile high-performance recovery concierge built on scientific rigor and elite boutique standards.",
  },
};

const laurenCredentials = [
  "MS, Biology",
  "MS, Public Health",
  "BS, Texas A&M University",
  "200-Hour Registered Yoga Teacher (RYT-200)",
  "Certified Personal Trainer (CPT)",
  "Pilates Certified",
  "Barre Certified",
];

const jeffCredentials = [
  "200-Hour Registered Yoga Teacher (RYT-200)",
  "BS, Texas A&M University",
  "Co-Founder, Greenbird Fitness — Austin, TX",
  "Software Engineering Professional",
];

const values = [
  {
    icon: Target,
    word: "Precision",
    definition:
      "We don't teach movement by intuition alone. Every cue, modification, and program decision is grounded in anatomical and physiological principles. Precision is not rigidity — it's the difference between a session that feels good and one that builds lasting capacity.",
  },
  {
    icon: TrendingUp,
    word: "Longevity",
    definition:
      "We are not training you for this week. The programs we build are designed to compound — building tissue resilience, postural integrity, and movement quality that improves your physical output for the next decade, not just the next morning.",
  },
  {
    icon: Microscope,
    word: "Biomechanics",
    definition:
      "Understanding how the body moves at a structural and muscular level is the foundation of everything we teach. We apply biomechanical principles across yoga, Pilates, Barre, and mobility work — because the science doesn't change when the modality does.",
  },
  {
    icon: Zap,
    word: "Performance",
    definition:
      "Whether you're an executive, an athlete, or someone who spends ten hours a day at a desk in College Station — the goal is always the same. A body that performs better tomorrow than it does today. That's the only metric that matters.",
  },
];

export default function AboutPage() {
  return (
    <div className={inter.variable}>
      {/* ── HERO ─────────────────────────────────────────── */}
      <section className="bg-[#1A1A1A] py-24 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#800000] mb-5">
            Neon Fox · College Station, TX
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight mb-6 tracking-tight">
            The Next Evolution
            <br />
            <span className="text-[#800000]">of Elite Recovery.</span>
          </h1>
          <p className="text-lg sm:text-xl text-slate-400 leading-relaxed max-w-2xl mx-auto">
            We built one of Austin's most respected boutique fitness studios under the Greenbird name.
            Then we evolved — into a mobile, high-performance recovery concierge built to serve
            the Brazos Valley on our terms.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <div className="flex items-center gap-1.5 text-sm text-slate-500">
              <MapPin className="h-4 w-4 text-[#800000] shrink-0" />
              Founded in Austin · Now serving Brazos Valley
            </div>
            <span className="hidden sm:block w-px h-4 bg-slate-700" />
            <div className="flex items-center gap-1.5 text-sm text-slate-500">
              <GraduationCap className="h-4 w-4 text-[#800000] shrink-0" />
              Texas A&amp;M Alumni
            </div>
          </div>
        </div>
      </section>

      {/* ── THREE-ACT NARRATIVE ───────────────────────────── */}
      <section className="bg-white py-20 px-4 sm:px-6 lg:px-8 border-b border-slate-100">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-16">
            {/* Act 1 */}
            <div>
              <p className="text-4xl font-black text-slate-100 mb-3 select-none">01</p>
              <h2 className="text-xl font-bold text-slate-900 mb-3">
                The Studio
              </h2>
              <p className="text-sm text-slate-500 leading-relaxed">
                Greenbird Fitness was built inside Austin's most competitive fitness market —
                a city where boutique studios open and close every season. We built
                something that lasted: a devoted following drawn by the precision of our
                programming, the science behind every class, and an instructional standard
                the Austin market rarely saw.
              </p>
            </div>
            {/* Act 2 */}
            <div>
              <p className="text-4xl font-black text-slate-100 mb-3 select-none">02</p>
              <h2 className="text-xl font-bold text-slate-900 mb-3">
                The Homecoming
              </h2>
              <p className="text-sm text-slate-500 leading-relaxed">
                As Texas A&amp;M graduates, the pull back to College Station was never
                purely a business decision. The Brazos Valley is home. We saw a community
                that deserved the same caliber of instruction we had built in Austin —
                grounded in real anatomy, taught with academic rigor, and delivered
                without the wellness theater that passes for premium fitness elsewhere.
              </p>
            </div>
            {/* Act 3 */}
            <div>
              <p className="text-4xl font-black text-slate-100 mb-3 select-none">03</p>
              <h2 className="text-xl font-bold text-slate-900 mb-3">
                The Evolution
              </h2>
              <p className="text-sm text-slate-500 leading-relaxed">
                Greenbird was our foundation. Neon Fox is the evolution. By moving to a
                fully mobile concierge model, we eliminated every barrier between our
                clients and a genuinely high-performance session. No commute, no parking,
                no waiting room. We bring the elite Austin experience — now with a
                sharper recovery focus — directly to your door.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── MISSION ───────────────────────────────────────── */}
      <section className="bg-[#1A1A1A] py-20 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#800000] mb-6">
            Our Mission
          </p>
          <blockquote className="text-2xl sm:text-3xl text-white leading-relaxed font-medium italic">
            &ldquo;To deliver Austin-caliber boutique fitness — with the scientific rigor
            of a Master&apos;s-level education — as a mobile high-performance recovery
            concierge, directly to the homes, offices, and communities of the Brazos Valley.&rdquo;
          </blockquote>
        </div>
      </section>

      {/* ── SCIENTIFIC BACKBONE ───────────────────────────── */}
      <section className="bg-[#36454F] py-16 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-[#800000] mb-4">
                The Scientific Backbone
              </p>
              <h2 className="text-2xl sm:text-3xl font-black text-white mb-5 tracking-tight">
                Not Just Certified.
                <br />
                <span className="text-[#800000]">Scientifically Trained.</span>
              </h2>
              <p className="text-slate-300 text-sm leading-relaxed">
                The Neon Fox method is built on a foundation most fitness brands can't claim:
                a graduate-level education in Biology and Public Health, combined with
                hands-on experience teaching Anatomy at the university level.
              </p>
              <p className="text-slate-300 text-sm leading-relaxed mt-4">
                Lauren&apos;s time as an Anatomy Lab Instructor at Texas A&amp;M didn&apos;t just
                teach her how the body works — it trained her to communicate that knowledge
                with the clarity and precision of an academic. Every Neon Fox session
                reflects that standard.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: Microscope, label: "MS, Biology", desc: "Graduate-level understanding of tissue mechanics, physiology, and biomechanical systems." },
                { icon: GraduationCap, label: "TAMU Anatomy Lab", desc: "Former Anatomy Lab Instructor at Texas A&M — translating complex science into client results." },
                { icon: Award, label: "Multi-Certified", desc: "RYT-200, CPT, Pilates & Barre certified — the full spectrum of high-performance modalities." },
                { icon: Target, label: "Evidence-Based", desc: "Every protocol grounded in peer-reviewed biomechanics, not inherited fitness tradition." },
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.label} className="bg-[#1A1A1A] rounded-xl p-5">
                    <Icon className="h-5 w-5 text-[#800000] mb-3" />
                    <p className="text-sm font-semibold text-white mb-1">{item.label}</p>
                    <p className="text-xs text-slate-400 leading-relaxed">{item.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ── FOUNDERS ──────────────────────────────────────── */}
      <section
        id="founders"
        className="bg-slate-50 py-20 px-4 sm:px-6 lg:px-8"
        aria-labelledby="founders-heading"
      >
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <p className="text-xs font-semibold uppercase tracking-widest text-[#800000] mb-3">
              Meet the Founders
            </p>
            <h2
              id="founders-heading"
              className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight"
            >
              The Credentials Behind the Practice
            </h2>
            <p className="mt-4 text-slate-500 max-w-xl mx-auto">
              Two Texas A&amp;M graduates. One Austin boutique legacy.
              A combined depth of expertise that doesn&apos;t exist anywhere else
              in the Brazos Valley fitness landscape.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">

            {/* ── LAUREN ── */}
            <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm">
              <div className="bg-[#1A1A1A] px-8 py-10 flex items-end gap-6">
                <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-2xl bg-[#800000] text-white text-2xl font-black">
                  LW
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-[#800000] mb-1">
                    Co-Founder · The Scientist
                  </p>
                  <h3 className="text-2xl font-bold text-white">
                    Lauren Whitehead
                  </h3>
                  <p className="text-slate-400 text-sm mt-0.5">
                    MS Biology · Former TAMU Anatomy Lab Instructor
                  </p>
                </div>
              </div>

              <div className="px-8 py-8">
                <p className="text-base italic text-slate-700 border-l-2 border-[#800000] pl-4 mb-6 leading-relaxed">
                  &ldquo;Most instructors teach you what to do. Lauren teaches you
                  why — at a physiological level most fitness professionals
                  simply don&apos;t have access to.&rdquo;
                </p>

                <div className="space-y-4 text-sm text-slate-500 leading-relaxed">
                  <p>
                    The decision to pursue two Master&apos;s degrees — one in Biology,
                    one in Public Health — wasn&apos;t incidental to Lauren&apos;s
                    fitness career. It was foundational to it. While completing her
                    graduate work at Texas A&amp;M, she taught Anatomy labs, developing
                    a discipline of translating complex physiological concepts into
                    language that students — and later, clients — could actually apply.
                  </p>
                  <p>
                    At Greenbird Fitness in Austin, Lauren built a reputation as an
                    instructor whose programming felt categorically different: more
                    precise, more evidence-based, and more genuinely effective than
                    the standard boutique class. Her Pilates and Barre curriculum
                    was designed from anatomical first principles — tissue mechanics,
                    joint loading, and fascial chains — rather than inherited tradition.
                  </p>
                  <p>
                    Under the Neon Fox banner, she brings that same
                    biomechanical precision to private concierge sessions and
                    corporate wellness programs across College Station and Bryan.
                    Sessions with Lauren are not just movement — they are an education
                    in your own body.
                  </p>
                </div>

                <div className="mt-7 pt-6 border-t border-slate-100">
                  <div className="flex items-center gap-2 mb-3">
                    <Award className="h-4 w-4 text-[#800000]" />
                    <p className="text-xs font-semibold uppercase tracking-widest text-slate-400">
                      Credentials
                    </p>
                  </div>
                  <ul className="space-y-1.5">
                    {laurenCredentials.map((c) => (
                      <li key={c} className="flex items-center gap-2.5 text-sm text-slate-600">
                        <span className="h-1.5 w-1.5 rounded-full bg-[#800000] shrink-0" />
                        {c}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* ── JEFF ── */}
            <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm">
              <div className="bg-[#1A1A1A] px-8 py-10 flex items-end gap-6">
                <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-2xl bg-[#36454F] text-white text-2xl font-black">
                  JW
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-slate-400 mb-1">
                    Co-Founder · The Practitioner
                  </p>
                  <h3 className="text-2xl font-bold text-white">
                    Jeff Whitehead
                  </h3>
                  <p className="text-slate-400 text-sm mt-0.5">
                    RYT-200 · Software Engineer · Co-Founder, Greenbird Fitness
                  </p>
                </div>
              </div>

              <div className="px-8 py-8">
                <p className="text-base italic text-slate-700 border-l-2 border-slate-300 pl-4 mb-6 leading-relaxed">
                  &ldquo;Jeff&apos;s sessions are what happens when a systems
                  thinker falls completely in love with the practice — and
                  spends years making it technically rigorous and genuinely
                  accessible at the same time.&rdquo;
                </p>

                <div className="space-y-4 text-sm text-slate-500 leading-relaxed">
                  <p>
                    Before co-founding Greenbird Fitness, Jeff spent years in
                    software engineering — building systems designed to work
                    precisely, consistently, and at scale. That lens didn&apos;t
                    disappear when he stepped onto a mat. It became the
                    foundation of his teaching.
                  </p>
                  <p>
                    What distinguishes Jeff&apos;s instruction is the fusion of
                    professional discipline and genuine depth of practice. He
                    teaches yoga the way a skilled engineer explains a complex
                    system: by finding the most accurate, most efficient path to
                    understanding and then stripping away everything unnecessary.
                  </p>
                  <p>
                    At Neon Fox, Jeff provides the operational and instructional
                    backbone that allows the concierge model to deliver a premium
                    experience consistently — the same standard that gave
                    Greenbird its reputation, now deployed across the Brazos Valley.
                  </p>
                </div>

                <div className="mt-7 pt-6 border-t border-slate-100">
                  <div className="flex items-center gap-2 mb-3">
                    <Award className="h-4 w-4 text-slate-500" />
                    <p className="text-xs font-semibold uppercase tracking-widest text-slate-400">
                      Credentials
                    </p>
                  </div>
                  <ul className="space-y-1.5">
                    {jeffCredentials.map((c) => (
                      <li key={c} className="flex items-center gap-2.5 text-sm text-slate-600">
                        <span className="h-1.5 w-1.5 rounded-full bg-slate-400 shrink-0" />
                        {c}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── BRAND VALUES ──────────────────────────────────── */}
      <section className="bg-white py-20 px-4 sm:px-6 lg:px-8" aria-labelledby="values-heading">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-14">
            <p className="text-xs font-semibold uppercase tracking-widest text-[#800000] mb-3">
              How We Work
            </p>
            <h2
              id="values-heading"
              className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight"
            >
              The Four Pillars
            </h2>
            <p className="mt-4 text-slate-500 max-w-xl mx-auto">
              Every session, every program, and every client relationship
              is built on the same four principles.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v) => {
              const Icon = v.icon;
              return (
                <div key={v.word} className="group bg-slate-50 rounded-2xl p-7 border border-slate-100 hover:border-[#800000]/40 hover:bg-[#800000]/5 transition-all duration-200">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#800000]/10 mb-5 group-hover:bg-[#800000]/20 transition-colors">
                    <Icon className="h-5 w-5 text-[#800000]" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">
                    {v.word}
                  </h3>
                  <p className="text-sm text-slate-500 leading-relaxed">{v.definition}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── NEON FOX LEGACY STRIP ─────────────────────────── */}
      <section className="bg-[#1A1A1A] py-16 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-[#800000] mb-4">
                The Greenbird Legacy → Neon Fox
              </p>
              <h2 className="text-2xl sm:text-3xl font-black text-white mb-5 tracking-tight">
                Built in Austin.
                <br />
                <span className="text-[#800000]">Evolved for the Brazos Valley.</span>
              </h2>
              <p className="text-slate-400 text-sm leading-relaxed">
                Greenbird Fitness was never a typical boutique studio. It was the product of a specific
                philosophy: that fitness instruction should meet the same standards of evidence and
                precision we expect from medicine, physical therapy, and clinical education.
              </p>
              <p className="text-slate-400 text-sm leading-relaxed mt-4">
                Neon Fox is that philosophy evolved. The mobile concierge model we&apos;ve built
                means no barriers, no commutes, no compromises — just an elite Austin experience,
                now with a high-performance recovery focus, delivered directly to the Brazos Valley.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: Users, label: "Private Concierge", desc: "In-home sessions for individuals and families across the Brazos Valley." },
                { icon: Heart, label: "Corporate Wellness", desc: "On-site high-performance programs for College Station and Bryan employers." },
                { icon: Zap, label: "Athletic Recovery", desc: "Sport-specific biomechanical recovery for competitive athletes." },
                { icon: GraduationCap, label: "Aggie-Founded", desc: "Texas A&M graduates returning the expertise home to the community that shaped them." },
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.label} className="bg-[#36454F] rounded-xl p-5">
                    <Icon className="h-5 w-5 text-[#800000] mb-3" />
                    <p className="text-sm font-semibold text-white mb-1">{item.label}</p>
                    <p className="text-xs text-slate-400 leading-relaxed">{item.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ── DUAL CTA ──────────────────────────────────────── */}
      <section className="bg-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#800000] mb-4">
            Work With Us
          </p>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 mb-4 tracking-tight">
            Experience the Neon Fox Standard
            <br />
            <span className="italic font-bold text-[#800000]">in the Brazos Valley.</span>
          </h2>
          <p className="text-slate-500 max-w-xl mx-auto mb-10">
            Whether you&apos;re looking for a private concierge session in your
            College Station home or a high-performance recovery program for
            your team — we&apos;re ready to bring the standard.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/#contact"
              className="group inline-flex items-center gap-2 rounded-full bg-[#800000] hover:bg-[#6b0000] px-7 py-3.5 text-sm font-bold text-white transition-all shadow-sm hover:shadow-md"
            >
              Book a Private Session
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
            <Link
              href="/corporate"
              className="group inline-flex items-center gap-2 rounded-full border-2 border-slate-200 hover:border-slate-400 bg-white px-7 py-3.5 text-sm font-semibold text-slate-700 hover:text-slate-900 transition-all"
            >
              View Corporate Packages
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>

          <p className="mt-6 text-xs text-slate-400">
            Serving College Station, Bryan, and the greater Brazos Valley ·{" "}
            <a href="mailto:neonfoxmethod@gmail.com" className="underline hover:text-slate-600 transition-colors">
              neonfoxmethod@gmail.com
            </a>
          </p>
        </div>
      </section>
    </div>
  );
}
