import { Metadata } from "next";
import { CMHClient } from "./cmh-client";

export const metadata: Metadata = {
  title: "Expert Drain Cleaning in Columbus | Emergency Rooter Services",
  description: "Top-rated drain cleaning services in Columbus. Expert clogged drain repair, sewer line cleaning & hydro jetting; Residential & commercial services available. Book a free estimate!",
  keywords: [
    "drain cleaning services Columbus",
    "clogged drain repair Columbus",
    "sewer line cleaning Columbus",
    "emergency drain cleaning Columbus",
    "hydro jetting Columbus",
    "rooter services Columbus"
  ],
  alternates: {
    canonical: "https://www.draincleaningnearme.us/drain-cleaning-columbus",
  }
};

export default function ColumbusPage() {
  return <CMHClient />;
}
