import { Metadata } from "next";
import { PhoenixClient } from "./phoenix-client";

export const metadata: Metadata = {
  title: "24/7 Drain Cleaning Services in Phoenix, AZ | Licensed & Insured Plumbers",
  description: "Reliable Phoenix drain cleaning services at affordable rates. From clogged drain repair to sewer cleaning, we provide 24/7 emergency same-day expert help. Book now!",
  keywords: [
    "drain cleaning services phoenix",
    "clogged drain repair phoenix",
    "emergency drain cleaning phoenix",
    "sewer line cleaning phoenix",
    "hydro jetting phoenix"
  ],
  alternates: {
    canonical: "https://www.draincleaningnearme.us/drain-cleaning-phoenix",
  }
};

export default function PhoenixPage() {
  return <PhoenixClient />;
}
