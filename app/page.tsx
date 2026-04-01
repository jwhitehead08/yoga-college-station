import type { Metadata } from "next";
import { Hero } from "@/components/Hero";
import { ServiceCards } from "@/components/ServiceCards";
import { TrustSignals } from "@/components/TrustSignals";
import { Pricing } from "@/components/Pricing";
import { ContactForm } from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Neon Fox | Yoga • Pilates • High-Performance Recovery — College Station, TX",
  description:
    "Neon Fox is a mobile high-performance recovery concierge serving College Station, Bryan, and the Brazos Valley. Elite yoga, Pilates, and biomechanical recovery — delivered to your door.",
  openGraph: {
    title: "Neon Fox | Yoga · Pilates · High-Performance Recovery — College Station",
    description:
      "Mobile high-performance recovery concierge for the Brazos Valley. Private sessions and pop-up events — no studio required.",
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
