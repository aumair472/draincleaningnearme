import { Metadata } from "next";
import { CityClientTemplate } from "@/components/city-client-template";

export const metadata: Metadata = {
  title: "Expert Drain Cleaning in Long Beach | Emergency Rooter Services",
  description: "Top-rated drain cleaning services in Long Beach. Expert clogged drain repair, sewer line cleaning & hydro jetting; Residential & commercial services available. Book a free estimate!",
  keywords: [
    "drain cleaning services Long Beach",
    "clogged drain repair Long Beach",
    "sewer line cleaning Long Beach",
    "emergency drain cleaning Long Beach",
    "hydro jetting Long Beach",
    "rooter services Long Beach"
  ],
  alternates: {
    canonical: "https://www.draincleaningnearme.us/drain-cleaning-long-beach",
  }
};

export default function LongBeachPage() {
  return (
    <CityClientTemplate 
      cityName="Long Beach"
      h1="Professional Drain Cleaning & Rooter Services in Long Beach"
      description="Top-rated drain cleaning services in Long Beach. Expert clogged drain repair, sewer line cleaning & hydro jetting; Residential & commercial services available. Book a free estimate!"
    />
  );
}
