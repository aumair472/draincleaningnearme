import { Metadata } from "next";
import { CityClientTemplate } from "@/components/city-client-template";

export const metadata: Metadata = {
  title: "Expert Drain Cleaning in New Orleans | Emergency Rooter Services",
  description: "Top-rated drain cleaning services in New Orleans. Expert clogged drain repair, sewer line cleaning & hydro jetting; Residential & commercial services available. Book a free estimate!",
  keywords: [
    "drain cleaning services New Orleans",
    "clogged drain repair New Orleans",
    "sewer line cleaning New Orleans",
    "emergency drain cleaning New Orleans",
    "hydro jetting New Orleans",
    "rooter services New Orleans"
  ],
  alternates: {
    canonical: "https://www.draincleaningnearme.us/drain-cleaning-new-orleans",
  }
};

export default function NewOrleansPage() {
  return (
    <CityClientTemplate 
      cityName="New Orleans"
      h1="Professional Drain Cleaning & Rooter Services in New Orleans"
      description="Top-rated drain cleaning services in New Orleans. Expert clogged drain repair, sewer line cleaning & hydro jetting; Residential & commercial services available. Book a free estimate!"
    />
  );
}
