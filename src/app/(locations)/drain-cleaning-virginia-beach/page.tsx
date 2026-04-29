import { Metadata } from "next";
import { CityClientTemplate } from "@/components/city-client-template";

export const metadata: Metadata = {
  title: "Expert Drain Cleaning in Virginia Beach | Emergency Rooter Services",
  description: "Top-rated drain cleaning services in Virginia Beach. Expert clogged drain repair, sewer line cleaning & hydro jetting; Residential & commercial services available. Book a free estimate!",
  keywords: [
    "drain cleaning services Virginia Beach",
    "clogged drain repair Virginia Beach",
    "sewer line cleaning Virginia Beach",
    "emergency drain cleaning Virginia Beach",
    "hydro jetting Virginia Beach",
    "rooter services Virginia Beach"
  ],
  alternates: {
    canonical: "https://www.draincleaningnearme.us/drain-cleaning-virginia-beach",
  }
};

export default function VirginiaBeachPage() {
  return (
    <CityClientTemplate 
      cityName="Virginia Beach"
      h1="Professional Drain Cleaning & Rooter Services in Virginia Beach"
      description="Top-rated drain cleaning services in Virginia Beach. Expert clogged drain repair, sewer line cleaning & hydro jetting; Residential & commercial services available. Book a free estimate!"
    />
  );
}
