import Link from "next/link";
import { Zap, Phone, MapPin, Building2, Utensils, Construction, Search } from "lucide-react";
import { ServicePageLayout } from "@/components/service-page-layout";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Emergency Drain Cleaning Services NYC | Licensed & Insured Plumbers",
  description: "Expert drain cleaning New York services. Our NYC drain cleaning pros handle sewer cleaning & clogged drain repair; Manhattan to Bronx. Reliable, licensed & 5-star rated. Book today",
  alternates: {
    canonical: "https://www.draincleaningnearme.us/drain-cleaning-nyc/",
  }
};

export default function NYCPage() {
  return (
    <ServicePageLayout
      title="Drain Cleaning NYC"
      subtitle="24/7 Expert Relief for Manhattan, Brooklyn, Queens, Bronx & Staten Island"
      description={
        <>
          <p>
            Need fast, reliable drain cleaning service in New York? New York City faces 
            unique plumbing challenges; old buildings, narrow pipes, heavy use and aging 
            sewer infrastructure. From Manhattan apartments to Brooklyn brownstones, 
            we connect you with licensed experts for any emergency backup.
          </p>
          <p>
            At DrainCleaningNearMe, we provide 24/7 priority support across all <span className="text-white font-bold italic">five boroughs</span>. 
            Whether you are dealing with a grease clog in a restaurant or a flooded basement 
            in Queens, our local NYC technicians are ready to dispatch immediately.
          </p>
        </>
      }
      features={[
        "24/7 NYC emergency drain dispatch",
        "Licensed & insured local plumbers",
        "Expertise in Manhattan high-rise systems",
        "Brooklyn brownstone main line repairs",
        "Restaurant grease & commercial jetting",
        "HD camera inspections for older pipes",
      ]}
      whyChooseUs={[
        "Understand unique NYC plumbing code & quirks",
        "Rapid arrival from Financial District to Harlem",
        "Equipped for narrow NYC apartment lines",
        "Transparent upfront pricing for city residents",
        "Vetted 5-star rated local NYC professionals",
      ]}
    >
      <div className="space-y-24">
        {/* NYC Challenges Section */}
        <section className="p-10 md:p-14 rounded-[3rem] bg-[#111827]/80 border border-white/5 shadow-2xl italic relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl opacity-50" />
          <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight text-white mb-8 relative z-10">
            NYC <span className="text-primary italic">Plumbing</span> Challenges
          </h2>
          <div className="grid md:grid-cols-3 gap-8 relative z-10">
            {[
              { icon: Utensils, title: "Grease & Food", text: "A top cause in Manhattan. We remove hardened grease that traps debris." },
              { icon: Building2, title: "Aging Pipes", text: "Corroded cast-iron or clay sewers require expert camera diagnosis." },
              { icon: Construction, title: "Non-Flushables", text: "Wipes and paper towels snag in older lines, flooding basements." }
            ].map((item, i) => (
              <div key={i} className="p-6 rounded-2xl bg-white/5 border border-white/5 hover:border-primary/50 transition-all group">
                <item.icon className="text-primary mb-4 group-hover:scale-110 transition-transform" size={32} />
                <h4 className="font-black uppercase italic tracking-tight mb-2 text-sm text-white group-hover:text-primary transition-colors">{item.title}</h4>
                <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Full Range of NYC Services */}
        <section className="grid lg:grid-cols-2 gap-8">
          <div className="p-10 md:p-14 rounded-[3rem] bg-[#111827]/80 border border-white/5 shadow-2xl italic">
            <h2 className="text-2xl font-black uppercase italic mb-8 text-white">Our Drain Solutions in NYC</h2>
            <div className="space-y-8">
              {[
                { title: "Drain Unclogging", desc: "Fast relief from bathroom and kitchen blockages in Manhattan & Brooklyn apartments." },
                { title: "Hydro Jetting", desc: "The most effective option for grease clogs in NYC restaurants and office buildings." },
                { title: "Sewer Line Cleaning", desc: "We locate and clear roots and debris from aging NYC sewer systems." },
                { title: "Sewer Pipe Inspection", desc: "HD cameras reveal cracks or collapses without digging—essential for NYC properties." }
              ].map((item, i) => (
                <div key={i} className="group">
                  <h4 className="text-xs font-black uppercase tracking-widest text-primary mb-2 italic underline decoration-primary/30 underline-offset-4">{item.title}</h4>
                  <p className="text-[11px] font-medium text-slate-500 uppercase tracking-widest leading-relaxed group-hover:text-slate-400 transition-colors">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="p-10 md:p-14 rounded-[3rem] bg-gradient-to-br from-[#111827] to-[#0B1120] border border-white/5 shadow-2xl italic flex flex-col justify-center text-center">
             <MapPin size={64} className="text-primary mx-auto mb-6 opacity-50" />
             <h2 className="text-2xl font-black uppercase italic mb-4 text-white">Serving All 5 Boroughs</h2>
             <p className="text-slate-400 font-bold uppercase tracking-widest text-[11px] leading-loose mb-8">
                From the Financial District to Harlem, Astoria to Long Island City, and beyond. 
                Our local NYC experts provide same-day or next-dispatch service.
             </p>
             <div className="flex flex-wrap justify-center gap-3">
                {["Manhattan", "Brooklyn", "Queens", "The Bronx", "Staten Island"].map((area) => (
                  <span key={area} className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-[10px] font-black uppercase tracking-widest text-primary italic">
                    {area}
                  </span>
                ))}
             </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="p-10 md:p-14 rounded-[3rem] bg-[#111827]/80 border border-white/5 shadow-2xl italic">
          <h2 className="text-3xl font-black uppercase italic mb-12 text-center text-white">
            NYC Drain <span className="text-primary">FAQ</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            {[
              { q: "How much does drain cleaning cost in NYC?", a: "Pricing depends on severity and line length. Simple clogs are often quoted fairly over the phone. Sewer cleaning and hydro jetting range slightly higher." },
              { q: "What are the signs of a sewer blockage in NYC?", a: "Multiple drains backing up, foul odors, gurgling in pipes, and water backing into bathtubs are clear signs you need a main line inspection." },
              { q: "How fast can emergency cleaners in NYC arrive?", a: "Many local professionals can arrive within a few hours, especially for urgent overflows across Manhattan, Brooklyn, and the Bronx." },
              { q: "Do you serve multi-unit apartment complexes?", a: "Yes. Our professionals are equipped to handle complex vertical drain lines and multi-unit plumbing systems common in NYC." }
            ].map((faq, i) => (
              <div key={i} className="space-y-3">
                 <h4 className="text-xs font-black uppercase tracking-widest text-white italic">Q: {faq.q}</h4>
                 <p className="text-[11px] font-bold text-slate-500 uppercase tracking-widest leading-relaxed">A: {faq.a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Conclusion CTA */}
        <div className="text-center space-y-8 p-12 rounded-[3.5rem] bg-gradient-to-br from-primary/10 to-accent/5 border border-primary/20 italic shadow-primary-glow/20">
          <h2 className="text-3xl font-black uppercase tracking-tight text-white italic">Emergency Help Across New York</h2>
          <p className="text-slate-400 font-bold uppercase tracking-widest text-xs max-w-2xl mx-auto leading-relaxed">
            Protect your property and your health. Whether it&apos;s a quick sink repair or a major 
            sewer overflow, our local licensed NYC experts are available 24/7.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
             <Link href="tel:+17247506935" className="h-16 px-12 bg-accent text-white rounded-2xl flex items-center justify-center gap-3 font-black uppercase italic tracking-widest shadow-accent-glow hover:scale-105 transition-all">
                <Phone fill="currentColor" size={24} /> (724) 750-6935
             </Link>
          </div>
          <p className="text-[10px] text-slate-500 font-black uppercase tracking-widest">
            Licensed NYC Experts &middot; 24/7 Priority Emergency Dispatch &middot; Free City-Wide Estimates
          </p>
        </div>
      </div>
    </ServicePageLayout>
  );
}
