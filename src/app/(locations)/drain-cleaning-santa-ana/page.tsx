import { Metadata } from "next";
import { CityClientTemplate } from "@/components/city-client-template";

export const metadata: Metadata = {
  title: "Expert Drain Cleaning in Santa Ana | Emergency Rooter Services",
  description: "Top-rated drain cleaning services in Santa Ana. Expert clogged drain repair, sewer line cleaning & hydro jetting; Residential & commercial services available. Book a free estimate!",
  keywords: [
    "drain cleaning services Santa Ana",
    "clogged drain repair Santa Ana",
    "sewer line cleaning Santa Ana",
    "emergency drain cleaning Santa Ana",
    "hydro jetting Santa Ana",
    "rooter services Santa Ana"
  ],
  alternates: {
    canonical: "https://www.draincleaningnearme.us/drain-cleaning-santa-ana",
  }
};

export default function SantaAnaPage() {
  return (
    <CityClientTemplate 
      cityName="Santa Ana"
      h1="Professional Drain Cleaning & Rooter Services in Santa Ana"
      description="Top-rated drain cleaning services in Santa Ana. Expert clogged drain repair, sewer line cleaning & hydro jetting; Residential & commercial services available. Book a free estimate!"
    />
  );
}
