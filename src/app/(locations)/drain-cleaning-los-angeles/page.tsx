import Link from "next/link";
import { Zap, Phone, MapPin, Building2, Utensils, Construction, Search, ShieldCheck } from "lucide-react";
import { ServicePageLayout } from "@/components/service-page-layout";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Drain Cleaning Services Los Angeles | Licensed & Insured Plumbers",
  description: "Expert drain cleaning services in Los Angeles. From clogged drain repair to hydrojetting, we offer 24/7 emergency service. Licensed & fast; Call now for a free estimate",
  alternates: {
    canonical: "https://www.draincleaningnearme.us/drain-cleaning-los-angeles/",
  }
};

export default function LAPage() {
  return (
    <ServicePageLayout
      title="Drain Cleaning Los Angeles"
      subtitle="24/7 Expert Relief Across Los Angeles County"
      description={
        <>
          <p>
            Stop leaks, backups and odors before they ruin your day. Living in Los Angeles 
            means dealing with unique drain nightmares. Aging infrastructure from the 
            <span className="text-text font-bold ">1920s building boom</span> clogs pipes with 
            decades of buildup.
          </p>
          <p>
            At DrainCleaningNearMe, we connect you with licensed professionals who fix 
            drains same-day in Los Angeles. Whether you are in Hollywood, Santa Monica, 
            or Pasadena, our network is available 24/7 for immediate dispatch.
          </p>
        </>
      }
      features={[
        "24/7 LA emergency drain dispatch",
        "Licensed & insured local plumbers",
        "Expertise in historic 1920s pipe systems",
        "Hard water scale & mineral removal",
        "Tree root extraction in Hollywood Hills",
        "Restaurant grease & commercial jetting",
      ]}
      whyChooseUs={[
        "California certified & bonded professionals",
        "Rapid arrival from Downtown to the Valley",
        "Equipped for LA's unique shifting soil issues",
        "Transparent upfront pricing for LA residents",
        "Vetted 5-star rated local LA experts",
      ]}
    >
      <div className="space-y-24">
        {/* LA Challenges Section */}
        <section className="p-10 md:p-14 rounded-xl bg-card border border-border shadow-sm  relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl opacity-50" />
          <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-tight text-text mb-8 relative z-10">
            LA <span className="text-primary ">Drain</span> Nightmares
          </h2>
          <div className="grid md:grid-cols-2 gap-12 relative z-10">
            <div className="space-y-6">
              <p className="text-text/80 font-bold uppercase tracking-widest text-xs leading-loose">
                Hard water minerals from local sources create stubborn scale. Tree roots invade 
                sewers in shifting soil, especially in Hollywood Hills and Pasadena. Do not let 
                a slow sink turn into a sewage backup.
              </p>
              <div className="grid gap-4">
                 {[
                   { icon: Building2, title: "Decades of Buildup", text: "Aging infrastructure from the city's early boom years." },
                   { icon: ShieldCheck, title: "Health Hazards", text: "Fix leaks and odors before they cause water damage or mold." }
                 ].map((item, i) => (
                   <div key={i} className="flex gap-4 p-4 rounded-xl bg-bg border-border/50 border border-border group hover:border-primary/20 transition-all hover:shadow-md transition-colors">
                      <item.icon className="text-primary shrink-0 group-hover:scale-110 transition-transform" />
                      <div>
                        <h4 className="text-xs font-bold uppercase tracking-widest text-text  mb-1">{item.title}</h4>
                        <p className="text-[10px] font-bold text-text/80 uppercase tracking-widest leading-relaxed">{item.text}</p>
                      </div>
                   </div>
                 ))}
              </div>
            </div>
            <div className="p-10 rounded-xl bg-primary/5 border border-primary/20 flex flex-col justify-center text-center">
               <h3 className="text-lg font-bold uppercase  text-text mb-4">Starting at $99</h3>
               <p className="text-text/80 font-bold uppercase tracking-widest text-[11px] leading-loose">
                  Professional drain cleaning starting from just $99. Free estimates, 
                  no hidden fees, and same-day clogged drain repair available now!
               </p>
            </div>
          </div>
        </section>

        {/* Full Range of LA Services */}
        <section className="grid lg:grid-cols-2 gap-8">
          <div className="p-10 md:p-14 rounded-xl bg-card border border-border shadow-sm ">
            <h2 className="text-2xl font-bold uppercase  mb-8 text-text">Our LA Support Range</h2>
            <div className="space-y-8">
              {[
                { title: "Drain Cleaning LA", desc: "High-pressure cleaning removes grease and hair from sinks, tubs, and toilets instantly." },
                { title: "Sewer Line Cleaning", desc: "Powerful rooters clear main lines, stopping overflow and protecting your foundation." },
                { title: "Hydro Jetting LA", desc: "4,000 PSI water jets blast away blockages without harsh chemicals—perfect for Santa Monica." },
                { title: "Camera Inspection", desc: "HD cameras pinpoint cracks or corrosion without unnecessary digging or costs." }
              ].map((item, i) => (
                <div key={i} className="group">
                  <h4 className="text-xs font-bold uppercase tracking-widest text-primary mb-2  underline decoration-primary/30 underline-offset-4">{item.title}</h4>
                  <p className="text-[11px] font-medium text-text/80 uppercase tracking-widest leading-relaxed group-hover:text-text/80 transition-colors">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="p-10 md:p-14 rounded-xl bg-bg border border-border shadow-sm  flex flex-col justify-center text-center">
             <MapPin size={64} className="text-primary mx-auto mb-6 opacity-50" />
             <h2 className="text-2xl font-bold uppercase  mb-4 text-text">Across LA County</h2>
             <p className="text-text/80 font-bold uppercase tracking-widest text-[11px] leading-loose mb-8">
                From Downtown LA to Santa Monica, Hollywood to Long Beach. Local professionals 
                mean faster response—we are often just minutes away.
             </p>
             <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {["Downtown LA", "Hollywood", "Beverly Hills", "Santa Monica", "Pasadena", "Sherman Oaks", "Long Beach", "Glendale", "Culver City"].map((area) => (
                  <span key={area} className="px-3 py-1.5 bg-bg border-border/50 border border-border rounded-lg text-[9px] font-bold uppercase tracking-widest text-primary ">
                    {area}
                  </span>
                ))}
             </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="p-10 md:p-14 rounded-xl bg-card border border-border shadow-sm ">
          <h2 className="text-3xl font-bold uppercase  mb-12 text-center text-text">
            LA Drain <span className="text-primary">FAQ</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            {[
              { q: "How much does drain cleaning cost in Los Angeles?", a: "Basic cleaning starts at $99. Sewer cleaning or hydro jetting ranges from $250–$500. We offer free estimates with no hidden surprises." },
              { q: "Do you offer emergency drain cleaning services?", a: "Yes! 24/7 drain cleaning services in Los Angeles. Our local network typically responds in 60 minutes or less." },
              { q: "What causes recurring drain clogs in LA?", a: "Grease, hair, tree roots, and hard water buildup are the primary culprits. Our hydro jetting service prevents these repeats." },
              { q: "Is hydro jetting safe for old pipes?", a: "Absolutely. It's actually gentler than mechanical snaking and safe for LA's older pipe systems, clearing 99% of blockages." },
              { q: "Do you handle commercial drain cleaning in LA?", a: "Yes. From homes in Pasadena to offices Downtown and restaurants in Santa Monica, we handle all residential and commercial jobs." }
            ].map((faq, i) => (
              <div key={i} className="space-y-3">
                 <h4 className="text-xs font-bold uppercase tracking-widest text-text ">Q: {faq.q}</h4>
                 <p className="text-[11px] font-bold text-text/80 uppercase tracking-widest leading-relaxed">A: {faq.a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Conclusion CTA */}
        <div className="text-center space-y-8 p-12 rounded-xl bg-gradient-to-br from-primary/10 to-accent/5 border border-primary/20  ">
          <h2 className="text-3xl font-bold uppercase tracking-tight text-text ">Clear Your LA Drains Today</h2>
          <p className="text-text/80 font-bold uppercase tracking-widest text-xs max-w-2xl mx-auto leading-relaxed">
            Clogged drains won&apos;t fix themselves. Protecting your family, property 
            and peace of mind with licensed, 5-star rated LA professionals.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
             <Link href="tel:+17247506935" className="h-16 px-12 bg-accent text-text rounded-lg flex items-center justify-center gap-3 font-bold uppercase  tracking-widest shadow-md hover:scale-105 transition-all">
                <Phone fill="currentColor" size={24} /> (724) 750-6935
             </Link>
          </div>
          <p className="text-[10px] text-text/80 font-bold uppercase tracking-widest">
            California Licensed PL-000000 &middot; 20+ Years Experience &middot; Same-Day Dispatch Available
          </p>
        </div>
      </div>
    </ServicePageLayout>
  );
}
