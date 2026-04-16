import { Metadata } from "next";
import { SeattleClient } from "./seattle-client";

export const metadata: Metadata = {
  title: "Expert Drain Cleaning in Seattle | Emergency Rooter Services",
  description: "Top-rated drain cleaning services in Seattle. Expert clogged drain repair, sewer line cleaning & hydro jetting; Residential & commercial services available. Book a free estimate!",
  keywords: [
    "drain cleaning services Seattle",
    "clogged drain repair Seattle",
    "sewer line cleaning Seattle",
    "emergency drain cleaning Seattle",
    "hydro jetting Seattle",
    "rooter services Seattle"
  ],
  alternates: {
    canonical: "https://www.draincleaningnearme.us/drain-cleaning-seattle",
  }
};

export default function SeattlePage() {
  return <SeattleClient />;
}
