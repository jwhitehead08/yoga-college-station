"use client";

import { useState } from "react";
import { Send, CheckCircle, ClipboardList } from "lucide-react";
import { cn } from "@/lib/utils";

const roles = [
  "Athletic Director",
  "Head Coach",
  "Assistant / Position Coach",
  "Strength & Conditioning Staff",
  "Club Sports Coach",
  "Student-Athlete",
  "Sports Medicine / Athletic Trainer",
  "Other",
];

const sports = [
  "Football",
  "Baseball / Softball",
  "Track & Field",
  "Soccer",
  "Basketball",
  "Volleyball",
  "Club Rugby",
  "Club Lacrosse",
  "Club Soccer",
  "Swimming & Diving",
  "Tennis",
  "Other / Multiple",
];

const timelines = [
  "ASAP — current season",
  "Pre-season prep (next 60 days)",
  "Planning for next academic year",
  "Exploring options — no firm timeline",
];

export function AthleticsContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.SyntheticEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);

    const fd = new FormData(e.currentTarget);
    const body = {
      name:       fd.get("name"),
      email:      fd.get("email"),
      role:       fd.get("role"),
      sport:      fd.get("sport"),
      rosterSize: fd.get("rosterSize"),
      timeline:   fd.get("timeline"),
      goals:      fd.get("goals"),
    };

    const res = await fetch("/api/audit", {
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

  return (
    <section
      id="audit-form"
      className="bg-[#1A1A1A] py-20 px-4 sm:px-6 lg:px-8 scroll-mt-24"
      aria-labelledby="audit-heading"
    >
      <div className="mx-auto max-w-2xl">
        <div className="text-center mb-10">
          <div className="inline-flex items-center justify-center h-12 w-12 rounded-xl bg-white/10 mb-5">
            <ClipboardList className="h-6 w-6 text-white" />
          </div>
          <p className="text-xs font-semibold uppercase tracking-widest text-red-200 mb-3">
            Coach & Staff Inquiry
          </p>
          <h2
            id="audit-heading"
            className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white"
          >
            Request a Team Audit
            {/* Request a Biomechanical
            <br />
            Team Audit */}
          </h2>
          <p className="mt-4 text-red-100/80 max-w-md mx-auto text-sm leading-relaxed">
            Tell us about your program and we&apos;ll respond within one business
            day with a custom proposal and availability for the Brazos Valley area.
          </p>
        </div>

        {submitted ? (
          <div className="flex flex-col items-center gap-5 py-16 text-center">
            <CheckCircle className="h-14 w-14 text-white" />
            <h3 className="text-2xl font-bold text-white">Proposal incoming.</h3>
            <p className="text-red-100/80 max-w-sm text-sm leading-relaxed">
              We&apos;ll send a custom performance recovery proposal to your inbox
              within one business day. Urgent?{" "}
              <span className="text-white font-semibold">
                athletics@neonfox.com
              </span>
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Name / Email */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="ath-name"
                  className="block text-sm font-semibold text-white mb-1.5"
                >
                  Your Name <span className="text-red-300">*</span>
                </label>
                <input
                  id="ath-name"
                  name="name"
                  type="text"
                  required
                  placeholder="Coach Williams"
                  className="w-full rounded-xl bg-white border border-white px-4 py-3 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-maroon transition"
                />
              </div>
              <div>
                <label
                  htmlFor="ath-email"
                  className="block text-sm font-semibold text-white mb-1.5"
                >
                  Work Email <span className="text-red-300">*</span>
                </label>
                <input
                  id="ath-email"
                  name="email"
                  type="email"
                  required
                  placeholder="coach@tamu.edu"
                  className="w-full rounded-xl bg-white border border-white px-4 py-3 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-maroon transition"
                />
              </div>
            </div>

            {/* Role / Sport */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="ath-role"
                  className="block text-sm font-semibold text-white mb-1.5"
                >
                  Your Role <span className="text-red-300">*</span>
                </label>
                <select
                  id="ath-role"
                  name="role"
                  required
                  className="w-full rounded-xl bg-white border border-white px-4 py-3 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-maroon transition"
                >
                  <option value="">Select your role</option>
                  {roles.map((r) => (
                    <option key={r} value={r}>{r}</option>
                  ))}
                </select>
              </div>
              <div>
                <label
                  htmlFor="ath-sport"
                  className="block text-sm font-semibold text-white mb-1.5"
                >
                  Sport / Program
                </label>
                <select
                  id="ath-sport"
                  name="sport"
                  className="w-full rounded-xl bg-white border border-white px-4 py-3 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-maroon transition"
                >
                  <option value="">Select a sport</option>
                  {sports.map((s) => (
                    <option key={s} value={s}>{s}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Team size / Timeline */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="ath-size"
                  className="block text-sm font-semibold text-white mb-1.5"
                >
                  Roster Size
                </label>
                <select
                  id="ath-size"
                  name="rosterSize"
                  className="w-full rounded-xl bg-white border border-white px-4 py-3 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-maroon transition"
                >
                  <option value="">Select a range</option>
                  {["Under 15", "15–30", "30–60", "60–100", "100+"].map((v) => (
                    <option key={v} value={v}>{v} athletes</option>
                  ))}
                </select>
              </div>
              <div>
                <label
                  htmlFor="ath-timeline"
                  className="block text-sm font-semibold text-white mb-1.5"
                >
                  Timeline
                </label>
                <select
                  id="ath-timeline"
                  name="timeline"
                  className="w-full rounded-xl bg-white border border-white px-4 py-3 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-maroon transition"
                >
                  <option value="">When do you need this?</option>
                  {timelines.map((t) => (
                    <option key={t} value={t}>{t}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Goals */}
            <div>
              <label
                htmlFor="ath-goals"
                className="block text-sm font-semibold text-white mb-1.5"
              >
                Primary Goals / Context
              </label>
              <textarea
                id="ath-goals"
                name="goals"
                rows={4}
                placeholder="Injury history, specific positions or events, training block timing, return-to-play context, or any other relevant details..."
                className="w-full rounded-xl bg-white border border-white px-4 py-3 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-maroon transition resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className={cn(
                "w-full inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm font-bold transition-all",
                loading
                  ? "bg-white/30 text-white/60 cursor-not-allowed"
                  : "bg-white text-[#800000] hover:bg-[#800000]/10 cursor-pointer shadow-sm"
              )}
            >
              {loading ? (
                <>
                  <span className="h-4 w-4 rounded-full border-2 border-white/30 border-t-white animate-spin" />
                  Submitting...
                </>
              ) : (
                <>
                  <Send className="h-4 w-4" />
                  Request a Biomechanical Team Audit
                </>
              )}
            </button>

            <p className="text-center text-xs text-white/70">
              All inquiries are confidential. Response within one business day.
              <br />
              Serving Texas A&amp;M athletics and Brazos Valley programs.
            </p>
          </form>
        )}
      </div>
    </section>
  );
}
