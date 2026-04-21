import { Metadata } from "next";
import { SACClient } from "./sac-client";

export const metadata: Metadata = {
  title: "Expert Drain Cleaning in Sacramento | Emergency Rooter Services",
  description: "Top-rated drain cleaning services in Sacramento. Expert clogged drain repair, sewer line cleaning & hydro jetting; Residential & commercial services available. Book a free estimate!",
  keywords: [
    "drain cleaning services Sacramento",
    "clogged drain repair Sacramento",
    "sewer line cleaning Sacramento",
    "emergency drain cleaning Sacramento",
    "hydro jetting Sacramento",
    "rooter services Sacramento"
  ],
  alternates: {
    canonical: "https://www.draincleaningnearme.us/drain-cleaning-sacramento",
  }
};

export default function SacramentoPage() {
  return <SACClient />;
}
