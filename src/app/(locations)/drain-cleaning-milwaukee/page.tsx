import { Metadata } from "next";
import { MILClient } from "./mil-client";

export const metadata: Metadata = {
  title: "Expert Drain Cleaning in Milwaukee | Emergency Rooter Services",
  description: "Top-rated drain cleaning services in Milwaukee. Expert clogged drain repair, sewer line cleaning & hydro jetting; Residential & commercial services available. Book a free estimate!",
  keywords: [
    "drain cleaning services Milwaukee",
    "clogged drain repair Milwaukee",
    "sewer line cleaning Milwaukee",
    "emergency drain cleaning Milwaukee",
    "hydro jetting Milwaukee",
    "rooter services Milwaukee"
  ],
  alternates: {
    canonical: "https://www.draincleaningnearme.us/drain-cleaning-milwaukee",
  }
};

export default function MilwaukeePage() {
  return <MILClient />;
}
