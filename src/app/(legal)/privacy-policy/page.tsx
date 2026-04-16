import { Metadata } from "next";
import { PrivacyClient } from "./privacy-client";

export const metadata: Metadata = {
  title: "Privacy Policy | DrainCleaningNearMe Data Protection & Security",
  description: "Read DrainCleaningNearMe Privacy Policy to learn about our user data protection. We ensure CCPA-compliant handling of your info for trusted drain & sewer cleaning services.",
  keywords: [
    "Privacy Policy",
    "DrainCleaningNearMe Privacy Policy",
    "Data Collection",
    "Website Data Usage",
    "Information Sharing Policy",
    "User data protection",
  ],
  alternates: {
    canonical: "https://www.draincleaningnearme.us/privacy-policy",
  },
};

export default function PrivacyPolicyPage() {
  return <PrivacyClient />;
}
