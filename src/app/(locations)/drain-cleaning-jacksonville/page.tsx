import { Metadata } from "next";
import { JAXClient } from "./jax-client";

export const metadata: Metadata = {
  title: "Expert Drain Cleaning in Jacksonville | Emergency Rooter Services",
  description: "Top-rated drain cleaning services in Jacksonville. Expert clogged drain repair, sewer line cleaning & hydro jetting; Residential & commercial services available. Book a free estimate!",
  keywords: [
    "drain cleaning services Jacksonville",
    "clogged drain repair Jacksonville",
    "sewer line cleaning Jacksonville",
    "emergency drain cleaning Jacksonville",
    "hydro jetting Jacksonville",
    "rooter services Jacksonville"
  ],
  alternates: {
    canonical: "https://www.draincleaningnearme.us/drain-cleaning-jacksonville",
  }
};

export default function JacksonvillePage() {
  return <JAXClient />;
}
