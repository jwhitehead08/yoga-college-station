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
  metadataBase: new URL("https://www.neonfoxmethod.com"),
  title: {
    default: "Neon Fox | Private Yoga, Pilates & Mobility Coaching — College Station, TX",
    template: "%s | Neon Fox",
  },
  description:
    "Neon Fox is a mobile private yoga, Mat Pilates & mobility coaching concierge serving College Station, Bryan, and the Brazos Valley, TX. In-home sessions delivered to your door.",
  keywords: [
    "Mobility College Station",
    "Yoga College Station",
    "Mat Pilates College Station",
    "Private Yoga College Station",
    "In-home yoga Bryan TX",
    "Athletic Recovery College Station",
    "Athletic recovery Brazos Valley",
    "Mobility Coaching College Station TX",
    "high-performance recovery Brazos Valley",
    "private yoga instructor College Station TX",
    "mobile yoga Pilates College Station TX",
  ],
  openGraph: {
    siteName: "Neon Fox",
    type: "website",
    locale: "en_US",
    url: "https://www.neonfoxmethod.com",
    images: [
      {
        url: "/j-reverse-warrior.jpg",
        width: 1200,
        height: 630,
        alt: "Neon Fox — Mobile Yoga & Mobility Coaching in College Station, TX",
      },
    ],
  },
  robots: { index: true, follow: true },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://www.neonfoxmethod.com/#business",
  name: "Neon Fox",
  alternateName: "Neon Fox Method",
  description:
    "Mobile high-performance recovery concierge — private yoga, Mat Pilates, and mobility coaching in College Station, Bryan, and the Brazos Valley, TX. No studio. Sessions delivered to your home or office.",
  url: "https://www.neonfoxmethod.com",
  email: "neonfoxmethod@gmail.com",
  priceRange: "$$",
  areaServed: [
    { "@type": "City", name: "College Station", addressRegion: "TX", addressCountry: "US" },
    { "@type": "City", name: "Bryan", addressRegion: "TX", addressCountry: "US" },
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Neon Fox Services",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Private Yoga — College Station & Bryan, TX" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "In-Home Yoga — Bryan, TX" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Mat Pilates — College Station, TX" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Mobility Coaching — College Station, TX" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Athletic Recovery — College Station & Brazos Valley" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Corporate Wellness Programs — Bryan & College Station, TX" } },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} h-full`}>
      <body className="min-h-full flex flex-col antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        <Nav />
        <main className="flex flex-col flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
