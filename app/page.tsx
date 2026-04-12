import type { Metadata } from "next";
import { Hero } from "@/components/Hero";
import { ServiceCards } from "@/components/ServiceCards";
import { TrustSignals } from "@/components/TrustSignals";
import { Pricing } from "@/components/Pricing";
import { ContactForm } from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Private Yoga & Mobility Coaching | Neon Fox — College Station, TX",
  description:
    "Mobile private yoga, Mat Pilates & mobility coaching in College Station & Bryan, TX. In-home sessions for athletic recovery & personal wellness. Book today.",
  openGraph: {
    title: "Private Yoga & Mobility Coaching — College Station, TX | Neon Fox",
    description:
      "Mobile private yoga, Mat Pilates & mobility coaching in College Station & Bryan, TX. No studio. Sessions delivered to your home or office in the Brazos Valley.",
    url: "https://www.neonfoxmethod.com",
    images: [
      {
        url: "/j-reverse-warrior.jpg",
        width: 1200,
        height: 630,
        alt: "Neon Fox — Private Yoga & Mobility Coaching in College Station, TX",
      },
    ],
  },
};

export default function Home() {
  return (
    <>
      <Hero />
      <ServiceCards />
      <TrustSignals />
      <Pricing />
      <ContactForm />
    </>
  );
}
