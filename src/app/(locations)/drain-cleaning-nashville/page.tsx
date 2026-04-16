import { Metadata } from "next";
import { NashvilleClient } from "./nashville-client";

export const metadata: Metadata = {
  title: "Expert Drain Cleaning in Nashville | Emergency Rooter Services",
  description: "Top-rated drain cleaning services in Nashville. Expert clogged drain repair, sewer line cleaning & hydro jetting; Residential & commercial services available. Book a free estimate!",
  keywords: [
    "drain cleaning services Nashville",
    "clogged drain repair Nashville",
    "sewer line cleaning Nashville",
    "emergency drain cleaning Nashville",
    "hydro jetting Nashville",
    "rooter services Nashville"
  ],
  alternates: {
    canonical: "https://www.draincleaningnearme.us/drain-cleaning-nashville",
  }
};

export default function NashvillePage() {
  return <NashvilleClient />;
}
