import Link from "next/link";
import { Zap, Phone, Droplets, ArrowRight, ShieldCheck } from "lucide-react";
import { ServicePageLayout } from "@/components/service-page-layout";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Expert Hydro Jetting & Main Line Cleaning Services | Drain Cleaning Near Me",
  description: "Professional hydro jet drain cleaning for main lines & kitchen sinks; offering 24/7 high-pressure hydro jetting & sewer line cleaning near you. Fast response nationwide.",
  alternates: {
    canonical: "https://www.draincleaningnearme.us/hydro-jetting-cleaning-services/",
  }
};

export default function HydroJettingPage() {
  return (
    <ServicePageLayout
      title="Hydro Jetting & Sewer Line Cleaning"
      subtitle="Advanced High-Pressure Restorative Cleaning"
      description={
        <>
          <p>
            When <span className="text-white font-bold italic">&quot;drain cleaning near me&quot;</span> or standard snaking is not enough, hydro jetting 
            and professional sewer line cleaning is the ultimate solution. This powerful technology 
            uses high-pressure water jets to blast through the toughest grease, roots and debris, 
            restoring your pipes to like-new condition.
          </p>
          <p>
            At DrainCleaningNearMe, we connect you with licensed local experts who specialize in 
            hydro jetting services for both residential and commercial properties nationwide. 
            Available 24/7, our network provides fast help for main line clogs and recurring 
            drainage problems.
          </p>
        </>
      }
      features={[
        "High-pressure water jetting (up to 8,000 PSI)",
        "Main sewer line & branch cleaning",
        "Grease, sludge & mineral scale removal",
        "Non-invasive pipe scrubbing technology",
        "Commercial & residential applications",
        "Environmentally friendly, chemical-free process",
      ]}
      whyChooseUs={[
        "Cleans the entire pipe circumference—not just clogs",
        "Prevents future backups by removing sticky residue",
        "Effective against heavy grease & root intrusion",
        "Technicians inspect pipes for safety before jetting",
        "Long-lasting results compared to standard snaking",
      ]}
    >
      <div className="space-y-24">
        {/* Technology Section */}
        <section className="p-10 md:p-14 rounded-[3rem] bg-[#111827]/80 border border-white/5 shadow-2xl italic relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl opacity-50" />
          <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight text-white mb-8 relative z-10">
            Advanced <span className="text-primary italic">Drain Cleaning</span> Technology
          </h2>
          <div className="grid md:grid-cols-2 gap-12 relative z-10">
            <div className="space-y-6">
              <h3 className="text-xl font-black uppercase italic tracking-tight text-primary">How Hydro Jetting Works</h3>
              <p className="text-slate-400 font-bold uppercase tracking-widest text-xs leading-loose">
                Hydro jetting uses high-pressure water (1,500 to 8,000 PSI) to remove clogs and scour pipe walls clean. 
                A specialized nozzle blasts water in multiple directions, scrubbing the entire pipe interior.
              </p>
              <ul className="space-y-4">
                {[
                  "Inspecting the line with a camera to see pipe condition.",
                  "Inserting a hydro jet nozzle into the cleanout.",
                  "Gradually increasing PSI while feeding the hose.",
                  "Scrubbing and flushing away all remaining residue."
                ].map((item, i) => (
                  <li key={i} className="flex gap-3 text-[11px] font-black uppercase italic text-slate-500 tracking-widest leading-relaxed">
                     <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1" /> {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="p-10 rounded-[2.5rem] bg-primary/5 border border-primary/20 flex flex-col justify-center text-center">
              <h3 className="text-lg font-black uppercase italic text-white mb-4">Ideal for Tough Clogs</h3>
              <p className="text-slate-400 font-bold uppercase tracking-widest text-[11px] leading-loose">
                Perfect for grease buildup, soap sludge, tree root intrusion, and recurring blockages 
                where standard snaking frequently fails.
              </p>
            </div>
          </div>
        </section>

        {/* Comparison Table */}
        <section className="bg-gradient-to-br from-[#111827] to-[#0B1120] rounded-[3rem] p-10 md:p-14 border border-white/5 shadow-2xl italic">
          <h2 className="text-2xl font-black uppercase italic mb-10 text-white text-center">Hydro Jetting vs. Traditional Methods</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-white/10 uppercase tracking-widest text-[10px] font-black text-slate-500 italic">
                  <th className="py-4 px-6">Method</th>
                  <th className="py-4 px-6">How It Works</th>
                  <th className="py-4 px-6">Typical Result</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-white/5 hover:bg-white/5 transition-colors group">
                  <td className="py-6 px-6 font-black text-white italic group-hover:text-primary transition-colors uppercase">Snaking</td>
                  <td className="py-6 px-6 text-[11px] font-bold text-slate-400 uppercase tracking-widest leading-relaxed">Cuts a narrow path through clogs.</td>
                  <td className="py-6 px-6 text-[10px] font-black text-slate-500 uppercase tracking-widest">Often leaves residue behind.</td>
                </tr>
                <tr className="hover:bg-primary/5 transition-colors group">
                  <td className="py-6 px-6 font-black text-primary italic transition-colors uppercase">Hydro Jetting</td>
                  <td className="py-6 px-6 text-[11px] font-bold text-slate-200 uppercase tracking-widest leading-relaxed">Cleans full pipe interior circumference.</td>
                  <td className="py-6 px-6 text-[10px] font-black text-primary uppercase tracking-widest">Fully restorative & quote;like-new&quot; cleaning.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="p-10 md:p-14 rounded-[3rem] bg-[#111827]/80 border border-white/5 shadow-2xl italic">
          <h2 className="text-3xl font-black uppercase italic mb-12 text-center text-white">
            Hydro Jetting <span className="text-primary">FAQ</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            {[
              { q: "Is hydro jetting safe for my pipes?", a: "When performed by licensed pros using proper pressure, it is safe for most plumbing. Technicians inspect pipes first to adjust PSI." },
              { q: "How is hydro jetting different from snaking?", a: "Snaking dislodges clogs but leaves residue. Hydro jetting scours the entire pipe wall clean for longer-lasting results." },
              { q: "Do I always need hydro jetting for clogs?", a: "Not always. Simple clogs respond to snaking. Hydro jetting is best for recurring issues or heavy grease buildup." },
              { q: "Can hydro jetting cut tree roots?", a: "Yes. With the right nozzle and pressure, it can cut many root intrusions, though severely damaged pipes may need repair." },
              { q: "How often should I schedule service?", a: "Commercial kitchens often need it annually. Residential homes usually only need it for serious or recurring problems." }
            ].map((faq, i) => (
              <div key={i} className="space-y-3">
                 <h4 className="text-xs font-black uppercase tracking-widest text-white italic">Q: {faq.q}</h4>
                 <p className="text-[11px] font-bold text-slate-500 uppercase tracking-widest leading-relaxed">A: {faq.a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Benefits Grid */}
        <section className="p-10 md:p-14 rounded-[3rem] bg-[#111827]/80 border border-white/5 shadow-2xl italic">
          <h2 className="text-2xl font-black uppercase italic mb-10 text-white text-center underline decoration-primary/30 underline-offset-8">Long-Term Benefits</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
             {[
               { t: "Deep Cleaning", d: "Removes every trace of grease and sludge from pipe walls." },
               { t: "Clog Prevention", d: "By cleaning the whole pipe, you stop debris from catching and building up again." },
               { t: "Eco-Friendly", d: "Pure water technology—no harsh chemicals to harm your pipes or environment." },
               { t: "System Integrity", d: "Restores your pipes to original diameter and performance levels." },
               { t: "Damage Detection", d: "Often paired with camera inspection to catch pipe faults early." },
               { t: "Versatile", d: "Effective for kitchen branch lines as well as large main sewer lines." }
             ].map((item, i) => (
               <div key={i} className="p-6 rounded-2xl bg-white/5 border border-white/5 hover:border-primary/50 transition-all group">
                  <h4 className="text-xs font-black uppercase tracking-widest text-primary mb-3 italic group-hover:text-white">{item.t}</h4>
                  <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest leading-relaxed">{item.d}</p>
               </div>
             ))}
          </div>
        </section>

        {/* Conclusion CTA */}
        <div className="text-center space-y-8 p-12 rounded-[3.5rem] bg-gradient-to-br from-primary/10 to-accent/5 border border-primary/20 italic shadow-primary-glow/20">
          <h2 className="text-3xl font-black uppercase tracking-tight text-white italic">Upgrade to a Permanent Fix</h2>
          <p className="text-slate-400 font-bold uppercase tracking-widest text-xs max-w-2xl mx-auto leading-relaxed">
            Stop fighting the same clogs. Upgrade from basic snaking to professional 
            hydro jet drain cleaning today and enjoy free-flowing pipes.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
             <Link href="tel:+17247506935" className="h-16 px-12 bg-accent text-white rounded-2xl flex items-center justify-center gap-3 font-black uppercase italic tracking-widest shadow-accent-glow hover:scale-105 transition-all">
                <Phone fill="currentColor" size={24} /> (724) 750-6935
             </Link>
          </div>
          <p className="text-[10px] text-slate-500 font-black uppercase tracking-widest">
            24/7 Professional Hydro Jetting &middot; Licensed Local Experts &middot; Advanced Equipment
          </p>
        </div>
      </div>
    </ServicePageLayout>
  );
}
