import { Metadata } from "next";
import { BOSClient } from "./bos-client";

export const metadata: Metadata = {
  title: "Expert Drain Cleaning in Boston | Emergency Rooter Services",
  description: "Top-rated drain cleaning services in Boston. Expert clogged drain repair, sewer line cleaning & hydro jetting; Residential & commercial services available. Book a free estimate!",
  keywords: [
    "drain cleaning services Boston",
    "clogged drain repair Boston",
    "sewer line cleaning Boston",
    "emergency drain cleaning Boston",
    "hydro jetting Boston",
    "rooter services Boston"
  ],
  alternates: {
    canonical: "https://www.draincleaningnearme.us/drain-cleaning-boston",
  }
};

export default function BostonPage() {
  return <BOSClient />;
}
