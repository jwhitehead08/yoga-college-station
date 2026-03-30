import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Neon Fox | Yoga • Pilates • High-Performance Recovery — Brazos Valley",
    template: "%s | Neon Fox",
  },
  description:
    "Neon Fox is a mobile high-performance recovery concierge serving College Station, Bryan, and the Brazos Valley. Elite yoga, Pilates, and biomechanical recovery — delivered to your door.",
  keywords: [
    "Performance Recovery College Station",
    "High-end Yoga Bryan TX",
    "Mobile Pilates Brazos Valley",
    "high-performance recovery Brazos Valley",
    "private yoga instructor College Station",
    "mobile yoga Pilates College Station TX",
    "Neon Fox yoga College Station",
  ],
  openGraph: {
    siteName: "Neon Fox",
    type: "website",
    locale: "en_US",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} h-full`}>
      <body className="min-h-full flex flex-col antialiased">
        <Nav />
        <main className="flex flex-col flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
