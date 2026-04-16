import { Metadata } from "next";
import { EmergencyClient } from "./emergency-client";

export const metadata: Metadata = {
  title: "Emergency Drain Cleaning Services | 24/7 Professional Plumbers",
  description: "Emergency drain cleaning near you. Get fast 24/7 professional service for clogged drains & sewer backups. Call now for immediate help anywhere in the USA from DrainCleaningNearMe!",
  alternates: {
    canonical: "https://www.draincleaningnearme.us/emergency-drain-cleaning-services",
  },
};

export default function EmergencyDrainPage() {
  return <EmergencyClient />;
}
