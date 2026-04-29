import { Metadata } from "next";
import { CityClientTemplate } from "@/components/city-client-template";

export const metadata: Metadata = {
  title: "Expert Drain Cleaning in Mesa | Emergency Rooter Services",
  description: "Top-rated drain cleaning services in Mesa. Expert clogged drain repair, sewer line cleaning & hydro jetting; Residential & commercial services available. Book a free estimate!",
  keywords: [
    "drain cleaning services Mesa",
    "clogged drain repair Mesa",
    "sewer line cleaning Mesa",
    "emergency drain cleaning Mesa",
    "hydro jetting Mesa",
    "rooter services Mesa"
  ],
  alternates: {
    canonical: "https://www.draincleaningnearme.us/drain-cleaning-mesa",
  }
};

export default function MesaPage() {
  return (
    <CityClientTemplate 
      cityName="Mesa"
      h1="Professional Drain Cleaning & Rooter Services in Mesa"
      description="Top-rated drain cleaning services in Mesa. Expert clogged drain repair, sewer line cleaning & hydro jetting; Residential & commercial services available. Book a free estimate!"
    />
  );
}
