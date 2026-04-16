import { Metadata } from "next";
import { ChicagoClient } from "./chicago-client";

export const metadata: Metadata = {
  title: "Emergency Drain Cleaning Chicago | Licensed & Insured Plumbers",
  description: "Expert drain cleaning services in Chicago. DrainCleaningNearMe offers professional sewer cleaning, clogged drain repair & hydro jetting. Affordable, trusted & 24/7. Book today.",
  keywords: [
    "drain cleaning services chicago",
    "clogged drain Chicago",
    "emergency drain cleaning Chicago",
    "sewer drain cleaning Chicago",
    "hydro jetting Chicago"
  ],
  alternates: {
    canonical: "https://www.draincleaningnearme.us/drain-cleaning-chicago",
  }
};

export default function ChicagoPage() {
  return <ChicagoClient />;
}
