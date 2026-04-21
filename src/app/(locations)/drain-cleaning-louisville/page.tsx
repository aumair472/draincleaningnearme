import { Metadata } from "next";
import { LOUClient } from "./lou-client";

export const metadata: Metadata = {
  title: "Expert Drain Cleaning in Louisville | Emergency Rooter Services",
  description: "Top-rated drain cleaning services in Louisville. Expert clogged drain repair, sewer line cleaning & hydro jetting; Residential & commercial services available. Book a free estimate!",
  keywords: [
    "drain cleaning services Louisville",
    "clogged drain repair Louisville",
    "sewer line cleaning Louisville",
    "emergency drain cleaning Louisville",
    "hydro jetting Louisville",
    "rooter services Louisville"
  ],
  alternates: {
    canonical: "https://www.draincleaningnearme.us/drain-cleaning-louisville",
  }
};

export default function LouisvillePage() {
  return <LOUClient />;
}
