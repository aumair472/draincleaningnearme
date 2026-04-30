import { Metadata } from "next";
import { CityClientTemplate } from "@/components/city-client-template";

export const metadata: Metadata = {
  title: "Expert Drain Cleaning in Anaheim | Emergency Rooter Services",
  description: "Top-rated drain cleaning services in Anaheim. Expert clogged drain repair, sewer line cleaning & hydro jetting; Residential & commercial services available. Book a free estimate!",
  keywords: [
    "drain cleaning services Anaheim",
    "clogged drain repair Anaheim",
    "sewer line cleaning Anaheim",
    "emergency drain cleaning Anaheim",
    "hydro jetting Anaheim",
    "rooter services Anaheim"
  ],
  alternates: {
    canonical: "https://www.draincleaningnearme.us/drain-cleaning-anaheim",
  }
};

export default function AnaheimPage() {
  return (
    <CityClientTemplate 
      cityName="Anaheim"
      h1="Professional Drain Cleaning & Rooter Services in Anaheim"
      description="Top-rated drain cleaning services in Anaheim. Expert clogged drain repair, sewer line cleaning & hydro jetting; Residential & commercial services available. Book a free estimate!"
    />
  );
}
