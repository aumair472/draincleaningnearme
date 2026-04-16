import { Metadata } from "next";
import { FTWClient } from "./ftw-client";

export const metadata: Metadata = {
  title: "Expert Drain Cleaning in Fort Worth | Emergency Rooter Services",
  description: "Top-rated drain cleaning services in Fort Worth. Expert clogged drain repair, sewer line cleaning & hydro jetting; Residential & commercial services available. Book a free estimate!",
  keywords: [
    "drain cleaning services Fort Worth",
    "clogged drain repair Fort Worth",
    "sewer line cleaning Fort Worth",
    "emergency drain cleaning Fort Worth",
    "hydro jetting Fort Worth",
    "rooter services Fort Worth"
  ],
  alternates: {
    canonical: "https://www.draincleaningnearme.us/drain-cleaning-fort-worth",
  }
};

export default function FortWorthPage() {
  return <FTWClient />;
}
