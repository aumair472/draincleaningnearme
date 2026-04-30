import { Metadata } from "next";
import { CityClientTemplate } from "@/components/city-client-template";

export const metadata: Metadata = {
  title: "Expert Drain Cleaning in Wichita | Emergency Rooter Services",
  description: "Top-rated drain cleaning services in Wichita. Expert clogged drain repair, sewer line cleaning & hydro jetting; Residential & commercial services available. Book a free estimate!",
  keywords: [
    "drain cleaning services Wichita",
    "clogged drain repair Wichita",
    "sewer line cleaning Wichita",
    "emergency drain cleaning Wichita",
    "hydro jetting Wichita",
    "rooter services Wichita"
  ],
  alternates: {
    canonical: "https://www.draincleaningnearme.us/drain-cleaning-wichita",
  }
};

export default function WichitaPage() {
  return (
    <CityClientTemplate 
      cityName="Wichita"
      h1="Professional Drain Cleaning & Rooter Services in Wichita"
      description="Top-rated drain cleaning services in Wichita. Expert clogged drain repair, sewer line cleaning & hydro jetting; Residential & commercial services available. Book a free estimate!"
    />
  );
}
