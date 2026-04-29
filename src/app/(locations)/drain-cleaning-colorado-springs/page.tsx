import { Metadata } from "next";
import { CityClientTemplate } from "@/components/city-client-template";

export const metadata: Metadata = {
  title: "Expert Drain Cleaning in Colorado Springs | Emergency Rooter Services",
  description: "Top-rated drain cleaning services in Colorado Springs. Expert clogged drain repair, sewer line cleaning & hydro jetting; Residential & commercial services available. Book a free estimate!",
  keywords: [
    "drain cleaning services Colorado Springs",
    "clogged drain repair Colorado Springs",
    "sewer line cleaning Colorado Springs",
    "emergency drain cleaning Colorado Springs",
    "hydro jetting Colorado Springs",
    "rooter services Colorado Springs"
  ],
  alternates: {
    canonical: "https://www.draincleaningnearme.us/drain-cleaning-colorado-springs",
  }
};

export default function ColoradoSpringsPage() {
  return (
    <CityClientTemplate 
      cityName="Colorado Springs"
      h1="Professional Drain Cleaning & Rooter Services in Colorado Springs"
      description="Top-rated drain cleaning services in Colorado Springs. Expert clogged drain repair, sewer line cleaning & hydro jetting; Residential & commercial services available. Book a free estimate!"
    />
  );
}
