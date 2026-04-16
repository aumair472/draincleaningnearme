import { Metadata } from "next";
import { CLTClient } from "./clt-client";

export const metadata: Metadata = {
  title: "Expert Drain Cleaning in Charlotte | Emergency Rooter Services",
  description: "Top-rated drain cleaning services in Charlotte. Expert clogged drain repair, sewer line cleaning & hydro jetting; Residential & commercial services available. Book a free estimate!",
  keywords: [
    "drain cleaning services Charlotte",
    "clogged drain repair Charlotte",
    "sewer line cleaning Charlotte",
    "emergency drain cleaning Charlotte",
    "hydro jetting Charlotte",
    "rooter services Charlotte"
  ],
  alternates: {
    canonical: "https://www.draincleaningnearme.us/drain-cleaning-charlotte",
  }
};

export default function CharlottePage() {
  return <CLTClient />;
}
