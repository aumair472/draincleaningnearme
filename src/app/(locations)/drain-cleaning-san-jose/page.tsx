import { Metadata } from "next";
import { SJClient } from "./sj-client";

export const metadata: Metadata = {
  title: "San Jose Drain Cleaning | 24/7 Expert Clogged Drain Repair",
  description: "Top-rated drain cleaning services in San Jose. Expert in sewer line cleaning, hydro jetting & rooter services for Silicon Valley residents. Fast, Affordable & 24/7. Book now!",
  keywords: [
    "drain cleaning services San Jose",
    "clogged drain repair San Jose",
    "sewer line cleaning San Jose",
    "emergency drain cleaning San Jose",
    "hydro jetting San Jose",
    "rooter services San Jose"
  ],
  alternates: {
    canonical: "https://www.draincleaningnearme.us/drain-cleaning-san-jose",
  }
};

export default function SanJosePage() {
  return <SJClient />;
}
