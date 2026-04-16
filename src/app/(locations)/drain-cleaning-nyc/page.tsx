import { Metadata } from "next";
import { NYCClient } from "./nyc-client";

export const metadata: Metadata = {
  title: "Emergency Drain Cleaning NYC | Licensed & Insured Plumbers New York",
  description: "Expert drain cleaning New York services. Our NYC drain cleaning pros handle sewer cleaning & clogged drain repair; Manhattan to Bronx. Reliable, licensed & 5-star rated. Book today.",
  keywords: [
    "drain cleaning New York",
    "NYC drain cleaning",
    "emergency drain cleaning NYC",
    "sewer cleaning New York",
    "clogged drain repair NYC"
  ],
  alternates: {
    canonical: "https://www.draincleaningnearme.us/drain-cleaning-nyc",
  }
};

export default function NYCPage() {
  return <NYCClient />;
}
