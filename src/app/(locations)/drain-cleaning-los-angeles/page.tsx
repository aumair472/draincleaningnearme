import { Metadata } from "next";
import { LAClient } from "./la-client";

export const metadata: Metadata = {
  title: "Drain Cleaning Services Los Angeles | 24/7 Emergency Plumbers",
  description: "Expert drain cleaning services in Los Angeles. From clogged drain repair to hydro jetting, we offer 24/7 emergency service. Licensed & fast; Call now for a free estimate.",
  keywords: [
    "drain cleaning services los angeles",
    "clogged drain repair Los Angeles",
    "sewer cleaning Los Angeles",
    "emergency drain cleaning Los Angeles",
    "hydro jetting Los Angeles"
  ],
  alternates: {
    canonical: "https://www.draincleaningnearme.us/drain-cleaning-los-angeles",
  }
};

export default function LAPage() {
  return <LAClient />;
}
