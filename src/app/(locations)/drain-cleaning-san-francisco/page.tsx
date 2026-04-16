import { Metadata } from "next";
import { SFClient } from "./sf-client";

export const metadata: Metadata = {
  title: "Expert Drain Cleaning in San Francisco | Emergency Rooter Services",
  description: "Top-rated drain cleaning services in San Francisco. Expert clogged drain repair, sewer line cleaning & hydro jetting; Residential & commercial services available. Book a free estimate!",
  keywords: [
    "drain cleaning services San Francisco",
    "clogged drain repair San Francisco",
    "sewer line cleaning San Francisco",
    "emergency drain cleaning San Francisco",
    "hydro jetting San Francisco",
    "rooter services San Francisco"
  ],
  alternates: {
    canonical: "https://www.draincleaningnearme.us/drain-cleaning-san-francisco",
  }
};

export default function SanFranciscoPage() {
  return <SFClient />;
}
