import { Metadata } from "next";
import { MemphisClient } from "./memphis-client";

export const metadata: Metadata = {
  title: "Expert Drain Cleaning in Memphis | Emergency Rooter Services",
  description: "Top-rated drain cleaning services in Memphis. Expert clogged drain repair, sewer line cleaning & hydro jetting; Residential & commercial services available. Book a free estimate!",
  keywords: [
    "drain cleaning services Memphis",
    "clogged drain repair Memphis",
    "sewer line cleaning Memphis",
    "emergency drain cleaning Memphis",
    "hydro jetting Memphis",
    "rooter services Memphis"
  ],
  alternates: {
    canonical: "https://www.draincleaningnearme.us/drain-cleaning-memphis",
  }
};

export default function MemphisPage() {
  return <MemphisClient />;
}
