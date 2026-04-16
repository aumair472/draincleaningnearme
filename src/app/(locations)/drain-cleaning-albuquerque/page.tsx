import { Metadata } from "next";
import { ABQClient } from "./abq-client";

export const metadata: Metadata = {
  title: "Expert Drain Cleaning in Albuquerque | Emergency Rooter Services",
  description: "Top-rated drain cleaning services in Albuquerque. Expert clogged drain repair, sewer line cleaning & hydro jetting; Residential & commercial services available. Book a free estimate!",
  keywords: [
    "drain cleaning services Albuquerque",
    "clogged drain repair Albuquerque",
    "sewer line cleaning Albuquerque",
    "emergency drain cleaning Albuquerque",
    "hydro jetting Albuquerque",
    "rooter services Albuquerque"
  ],
  alternates: {
    canonical: "https://www.draincleaningnearme.us/drain-cleaning-albuquerque",
  }
};

export default function AlbuquerquePage() {
  return <ABQClient />;
}
