import Link from "next/link";
import { Zap, Phone, Droplets, ArrowRight, ShieldCheck } from "lucide-react";
import { ServicePageLayout } from "@/components/service-page-layout";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Expert Hydro Jetting & Main Line Cleaning Services | Drain Cleaning Near Me",
  description: "Professional hydro jet drain cleaning for main lines & kitchen sinks; offering 24/7 high-pressure hydro jetting & sewer line cleaning near you. Fast response nationwide.",
  alternates: {
    canonical: "https://www.draincleaningnearme.us/hydro-jetting-cleaning-services",
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
            When <span className="text-text font-bold ">&quot;drain cleaning near me&quot;</span> or standard snaking is not enough, hydro jetting 
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
        <section className="p-10 md:p-14 rounded-xl bg-card border border-border shadow-sm  relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl opacity-50" />
          <h3 className="text-3xl md:text-4xl font-bold uppercase tracking-tight text-text mb-8 relative z-10">
            Advanced <span className="text-primary ">Drain Cleaning</span> Technology
          </h3>
          <div className="grid md:grid-cols-2 gap-12 relative z-10">
            <div className="space-y-6">
              <h3 className="text-xl font-bold uppercase  tracking-tight text-primary">How Hydro Jetting Works</h3>
              <p className="text-text/80 font-bold uppercase tracking-widest text-xs leading-loose">
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
                  <li key={i} className="flex gap-3 text-[11px] font-bold uppercase  text-text/80 tracking-widest leading-relaxed">
                     <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1" /> {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="p-10 rounded-xl bg-primary/5 border border-primary/20 flex flex-col justify-center text-center">
              <h3 className="text-lg font-bold uppercase  text-text mb-4">Ideal for Tough Clogs</h3>
              <p className="text-text/80 font-bold uppercase tracking-widest text-[11px] leading-loose">
                Perfect for grease buildup, soap sludge, tree root intrusion, and recurring blockages 
                where standard snaking frequently fails.
              </p>
            </div>
          </div>
        </section>

        {/* Comparison Table */}
        <section className="bg-bg rounded-xl p-10 md:p-14 border border-border shadow-sm ">
          <h3 className="text-2xl font-bold uppercase  mb-10 text-text text-center">Hydro Jetting vs. Traditional Methods</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-border uppercase tracking-widest text-[10px] font-bold text-text/80 ">
                  <th className="py-4 px-6">Method</th>
                  <th className="py-4 px-6">How It Works</th>
                  <th className="py-4 px-6">Typical Result</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-border hover:bg-bg border-border/50 transition-colors group">
                  <td className="py-6 px-6 font-bold text-text  group-hover:text-primary transition-colors uppercase">Snaking</td>
                  <td className="py-6 px-6 text-[11px] font-bold text-text/80 uppercase tracking-widest leading-relaxed">Cuts a narrow path through clogs.</td>
                  <td className="py-6 px-6 text-[10px] font-bold text-text/80 uppercase tracking-widest">Often leaves residue behind.</td>
                </tr>
                <tr className="hover:bg-primary/5 transition-colors group">
                  <td className="py-6 px-6 font-bold text-primary  transition-colors uppercase">Hydro Jetting</td>
                  <td className="py-6 px-6 text-[11px] font-bold text-slate-200 uppercase tracking-widest leading-relaxed">Cleans full pipe interior circumference.</td>
                  <td className="py-6 px-6 text-[10px] font-bold text-primary uppercase tracking-widest">Fully restorative & quote;like-new&quot; cleaning.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="p-10 md:p-14 rounded-xl bg-card border border-border shadow-sm ">
          <h3 className="text-3xl font-bold uppercase mb-12 text-center text-text">
            Hydro Jetting <span className="text-primary">FAQ</span>
          </h3>
          <div className="grid md:grid-cols-2 gap-12">
            {[
              { q: "Is hydro jetting safe for my pipes?", a: "When performed by licensed pros using proper pressure, it is safe for most plumbing. Technicians inspect pipes first to adjust PSI." },
              { q: "How is hydro jetting different from snaking?", a: "Snaking dislodges clogs but leaves residue. Hydro jetting scours the entire pipe wall clean for longer-lasting results." },
              { q: "Do I always need hydro jetting for clogs?", a: "Not always. Simple clogs respond to snaking. Hydro jetting is best for recurring issues or heavy grease buildup." },
              { q: "Can hydro jetting cut tree roots?", a: "Yes. With the right nozzle and pressure, it can cut many root intrusions, though severely damaged pipes may need repair." },
              { q: "How often should I schedule service?", a: "Commercial kitchens often need it annually. Residential homes usually only need it for serious or recurring problems." }
            ].map((faq, i) => (
              <div key={i} className="space-y-3">
                 <h4 className="text-xs font-bold uppercase tracking-widest text-text ">Q: {faq.q}</h4>
                 <p className="text-[11px] font-bold text-text/80 uppercase tracking-widest leading-relaxed">A: {faq.a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Benefits Grid */}
        <section className="p-10 md:p-14 rounded-xl bg-card border border-border shadow-sm ">
          <h3 className="text-2xl font-bold uppercase  mb-10 text-text text-center underline decoration-primary/30 underline-offset-8">Long-Term Benefits</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
             {[
               { t: "Deep Cleaning", d: "Removes every trace of grease and sludge from pipe walls." },
               { t: "Clog Prevention", d: "By cleaning the whole pipe, you stop debris from catching and building up again." },
               { t: "Eco-Friendly", d: "Pure water technology—no harsh chemicals to harm your pipes or environment." },
               { t: "System Integrity", d: "Restores your pipes to original diameter and performance levels." },
               { t: "Damage Detection", d: "Often paired with camera inspection to catch pipe faults early." },
               { t: "Versatile", d: "Effective for kitchen branch lines as well as large main sewer lines." }
             ].map((item, i) => (
               <div key={i} className="p-6 rounded-lg bg-bg border-border/50 border border-border hover:border-primary/20 transition-all hover:shadow-md transition-all group">
                  <h4 className="text-xs font-bold uppercase tracking-widest text-primary mb-3  group-hover:text-text">{item.t}</h4>
                  <p className="text-[10px] font-bold text-text/80 uppercase tracking-widest leading-relaxed">{item.d}</p>
               </div>
             ))}
          </div>
        </section>

        {/* Conclusion CTA */}
        <div className="text-center space-y-8 p-12 rounded-xl bg-gradient-to-br from-primary/10 to-accent/5 border border-primary/20  ">
          <h3 className="text-3xl font-bold uppercase tracking-tight text-text">Upgrade to a Permanent Fix</h3>
          <p className="text-text/80 font-bold uppercase tracking-widest text-xs max-w-2xl mx-auto leading-relaxed">
            Stop fighting the same clogs. Upgrade from basic snaking to professional 
            hydro jet drain cleaning today and enjoy free-flowing pipes.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
             <Link href="tel:+17247506935" className="h-16 px-12 bg-accent text-text rounded-lg flex items-center justify-center gap-3 font-bold uppercase  tracking-widest shadow-md hover:scale-105 transition-all">
                <Phone fill="currentColor" size={24} /> (724) 750-6935
             </Link>
          </div>
          <p className="text-[10px] text-text/80 font-bold uppercase tracking-widest">
            24/7 Professional Hydro Jetting &middot; Licensed Local Experts &middot; Advanced Equipment
          </p>
        </div>
      </div>
    </ServicePageLayout>
  );
}
