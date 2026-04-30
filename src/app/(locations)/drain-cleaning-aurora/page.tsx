import { Metadata } from "next";
import { CityClientTemplate } from "@/components/city-client-template";

export const metadata: Metadata = {
  title: "Expert Drain Cleaning in Aurora | Emergency Rooter Services",
  description: "Top-rated drain cleaning services in Aurora. Expert clogged drain repair, sewer line cleaning & hydro jetting; Residential & commercial services available. Book a free estimate!",
  keywords: [
    "drain cleaning services Aurora",
    "clogged drain repair Aurora",
    "sewer line cleaning Aurora",
    "emergency drain cleaning Aurora",
    "hydro jetting Aurora",
    "rooter services Aurora"
  ],
  alternates: {
    canonical: "https://www.draincleaningnearme.us/drain-cleaning-aurora",
  }
};

export default function AuroraPage() {
  return (
    <CityClientTemplate 
      cityName="Aurora"
      h1="Professional Drain Cleaning & Rooter Services in Aurora"
      description="Top-rated drain cleaning services in Aurora. Expert clogged drain repair, sewer line cleaning & hydro jetting; Residential & commercial services available. Book a free estimate!"
    />
  );
}
