import { Metadata } from "next";
import { DenverClient } from "./denver-client";

export const metadata: Metadata = {
  title: "Expert Drain Cleaning in Denver | Emergency Rooter Services",
  description: "Top-rated drain cleaning services in Denver. Expert clogged drain repair, sewer line cleaning & hydro jetting; Residential & commercial services available. Book a free estimate!",
  keywords: [
    "drain cleaning services Denver",
    "clogged drain repair Denver",
    "sewer line cleaning Denver",
    "emergency drain cleaning Denver",
    "hydro jetting Denver",
    "rooter services Denver"
  ],
  alternates: {
    canonical: "https://www.draincleaningnearme.us/drain-cleaning-denver",
  }
};

export default function DenverPage() {
  return <DenverClient />;
}
