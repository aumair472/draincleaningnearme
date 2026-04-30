import { Metadata } from "next";
import { CityClientTemplate } from "@/components/city-client-template";

export const metadata: Metadata = {
  title: "Expert Drain Cleaning in Corpus Christi | Emergency Rooter Services",
  description: "Top-rated drain cleaning services in Corpus Christi. Expert clogged drain repair, sewer line cleaning & hydro jetting; Residential & commercial services available. Book a free estimate!",
  keywords: [
    "drain cleaning services Corpus Christi",
    "clogged drain repair Corpus Christi",
    "sewer line cleaning Corpus Christi",
    "emergency drain cleaning Corpus Christi",
    "hydro jetting Corpus Christi",
    "rooter services Corpus Christi"
  ],
  alternates: {
    canonical: "https://www.draincleaningnearme.us/drain-cleaning-corpus-christi",
  }
};

export default function CorpusChristiPage() {
  return (
    <CityClientTemplate 
      cityName="Corpus Christi"
      h1="Professional Drain Cleaning & Rooter Services in Corpus Christi"
      description="Top-rated drain cleaning services in Corpus Christi. Expert clogged drain repair, sewer line cleaning & hydro jetting; Residential & commercial services available. Book a free estimate!"
    />
  );
}
