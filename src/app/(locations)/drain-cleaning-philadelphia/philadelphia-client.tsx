import { 
  Phone, Star, CheckCircle2, ShieldCheck, Clock, MapPin, 
  ChevronRight, Utensils, Building2, Search, 
  Activity, Waves, Droplets, Zap, Bath
} from "lucide-react";
import React from "react";
import { FAQClient } from "@/components/faq-client";

const suburbs = [
  "Center City", "West Philly", "South Philly", "Northeast Philly", "Main Line", "Cherry Hill"
];

const mainTelLink = "tel:+17247506935";

export function PhiladelphiaClient() {
  const faqs = [
    { q: "How much is drain cleaning in Philly?", a: "Residential rates in Philadelphia typically range from $125–$300 depending on the complexity of the clog." },
    { q: "Do you cover the suburbs?", a: "Yes, we cover the entire Greater Philadelphia area including Bucks, Montgomery, and Delaware counties." },
    { q: "Emergency response time?", a: "Our local network technicians usually arrive within 60 minutes across Philadelphia." },
    { q: "Safe for old pipes?", a: "Yes, we use specialized equipment for the older plumbing systems common in Philly rowhomes." }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-bg font-body">
      <main className="flex-1">
        
        {/* 1. HERO SECTION */}
        <section className="relative min-h-[80vh] flex flex-col justify-center py-20 overflow-hidden bg-bg border-b border-border">
          <div className="absolute inset-0 pointer-events-none overflow-hidden -z-10">
            <div className="absolute top-0 w-full h-[600px] bg-primary/5 blur-[120px] rounded-full opacity-60" />
          </div>

          <div className="container relative z-10 w-full">
            <div className="flex flex-col items-center text-center container-narrow">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-primary/10 border border-primary/20 rounded-full text-[10px] font-bold uppercase tracking-widest text-primary mb-8 animate-fade-in">
                 PA — Licensed Philadelphia Drain Experts
              </div>

              <h1
                className="text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight mb-8 text-text leading-[1.1] animate-fade-in-up"
              >
                Fast Drain Cleaning & <span className="text-primary italic font-black">Sewer Relief</span> in Philadelphia
              </h1>

              <div
                className="text-lg md:text-xl text-text/70 font-medium max-w-3xl mx-auto mb-12 leading-relaxed animate-fade-in-up [animation-delay:200ms]"
              >
                Clogged sink or sewer backup in Philly? We connect you with verified local professional drain cleaning experts across the Greater Philadelphia area. Get help within <span className="text-primary font-bold">30–60 minutes</span>.
              </div>

              <div
                className="flex flex-col sm:flex-row gap-6 w-full sm:w-auto mb-16 animate-fade-in-up [animation-delay:400ms]"
              >
                <a
                  href={mainTelLink}
                  className="flex items-center justify-center gap-4 px-10 py-6 bg-primary text-white rounded-2xl font-bold text-xl shadow-2xl shadow-primary/30 hover:bg-blue-700 hover:-translate-y-1 transition-all active:scale-95 group"
                >
                  <Phone size={24} fill="currentColor" className="group-hover:rotate-12 transition-transform" />
                  Call Now for Help
                </a>
                <a
                  href={mainTelLink}
                  className="flex items-center justify-center gap-4 px-10 py-6 bg-card border-2 border-border text-text rounded-2xl font-bold text-xl hover:border-primary transition-all active:scale-95"
                >
                  Free Estimate
                </a>
              </div>

              <div
                 className="flex flex-wrap justify-center gap-8 py-6 px-10 bg-card/50 border border-border rounded-full text-sm font-semibold text-text/60 animate-fade-in [animation-delay:600ms]"
              >
                 <div className="flex items-center gap-2"><Star size={18} className="text-accent fill-accent" /> Rated 4.9/5</div>
                 <div className="flex items-center gap-2"><ShieldCheck size={18} className="text-primary" /> Licensed PA Pros</div>
                 <div className="flex items-center gap-2"><Clock size={18} className="text-primary" /> Same-day Dispatch</div>
                 <div className="flex items-center gap-2"><MapPin size={18} className="text-primary" /> Full Philly Coverage</div>
              </div>
            </div>
          </div>
        </section>

        {/* 2. SERVICES GRID */}
        <section className="py-24 bg-card border-b border-border">
          <div className="container">
             <div className="text-center mb-20 space-y-4">
                <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-text">
                   Our Professional Philadelphia Services
                </h2>
                <p className="text-text/70 font-medium text-lg max-w-2xl mx-auto italic">
                    Reliable, local experts for all your drainage needs.
                </p>
             </div>

             <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  { title: "Kitchen Drain Unclogging", desc: "Fast removal of grease and food blockages in Philly homes.", icon: Utensils },
                  { title: "Bathroom Drain Services", desc: "Clear hair and soap scum from tubs and showers efficiently.", icon: Bath },
                  { title: "Sewer Main Line Cleaning", desc: "Professional clearing of main lines and heavy backups.", icon: Droplets },
                  { title: "Hydro Jetting Philly", desc: "High-pressure pipe cleaning for severe obstructions.", icon: Waves },
                  { title: "Camera Inspections", desc: "HD diagnostics for accurate pipe health assessment.", icon: Search },
                  { title: "Emergency 24/7 Relief", desc: "Fast response for urgent pipe overflows.", icon: Zap }
                ].map((s, i) => (
                  <div
                    key={i}
                    className="p-10 rounded-[2.5rem] bg-bg border border-border hover:border-primary/20 transition-all hover:shadow-2xl group flex flex-col items-center text-center shadow-sm"
                  >
                    <div className="w-16 h-16 rounded-2xl bg-primary/5 text-primary flex items-center justify-center mb-8 transition-colors group-hover:bg-primary group-hover:text-white shadow-inner">
                       <s.icon size={32} />
                    </div>
                    <h3 className="text-xl font-bold text-text mb-4 tracking-tight group-hover:text-primary transition-colors">{s.title}</h3>
                    <p className="text-sm text-text/60 font-medium leading-relaxed grow">{s.desc}</p>
                    <a href={mainTelLink} className="mt-8 text-primary font-bold text-sm flex items-center gap-2 group/link">
                       Call now <ChevronRight size={16} className="group-hover/link:translate-x-1 transition-transform" />
                    </a>
                  </div>
                ))}
             </div>
          </div>
        </section>

        {/* 3. TABLE SECTION */}
        <section className="py-24 bg-bg border-b border-border">
          <div className="container">
             <div className="text-center mb-16">
                <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-text mb-4">Service Availability in Philadelphia</h2>
                <p className="text-text/60 font-medium">Coverage areas and estimated response times for Greater Philadelphia.</p>
             </div>
             <div className="overflow-x-auto rounded-3xl border border-border bg-card shadow-xl">
               <table className="w-full text-left">
                 <thead>
                   <tr className="bg-bg/50 border-b border-border">
                     <th className="px-8 py-6 text-sm font-bold text-text/40 uppercase tracking-widest">Philadelphia Area</th>
                     <th className="px-8 py-6 text-sm font-bold text-text/40 uppercase tracking-widest">Estimated Arrival</th>
                     <th className="px-8 py-6 text-sm font-bold text-text/40 uppercase tracking-widest">Service Status</th>
                   </tr>
                 </thead>
                 <tbody className="divide-y divide-border">
                   {suburbs.map((s, i) => (
                     <tr key={i} className="hover:bg-primary/[0.02] transition-colors">
                       <td className="px-8 py-6 text-base font-bold text-text">{s}</td>
                       <td className="px-8 py-6 text-sm text-text/60 font-medium">30–60 Minutes</td>
                       <td className="px-8 py-6">
                          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-green-500/10 text-green-500 text-xs font-bold uppercase tracking-widest">
                             <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                             Available Now
                          </span>
                       </td>
                     </tr>
                   ))}
                 </tbody>
               </table>
             </div>
          </div>
        </section>

        {/* 4. FAQ */}
        <section className="py-24 bg-card border-b border-border">
           <div className="container-narrow">
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-center text-text mb-20 uppercase">
                Frequently Asked Questions
              </h2>
              <FAQClient faqs={faqs} cityName="Philadelphia" />
           </div>
        </section>

        {/* 5. FINAL CTA */}
        <section className="py-24 bg-bg">
           <div className="container-narrow">
              <div
                className="p-12 md:p-20 rounded-[4rem] bg-slate-900 border border-primary/20 text-white text-center shadow-2xl relative overflow-hidden group"
              >
                  <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-primary/20 blur-[150px] -translate-y-1/2 translate-x-1/2 rounded-full" />
                  <div className="relative z-10 space-y-10">
                    <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-white leading-tight">
                       Get Philadelphia Drain Help Now
                    </h2>
                    <p className="text-lg md:text-xl text-white/50 font-medium max-w-2xl mx-auto italic">
                       Available 24/7 across the Philadelphia metro area. Don't let a clog wait.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                       <a
                          href={mainTelLink}
                          className="w-full sm:w-auto flex items-center justify-center gap-4 px-12 py-6 bg-primary text-white rounded-2xl font-bold text-2xl shadow-xl hover:bg-blue-700 transition-all active:scale-95 group tracking-tight"
                       >
                          <Phone size={28} fill="currentColor" className="group-hover:rotate-12 transition-transform" />
                          Call: (724) 750-6935
                       </a>
                    </div>
                  </div>
              </div>
           </div>
        </section>

      </main>
    </div>
  );
}
