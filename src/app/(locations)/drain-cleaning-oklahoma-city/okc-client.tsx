"use client";



import { 
  Activity,
  Bath,
  Building2,
  CheckCircle2,
  ChevronRight,
  Clock,
  Droplets,
  Hammer,
  HelpCircle,
  MapPin,
  Minus,
  Phone,
  Plus,
  Search,
  ShieldAlert,
  ShieldCheck,
  Star,
  ThermometerSun,
  Trash2,
  Utensils,
  Waves,
  Zap
} from "lucide-react";
import React from "react";
import { FAQClient } from "@/components/faq-client";

import { TrustBadge } from "@/components/ui/trust-badge";

const serviceAreas = [
  "Nichols Hills", "The Village", "Edmond", "Moore", 
  "Norman", "Yukon", "Midwest City"
];

const mainTelLink = "tel:+17247506935";

export function OKCClient() {
  

  return (
    <div className="flex flex-col bg-bg font-body">
      
      <main className="flex-1">
        
        {/* 1. HERO SECTION (OKC LOCAL) */}
        <section className="relative flex flex-col justify-center pt-24 pb-12 overflow-hidden bg-bg border-b border-border">
          <div className="absolute inset-0 pointer-events-none overflow-hidden -z-10">
            <div className="absolute top-0 w-full h-[600px] bg-primary/5 blur-[120px] rounded-full opacity-60" />
          </div>

          <div className="container relative z-10 w-full">
            <div className="flex flex-col items-center text-center container-narrow">
              <TrustBadge 
                badgeText="OKC"
                text="Licensed and Insured Oklahoma City Plumbers"
              />

              <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight mb-6 uppercase italic text-text leading-[1.1] animate-fade-in">
                Professional Drain Cleaning & <span className="text-primary italic font-black">Rooter Services</span> in Oklahoma City
              </h1>

              <div className="text-base md:text-lg text-text/70 font-medium max-w-3xl mx-auto mb-8 italic leading-relaxed animate-fade-in [animation-delay:100ms]">
                Clogged drains or sewer backups disrupting your day? We deliver fast, reliable solutions for Oklahoma City's unique soil and infrastructure challenges.
              </div>

              <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto mb-10 animate-fade-in-up [animation-delay:200ms]">
                <a
                  href={mainTelLink}
                  className="flex items-center justify-center gap-3 px-8 py-5 bg-primary text-white rounded-2xl font-bold text-xl shadow-2xl shadow-primary/30 hover:bg-blue-700 hover:-translate-y-1 transition-all active:scale-95 group font-black uppercase tracking-widest text-lg">
                  <Phone size={24} fill="currentColor" className="group-hover:rotate-12 transition-transform" />
                  Call Now: (724) 750-6935
                </a>
                <a
                  href={mainTelLink}
                  className="flex items-center justify-center gap-3 px-8 py-5 bg-card border-2 border-border text-text rounded-2xl font-bold text-xl hover:border-primary transition-all active:scale-95">
                  Book Online
                </a>
              </div>

              <div className="flex flex-wrap justify-center gap-6 py-4 px-8 bg-card/50 border border-border rounded-full text-sm font-semibold text-text/60 animate-fade-in [animation-delay:300ms]">
                 <div className="flex items-center gap-2"><ShieldCheck size={18} className="text-primary" /> Licensed & Insured</div>
                 <div className="flex items-center gap-2"><Clock size={18} className="text-primary" /> Same-Day Service</div>
                 <div className="flex items-center gap-2"><Zap size={18} className="text-primary" /> 24/7 Availability</div>
                 <div className="flex items-center gap-2"><Star size={18} className="text-accent fill-accent" /> OKC Local Experts</div>
              </div>
            </div>
          </div>
        </section>

        {/* 2. LOCAL PLUMBING CHALLENGES (OKC LOCAL) */}
        <section className="py-14 md:py-16 bg-card border-b border-border">
          <div className="container">
            <div className="grid lg:grid-cols-2 gap-10 items-center">
              <div className="space-y-6">
                <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-text leading-tight uppercase font-black">
                   Oklahoma City's Red Clay & Storm Challenges
                </h2>
                <div className="text-lg text-text/70 leading-relaxed font-medium space-y-6 italic">
                   <p>
                    Oklahoma City's expansive red clay soil puts immense pressure on underground plumbing. Shifting ground can lead to pipe misalignments and cracks, especially in older neighborhoods like Nichols Hills or The Village.
                   </p>
                   <p>
                    Heavy seasonal storms often overwhelm local drainage systems, forcing debris and sediment into residential lines. Without professional hydro jetting, these clogs can lead to severe structural water damage.
                   </p>
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                   {[
                     { t: "Expansive Red Clay", d: "Soil shifting leads to offset and cracked sewer lines.", icon: Activity },
                     { t: "Stormwater Surge", d: "Heavy rains overwhelm drains with mud and debris.", icon: Waves },
                     { t: "Cottonwood Roots", d: "Aggressive roots invade pipe joints seeking moisture.", icon: Droplets },
                     { t: "Aging Infrastructure", d: "Cast iron decay in historic Oklahoma City homes.", icon: Building2 }
                   ].map((item, i) => (
                      <div key={i} className="flex gap-4 p-4 rounded-2xl bg-bg border border-border group hover:border-primary/20 transition-all shadow-sm">
                         <item.icon className="text-primary shrink-0 group-hover:scale-110 transition-transform" />
                         <div>
                            <h4 className="text-xs font-black text-text uppercase">{item.t}</h4>
                            <p className="text-[10px] text-text/40 font-bold leading-relaxed">{item.d}</p>
                         </div>
                      </div>
                   ))}
                </div>
              </div>
              <div className="relative">
                 <div className="aspect-square bg-bg border border-border rounded-[3rem] p-8 md:p-10 shadow-2xl relative overflow-hidden flex flex-col justify-center items-center text-center">
                    <ShieldCheck size={80} className="text-primary mb-8 animate-pulse" />
                    <h3 className="text-2xl font-bold text-text mb-4 tracking-tight uppercase font-black">Authorized Rooter Experts</h3>
                    <p className="text-sm text-text/50 font-bold max-w-xs leading-relaxed uppercase tracking-widest italic">
                       Professional service from Edmond to Norman.
                    </p>
                 </div>
              </div>
            </div>
          </div>
        </section>

        {/* 3. OUR SERVICES */}
        <section className="py-14 md:py-16 bg-bg border-b border-border">
          <div className="container text-center">
             <div className="mb-12 space-y-3">
                <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-text uppercase font-black">
                  OKC's Top-Rated Drain Services
                </h2>
                <p className="text-text/70 font-medium text-lg max-w-2xl mx-auto italic">
                    Same-day relief from clogging, odors and backups.
                </p>
             </div>

             <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  { title: "Residential Drain Cleaning", desc: "Removing hair, soap and grease clogs in family homes across the metro area.", icon: Bath },
                  { title: "Commercial Drain Unclogging", desc: "Specialized grease removal for Oklahoma City restaurants and offices.", icon: Building2 },
                  { title: "24/7 Emergency Service", desc: "Rapid response for sewer main backups and sudden plumbing crises.", icon: Zap },
                  { title: "Hydro Jetting OKC", desc: "High-pressure water clearing of red clay mud, tree roots and minerals.", icon: Waves },
                  { title: "Sewer Line Cleaning", desc: "Full-capacity restoration for main lines using advanced rooter tech.", icon: Droplets },
                  { title: "HD Camera Inspection", desc: "Precision diagnostics to find offsets caused by OKC soil shifts.", icon: Search }
                ].map((s, i) => (
                  <div key={i} className="p-8 rounded-[2rem] bg-card border border-border hover:border-primary/20 transition-all group flex flex-col items-center text-center shadow-sm hover:shadow-2xl animate-fade-in-up" style={{ animationDelay: `${i * 100}ms` }}>
                    <div className="w-16 h-16 rounded-2xl bg-bg text-primary flex items-center justify-center mb-6 transition-colors group-hover:bg-primary group-hover:text-white shadow-inner">
                       <s.icon size={32} />
                    </div>
                    <h3 className="text-xl font-bold text-text mb-4 tracking-tight uppercase font-black">{s.title}</h3>
                    <p className="text-sm text-text/60 font-medium leading-relaxed grow italic">{s.desc}</p>
                    <a href={mainTelLink} className="mt-8 text-primary font-bold text-xs flex items-center gap-2 group/link uppercase tracking-widest font-black">
                       Learn more <ChevronRight size={14} className="group-hover/link:translate-x-1 transition-transform" />
                    </a>
                  </div>
                ))}
             </div>
          </div>
        </section>

        {/* 4. SERVICE AREAS */}
        <section className="py-14 md:py-16 bg-card border-b border-border text-center">
          <div className="container">
             <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-text mb-4 uppercase font-black">
                Service Areas
             </h2>
             <p className="text-text/70 font-medium text-lg mb-10 italic">Serving the entire Oklahoma City metropolitan area.</p>
             <div className="grid grid-cols-2 lg:grid-cols-7 gap-4">
               {serviceAreas.map(n => (
                 <div key={n} className="p-4 rounded-2xl bg-bg border border-border shadow-sm flex flex-col items-center gap-4 group hover:border-primary/20 transition-all font-black uppercase text-[10px] tracking-widest text-text">
                    <div className="w-10 h-10 rounded-xl bg-card border border-border text-primary flex items-center justify-center shrink-0 shadow-inner group-hover:bg-primary group-hover:text-white transition-all">
                       <MapPin size={18} />
                    </div>
                    {n}
                 </div>
               ))}
             </div>
          </div>
        </section>

        {/* 5. FAQ SECTION */}
        <section className="py-14 md:py-16 bg-bg border-b border-border">
           <div className="container-narrow">
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-center text-text mb-12 uppercase font-black italic animate-fade-in">
                Local FAQs
              </h2>
              <div className="animate-fade-in-up [animation-delay:200ms]">
                <FAQClient faqs={[
                  { q: "How much does drain cleaning cost in Oklahoma City?", a: "Most residential drain cleanings run between $125 and $350. We provide free on-site estimates before any work begins." },
                  { q: "Does OKC red clay affect underground pipes?", a: "Yes, the shifting nature of the soil often causes sewer lines to shift or crack, leading to frequent backups in older areas." },
                  { q: "how long does a professional drain cleaning take?", a: "Typically 60-90 minutes for standard clogs. Sewer main cleanings using hydro jetting can take 2-3 hours." },
                  { q: "Do you offer emergency services in Edmond?", a: "Yes, we providing 24/7 priority emergency drain cleaning in Edmond and across the OKC metro area." }
                ]} cityName="Local" />
              </div>
           </div>
        </section>

        {/* 6. FINAL CTA */}
        <section className="py-16 md:py-20 bg-card overflow-hidden relative border-y border-border">
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[400px] bg-primary/5 blur-[150px] rounded-full opacity-60" />
           <div className="container-narrow text-center space-y-8 relative z-10">
              <h2 className="text-4xl md:text-7xl font-bold tracking-tight text-text leading-tight uppercase font-black">
                 Stop OKC Drain Disasters!
              </h2>
              <p className="text-xl text-text/60 font-medium max-w-2xl mx-auto italic font-black uppercase underline decoration-primary decoration-4">
                 Licensed OKC Professionals Ready 24/7. Same-Day Relief.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                 <a
                    href={mainTelLink}
                    className="w-full sm:w-auto flex items-center justify-center gap-4 px-10 py-5 bg-primary text-white rounded-2xl font-bold text-2xl shadow-xl hover:bg-blue-700 hover:-translate-y-1 transition-all active:scale-95 group tracking-tighter font-black">
                    <Phone size={32} fill="currentColor" className="group-hover:rotate-12 transition-transform" />
                    (724) 750-6935
                 </a>
                 <a
                    href={mainTelLink}
                    className="w-full sm:w-auto flex items-center justify-center gap-4 px-10 py-5 bg-card border-2 border-border text-text rounded-2xl font-bold text-xl hover:border-primary transition-all active:scale-95 tracking-tight font-black">
                    Book Now
                 </a>
              </div>
           </div>
        </section>

      </main>
      
    </div>
  );
}
