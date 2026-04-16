import { Metadata } from "next";
import { SAClient } from "./sa-client";

export const metadata: Metadata = {
  title: "Emergency San Antonio Drain Cleaning | Top-Rated Local Plumbers",
  description: "Professional drain cleaning services San Antonio TX. From sewer & kitchen clogs; hydro jetting to sewer line repair, we fix slow pipes fast. Affordable & Expert. Book Today!",
  keywords: [
    "drain cleaning services San Antonio",
    "clogged drain repair San Antonio",
    "sewer line cleaning San Antonio",
    "emergency drain cleaning San Antonio",
    "hydro jetting San Antonio"
  ],
  alternates: {
    canonical: "https://www.draincleaningnearme.us/drain-cleaning-san-antonio",
  }
};

export default function SanAntonioPage() {
  return <SAClient />;
}
