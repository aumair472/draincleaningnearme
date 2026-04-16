import { Metadata } from "next";
import { SewerClient } from "./sewer-client";

export const metadata: Metadata = {
  title: "Professional Sewer Line Cleaning & Repair Across the USA",
  description: "Sewer line cleaning & emergency drain repair services across USA. Licensed pros available 24/7 for kitchen & bathroom drain repair, toilet dredge sewer cleaning. Fast response.",
  alternates: {
    canonical: "https://www.draincleaningnearme.us/sewer-line-cleaning-repair-usa",
  },
};

export default function SewerLinePage() {
  return <SewerClient />;
}
