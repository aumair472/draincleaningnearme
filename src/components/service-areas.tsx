import { MapPin, Phone, ChevronRight } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

const cities = [
  "NYC",
  "Los Angeles",
  "Chicago",
  "Houston",
  "Phoenix",
  "Philadelphia",
  "San Antonio",
  "San Diego",
  "Dallas",
  "Boston",
  "Oklahoma City",
  "Las Vegas",
  "Portland",
  "Washington DC"
];

export function ServiceAreas() {
  const mainTelLink = "tel:+17247506935";

  return (
    <section className="py-14 md:py-16 bg-bg border-b border-border text-left font-body">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-10 md:gap-16 items-center">
          <div className="space-y-6 text-center lg:text-left animate-fade-in">
            <div
              className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-[10px] font-black uppercase tracking-widest text-primary"
            >
              <MapPin size={14} /> Nationwide network
            </div>
            
            <h2 className="text-3xl md:text-5xl font-black tracking-tight text-text leading-tight uppercase italic underline decoration-primary decoration-4 underline-offset-8">
              Drain cleaning in your area
            </h2>
            
            <p className="text-base md:text-lg text-text/70 font-medium leading-relaxed max-w-xl italic">
               We connect you with local experts across major U.S. cities, ensuring fast dispatch and high-quality results wherever you are.
            </p>

            <a
              href={mainTelLink}
              className="inline-flex items-center gap-3 px-8 py-4 bg-primary text-white rounded-2xl font-bold text-lg shadow-xl shadow-primary/20 hover:bg-blue-700 hover:-translate-y-1 transition-all active:scale-95 group uppercase tracking-tight"
            >
               <Phone size={20} fill="currentColor" className="group-hover:rotate-12 transition-transform" />
               Call local expert
            </a>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {cities.map((city, i) => (
              <div
                key={city}
                className="animate-fade-in-up"
                style={{ animationDelay: `${i * 50}ms` }}
              >
                <Link
                  href={`/drain-cleaning-${city.toLowerCase().replace(/\s+/g, "-")}`}
                  className="group flex flex-col p-4 md:p-5 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all hover:shadow-lg h-full shadow-sm"
                >
                  <div className="w-9 h-9 rounded-xl bg-primary/5 text-primary flex items-center justify-center mb-3 group-hover:bg-primary group-hover:text-white transition-all shadow-inner">
                     <MapPin size={18} />
                  </div>
                  <h3 className="text-xs md:text-sm font-black text-text tracking-tight group-hover:text-primary transition-colors flex items-center justify-between gap-2 uppercase">
                    {city}
                    <ChevronRight size={14} className="opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                  </h3>
                  <p className="text-[9px] font-black text-text/40 uppercase tracking-widest mt-1.5 italic">
                    Licensed cleaners
                  </p>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}


