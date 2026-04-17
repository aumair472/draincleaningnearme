import { Metadata } from "next";
import { JAXClient } from "./jax-client";

export const metadata: Metadata = {
  title: "Expert Drain Cleaning in Jacksonville | Emergency Rooter Services",
  description: "Clogged drain in Jacksonville? Get fast, reliable and affordable emergency drain cleaning residents trust. Same-day service for backups & odors. Licensed & 24/7. Book your fix today!",
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
