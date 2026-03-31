"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { ArrowRight, Menu, X } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";
import logo from "@/app/assets/neon-full-body-transparent-logo.png";

const navLinks = [
  { label: "Private Sessions", href: "/#individual" },
  // { label: "Pop-Up Events", href: "/#events" },
  { label: "Corporate", href: "/corporate" },
  { label: "Athletics", href: "/athletics" },
  { label: "Blog", href: "/blog" },
  { label: "About", href: "/about" },
];

export function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#1A1A1A]/95 backdrop-blur-sm">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex h-24 items-center justify-between">
        {/* Brand */}
        <Link href="/" className="flex items-center gap-0 shrink-0">
          <Image src={logo} alt="Neon Fox" width={102} height={102} className="h-[72px] w-[72px] object-contain" />
          <span className="text-3xl font-black tracking-widest uppercase text-white leading-none">
            Neon Fox
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6" aria-label="Main navigation">
          {navLinks.map((link) => {
            const active =
              link.href !== "/"
                ? pathname.startsWith(link.href.replace("/#", "/"))
                : pathname === "/";
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "text-sm font-medium transition-colors",
                  active ? "text-white" : "text-slate-400 hover:text-white"
                )}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-3">
          <Link
            href="/#contact"
            className="inline-flex items-center gap-1.5 rounded-full bg-[#800000] px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-[#6b0000]"
          >
            Book a Session
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>

        {/* Mobile menu toggle */}
        <button
          className="md:hidden p-2 text-slate-400 hover:text-white"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div className="md:hidden border-t border-white/10 bg-[#1A1A1A] px-4 pb-5 pt-3">
          <nav className="flex flex-col gap-1" aria-label="Mobile navigation">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2.5 text-sm font-medium text-slate-300 hover:bg-white/10 hover:text-white transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="mt-4 pt-4 border-t border-white/10">
            <Link
              href="/#contact"
              onClick={() => setOpen(false)}
              className="flex items-center justify-center gap-1.5 rounded-full bg-[#800000] px-4 py-3 text-sm font-semibold text-white"
            >
              Book a Session
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
