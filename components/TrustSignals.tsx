import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Priya R.",
    role: "Grad Student",
    company: "Texas A&M University",
    quote:
      "The pop-up at Blackwater Draw was the best Thursday I've had in College Station. Totally inclusive, super fun, and the instructor made everyone feel welcome. Already have the next one on my calendar.",
    rating: 5,
    segment: "Event",
  },
  {
    name: "Derek L.",
    role: "VP of Operations",
    company: "Bryan-area logistics firm",
    quote:
      "I had chronic lower-back pain from 10+ years of desk work. After six private sessions in my home, I'm back to running. Zero gimmicks — pure functional movement work.",
    rating: 5,
    segment: "Private",
  },
  {
    name: "Melissa K.",
    role: "Real Estate Agent",
    company: "Brazos Valley Realty",
    quote:
      "As someone who drives all day showing properties across Bryan and College Station, the concierge sessions have been worth every penny. My hip pain is essentially gone.",
    rating: 5,
    segment: "Private",
  },
  {
    name: "Carlos V.",
    role: "Co-Founder",
    company: "CS craft brewery",
    quote:
      "Hosting the pop-up was a no-brainer. Our taproom was packed on a Wednesday. Great for community, great for business. We're already booking the next three dates.",
    rating: 5,
    segment: "Event",
  },
  {
    name: "Tanisha W.",
    role: "Remote UX Designer",
    company: "College Station",
    quote:
      "Working from home meant I stopped moving entirely. The private sessions come to my living room — I've done them in pajamas. Life-changing is not an overstatement.",
    rating: 5,
    segment: "Private",
  },
  {
    name: "Jess & Marco",
    role: "Local Residents",
    company: "Southwood Valley, CS",
    quote:
      "We do the pop-ups together every month. It's become our date night. The vibe is so good — not intimidating at all, even for a total beginner like me.",
    rating: 5,
    segment: "Event",
  },
];

const segmentColors: Record<string, string> = {
  Private: "bg-slate-100 text-slate-700",
  Event: "bg-amber-50 text-amber-700",
};

const stats = [
  { value: "1000+", label: "Sessions Delivered" },
  // { value: "15+", label: "Brazos Valley Venues" },
  { value: "4.9★", label: "Average Rating" },
  { value: "3 yrs", label: "Serving Brazos Valley" },
  { value: "20 yrs", label: "Health & Fitness" },
];

export function TrustSignals() {
  return (
    <section
      id="testimonials"
      className="bg-white py-20 px-4 sm:px-6 lg:px-8"
      aria-labelledby="testimonials-heading"
    >
      <div className="mx-auto max-w-7xl">
        {/* Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mb-16 p-6 rounded-2xl bg-slate-900">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <p className="text-2xl sm:text-3xl font-extrabold text-white">{s.value}</p>
              <p className="text-xs text-slate-400 mt-0.5 font-medium">{s.label}</p>
            </div>
          ))}
        </div>

        <div className="text-center mb-12">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#800000] mb-3">
            Community Love
          </p>
          <h2
            id="testimonials-heading"
            className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900"
          >
            From Your Neighbors in the Brazos Valley
          </h2>
          <p className="mt-4 text-slate-500 max-w-xl mx-auto">
            Real clients from Bryan, College Station, and across the Brazos Valley sharing
            what consistent mobility work has done for them.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="flex flex-col bg-white rounded-2xl border border-slate-100 p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-start justify-between mb-4">
                <Quote className="h-6 w-6 text-slate-200 shrink-0" />
                <span
                  className={`text-xs font-semibold px-2.5 py-1 rounded-full ${segmentColors[t.segment]}`}
                >
                  {t.segment}
                </span>
              </div>
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
  );
}
