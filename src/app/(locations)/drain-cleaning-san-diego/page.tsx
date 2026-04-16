import { Metadata } from "next";
import { SDClient } from "./sd-client";

export const metadata: Metadata = {
  title: "Drain Cleaning San Diego | Expert Clogged Drain Service 24/7",
  description: "Expert drain cleaning services in San Diego. Clogged drain? Get fast 24/7 emergency drain & sewer cleaning by hydro jetting residents trust. Licensed, insured & same-day. Call Now!",
  keywords: [
    "drain cleaning services San Diego",
    "clogged drain repair San Diego",
    "sewer line cleaning San Diego",
    "emergency drain cleaning San Diego",
    "hydro jetting San Diego"
  ],
  alternates: {
    canonical: "https://www.draincleaningnearme.us/drain-cleaning-san-diego",
  }
};

export default function SanDiegoPage() {
  return <SDClient />;
}
