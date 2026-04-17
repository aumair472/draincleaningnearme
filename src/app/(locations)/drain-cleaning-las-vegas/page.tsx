import { Metadata } from "next";
import { LVClient } from "./lv-client";

export const metadata: Metadata = {
  title: "Expert Drain Cleaning in Las Vegas | Emergency Rooter Services",
  description: "Top-rated drain cleaning services in Las Vegas. Expert clogged drain repair, sewer line cleaning & hydro jetting; Residential & commercial services available. Book a free estimate!",
  keywords: [
    "drain cleaning services Las Vegas",
    "clogged drain repair Las Vegas",
    "sewer line cleaning Las Vegas",
    "emergency drain cleaning Las Vegas",
    "hydro jetting Las Vegas",
    "rooter services Las Vegas"
  ],
  alternates: {
    canonical: "https://www.draincleaningnearme.us/drain-cleaning-las-vegas",
  }
};

export default function LasVegasPage() {
  return <LVClient />;
}
