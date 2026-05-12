import { MoveRight, Utensils, Bath, Zap, Droplets, Search, Waves, Phone } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

const services = [
  {
    id: "kitchen-sink",
    title: "Kitchen sink drain cleaning",
    description: "Remove grease, food buildup and stubborn clogs fast through professional expert cleaning.",
    href: "/kitchen-sink-drain-cleaning-unclogging-services/",
    icon: Utensils,
    color: "text-primary",
  },
  {
    id: "bathroom-drain",
    title: "Bathroom drain cleaning & unclogging",
    description: "Clear hair, soap scum and slow drains efficiently to restore full pipe functionality.",
    href: "/bathroom-drain-cleaning-unclogging-services/",
    icon: Bath,
    color: "text-primary",
  },
  {
    id: "emergency-drain",
    title: "24/7 Emergency drain cleaning",
    description: "Immediate help for urgent backups and flooding – available nationwide any time of day.",
    href: "/emergency-drain-cleaning-services/",
    icon: Zap,
    color: "text-red-600",
    isEmergency: true,
  },
  {
    id: "hydro-jetting",
    title: "Hydro jetting services",
    description: "High-pressure cleaning for deep clogs and severe pipe buildup across your entire system.",
    href: "/hydro-jetting-cleaning-services/",
    icon: Waves,
    color: "text-primary",
  },
  {
    id: "sewer-line",
    title: "Sewer line cleaning & repair",
    description: "Fix major sewer problems and main line backups with advanced diagnostic and repair tools.",
    href: "/sewer-line-cleaning-repair-usa/",
    icon: Droplets,
    color: "text-primary",
  },
  {
    id: "camera-inspection",
    title: "Drain camera inspection",
    description: "Accurate, non-invasive diagnosis of your entire drain system using HD video technology.",
    href: "/drain-camera-inspection/",
    icon: Search,
    color: "text-primary",
  },
];

export function ServicesGrid() {
  const mainTelLink = "tel:+17247506935";

  return (
    <section id="services" className="py-16 md:py-20 bg-card relative font-body">
      <div className="container relative z-10 text-center">
        <div className="text-center mb-12 md:mb-16 space-y-3">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-text leading-tight uppercase font-black italic animate-fade-in">
            Our Drain Cleaning Services
          </h2>
          <p className="text-text/60 font-medium max-w-2xl mx-auto text-base md:text-lg leading-relaxed animate-fade-in [animation-delay:100ms] italic">
            Professional solutions for every type of drainage challenge. We connect you with the right specialist for any job, large or small.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12 md:mb-16">
          {services.map((service, index) => (
            <article
              key={service.id}
              className={cn(
                "group relative p-8 rounded-[2rem] bg-card border border-border transition-all duration-300 flex flex-col items-center text-center h-full",
                "shadow-sm hover:shadow-2xl hover:-translate-y-1 animate-fade-in-up",
                service.isEmergency && "border-red-600/20 bg-red-600/[0.02]"
              )}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className={cn(
                "w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-all shadow-inner",
                service.isEmergency ? "bg-red-600/5 text-red-600 group-hover:bg-red-600 group-hover:text-white" : "bg-primary/5 text-primary group-hover:bg-primary group-hover:text-white"
              )}>
                <service.icon size={28} strokeWidth={2} />
              </div>

              <h3 className="text-lg md:text-xl font-bold tracking-tight mb-3 text-text leading-tight group-hover:text-primary transition-colors uppercase font-black">
                {service.title}
              </h3>

              <p className="text-text/70 text-sm leading-relaxed mb-6 grow italic font-medium">
                {service.description}
              </p>

              <Link
                href={service.href}
                className={cn(
                  "inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-widest transition-all mt-auto py-2.5 px-5 rounded-xl border border-border group-hover:border-primary/50",
                  service.isEmergency ? "text-red-600 border-red-600/20" : "text-primary group-hover:bg-primary/5"
                )}
              >
                Learn more
                <MoveRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </article>
          ))}
        </div>

        {/* 🔹 BOTTOM CTA FOR SERVICES */}
        <div
           className="p-8 md:p-10 rounded-[2.5rem] bg-slate-900 border border-border shadow-2xl flex flex-col md:flex-row items-center justify-between gap-6 text-left animate-fade-in-up [animation-delay:600ms]"
        >
           <div className="space-y-1 text-center md:text-left">
              <h3 className="text-xl md:text-2xl font-bold text-white tracking-tight uppercase font-black italic">Get fast drain cleaning near you</h3>
              <p className="text-white/40 font-black tracking-widest text-[10px] uppercase">Over 300+ verified experts across the United States</p>
           </div>
           <a
              href={mainTelLink}
              className="flex items-center gap-3 px-8 py-4 bg-primary text-white rounded-2xl font-bold text-base md:text-lg hover:bg-blue-700 transition-all shadow-xl shadow-primary/20 shrink-0 group uppercase tracking-tight"
           >
              <Phone size={20} fill="currentColor" className="group-hover:rotate-12 transition-transform" />
              Call now
           </a>
        </div>
      </div>
    </section>
  );
}


