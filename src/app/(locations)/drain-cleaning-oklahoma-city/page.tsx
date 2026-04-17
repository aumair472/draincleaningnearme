import { Metadata } from "next";
import { OKCClient } from "./okc-client";

export const metadata: Metadata = {
  title: "Expert Drain Cleaning in Oklahoma City | Emergency Rooter Services",
  description: "Top-rated drain cleaning services in Oklahoma City. Expert clogged drain repair, sewer line cleaning & hydro jetting; Residential & commercial services available. Book a free estimate!",
  keywords: [
    "drain cleaning services Oklahoma City",
    "clogged drain repair Oklahoma City",
    "sewer line cleaning Oklahoma City",
    "emergency drain cleaning Oklahoma City",
    "hydro jetting Oklahoma City",
    "rooter services Oklahoma City"
  ],
  alternates: {
    canonical: "https://www.draincleaningnearme.us/drain-cleaning-oklahoma-city",
  }
};

export default function OklahomaCityPage() {
  return <OKCClient />;
}
