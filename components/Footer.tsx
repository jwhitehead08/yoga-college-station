import Link from "next/link";
import { MapPin, Mail } from "lucide-react";

const footerLinks = {
  Services: [
    { label: "Private Sessions", href: "/#individual" },
    { label: "Pop-Up Events", href: "/#events" },
    { label: "Pricing", href: "/#pricing" },
  ],
  Programs: [
    { label: "Corporate Wellness", href: "/corporate" },
    { label: "Athletics & Recovery", href: "/athletics" },
  ],
  Learn: [
    { label: "Blog", href: "/blog" },
    { label: "About", href: "/about" },
    { label: "FAQ", href: "/#contact" },
  ],
  Connect: [
    { label: "Book a Session", href: "/#contact" },
    { label: "neonfoxmethod@gmail.com", href: "mailto:neonfoxmethod@gmail.com" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-[#1A1A1A] text-slate-400">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          {/* Brand col */}
          <div className="lg:col-span-1">
            <p className="font-bold text-white text-lg mb-1">Neon Fox</p>
            <p className="text-xs text-[#800000] font-medium tracking-wide mb-4">
              Yoga • Pilates • High-Performance Recovery
            </p>
            <div className="flex items-center gap-1.5 text-sm mb-1">
              <MapPin className="h-3.5 w-3.5 shrink-0 text-[#800000]" />
              College Station &amp; Bryan, TX
            </div>
            <div className="flex items-center gap-1.5 text-sm">
              <Mail className="h-3.5 w-3.5 shrink-0 text-[#800000]" />
              <a
                href="neonfoxmethod@gmail.com"
                className="hover:text-white transition-colors"
              >
                neonfoxmethod@gmail.com
              </a>
            </div>
            <p className="mt-4 text-xs text-slate-600 leading-relaxed">
              Mobile high-performance recovery serving the Brazos Valley — College Station, Bryan, and surrounding communities.
            </p>
          </div>

          {/* Link cols */}
          {Object.entries(footerLinks).map(([group, links]) => (
            <div key={group}>
              <p className="text-xs font-semibold uppercase tracking-widest text-slate-500 mb-4">
                {group}
              </p>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-600">
          <p>© {new Date().getFullYear()} Neon Fox. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <span>College Station, TX 77840</span>
            <Link
              href="/corporate"
              className="hover:text-slate-400 transition-colors"
              aria-label="Corporate programs"
            >
              For Business
            </Link>
            <Link
              href="/athletics"
              className="hover:text-slate-400 transition-colors"
              aria-label="Athletic performance programs"
            >
              For Athletics
            </Link>
            <Link
              href="/blog"
              className="hover:text-slate-400 transition-colors"
              aria-label="Blog"
            >
              Blog
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
