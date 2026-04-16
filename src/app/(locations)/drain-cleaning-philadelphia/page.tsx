import { Metadata } from "next";
import { PhiladelphiaClient } from "./philadelphia-client";

export const metadata: Metadata = {
  title: "24/7 Drain Cleaning Philadelphia | Expert Clog Removal & Repair",
  description: "Expert drain cleaning services in Philadelphia. Clogged drain or sewer backup? Get 24/7 emergency sewer cleaning service & same-day repairs near you. Fast & affordable. Call now!",
  keywords: [
    "drain cleaning services Philadelphia",
    "clogged drain repair Philadelphia",
    "sewer cleaning Philadelphia PA",
    "emergency drain cleaning Philadelphia",
    "hydro jetting Philadelphia"
  ],
  alternates: {
    canonical: "https://www.draincleaningnearme.us/drain-cleaning-philadelphia",
  }
};

export default function PhiladelphiaPage() {
  return <PhiladelphiaClient />;
}
