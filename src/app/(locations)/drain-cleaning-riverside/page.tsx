import { Metadata } from "next";
import { CityClientTemplate } from "@/components/city-client-template";

export const metadata: Metadata = {
  title: "Expert Drain Cleaning in Riverside | Emergency Rooter Services",
  description: "Top-rated drain cleaning services in Riverside. Expert clogged drain repair, sewer line cleaning & hydro jetting; Residential & commercial services available. Book a free estimate!",
  keywords: [
    "drain cleaning services Riverside",
    "clogged drain repair Riverside",
    "sewer line cleaning Riverside",
    "emergency drain cleaning Riverside",
    "hydro jetting Riverside",
    "rooter services Riverside"
  ],
  alternates: {
    canonical: "https://www.draincleaningnearme.us/drain-cleaning-riverside",
  }
};

export default function RiversidePage() {
  return (
    <CityClientTemplate 
      cityName="Riverside"
      h1="Professional Drain Cleaning & Rooter Services in Riverside"
      description="Top-rated drain cleaning services in Riverside. Expert clogged drain repair, sewer line cleaning & hydro jetting; Residential & commercial services available. Book a free estimate!"
    />
  );
}
