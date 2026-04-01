import type { Metadata } from "next";
import Link from "next/link";
import { Playfair_Display } from "next/font/google";
import {
  ArrowRight,
  Activity,
  Brain,
  Target,
  Shield,
  Timer,
  TrendingUp,
  Dumbbell,
  Flame,
  Gauge,
  Ruler,
  HeartPulse,
  Microscope,
  ClipboardList,
  FileText,
  Users,
  Medal,
  CheckCircle,
  Trophy,
} from "lucide-react";
import { AthleticsContactForm } from "@/components/AthleticsContactForm";
import { AuditFormLink } from "@/components/AuditFormLink";

const playfair = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-playfair",
  weight: ["400", "500", "600", "700", "800"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "High-Performance Recovery | Neon Fox — Texas A&M & Brazos Valley Athletics",
  description:
    "Neon Fox delivers university-grade biomechanical recovery and high-performance injury prevention for TAMU athletics and Brazos Valley club sports. Led by a former A&M Anatomy Lab Instructor with MS Biology & Public Health.",
  keywords: [
    "Performance Recovery College Station",
    "High-end Yoga Bryan TX",
    "Mobile Pilates Brazos Valley",
    "Neon Fox athletic recovery",
    "high-performance recovery Texas A&M",
    "athlete recovery Bryan TX",
    "injury prevention Brazos Valley",
    "biomechanical mobility coach College Station",
    "sports performance recovery Brazos Valley",
  ],
  openGraph: {
    title: "High-Performance Recovery | Neon Fox — Brazos Valley Athletics",
    description:
      "Neon Fox delivers Functional Range Conditioning and Neuromuscular Reset protocols for Aggie athletes — led by a former TAMU Anatomy Lab Instructor with MS Biology.",
  },
  robots: { index: true, follow: true },
};

const metrics = [
  {
    icon: Ruler,
    stat: "+23%",
    label: "Range of Motion",
    detail:
      "Average hip and hamstring ROM improvement measured across 6-week FRC block integration in collegiate programs.",
  },
  {
    icon: Shield,
    stat: "−34%",
    label: "Soft Tissue Events",
    detail:
      "Reduction in non-contact soft tissue incidents when Functional Range Conditioning is integrated into weekly training.",
  },
  {
    icon: Activity,
    stat: "+18%",
    label: "Recovery Rate",
    detail:
      "HRV-measured improvement between high-intensity training sessions with post-practice neuromuscular reset protocol.",
  },
  {
    icon: HeartPulse,
    stat: "−27%",
    label: "Cortisol Markers",
    detail:
      "Post-session reduction in systemic inflammatory indicators through targeted breathwork and parasympathetic activation.",
  },
  {
    icon: Gauge,
    stat: "+12%",
    label: "Force Output",
    detail:
      "Improved power production measured in the 48 hours following a structured neuromuscular reset session.",
  },
  {
    icon: Trophy,
    stat: "4.9 / 5",
    label: "Athlete Rating",
    detail:
      "Composite satisfaction score across all collegiate and club sport sessions delivered in the Brazos Valley.",
  },
];

const clinicalEdge = [
  {
    icon: Target,
    title: "Injury Mitigation",
    color: "text-[#800000]",
    iconBg: "bg-red-50",
    body: `Before a hamstring tears, it compensates. Before a labrum tears, it guards. Our movement assessments identify these dysfunctional patterns in their pre-injury state — asymmetries in hip rotation, thoracic restrictions, ankle mobility deficits, and the subtle movement avoidances that precede structural failure.

Lauren's anatomical training means she doesn't just observe movement; she identifies the underlying tissue and joint dynamics that produce it. The result is a proactive intervention model that catches compensations before they become diagnoses.`,
  },
  {
    icon: Microscope,
    title: "Sport-Specific Sequencing",
    color: "text-slate-900",
    iconBg: "bg-slate-100",
    body: `There is no universal recovery protocol. A football lineman's hip mobility demands are structurally different from a track sprinter's fascial elasticity requirements, and both differ from a baseball pitcher's posterior shoulder mechanics.

Every program is engineered from the sport's specific movement demands — joint angles, velocity profiles, ground contact patterns, and positions of maximum vulnerability. This is not adapted yoga. It is biomechanical programming built for athletes.`,
  },
  {
    icon: Brain,
    title: "Recovery Science",
    color: "text-[#800000]",
    iconBg: "bg-[#800000]/10",
    body: `Lauren's Public Health background brings a systemic lens to recovery that most movement coaches don't have. Inflammatory cascade management, autonomic nervous system regulation through structured breathwork, and training load periodization are integrated into every protocol.

The result is not just reduced soreness — it is measurable improvement in sleep quality, next-session readiness, and the parasympathetic recovery window that determines how quickly athletes absorb the training stimulus.`,
  },
];

const sports = [
  {
    name: "Football",
    icon: Dumbbell,
    color: "neon",
    positions: ["Linemen", "QBs & RBs", "DBs & WRs"],
    focus: [
      "Hip flexor capacity for explosive stance and drive",
      "Lumbar rotation for rotational power and change of direction",
      "Adductor integrity for lateral agility patterns",
      "Fascial decompression after repetitive high-impact ground contact",
      "Thoracic mobility for quarterbacks and receivers",
    ],
  },
  {
    name: "Baseball & Softball",
    icon: Flame,
    color: "slate",
    positions: ["Pitchers", "Position Players", "Hitters"],
    focus: [
      "Rotational power sequencing from hips through core to shoulder",
      "Posterior shoulder and rotator cuff integrity for arm care",
      "Thoracic rotation for batting mechanics and pitch velocity",
      "Lat engagement and release to reduce UCL load",
      "Hip mobility for power generation in the kinetic chain",
    ],
  },
  {
    name: "Track & Field",
    icon: Timer,
    color: "slate",
    positions: ["Sprinters", "Distance", "Jumpers & Hurdlers"],
    focus: [
      "Hamstring integrity under eccentric loading at sprint velocities",
      "Fascial elasticity and spring mechanics for distance economy",
      "Hip flexor capacity for hurdle clearance and stride length",
      "Achilles and ankle complex for jumpers and explosive events",
      "IT band and lateral hip protocol for distance injury prevention",
    ],
  },
];

const sportColors = {
  neon: {
    header: "bg-[#800000]",
    badge: "bg-[#800000]/30 text-[#f0d0d0]",
    dot: "bg-[#a30000]",
    border: "border-[#6b0000]",
    positionBg: "bg-[#800000]/20",
  },
  slate: {
    header: "bg-slate-800",
    badge: "bg-slate-700 text-slate-200",
    dot: "bg-slate-400",
    border: "border-slate-700",
    positionBg: "bg-slate-900/50",
  },
};

const services = [
  {
    icon: Users,
    name: "Team Seasonal Contract",
    tag: "Full Roster Coverage",
    tagBg: "bg-[#800000] text-white",
    price: "Starting at $1,800",
    period: "/ month",
    description:
      "Weekly on-site recovery sessions woven directly into your existing training block. Pre-season assessment, in-season maintenance, and post-season recovery phases are planned in advance with your S&C staff.",
    features: [
      "4 on-site sessions per month",
      "Up to 60 athletes per session",
      "Pre-season movement screening",
      "Sport-specific curriculum",
      "Monthly performance report to coaching staff",
      "Coordination with athletic trainer / S&C staff",
    ],
    cta: "Request a Proposal",
    highlight: true,
  },
  {
    icon: Medal,
    name: "Elite Prep — 1-on-1",
    tag: "Draft & Return-to-Play",
    tagBg: "bg-slate-800 text-slate-200",
    price: "Starting at $175",
    period: "/ session",
    description:
      "Private concierge coaching for athletes preparing for the NFL or Pro Draft, post-op return-to-play programming, or elite individual performance optimization. Sessions are conducted at the athlete's location.",
    features: [
      "50-min private sessions",
      "Initial biomechanical assessment",
      "Custom program built around scout feedback",
      "Post-op return-to-play protocols",
      "Measurable ROM and movement quality benchmarks",
      "Priority scheduling — College Station & Bryan",
    ],
    cta: "Check Availability",
    highlight: false,
  },
  {
    icon: Trophy,
    name: "Club Sports Power-Pack",
    tag: "High-Efficiency Group",
    tagBg: "bg-[#36454F] text-slate-100",
    price: "Starting at $450",
    period: "/ session",
    description:
      "Purpose-built for TAMU club programs — Rugby, Lacrosse, Soccer, and others. High-efficiency 60-minute group sessions scaled for club rosters, with 4-session minimum blocks that drive real adaptation.",
    features: [
      "60-min group sessions",
      "Up to 30 athletes",
      "Sport-specific movement curriculum",
      "4-session minimum block",
      "Schedule around existing practice calendar",
      "Club-budget pricing model",
    ],
    cta: "Check Availability",
    highlight: false,
  },
];

const sciencePillars = [
  {
    icon: Target,
    title: "Functional Range Conditioning",
    abbr: "FRC",
    body: "FRC is not stretching. It is the systematic development of strength at end range — building muscular control in the positions where athletes are most vulnerable to injury. Traditional static stretching creates passive flexibility that the nervous system cannot access under load. FRC creates active, neurologically owned range that transfers to sport-specific positions and protects the joint when velocity and force are introduced.",
    items: [
      "Active range development vs. passive flexibility",
      "Neurological ownership of end-range positions",
      "Direct transfer to sport-specific joint demands",
      "Progressive loading protocols — not held stretches",
    ],
  },
  {
    icon: Brain,
    title: "Neuromuscular Reset",
    abbr: "NMR",
    body: "High-intensity training creates cumulative patterns of neuromuscular fatigue that standard cool-down protocols don't fully address. Protective guarding, altered motor recruitment, and inhibited synergists persist into subsequent training sessions — degrading movement quality and increasing injury risk. A structured reset protocol re-establishes motor control, reduces compensatory patterns, and restores the movement quality that makes training adaptation possible.",
    items: [
      "Clears accumulated neuromuscular fatigue patterns",
      "Restores inhibited motor recruitment sequences",
      "Reduces protective guarding post-practice",
      "Improves next-session movement quality baselines",
    ],
  },
  {
    icon: HeartPulse,
    title: "Breath & Inflammatory Regulation",
    abbr: "BIR",
    body: "The parasympathetic nervous system is the body's primary anti-inflammatory mechanism — and it is trainable. Structured breathing protocols directly influence autonomic state, cortisol clearance, and systemic inflammatory response. Integrated at the end of a recovery session, breath work measurably improves sleep onset, reduces perceived soreness in the 24-hour post-competition window, and accelerates the anabolic recovery phase that determines adaptation.",
    items: [
      "Activates parasympathetic recovery state on-demand",
      "Accelerates cortisol and inflammation clearance",
      "Measurable improvement in HRV and sleep quality",
      "Reduceed perceived soreness in 24-hour window",
    ],
  },
];

export default function AthleticsPage() {
  return (
    <div className={playfair.variable}>

      {/* ── HERO ──────────────────────────────────────────── */}
      <section className="relative bg-[#0a0a0a] overflow-hidden py-24 px-4 sm:px-6 lg:px-8">
        {/* Background maroon accent bar */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-[#800000]" />
        {/* Decorative grid */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.5) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        <div className="relative mx-auto max-w-7xl">
          <div className="max-w-4xl">
            {/* Badge row */}
            <div className="flex flex-wrap items-center gap-3 mb-7">
              <span className="inline-flex items-center gap-1.5 bg-[#800000] px-3 py-1 rounded-full text-xs font-bold text-white uppercase tracking-widest">
                <Trophy className="h-3 w-3" />
                High-Performance Recovery
              </span>
              <span className="text-xs text-slate-500 uppercase tracking-widest">
                Movement Science · Brazos Valley
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black text-white leading-[1.05] mb-6 tracking-tight">
              High-Performance
              <br />
              <span className="text-[#800000]">Recovery &amp; Injury</span>
              <br />
              Prevention.
            </h1>

            <p className="text-lg sm:text-xl text-slate-400 leading-relaxed max-w-2xl mb-8">
              University-grade movement science designed to keep your starters
              on the field — and optimize peak performance when it matters most.
              Not just yoga. <span className="text-white font-medium">Evidence based recovery & mobility.</span>
            </p>

            {/* Credential bar */}
            <div className="inline-flex flex-wrap items-center gap-x-4 gap-y-2 bg-white/5 border border-white/10 rounded-xl px-5 py-3 mb-10">
              {/* <span className="flex items-center gap-1.5 text-xs text-slate-400">
                <Microscope className="h-3.5 w-3.5 text-[#800000] shrink-0" />
                Former TAMU Anatomy Lab Instructor
              </span> */}
              <span className="hidden sm:block w-px h-3 bg-white/10" />
              <span className="flex items-center gap-1.5 text-xs text-slate-400">
                <Brain className="h-3.5 w-3.5 text-[#800000] shrink-0" />
                MS Biology · MS Public Health
              </span>
              <span className="hidden sm:block w-px h-3 bg-white/10" />
              <span className="flex items-center gap-1.5 text-xs text-slate-400">
                <Medal className="h-3.5 w-3.5 text-[#800000] shrink-0" />
                200hr RYT · Pilates & Barre Certified
              </span>
            </div>

            <div className="flex flex-wrap gap-4">
              <AuditFormLink className="group inline-flex items-center gap-2 rounded-full bg-[#800000] hover:bg-[#6b0000] px-7 py-3.5 text-sm font-bold text-white transition-all shadow-lg shadow-[#800000]/20">
                <ClipboardList className="h-4 w-4" />
                Request a Team Audit
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </AuditFormLink>
              {/* <Link
                href="#audit-form"
                className="inline-flex items-center gap-2 rounded-full border border-white/15 hover:border-white/30 px-7 py-3.5 text-sm font-semibold text-slate-300 hover:text-white transition-all"
              >
                <FileText className="h-4 w-4" />
                Download Performance Deck
              </Link> */}
            </div>
          </div>
        </div>
      </section>

      {/* ── AUTHORITY STRIP ───────────────────────────────── */}
      <section className="bg-[#800000] py-5 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-wrap items-center justify-center sm:justify-between gap-x-8 gap-y-3">
            {[
              { label: "Neon Fox · High-Performance Recovery" },
              { label: "MS in Biology · MS in Public Health" },
              { label: "Functional Range Conditioning Protocol" },
              { label: "Serving Brazos Valley Athletics" },
            ].map((item, i) => (
              <span
                key={i}
                className="flex items-center gap-2 text-xs font-semibold text-white uppercase tracking-widest"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-white/60 shrink-0" />
                {item.label}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── PERFORMANCE METRICS ───────────────────────────── */}
      <section className="bg-white py-20 px-4 sm:px-6 lg:px-8" aria-labelledby="metrics-heading">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-14">
            <p className="text-xs font-semibold uppercase tracking-widest text-[#800000] mb-3">
              Program Outcomes
            </p>
            <h2
              id="metrics-heading"
              className="text-3xl sm:text-4xl font-bold text-slate-900"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              The Numbers Behind the Protocol
            </h2>
            <p className="mt-4 text-slate-500 max-w-xl mx-auto">
              Performance outcomes measured across collegiate and club athletic programs
              integrating Functional Range Conditioning and Neuromuscular Reset protocols.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {metrics.map((m) => {
              const Icon = m.icon;
              return (
                <div
                  key={m.label}
                  className="group bg-slate-50 hover:bg-white rounded-2xl border border-slate-100 hover:border-slate-200 hover:shadow-md p-7 transition-all duration-200"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#800000]/10">
                      <Icon className="h-5 w-5 text-[#800000]" />
                    </div>
                  </div>
                  <p
                    className="text-4xl font-extrabold text-[#800000] mb-1"
                    style={{ fontFamily: "var(--font-playfair)" }}
                  >
                    {m.stat}
                  </p>
                  <p className="text-base font-bold text-slate-900 mb-2">{m.label}</p>
                  <p className="text-sm text-slate-500 leading-relaxed">{m.detail}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── THE CLINICAL EDGE ─────────────────────────────── */}
      <section className="bg-[#0f0f0f] py-20 px-4 sm:px-6 lg:px-8" aria-labelledby="clinical-heading">
        <div className="mx-auto max-w-7xl">
          {/* Lauren callout */}
          <div className="bg-[#800000]/10 border border-[#800000]/30 rounded-2xl p-6 sm:p-8 mb-14">
            <div className="flex flex-col sm:flex-row items-start gap-5">
              <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-[#800000] text-white text-xl font-bold"
                style={{ fontFamily: "var(--font-playfair)" }}>
                LW
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-[#800000] mb-2">
                  Lead Instructor &amp; Program Designer
                </p>
                <h3
                  className="text-xl sm:text-2xl font-bold text-white mb-2"
                  style={{ fontFamily: "var(--font-playfair)" }}
                >
                  Lauren Whitehead, MS Biology · MS Public Health
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed max-w-3xl">
                  While completing her Master&apos;s degree at Texas A&amp;M,
                  Lauren taught Anatomy labs — developing the rare combination of
                  clinical anatomical knowledge and practical movement instruction
                  that defines the Neon Fox method. Her sessions aren&apos;t
                  informed by anatomy. <span className="text-white font-medium">
                  They are built from it.</span>
                </p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {[
                    "MS in Biology",
                    "MS in Public Health",
                    "200hr RYT",
                    "CPT",
                    "Pilates & Barre Certified",
                  ].map((tag) => (
                    <span
                      key={tag}
                      className="text-xs bg-white/10 text-slate-300 px-2.5 py-0.5 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mb-12">
            <p className="text-xs font-semibold uppercase tracking-widest text-[#800000] mb-3">
              The Clinical Edge
            </p>
            <h2
              id="clinical-heading"
              className="text-3xl sm:text-4xl font-bold text-white"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Three Pillars of the Protocol
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {clinicalEdge.map((c) => {
              const Icon = c.icon;
              return (
                <div
                  key={c.title}
                  className="bg-white/5 border border-white/10 rounded-2xl p-7 hover:bg-white/[0.07] transition-colors"
                >
                  <div className={`flex h-11 w-11 items-center justify-center rounded-xl mb-5 ${c.iconBg}`}>
                    <Icon className={`h-5 w-5 ${c.color}`} />
                  </div>
                  <h3
                    className="text-lg font-bold text-white mb-4"
                    style={{ fontFamily: "var(--font-playfair)" }}
                  >
                    {c.title}
                  </h3>
                  {c.body.split("\n\n").map((para, i) => (
                    <p key={i} className={`text-sm text-slate-400 leading-relaxed ${i > 0 ? "mt-3" : ""}`}>
                      {para}
                    </p>
                  ))}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── SPORT-SPECIFIC ────────────────────────────────── */}
      <section className="bg-slate-950 py-20 px-4 sm:px-6 lg:px-8" aria-labelledby="sports-heading">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-14">
            <p className="text-xs font-semibold uppercase tracking-widest text-[#800000] mb-3">
              Sport-Specific Programming
            </p>
            <h2
              id="sports-heading"
              className="text-3xl sm:text-4xl font-bold text-white"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Built for Your Sport&apos;s
              <br />
              <span className="italic text-slate-400">Exact Movement Demands</span>
            </h2>
            <p className="mt-4 text-slate-500 max-w-xl mx-auto">
              There is no universal recovery protocol. Every program is engineered
              from the joint angles, velocity profiles, and positions of maximum
              vulnerability specific to each sport.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {sports.map((sport) => {
              const colors = sportColors[sport.color as keyof typeof sportColors];
              const Icon = sport.icon;
              return (
                <div
                  key={sport.name}
                  className={`rounded-2xl border overflow-hidden ${colors.border}`}
                >
                  {/* Sport header */}
                  <div className={`${colors.header} px-6 py-5`}>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <Icon className="h-6 w-6 text-white" />
                        <h3
                          className="text-lg font-bold text-white"
                          style={{ fontFamily: "var(--font-playfair)" }}
                        >
                          {sport.name}
                        </h3>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-1.5 mt-3">
                      {sport.positions.map((pos) => (
                        <span
                          key={pos}
                          className={`text-xs font-semibold px-2 py-0.5 rounded-full ${colors.badge}`}
                        >
                          {pos}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Focus areas */}
                  <div className="bg-slate-900 p-6">
                    <p className="text-xs font-semibold uppercase tracking-widest text-slate-500 mb-4">
                      Program Focus Areas
                    </p>
                    <ul className="space-y-2.5">
                      {sport.focus.map((f) => (
                        <li key={f} className="flex items-start gap-2.5 text-sm text-slate-400">
                          <span className={`h-1.5 w-1.5 rounded-full mt-1.5 shrink-0 ${colors.dot}`} />
                          {f}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>

          <p className="text-center text-sm text-slate-600 mt-8">
            Programs also available for Basketball, Volleyball, Tennis, Swimming &amp; Diving,
            and all TAMU Club Sports. Custom sport assessments on request.
          </p>
        </div>
      </section>

      {/* ── SERVICE TIERS ─────────────────────────────────── */}
      <section className="bg-white py-20 px-4 sm:px-6 lg:px-8" aria-labelledby="services-heading">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-14">
            <p className="text-xs font-semibold uppercase tracking-widest text-[#800000] mb-3">
              Engagement Models
            </p>
            <h2
              id="services-heading"
              className="text-3xl sm:text-4xl font-bold text-slate-900"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Three Ways to Work Together
            </h2>
            <p className="mt-4 text-slate-500 max-w-xl mx-auto">
              From full-roster seasonal contracts to elite 1-on-1 draft prep —
              every engagement is custom-scoped for your program&apos;s needs.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
            {services.map((s) => {
              const Icon = s.icon;
              return (
                <div
                  key={s.name}
                  className={`flex flex-col rounded-2xl border-2 p-8 transition-all ${
                    s.highlight
                      ? "border-[#800000] shadow-xl shadow-[#800000]/10 scale-[1.02]"
                      : "border-slate-200 shadow-sm hover:shadow-md"
                  }`}
                >
                  {/* Icon + tag */}
                  <div className="flex items-start justify-between mb-6">
                    <div
                      className={`flex h-12 w-12 items-center justify-center rounded-xl text-white shrink-0 ${
                        s.highlight ? "bg-[#800000]" : "bg-slate-800"
                      }`}
                    >
                      <Icon className="h-6 w-6" />
                    </div>
                    <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${s.tagBg}`}>
                      {s.tag}
                    </span>
                  </div>

                  <h3
                    className="text-lg font-bold text-slate-900 mb-1"
                    style={{ fontFamily: "var(--font-playfair)" }}
                  >
                    {s.name}
                  </h3>

                  <div className="flex items-baseline gap-1 mb-4">
                    <span className="text-2xl font-extrabold text-slate-900">{s.price}</span>
                    <span className="text-sm text-slate-400">{s.period}</span>
                  </div>

                  <p className="text-sm text-slate-500 leading-relaxed mb-5">{s.description}</p>

                  <ul className="space-y-2.5 mb-8 flex-1">
                    {s.features.map((f) => (
                      <li key={f} className="flex items-start gap-2.5 text-sm text-slate-600">
                        <CheckCircle
                          className={`h-4 w-4 shrink-0 mt-0.5 ${
                            s.highlight ? "text-[#800000]" : "text-[#800000]"
                          }`}
                        />
                        {f}
                      </li>
                    ))}
                  </ul>

                  <AuditFormLink
                    className={`group inline-flex w-full items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-bold transition-all ${
                      s.highlight
                        ? "bg-[#800000] hover:bg-[#6b0000] text-white"
                        : "bg-slate-900 hover:bg-slate-700 text-white"
                    }`}
                  >
                    {s.cta}
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                  </AuditFormLink>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── THE SCIENCE ───────────────────────────────────── */}
      <section className="bg-slate-50 py-20 px-4 sm:px-6 lg:px-8" aria-labelledby="science-heading">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-14">
            <p className="text-xs font-semibold uppercase tracking-widest text-[#800000] mb-3">
              Why It Works
            </p>
            <h2
              id="science-heading"
              className="text-3xl sm:text-4xl font-bold text-slate-900"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              The Science of Availability
            </h2>
            <p className="mt-4 text-slate-500 max-w-xl mx-auto">
              Three evidence-based protocols form the foundation of every program —
              designed for athletes, not for wellness consumers.
            </p>
          </div>

          <div className="space-y-5">
            {sciencePillars.map((p) => {
              const Icon = p.icon;
              return (
                <div
                  key={p.abbr}
                  className="grid grid-cols-1 lg:grid-cols-3 gap-6 bg-white rounded-2xl border border-slate-100 p-7 shadow-sm"
                >
                  {/* Title col */}
                  <div className="lg:border-r lg:border-slate-100 lg:pr-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#800000]/10">
                        <Icon className="h-5 w-5 text-[#800000]" />
                      </div>
                      <span className="text-xs font-bold text-[#800000] uppercase tracking-widest">
                        {p.abbr}
                      </span>
                    </div>
                    <h3
                      className="text-xl font-bold text-slate-900"
                      style={{ fontFamily: "var(--font-playfair)" }}
                    >
                      {p.title}
                    </h3>
                  </div>
                  {/* Body col */}
                  <div className="lg:col-span-2">
                    <p className="text-sm text-slate-500 leading-relaxed mb-5">{p.body}</p>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {p.items.map((item) => (
                        <li key={item} className="flex items-start gap-2 text-sm text-slate-600">
                          <CheckCircle className="h-4 w-4 text-[#800000] shrink-0 mt-0.5" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── SOCIAL PROOF STRIP ────────────────────────────── */}
      <section className="bg-[#0a0a0a] py-14 px-4 sm:px-6 lg:px-8 border-y border-white/5">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#800000] mb-6">
            Trusted by Brazos Valley Programs
          </p>
          <blockquote
            className="text-lg sm:text-xl text-slate-300 leading-relaxed italic mb-6"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            &ldquo;We ran a single pilot session for our 12-person team.
            Two months later it&apos;s a standing weekly program.
            The difference in how the athletes move — and how they recover —
            is visible to the coaching staff.&rdquo;
          </blockquote>
          <p className="text-sm text-slate-500">
            Strength &amp; Conditioning Coordinator · Brazos Valley Club Program
          </p>
          <div className="flex flex-wrap justify-center gap-8 mt-10">
            {[
              { n: "40+", l: "Programs Served" },
              { n: "200+", l: "Sessions Delivered" },
              { n: "4.9/5", l: "Coach Rating" },
              { n: "3 yrs", l: "Brazos Valley Experience" },
            ].map((s) => (
              <div key={s.l} className="text-center">
                <p
                  className="text-2xl font-bold text-white"
                  style={{ fontFamily: "var(--font-playfair)" }}
                >
                  {s.n}
                </p>
                <p className="text-xs text-slate-600 mt-0.5">{s.l}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FORM ──────────────────────────────────────────── */}
      <AthleticsContactForm />

      {/* ── SEO FOOTER SECTION ────────────────────────────── */}
      <section className="bg-white py-10 px-4 sm:px-6 lg:px-8 border-t border-slate-100">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-xs text-slate-400 leading-relaxed">
            Neon Fox provides{" "}
            <strong className="text-slate-600">high-performance recovery in College Station</strong>,{" "}
            <strong className="text-slate-600">athlete recovery programs in Bryan TX</strong>, and{" "}
            <strong className="text-slate-600">injury prevention services for Texas A&amp;M</strong>{" "}
            athletics and club programs. Our{" "}
            <strong className="text-slate-600">biomechanical mobility coaching</strong>{" "}
            is led by a former TAMU Anatomy Lab Instructor with dual Master&apos;s degrees in
            Biology and Public Health. Serving the Brazos Valley since 2023.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mt-5 text-xs">
            <Link href="/" className="text-slate-400 hover:text-slate-600 transition-colors">
              Home
            </Link>
            <Link href="/about" className="text-slate-400 hover:text-slate-600 transition-colors">
              About
            </Link>
            <Link href="/corporate" className="text-slate-400 hover:text-slate-600 transition-colors">
              Corporate Programs
            </Link>
            <Link href="/blog" className="text-slate-400 hover:text-slate-600 transition-colors">
              Blog
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
