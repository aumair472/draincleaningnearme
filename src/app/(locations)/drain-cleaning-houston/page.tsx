import { Metadata } from "next";
import { HoustonClient } from "./houston-client";

export const metadata: Metadata = {
  title: "Drain Cleaning Services Houston TX | 24/7 Emergency Plumbers",
  description: "Emergency drain cleaning services in Houston; available 24/7! Fast & affordable clogged drain repair & sewer cleaning. Reliable, expert plumbers ready now. Call for help!",
  keywords: [
    "drain cleaning services houston",
    "clogged drain repair Houston",
    "emergency drain cleaning Houston",
    "sewer line cleaning Houston",
    "hydro jetting Houston TX"
  ],
  alternates: {
    canonical: "https://www.draincleaningnearme.us/drain-cleaning-houston",
  }
};

export default function HoustonPage() {
  return <HoustonClient />;
}
