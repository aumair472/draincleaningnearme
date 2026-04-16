import { Metadata } from "next";
import { TermsClient } from "./terms-client";

export const metadata: Metadata = {
  title: "Terms of Service | DrainCleaningNearMe Website Terms & Conditions",
  description: "Read DrainCleaningNearMe Terms of Service for drain & sewer cleaning services. Our website usage terms explain our lead generation model, limitation of liability & United States governing laws.",
  keywords: [
    "Terms of Service",
    "DrainCleaningNearMe Terms",
    "Website Terms and Conditions",
    "Terms of Service Agreement",
    "Website Usage Terms",
    "Lead Generation Terms",
  ],
  alternates: {
    canonical: "https://www.draincleaningnearme.us/terms",
  },
};

export default function TermsOfServicePage() {
  return <TermsClient />;
}
