import { Metadata } from "next";
import { DallasClient } from "./dal-client";

export const metadata: Metadata = {
  title: "Emergency Drain Cleaning in Dallas, TX | Licensed, Insured & Local",
  description: "Clogged drain in Dallas? Get fast, reliable drain cleaning & Rooter services from kitchen grease buildup to emergency sewer main line cleaning, we are 24/7 available. Call Now!",
  keywords: [
    "drain cleaning services Dallas",
    "clogged drain repair Dallas",
    "sewer line cleaning Dallas",
    "emergency drain cleaning Dallas",
    "hydro jetting Dallas",
    "rooter services Dallas"
  ],
  alternates: {
    canonical: "https://www.draincleaningnearme.us/drain-cleaning-dallas",
  }
};

export default function DallasPage() {
  return <DallasClient />;
}
