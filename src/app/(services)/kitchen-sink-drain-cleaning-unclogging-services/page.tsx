import { Metadata } from "next";
import { KitchenSinkClient } from "./kitchen-sink-client";

export const metadata: Metadata = {
  title: "Kitchen Sink Drain Cleaning & Unclogging Services",
  description: "Get fast kitchen sink drain cleaning services across the USA. Call now for 24/7 emergency clogged sink repair by licensed local experts.",
  alternates: {
    canonical: "https://www.draincleaningnearme.us/kitchen-sink-drain-cleaning-unclogging-services",
  },
};

export default function KitchenSinkPage() {
  return <KitchenSinkClient />;
}
