import Link from "next/link";
import { User, CalendarDays, Clock, MapPin, Users, ArrowRight } from "lucide-react";

const services = [
  {
    id: "individual",
    icon: User,
    iconBg: "bg-slate-900",
    badge: "Most Requested",
    badgeBg: "bg-slate-100 text-slate-700",
    title: "Private In-Home Sessions",
    subtitle: "Your space. Your pace.",
    description:
      "A certified mobility coach comes to your College Station or Bryan home and builds a session entirely around you — your posture, your pain points, your fitness goals. No commute, no judgment - just movement.",
    features: [
      { icon: Clock, text: "60-min private sessions" },
      { icon: MapPin, text: "Home visits across Brazos Valley" },
      { icon: User, text: "100% tailored to you" },
    ],
    cta: "Check Availability",
    href: "#contact",
    border: "border-slate-200 hover:border-slate-400",
    ctaClass: "bg-slate-900 hover:bg-slate-700 text-white",
    outcomes: ["Faster recovery", "Better sleep", "Less chronic pain"],
  },
    {
    id: "events",
    icon: CalendarDays,
    iconBg: "bg-amber-500",
    badge: "Group Session",
    badgeBg: "bg-amber-50 text-amber-700",
    title: "Group Session",
    subtitle: "Great yoga or pilates. Great friends.",
    description:
      "Whether you're looking to reset the office, bond with the squad, or give your team a competitive edge, we bring the recovery to you. We tailor high-energy sessions for friend groups, corporate offices, and athletic teams across the Brazos Valley.",
    features: [
      { icon: Users, text: "Open to all fitness levels" },
      { icon: MapPin, text: "Recovery & Mobility straight to your Group" },
    ],
    cta: "Check Availability",
    href: "#contact",
    border: "border-amber-200 hover:border-amber-400",
    ctaClass: "bg-amber-500 hover:bg-amber-600 text-white",
    outcomes: ["Community connection", "Fun & low-pressure", "Great for groups"],
  },
  // {
  //   id: "events",
  //   icon: CalendarDays,
  //   iconBg: "bg-amber-500",
  //   badge: "Community",
  //   badgeBg: "bg-amber-50 text-amber-700",
  //   title: "Local Pop-Up Events",
  //   subtitle: "Great yoga. Great venues.",
  //   description:
  //     "We partner with College Station's top breweries, rooftops, and cafes to bring accessible, high-energy yoga nights to the Brazos Valley community. All levels welcome. Grab a mat and a friend.",
  //   features: [
  //     { icon: CalendarDays, text: "Monthly events across CS & Bryan" },
  //     { icon: Users, text: "Open to all fitness levels" },
  //     { icon: MapPin, text: "Rotating Brazos Valley venues" },
  //   ],
  //   cta: "View Local Calendar",
  //   href: "#contact",
  //   border: "border-amber-200 hover:border-amber-400",
  //   ctaClass: "bg-amber-500 hover:bg-amber-600 text-white",
  //   outcomes: ["Community connection", "Fun & low-pressure", "Great for groups"],
  // },
] as const;

export function ServiceCards() {
  return (
    <section
      id="services"
      className="bg-slate-50 py-20 px-4 sm:px-6 lg:px-8"
      aria-labelledby="services-heading"
    >
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-14">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#800000] mb-3">
            How It Works
          </p>
          <h2
            id="services-heading"
            className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900"
          >
            Two Ways to Practice
          </h2>
          <p className="mt-4 text-slate-500 max-w-xl mx-auto">
            Whether you want a tailored session in your Bryan or College Station
            home, or a fun community class at a local venue — we've got you.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {services.map((s) => {
            const Icon = s.icon;
            return (
              <div
                key={s.id}
                id={s.id}
                className={`flex flex-col bg-white rounded-2xl border-2 p-8 transition-all duration-200 shadow-sm hover:shadow-md scroll-mt-20 ${s.border}`}
              >
                <div className="flex items-start justify-between mb-6">
                  <div
                    className={`flex h-12 w-12 items-center justify-center rounded-xl text-white shrink-0 ${s.iconBg}`}
                  >
                    <Icon className="h-6 w-6" />
                  </div>
                  <span
                    className={`text-xs font-semibold px-2.5 py-1 rounded-full ${s.badgeBg}`}
                  >
                    {s.badge}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-slate-900 mb-0.5">{s.title}</h3>
                <p className="text-xs font-semibold text-slate-400 uppercase tracking-wide mb-4">
                  {s.subtitle}
                </p>
                <p className="text-sm text-slate-500 leading-relaxed mb-6">
                  {s.description}
                </p>

                <ul className="space-y-2.5 mb-6">
                  {s.features.map((f, i) => {
                    const FIcon = f.icon;
                    return (
                      <li key={i} className="flex items-center gap-2.5 text-sm text-slate-600">
                        <FIcon className="h-4 w-4 text-slate-400 shrink-0" />
                        {f.text}
                      </li>
                    );
                  })}
                </ul>

                <div className="mt-auto pt-4 border-t border-slate-100">
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {s.outcomes.map((o) => (
                      <span
                        key={o}
                        className="text-xs bg-slate-50 border border-slate-200 text-slate-600 rounded-full px-2.5 py-0.5"
                      >
                        {o}
                      </span>
                    ))}
                  </div>
                  <Link
                    href={s.href}
                    className={`group inline-flex w-full items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition-all ${s.ctaClass}`}
                  >
                    {s.cta}
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
