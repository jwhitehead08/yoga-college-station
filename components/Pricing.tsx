import Link from "next/link";
import { Check, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

const plans = [
  {
    id: "individual",
    name: "Private Sessions",
    tagline: "1-on-1, at your location",
    pricePrefix: "Starting at",
    price: "$120",
    priceSuffix: "/ session",
    description:
      "In-home mobility coaching tailored entirely to you. Packages of 5 or 10 sessions unlock the best rates in the Bryan and College Station area.",
    features: [
      "50-minute private sessions",
      "Fully customized programming",
      "Home visits in CS & Bryan area",
      "Progress tracking & check-ins",
      "Priority scheduling",
      "5-session & 10-session bundles",
    ],
    cta: "Check Availability",
    href: "#contact",
    highlight: true,
    border: "border-slate-900",
    btnClass: "bg-slate-900 hover:bg-slate-700 text-white",
    badge: "Most Requested",
    badgeBg: "bg-slate-900 text-white",
  },
  {
    id: "events",
    name: "Pop-Up Events",
    tagline: "Community drop-in sessions",
    pricePrefix: "Starting at",
    price: "$20",
    priceSuffix: "/ person",
    description:
      "Join a community session at a local College Station venue, or book a private group event for friends, coworkers, or a special occasion.",
    features: [
      "Drop-in community sessions",
      "All fitness levels welcome",
      "Brazos Valley venue partnerships",
      "Private group bookings available",
      "Great for birthdays & team outings",
      "Monthly event calendar",
    ],
    cta: "Check Availability",
    href: "#contact",
    highlight: false,
    border: "border-amber-200",
    btnClass: "bg-amber-500 hover:bg-amber-600 text-white",
    badge: null,
    badgeBg: "",
  },
] as const;

export function Pricing() {
  return (
    <section
      id="pricing"
      className="bg-slate-50 py-20 px-4 sm:px-6 lg:px-8"
      aria-labelledby="pricing-heading"
    >
      <div className="mx-auto max-w-4xl">
        <div className="text-center mb-14">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#800000] mb-3">
            Pricing
          </p>
          <h2
            id="pricing-heading"
            className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900"
          >
            Honest Starting Points
          </h2>
          <p className="mt-4 text-slate-500 max-w-xl mx-auto">
            No surprise fees. Custom quotes are based on your location within the Brazos
            Valley and the package you choose.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
          {plans.map((p) => (
            <div
              key={p.id}
              className={cn(
                "relative flex flex-col bg-white rounded-2xl border-2 p-8 transition-all duration-200",
                p.highlight ? "shadow-xl scale-[1.02]" : "shadow-sm hover:shadow-md",
                p.border
              )}
            >
              {p.badge && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                  <span
                    className={cn(
                      "text-xs font-bold px-3 py-1 rounded-full whitespace-nowrap",
                      p.badgeBg
                    )}
                  >
                    {p.badge}
                  </span>
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-lg font-bold text-slate-900 mb-0.5">{p.name}</h3>
                <p className="text-xs text-slate-400 font-medium uppercase tracking-wide">
                  {p.tagline}
                </p>
              </div>

              <div className="mb-5">
                <p className="text-xs text-slate-400 mb-0.5">{p.pricePrefix}</p>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-extrabold text-slate-900">{p.price}</span>
                  <span className="text-sm text-slate-400">{p.priceSuffix}</span>
                </div>
              </div>

              <p className="text-sm text-slate-500 leading-relaxed mb-6">{p.description}</p>

              <ul className="space-y-2.5 mb-8 flex-1">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-sm text-slate-600">
                    <Check className="h-4 w-4 text-[#800000] shrink-0 mt-0.5" />
                    {f}
                  </li>
                ))}
              </ul>

              <Link
                href={p.href}
                className={cn(
                  "group inline-flex w-full items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition-all",
                  p.btnClass
                )}
              >
                {p.cta}
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
            </div>
          ))}
        </div>

        <p className="text-center text-sm text-slate-400 mt-8">
          Serving College Station, Bryan, and the greater Brazos Valley.{" "}
          <Link href="/#contact" className="underline hover:text-slate-600 transition-colors">
            Contact us
          </Link>{" "}
          for package and group discounts.
        </p>
      </div>
    </section>
  );
}
