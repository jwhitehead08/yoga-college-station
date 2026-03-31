"use client";

import { useState } from "react";
import { Send, CheckCircle } from "lucide-react";
import { cn } from "@/lib/utils";

export function CorporateContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.SyntheticEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);

    const fd = new FormData(e.currentTarget);
    const body = {
      name:     fd.get("name"),
      email:    fd.get("email"),
      company:  fd.get("company"),
      teamSize: fd.get("teamSize"),
      format:   fd.get("format"),
      message:  fd.get("message"),
    };

    const res = await fetch("/api/corporate", {
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
      id="corporate-contact"
      className="bg-slate-900 py-20 px-4 sm:px-6 lg:px-8 scroll-mt-16"
      aria-labelledby="corp-contact-heading"
    >
      <div className="mx-auto max-w-2xl">
        <div className="text-center mb-10">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#800000] mb-3">
            Get Started
          </p>
          <h2
            id="corp-contact-heading"
            className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white"
          >
            Request a Pilot Session
          </h2>
          <p className="mt-4 text-slate-400 max-w-md mx-auto">
            Tell us about your team. We&apos;ll follow up within one business day with
            availability and a custom proposal for your College Station or Bryan location.
          </p>
        </div>

        {submitted ? (
          <div className="flex flex-col items-center gap-4 py-16 text-center">
            <CheckCircle className="h-12 w-12 text-[#800000]" />
            <h3 className="text-xl font-bold text-white">Proposal incoming.</h3>
            <p className="text-slate-400 max-w-sm">
              We&apos;ll send a custom proposal to your inbox within one business day.
              Questions?{" "}
              <span className="text-[#800000] font-medium">
                corporate@neonfox.com
              </span>
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="corp-name" className="block text-sm font-semibold text-slate-300 mb-1.5">
                  Your Name <span className="text-red-400">*</span>
                </label>
                <input
                  id="corp-name"
                  name="name"
                  type="text"
                  required
                  placeholder="Jordan Smith"
                  className="w-full rounded-xl bg-slate-800 border border-slate-600 px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-[#800000] focus:border-transparent transition"
                />
              </div>
              <div>
                <label htmlFor="corp-email" className="block text-sm font-semibold text-slate-300 mb-1.5">
                  Work Email <span className="text-red-400">*</span>
                </label>
                <input
                  id="corp-email"
                  name="email"
                  type="email"
                  required
                  placeholder="jordan@company.com"
                  className="w-full rounded-xl bg-slate-800 border border-slate-600 px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-[#800000] focus:border-transparent transition"
                />
              </div>
            </div>

            <div>
              <label htmlFor="corp-company" className="block text-sm font-semibold text-slate-300 mb-1.5">
                Company / Organization <span className="text-red-400">*</span>
              </label>
              <input
                id="corp-company"
                name="company"
                type="text"
                required
                placeholder="Acme Corp · Texas A&M — Dept. of Engineering"
                className="w-full rounded-xl bg-slate-800 border border-slate-600 px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-[#800000] focus:border-transparent transition"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="corp-size" className="block text-sm font-semibold text-slate-300 mb-1.5">
                  Team Size
                </label>
                <select
                  id="corp-size"
                  name="teamSize"
                  className="w-full rounded-xl bg-slate-800 border border-slate-600 px-4 py-3 text-sm text-white focus:outline-none focus:ring-2 focus:ring-[#800000] focus:border-transparent transition"
                >
                  <option value="">Select a range</option>
                  <option>5–15 people</option>
                  <option>15–50 people</option>
                  <option>50–150 people</option>
                  <option>150+ people</option>
                </select>
              </div>
              <div>
                <label htmlFor="corp-format" className="block text-sm font-semibold text-slate-300 mb-1.5">
                  Preferred Format
                </label>
                <select
                  id="corp-format"
                  name="format"
                  className="w-full rounded-xl bg-slate-800 border border-slate-600 px-4 py-3 text-sm text-white focus:outline-none focus:ring-2 focus:ring-[#800000] focus:border-transparent transition"
                >
                  <option value="">Not sure yet</option>
                  <option>Lunch &amp; Move (30 min)</option>
                  <option>Morning Flow (45–60 min)</option>
                  <option>Quarterly Workshop (90 min)</option>
                  <option>Ongoing Weekly Program</option>
                </select>
              </div>
            </div>

            <div>
              <label htmlFor="corp-message" className="block text-sm font-semibold text-slate-300 mb-1.5">
                Anything else?
              </label>
              <textarea
                id="corp-message"
                name="message"
                rows={4}
                placeholder="Office location in Bryan/College Station, goals, timeline, or questions..."
                className="w-full rounded-xl bg-slate-800 border border-slate-600 px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-[#800000] focus:border-transparent transition resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className={cn(
                "w-full inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm font-bold transition-all",
                loading
                  ? "bg-slate-700 text-slate-500 cursor-not-allowed"
                  : "bg-[#800000] hover:bg-[#6b0000] text-white cursor-pointer"
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
                  Request a Pilot Session
                </>
              )}
            </button>

            <p className="text-center text-xs text-slate-500">
              We&apos;ll reply with a custom proposal within one business day.
              No commitment required.
            </p>
          </form>
        )}
      </div>
    </section>
  );
}
