import { Metadata } from "next";
import { TUCClient } from "./tuc-client";

export const metadata: Metadata = {
  title: "Expert Drain Cleaning in Tucson | Emergency Rooter Services",
  description: "Top-rated drain cleaning services in Tucson. Expert clogged drain repair, sewer line cleaning & hydro jetting; Residential & commercial services available. Book a free estimate!",
  keywords: [
    "drain cleaning services Tucson",
    "clogged drain repair Tucson",
    "sewer line cleaning Tucson",
    "emergency drain cleaning Tucson",
    "hydro jetting Tucson",
    "rooter services Tucson"
  ],
  alternates: {
    canonical: "https://www.draincleaningnearme.us/drain-cleaning-tucson",
  }
};

export default function TucsonPage() {
  return <TUCClient />;
}
