import { Metadata } from "next";
import { CityClientTemplate } from "@/components/city-client-template";

export const metadata: Metadata = {
  title: "Expert Drain Cleaning in Oakland | Emergency Rooter Services",
  description: "Top-rated drain cleaning services in Oakland. Expert clogged drain repair, sewer line cleaning & hydro jetting; Residential & commercial services available. Book a free estimate!",
  keywords: [
    "drain cleaning services Oakland",
    "clogged drain repair Oakland",
    "sewer line cleaning Oakland",
    "emergency drain cleaning Oakland",
    "hydro jetting Oakland",
    "rooter services Oakland"
  ],
  alternates: {
    canonical: "https://www.draincleaningnearme.us/drain-cleaning-oakland",
  }
};

export default function OaklandPage() {
  return (
    <CityClientTemplate 
      cityName="Oakland"
      h1="Professional Drain Cleaning & Rooter Services in Oakland"
      description="Top-rated drain cleaning services in Oakland. Expert clogged drain repair, sewer line cleaning & hydro jetting; Residential & commercial services available. Book a free estimate!"
    />
  );
}
