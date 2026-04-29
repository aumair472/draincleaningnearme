import { Metadata } from "next";
import { CityClientTemplate } from "@/components/city-client-template";

export const metadata: Metadata = {
  title: "Expert Drain Cleaning in Atlanta | Emergency Rooter Services",
  description: "Top-rated drain cleaning services in Atlanta. Expert clogged drain repair, sewer line cleaning & hydro jetting; Residential & commercial services available. Book a free estimate!",
  keywords: [
    "drain cleaning services Atlanta",
    "clogged drain repair Atlanta",
    "sewer line cleaning Atlanta",
    "emergency drain cleaning Atlanta",
    "hydro jetting Atlanta",
    "rooter services Atlanta"
  ],
  alternates: {
    canonical: "https://www.draincleaningnearme.us/drain-cleaning-atlanta",
  }
};

export default function AtlantaPage() {
  return (
    <CityClientTemplate 
      cityName="Atlanta"
      h1="Professional Drain Cleaning & Rooter Services in Atlanta"
      description="Top-rated drain cleaning services in Atlanta. Expert clogged drain repair, sewer line cleaning & hydro jetting; Residential & commercial services available. Book a free estimate!"
    />
  );
}
