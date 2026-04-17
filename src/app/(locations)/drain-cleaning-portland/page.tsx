import { Metadata } from "next";
import { PDXClient } from "./pdx-client";

export const metadata: Metadata = {
  title: "Expert Drain Cleaning in Portland | Emergency Rooter Services",
  description: "Top-rated drain cleaning services in Portland. Expert clogged drain repair, sewer line cleaning & hydro jetting; Residential & commercial services available. Book a free estimate!",
  keywords: [
    "drain cleaning services Portland",
    "clogged drain repair Portland",
    "sewer line cleaning Portland",
    "emergency drain cleaning Portland",
    "hydro jetting Portland",
    "rooter services Portland"
  ],
  alternates: {
    canonical: "https://www.draincleaningnearme.us/drain-cleaning-portland",
  }
};

export default function PortlandPage() {
  return <PDXClient />;
}
