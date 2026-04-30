import { Metadata } from "next";
import { CityClientTemplate } from "@/components/city-client-template";

export const metadata: Metadata = {
  title: "Expert Drain Cleaning in Arlington | Emergency Rooter Services",
  description: "Top-rated drain cleaning services in Arlington. Expert clogged drain repair, sewer line cleaning & hydro jetting; Residential & commercial services available. Book a free estimate!",
  keywords: [
    "drain cleaning services Arlington",
    "clogged drain repair Arlington",
    "sewer line cleaning Arlington",
    "emergency drain cleaning Arlington",
    "hydro jetting Arlington",
    "rooter services Arlington"
  ],
  alternates: {
    canonical: "https://www.draincleaningnearme.us/drain-cleaning-arlington",
  }
};

export default function ArlingtonPage() {
  return (
    <CityClientTemplate 
      cityName="Arlington"
      h1="Professional Drain Cleaning & Rooter Services in Arlington"
      description="Top-rated drain cleaning services in Arlington. Expert clogged drain repair, sewer line cleaning & hydro jetting; Residential & commercial services available. Book a free estimate!"
    />
  );
}
