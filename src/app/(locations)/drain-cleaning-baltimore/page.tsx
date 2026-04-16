import { Metadata } from "next";
import { BaltimoreClient } from "./baltimore-client";

export const metadata: Metadata = {
  title: "Expert Drain Cleaning in Baltimore | Emergency Rooter Services",
  description: "Top-rated drain cleaning services in Baltimore. Expert clogged drain repair, sewer line cleaning & hydro jetting; Residential & commercial services available. Book a free estimate!",
  keywords: [
    "drain cleaning services Baltimore",
    "clogged drain repair Baltimore",
    "sewer line cleaning Baltimore",
    "emergency drain cleaning Baltimore",
    "hydro jetting Baltimore",
    "rooter services Baltimore"
  ],
  alternates: {
    canonical: "https://www.draincleaningnearme.us/drain-cleaning-baltimore",
  }
};

export default function BaltimorePage() {
  return <BaltimoreClient />;
}
