import { Metadata } from "next";
import { CityClientTemplate } from "@/components/city-client-template";

export const metadata: Metadata = {
  title: "Expert Drain Cleaning in Omaha | Emergency Rooter Services",
  description: "Top-rated drain cleaning services in Omaha. Expert clogged drain repair, sewer line cleaning & hydro jetting; Residential & commercial services available. Book a free estimate!",
  keywords: [
    "drain cleaning services Omaha",
    "clogged drain repair Omaha",
    "sewer line cleaning Omaha",
    "emergency drain cleaning Omaha",
    "hydro jetting Omaha",
    "rooter services Omaha"
  ],
  alternates: {
    canonical: "https://www.draincleaningnearme.us/drain-cleaning-omaha",
  }
};

export default function OmahaPage() {
  return (
    <CityClientTemplate 
      cityName="Omaha"
      h1="Professional Drain Cleaning & Rooter Services in Omaha"
      description="Top-rated drain cleaning services in Omaha. Expert clogged drain repair, sewer line cleaning & hydro jetting; Residential & commercial services available. Book a free estimate!"
    />
  );
}
