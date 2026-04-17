import { Metadata } from "next";
import { DCClient } from "./dc-client";

export const metadata: Metadata = {
  title: "Expert Drain Cleaning in Washington DC | Emergency Rooter Services",
  description: "Top-rated drain cleaning services in Washington DC. Expert clogged drain repair, sewer line cleaning & hydro jetting; Residential & commercial services available. Book a free estimate!",
  keywords: [
    "drain cleaning services Washington DC",
    "clogged drain repair Washington DC",
    "sewer line cleaning Washington DC",
    "emergency drain cleaning Washington DC",
    "hydro jetting Washington DC",
    "rooter services Washington DC"
  ],
  alternates: {
    canonical: "https://www.draincleaningnearme.us/drain-cleaning-washington-dc",
  }
};

export default function WashingtonDCPage() {
  return <DCClient />;
}
