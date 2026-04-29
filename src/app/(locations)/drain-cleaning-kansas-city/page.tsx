import { Metadata } from "next";
import { CityClientTemplate } from "@/components/city-client-template";

export const metadata: Metadata = {
  title: "Expert Drain Cleaning in Kansas City | Emergency Rooter Services",
  description: "Top-rated drain cleaning services in Kansas City. Expert clogged drain repair, sewer line cleaning & hydro jetting; Residential & commercial services available. Book a free estimate!",
  keywords: [
    "drain cleaning services Kansas City",
    "clogged drain repair Kansas City",
    "sewer line cleaning Kansas City",
    "emergency drain cleaning Kansas City",
    "hydro jetting Kansas City",
    "rooter services Kansas City"
  ],
  alternates: {
    canonical: "https://www.draincleaningnearme.us/drain-cleaning-kansas-city",
  }
};

export default function KansasCityPage() {
  return (
    <CityClientTemplate 
      cityName="Kansas City"
      h1="Professional Drain Cleaning & Rooter Services in Kansas City"
      description="Top-rated drain cleaning services in Kansas City. Expert clogged drain repair, sewer line cleaning & hydro jetting; Residential & commercial services available. Book a free estimate!"
    />
  );
}
