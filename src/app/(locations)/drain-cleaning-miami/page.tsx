import { Metadata } from "next";
import { CityClientTemplate } from "@/components/city-client-template";

export const metadata: Metadata = {
  title: "Expert Drain Cleaning in Miami | Emergency Rooter Services",
  description: "Top-rated drain cleaning services in Miami. Expert clogged drain repair, sewer line cleaning & hydro jetting; Residential & commercial services available. Book a free estimate!",
  keywords: [
    "drain cleaning services Miami",
    "clogged drain repair Miami",
    "sewer line cleaning Miami",
    "emergency drain cleaning Miami",
    "hydro jetting Miami",
    "rooter services Miami"
  ],
  alternates: {
    canonical: "https://www.draincleaningnearme.us/drain-cleaning-miami",
  }
};

export default function MiamiPage() {
  return (
    <CityClientTemplate 
      cityName="Miami"
      h1="Professional Drain Cleaning & Rooter Services in Miami"
      description="Top-rated drain cleaning services in Miami. Expert clogged drain repair, sewer line cleaning & hydro jetting; Residential & commercial services available. Book a free estimate!"
    />
  );
}
