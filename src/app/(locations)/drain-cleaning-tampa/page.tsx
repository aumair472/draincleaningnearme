import { Metadata } from "next";
import { CityClientTemplate } from "@/components/city-client-template";

export const metadata: Metadata = {
  title: "Expert Drain Cleaning in Tampa | Emergency Rooter Services",
  description: "Top-rated drain cleaning services in Tampa. Expert clogged drain repair, sewer line cleaning & hydro jetting; Residential & commercial services available. Book a free estimate!",
  keywords: [
    "drain cleaning services Tampa",
    "clogged drain repair Tampa",
    "sewer line cleaning Tampa",
    "emergency drain cleaning Tampa",
    "hydro jetting Tampa",
    "rooter services Tampa"
  ],
  alternates: {
    canonical: "https://www.draincleaningnearme.us/drain-cleaning-tampa",
  }
};

export default function TampaPage() {
  return (
    <CityClientTemplate 
      cityName="Tampa"
      h1="Professional Drain Cleaning & Rooter Services in Tampa"
      description="Top-rated drain cleaning services in Tampa. Expert clogged drain repair, sewer line cleaning & hydro jetting; Residential & commercial services available. Book a free estimate!"
    />
  );
}
