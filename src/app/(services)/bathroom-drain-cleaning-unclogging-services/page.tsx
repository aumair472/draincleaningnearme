import { Metadata } from "next";
import { BathroomClient } from "./bathroom-client";

export const metadata: Metadata = {
  title: "Bathroom Drain Cleaning & Unclogging Services",
  description: "Professional bathroom drain cleaning near me. We offer 24/7 clogged drain repair for showers & toilets blockage services nationwide. Fast, reliable & expert service. Get fast help!",
  alternates: {
    canonical: "https://www.draincleaningnearme.us/bathroom-drain-cleaning-unclogging-services",
  },
};

export default function BathroomDrainPage() {
  return <BathroomClient />;
}
