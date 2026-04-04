import Link from "next/link";
import Image from "next/image";
import { User, CalendarDays, ArrowRight, Star } from "lucide-react";

const segments = [
  {
    id: "individual",
    icon: User,
    tag: "Private Concierge",
    tagBg: "bg-slate-100 text-slate-800",
    headline: "1-on-1 coaching at\nyour front door.",
    sub: "Tailored mobility and recovery sessions in your College Station or Bryan home. Built around your body, your goals, your schedule.",
    cta: "Check Availability",
    href: "#individual",
    iconBg: "bg-slate-900",
    border: "hover:border-slate-900",
    btnClass: "bg-slate-900 hover:bg-slate-700 text-white",
  },
    {
    id: "events",
    icon: CalendarDays,
    tag: "Group Session",
    tagBg: "bg-amber-100 text-amber-800",
    headline: "Group Session\nwith your Group or Team.",
    sub: "Tailored mobility and recovery sessions for your friend group, office, or athletic team.",
    cta: "Check Availability",
    href: "#events",
    iconBg: "bg-amber-500",
    border: "hover:border-amber-500",
    btnClass: "bg-amber-500 hover:bg-amber-600 text-white",
  },
  // {
  //   id: "events",
  //   icon: CalendarDays,
  //   tag: "Pop-Up Events",
  //   tagBg: "bg-amber-100 text-amber-800",
  //   headline: "Yoga night at your\nfavorite local spot.",
  //   sub: "Community sessions at College Station breweries, cafes, and Brazos Valley venues. All levels welcome — bring a mat and a friend.",
  //   cta: "Check Availability",
  //   href: "#events",
  //   iconBg: "bg-amber-500",
  //   border: "hover:border-amber-500",
  //   btnClass: "bg-amber-500 hover:bg-amber-600 text-white",
  // },
] as const;

export function Hero() {
  return (
    <section aria-label="Hero" className="bg-white">
      {/* Hero image with overlaid headline */}
      <div className="relative w-full aspect-[16/7] overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-1 bg-[#800000] z-10" />
        <Image
          src="/j-reverse-warrior.jpg"
          alt="Jeff Whitehead in reverse warrior pose at Ellis Field, Texas A&M"
          fill
          className="object-cover object-center"
          priority
        />
        {/* Dark scrim for text legibility */}
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent" />
        {/* Overlaid headline */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 z-10 pt-8 pb-8">
          <p className="text-xs font-semibold uppercase tracking-wide sm:tracking-widest text-white mb-4 px-4 text-center break-words">
            Brazos Valley's High-Performance Recovery
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-tight drop-shadow-lg">
            Elite Recovery That
            <br />
            <span className="text-[#800000]">Comes to You.</span>
          </h1>
        </div>
      </div>

      {/* Sub-copy */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-10 pb-10 text-center">
        <p className="mt-5 max-w-2xl mx-auto text-lg text-slate-500 leading-relaxed">
          No studio. No commute. No compromises. Private high-performance yoga, Pilates, and recovery sessions
          across Bryan, College Station, and the Brazos Valley.
        </p>

        {/* Social proof strip */}
        <div className="mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-slate-400">
          {/* <span className="flex items-center gap-1">
            <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
            <strong className="text-slate-700">4.9</strong> avg rating
          </span> */}
          {/* <span className="hidden sm:block w-px h-4 bg-slate-200" /> */}
          <span>1000+ sessions delivered</span>
          <span className="hidden sm:block w-px h-4 bg-slate-200" />
          <span>Serving Brazos Valley since 2023</span>
        </div>

        <p className="mt-8 text-sm font-semibold text-slate-400">
          What brings you here?
        </p>
      </div>



      {/* Segment cards */}
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 pb-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {segments.map((seg) => {
            const Icon = seg.icon;
            return (
              <Link
                key={seg.id}
                href={seg.href}
                className={`group flex flex-col justify-between rounded-2xl border-2 border-slate-100 bg-white p-7 transition-all duration-200 shadow-sm hover:shadow-lg ${seg.border}`}
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div
                      className={`flex h-11 w-11 items-center justify-center rounded-xl text-white ${seg.iconBg}`}
                    >
                      <Icon className="h-5 w-5" />
                    </div>
                    <span
                      className={`text-xs font-semibold px-2.5 py-1 rounded-full ${seg.tagBg}`}
                    >
                      {seg.tag}
                    </span>
                  </div>
                  <h2 className="text-2xl font-bold tracking-tight text-slate-900 whitespace-pre-line leading-snug mb-3">
                    {seg.headline}
                  </h2>
                  <p className="text-sm leading-relaxed text-slate-500">{seg.sub}</p>
                </div>
                <div className="mt-7">
                  <span
                    className={`inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold transition-all ${seg.btnClass}`}
                  >
                    {seg.cta}
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
