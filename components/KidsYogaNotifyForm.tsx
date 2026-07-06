"use client";

import { useState } from "react";
import { CheckCircle } from "lucide-react";

export function KidsYogaNotifyForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.SyntheticEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    const fd = new FormData(e.currentTarget);
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        segment: "kids-popup",
        name: fd.get("name"),
        email: fd.get("email"),
        message: `Child's age: ${fd.get("age") || "not provided"}`,
      }),
    });
    setLoading(false);
    if (res.ok) {
      setSubmitted(true);
    } else {
      alert("Something went wrong — please try again or email neonfoxmethod@gmail.com directly.");
    }
  }

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center gap-4 py-12 text-center">
        <CheckCircle className="h-12 w-12 text-[#2F4F4F]" />
        <h3 className="text-xl font-bold text-white">You&apos;re on the list.</h3>
        <p className="text-slate-400 max-w-sm text-sm">
          We&apos;ll reach out as soon as the next pop-up is scheduled. Keep an eye on your inbox.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 text-left">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="kids-name" className="block text-sm font-semibold text-slate-300 mb-1.5">
            Your Name <span className="text-red-400">*</span>
          </label>
          <input
            id="kids-name"
            name="name"
            type="text"
            required
            placeholder="Alex Johnson"
            className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-[#2F4F4F] focus:border-transparent transition"
          />
        </div>
        <div>
          <label htmlFor="kids-email" className="block text-sm font-semibold text-slate-300 mb-1.5">
            Email <span className="text-red-400">*</span>
          </label>
          <input
            id="kids-email"
            name="email"
            type="email"
            required
            placeholder="alex@email.com"
            className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-[#2F4F4F] focus:border-transparent transition"
          />
        </div>
      </div>

      <div>
        <label htmlFor="kids-age" className="block text-sm font-semibold text-slate-300 mb-1.5">
          Child&apos;s Age <span className="text-slate-500 font-normal">(optional)</span>
        </label>
        <input
          id="kids-age"
          name="age"
          type="text"
          placeholder="e.g. 5"
          className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-[#2F4F4F] focus:border-transparent transition"
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className="w-full rounded-xl bg-[#2F4F4F] hover:bg-[#263f3f] disabled:opacity-60 px-6 py-3.5 text-sm font-bold text-white transition-all"
      >
        {loading ? "Sending…" : "Keep Me Posted"}
      </button>
    </form>
  );
}
