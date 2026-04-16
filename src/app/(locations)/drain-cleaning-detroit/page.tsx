import { Metadata } from "next";
import { DetroitClient } from "./detroit-client";

export const metadata: Metadata = {
  title: "Expert Drain Cleaning in Detroit | Emergency Rooter Services",
  description: "Top-rated drain cleaning services in Detroit. Expert clogged drain repair, sewer line cleaning & hydro jetting; Residential & commercial services available. Book a free estimate!",
  keywords: [
    "drain cleaning services Detroit",
    "clogged drain repair Detroit",
    "sewer line cleaning Detroit",
    "emergency drain cleaning Detroit",
    "hydro jetting Detroit",
    "rooter services Detroit"
  ],
  alternates: {
    canonical: "https://www.draincleaningnearme.us/drain-cleaning-detroit",
  }
};

export default function DetroitPage() {
  return <DetroitClient />;
}
