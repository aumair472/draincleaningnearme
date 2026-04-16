import { Metadata } from "next";
import { HydroJettingClient } from "./hydro-jetting-client";

export const metadata: Metadata = {
  title: "Expert Hydro Jetting & Main Line Cleaning Services",
  description: "Professional hydro jet drain cleaning for main lines & kitchen sinks; offering 24/7 high pressure hydro jetting & sewer line cleaning near you. Fast response nationwide across USA.",
  alternates: {
    canonical: "https://www.draincleaningnearme.us/hydro-jetting-cleaning-services",
  },
};

export default function HydroJettingPage() {
  return <HydroJettingClient />;
}
