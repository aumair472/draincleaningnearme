import { Metadata } from "next";
import { ElPasoClient } from "./el-paso-client";

export const metadata: Metadata = {
  title: "Expert Drain Cleaning in El Paso | Emergency Rooter Services",
  description: "Top-rated drain cleaning services in El Paso. Expert clogged drain repair, sewer line cleaning & hydro jetting; Residential & commercial services available. Book a free estimate!",
  keywords: [
    "drain cleaning services El Paso",
    "clogged drain repair El Paso",
    "sewer line cleaning El Paso",
    "emergency drain cleaning El Paso",
    "hydro jetting El Paso",
    "rooter services El Paso"
  ],
  alternates: {
    canonical: "https://www.draincleaningnearme.us/drain-cleaning-el-paso",
  }
};

export default function ElPasoPage() {
  return <ElPasoClient />;
}
