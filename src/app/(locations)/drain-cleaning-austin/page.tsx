import { Metadata } from "next";
import { ATXClient } from "./atx-client";

export const metadata: Metadata = {
  title: "Emergency Drain Cleaning in Austin | Fast Sewer Unclogging Service",
  description: "Expert drain cleaning services Austin, TX. We fix hard water buildup, tree roots & sewer line cleaning. Reliable residential & commercial rooter services experts. Book today!",
  keywords: [
    "drain cleaning services Austin",
    "clogged drain repair Austin",
    "sewer line cleaning Austin",
    "emergency drain cleaning Austin",
    "hydro jetting Austin",
    "rooter services Austin"
  ],
  alternates: {
    canonical: "https://www.draincleaningnearme.us/drain-cleaning-austin",
  }
};

export default function AustinPage() {
  return <ATXClient />;
}
