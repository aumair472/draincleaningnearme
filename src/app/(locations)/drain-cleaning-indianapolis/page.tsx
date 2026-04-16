import { Metadata } from "next";
import { IndyClient } from "./indy-client";

export const metadata: Metadata = {
  title: "Expert Drain Cleaning in Indianapolis | Emergency Rooter Services",
  description: "Top-rated drain cleaning services in Indianapolis. Expert clogged drain repair, sewer line cleaning & hydro jetting; Residential & commercial services available. Book a free estimate!",
  keywords: [
    "drain cleaning services Indianapolis",
    "clogged drain repair Indianapolis",
    "sewer line cleaning Indianapolis",
    "emergency drain cleaning Indianapolis",
    "hydro jetting Indianapolis",
    "rooter services Indianapolis"
  ],
  alternates: {
    canonical: "https://www.draincleaningnearme.us/drain-cleaning-indianapolis",
  }
};

export default function IndianapolisPage() {
  return <IndyClient />;
}
