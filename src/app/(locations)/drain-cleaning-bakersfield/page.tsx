import { Metadata } from "next";
import { CityClientTemplate } from "@/components/city-client-template";

export const metadata: Metadata = {
  title: "Expert Drain Cleaning in Bakersfield | Emergency Rooter Services",
  description: "Top-rated drain cleaning services in Bakersfield. Expert clogged drain repair, sewer line cleaning & hydro jetting; Residential & commercial services available. Book a free estimate!",
  keywords: [
    "drain cleaning services Bakersfield",
    "clogged drain repair Bakersfield",
    "sewer line cleaning Bakersfield",
    "emergency drain cleaning Bakersfield",
    "hydro jetting Bakersfield",
    "rooter services Bakersfield"
  ],
  alternates: {
    canonical: "https://www.draincleaningnearme.us/drain-cleaning-bakersfield",
  }
};

export default function BakersfieldPage() {
  return (
    <CityClientTemplate 
      cityName="Bakersfield"
      h1="Professional Drain Cleaning & Rooter Services in Bakersfield"
      description="Top-rated drain cleaning services in Bakersfield. Expert clogged drain repair, sewer line cleaning & hydro jetting; Residential & commercial services available. Book a free estimate!"
    />
  );
}
