import { Metadata } from "next";
import { CityClientTemplate } from "@/components/city-client-template";

export const metadata: Metadata = {
  title: "Expert Drain Cleaning in Raleigh | Emergency Rooter Services",
  description: "Top-rated drain cleaning services in Raleigh. Expert clogged drain repair, sewer line cleaning & hydro jetting; Residential & commercial services available. Book a free estimate!",
  keywords: [
    "drain cleaning services Raleigh",
    "clogged drain repair Raleigh",
    "sewer line cleaning Raleigh",
    "emergency drain cleaning Raleigh",
    "hydro jetting Raleigh",
    "rooter services Raleigh"
  ],
  alternates: {
    canonical: "https://www.draincleaningnearme.us/drain-cleaning-raleigh",
  }
};

export default function RaleighPage() {
  return (
    <CityClientTemplate 
      cityName="Raleigh"
      h1="Professional Drain Cleaning & Rooter Services in Raleigh"
      description="Top-rated drain cleaning services in Raleigh. Expert clogged drain repair, sewer line cleaning & hydro jetting; Residential & commercial services available. Book a free estimate!"
    />
  );
}
