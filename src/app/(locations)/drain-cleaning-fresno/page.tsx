import { Metadata } from "next";
import { FREClient } from "./fre-client";

export const metadata: Metadata = {
  title: "Expert Drain Cleaning in Fresno | Emergency Rooter Services",
  description: "Top-rated drain cleaning services in Fresno. Expert clogged drain repair, sewer line cleaning & hydro jetting; Residential & commercial services available. Book a free estimate!",
  keywords: [
    "drain cleaning services Fresno",
    "clogged drain repair Fresno",
    "sewer line cleaning Fresno",
    "emergency drain cleaning Fresno",
    "hydro jetting Fresno",
    "rooter services Fresno"
  ],
  alternates: {
    canonical: "https://www.draincleaningnearme.us/drain-cleaning-fresno",
  }
};

export default function FresnoPage() {
  return <FREClient />;
}
