"use client";

import { useState } from "react";
import { Send, CheckCircle, User, CalendarDays } from "lucide-react";
import { cn } from "@/lib/utils";

type Segment = "individual" | "events" | "";

const segmentOptions = [
  {
    value: "individual" as const,
    label: "Private Coaching",
    icon: User,
    desc: "1-on-1 in-home sessions",
  },
  {
    value: "events" as const,
    label: "Pop-Up Events",
    icon: CalendarDays,
    desc: "Community classes",
  },
];

export function ContactForm() {
  const [segment, setSegment] = useState<Segment>("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.SyntheticEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);

    const fd = new FormData(e.currentTarget);
    const body = {
      segment,
      name:     fd.get("name"),
      email:    fd.get("email"),
      location: fd.get("location"),
      message:  fd.get("message"),
    };

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });

    setLoading(false);
    if (res.ok) {
      setSubmitted(true);
    } else {
      alert("Something went wrong — please try again or email neonfoxmethod@gmail.com directly.");
    }
  }

  const ctaLabel =
    segment === "individual"
      ? "Check Availability"
      : segment === "events"
      ? "View Local Calendar"
      : "Get in Touch";

  return (
    <section
      id="contact"
      className="bg-slate-900 py-20 px-4 sm:px-6 lg:px-8 scroll-mt-16"
      aria-labelledby="contact-heading"
    >
      <div className="mx-auto max-w-2xl">
        <div className="text-center mb-10">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#800000] mb-3">
            Get Started
          </p>
          <h2
            id="contact-heading"
            className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white"
          >
            Ready to Move Better?
          </h2>
          <p className="mt-4 text-slate-400 max-w-md mx-auto">
            Serving College Station, Bryan, and the Brazos Valley. We respond within
            one business day.
          </p>
        </div>

        {submitted ? (
          <div className="flex flex-col items-center justify-center gap-4 py-16 text-center">
            <CheckCircle className="h-12 w-12 text-[#800000]" />
            <h3 className="text-xl font-bold text-white">You&apos;re on the list.</h3>
            <p className="text-slate-400 max-w-sm">
              We&apos;ll be in touch within one business day. Urgent?{" "}
              <span className="text-[#800000] font-medium">
                neonfoxmethod@gmail.com
              </span>
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Segment */}
            <div>
              <label className="block text-sm font-semibold text-slate-300 mb-2">
                I&apos;m interested in... <span className="text-red-400">*</span>
              </label>
              <div className="grid grid-cols-2 gap-3">
                {segmentOptions.map((opt) => {
                  const Icon = opt.icon;
                  const selected = segment === opt.value;
                  return (
                    <button
                      key={opt.value}
                      type="button"
                      onClick={() => setSegment(opt.value)}
                      className={cn(
                        "flex flex-col items-center gap-1.5 rounded-xl border-2 p-4 text-sm font-medium transition-all",
                        selected
                          ? "border-[#800000] bg-[#800000]/10 text-white"
                          : "border-slate-700 bg-slate-800 text-slate-400 hover:border-slate-500 hover:text-slate-200"
                      )}
                    >
                      <Icon className={cn("h-5 w-5", selected ? "text-[#800000]" : "")} />
                      <span>{opt.label}</span>
                      <span className="text-xs opacity-60">{opt.desc}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Name / Email */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-slate-300 mb-1.5">
                  Name <span className="text-red-400">*</span>
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  placeholder="Alex Johnson"
                  className="w-full rounded-xl bg-slate-800 border border-slate-600 px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-[#800000] focus:border-transparent transition"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-slate-300 mb-1.5">
                  Email <span className="text-red-400">*</span>
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="alex@email.com"
                  className="w-full rounded-xl bg-slate-800 border border-slate-600 px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-[#800000] focus:border-transparent transition"
                />
              </div>
            </div>

            {/* Location for individual */}
            {segment === "individual" && (
              <div>
                <label htmlFor="location" className="block text-sm font-semibold text-slate-300 mb-1.5">
                  Your area in the Brazos Valley
                </label>
                <input
                  id="location"
                  name="location"
                  type="text"
                  placeholder="e.g. South College Station, Northgate, Bryan"
                  className="w-full rounded-xl bg-slate-800 border border-slate-600 px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-[#800000] focus:border-transparent transition"
                />
              </div>
            )}

            {/* Message */}
            <div>
              <label htmlFor="message" className="block text-sm font-semibold text-slate-300 mb-1.5">
                Anything else?
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                placeholder="Goals, schedule preferences, questions..."
                className="w-full rounded-xl bg-slate-800 border border-slate-600 px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-[#800000] focus:border-transparent transition resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={!segment || loading}
              className={cn(
                "w-full inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm font-bold transition-all",
                segment && !loading
                  ? "bg-[#800000] hover:bg-[#6b0000] text-white cursor-pointer"
                  : "bg-slate-700 text-slate-500 cursor-not-allowed"
              )}
            >
              {loading ? (
                <>
                  <span className="h-4 w-4 rounded-full border-2 border-white/30 border-t-white animate-spin" />
                  Sending...
                </>
              ) : (
                <>
                  <Send className="h-4 w-4" />
                  {ctaLabel}
                </>
              )}
            </button>

            <p className="text-center text-xs text-slate-500">
              No spam. Just a reply from a real person in College Station.
            </p>
          </form>
        )}
      </div>
    </section>
  );
}
