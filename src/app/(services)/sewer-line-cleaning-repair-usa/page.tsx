import Link from "next/link";
import { Zap, Phone, ShieldCheck, Search, Drill } from "lucide-react";
import { ServicePageLayout } from "@/components/service-page-layout";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Professional Sewer Line Cleaning & Main Line Repair | Drain Cleaning Near Me",
  description: "Expert sewer line cleaning & repair services nationwide. Professional main line drain cleaning near me. 24/7 licensed local experts for sewer backups & tree root removal.",
  alternates: {
    canonical: "https://www.draincleaningnearme.us/sewer-line-cleaning-repair-usa/",
  }
};

export default function SewerLinePage() {
  return (
    <ServicePageLayout
      title="Sewer Line Cleaning & Repair"
      subtitle="Main Line Experts — Professional Support Across the USA"
      description={
        <>
          <p>
            Facing a main sewer line clog or a stubborn backup? When you need <span className="text-text font-bold ">&quot;sewer cleaning near me&quot;</span> 
            or <span className="text-text font-bold ">&quot;main line drain cleaning&quot;</span> services, you need licensed experts who can handle 
            the big jobs. A blocked sewer line is a serious issue that requires professional equipment 
            to resolve safely.
          </p>
          <p>
            At DrainCleaningNearMe, we connect you with local licensed specialists who provide 
            expert sewer line cleaning and repair across the USA. Our network is available 24/7 
            for emergency sewer service.
          </p>
        </>
      }
      features={[
        "Main sewer line cleaning & snaking",
        "Emergency sewer line repair",
        "Tree root removal from sewer pipes",
        "Trenchless sewer line solutions",
        "Cast iron & PVC pipe repair",
        "Full system diagnostic inspections",
      ]}
      whyChooseUs={[
        "Licensed experts for complex main line issues",
        "24/7 emergency response for sewer backups",
        "Advanced video diagnostic technology",
        "High-pressure hydro jetting availability",
        "Comprehensive property protection",
      ]}
    >
      <div className="space-y-24">
        {/* Understanding Section */}
        <section className="p-10 md:p-14 rounded-xl bg-card border border-border shadow-sm  relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl opacity-50" />
          <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-tight text-text mb-8 relative z-10">
            Understanding <span className="text-primary ">Sewer Line</span> Problems
          </h2>
          <div className="grid md:grid-cols-2 gap-12 relative z-10">
            <div className="space-y-6">
              <p className="text-text/80 font-bold uppercase tracking-widest text-xs leading-loose">
                Your home&apos;s main sewer line carries wastewater from every fixture out to the city sewer or septic system. 
                When this line is blocked, your entire plumbing system is affected at once.
              </p>
              <div className="space-y-6">
                <h3 className="text-xl font-bold uppercase  tracking-tight text-primary">Key Indicators</h3>
                <ul className="space-y-4">
                  {[
                    "Multiple drains backing up at the same time.",
                    "Toilets gurgling or bubbles rising automatically.",
                    "Foul sewage odors inside or outside the home.",
                    "Water rising in shower/tub when you flush a toilet."
                  ].map((item, i) => (
                    <li key={i} className="flex gap-3 text-[11px] font-bold uppercase  text-text/80 tracking-widest leading-relaxed">
                       <Search size={14} className="text-primary shrink-0" /> {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="p-10 rounded-xl bg-primary/5 border border-primary/20 flex flex-col justify-center text-center">
               <h3 className="text-lg font-bold uppercase  text-text mb-4">Immediate Action Required</h3>
               <p className="text-text/80 font-bold uppercase tracking-widest text-[11px] leading-loose">
                  A blocked sewer is an emergency. It can lead to property damage, health risks 
                  from bacteria, and structural weakening.
               </p>
            </div>
          </div>
        </section>

        {/* Causes & Solutions */}
        <section className="grid lg:grid-cols-2 gap-8">
          <div className="p-10 md:p-14 rounded-xl bg-card border border-border shadow-sm ">
            <h2 className="text-2xl font-bold uppercase  mb-8 text-text">Common Causes of Sewer Blocks</h2>
            <div className="space-y-8">
              {[
                { title: "Tree Root Intrusion", desc: "Roots naturally seek moisture and grow into small cracks, expanding and creating massive blockages." },
                { title: "Grease & Sludge", desc: "Hardened grease traps other debris like wipes and hair, narrowing the pipe over time." },
                { title: "Aging & Damaged Pipes", desc: "Clay or cast iron pipes can fracture, collapse or shift, causing immediate flow failure." },
                { title: "Foreign Objects", desc: "Flushable wipes, toys, or hygiene items that do not break down properly in the waste stream." }
              ].map((cause, i) => (
                <div key={i} className="group">
                  <h4 className="text-xs font-bold uppercase tracking-widest text-primary mb-2  underline decoration-primary/30 underline-offset-4">{cause.title}</h4>
                  <p className="text-[11px] font-medium text-text/80 uppercase tracking-widest leading-relaxed group-hover:text-text/80 transition-colors">
                    {cause.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="p-10 md:p-14 rounded-xl bg-bg border border-border shadow-sm ">
             <h2 className="text-2xl font-bold uppercase  mb-8 text-text">Our Professional Methods</h2>
             <div className="space-y-8">
               {[
                 { title: "Mechanical Cleaning", desc: "Use heavy-duty motorized augers to cut through roots and dislodge deep main line clogs safely." },
                 { title: "Hydraulic Cleaning", desc: "High-pressure hydrojetting scours pipe walls clean, removing all traces of grease and scale." },
                 { title: "Trenchless Pipe Solutions", desc: "If the pipe is damaged, we can often repair it from the inside without digging up your yard." }
               ].map((item, i) => (
                 <div key={i} className="flex gap-4 group">
                    <Drill className="text-primary shrink-0 group-hover:scale-110 transition-transform" />
                    <div>
                      <h4 className="font-bold uppercase  tracking-tight text-sm mb-1 text-text group-hover:text-primary transition-colors">{item.title}</h4>
                      <p className="text-[11px] font-bold text-text/80 uppercase tracking-widest leading-relaxed">{item.desc}</p>
                    </div>
                 </div>
               ))}
             </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="p-10 md:p-14 rounded-xl bg-card border border-border shadow-sm ">
          <h2 className="text-3xl font-bold uppercase  mb-12 text-center text-text">
            Sewer Line <span className="text-primary">FAQ</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            {[
              { q: "How do I know if the main sewer line is blocked?", a: "The #1 sign is multiple drains backing up at once. If your shower fills up when you flush the toilet, the main line is the likely culprit." },
              { q: "Can tree roots be removed from a sewer line?", a: "Yes. Professional plumbers use motorized cutters or high-pressure hydrojetting to remove roots and restore flow." },
              { q: "Do you offer emergency sewer cleaning?", a: "Yes! Our nationwide network provides 24/7 service for sewer backups and flooding situations." },
              { q: "How long does a sewer line cleaning take?", a: "Most cleanings are finished within 1–3 hours, though complex root issues or repairs may take longer." },
              { q: "Why hire DrainCleaningNearMe for sewer issues?", a: "We match you with licensed local experts who have the heavy-duty equipment needed for main line work." }
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
          <h2 className="text-3xl font-bold uppercase tracking-tight text-text ">Restoring Your Sewer Flow Today</h2>
          <p className="text-text/80 font-bold uppercase tracking-widest text-xs max-w-2xl mx-auto leading-relaxed">
            A main line backup is a serious risk. Whether you need expert tree root removal or emergency 
            sewer cleaning near you, our local licensed professionals are ready to help.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
             <Link href="tel:+17247506935" className="h-16 px-12 bg-accent text-text rounded-lg flex items-center justify-center gap-3 font-bold uppercase  tracking-widest shadow-md hover:scale-105 transition-all">
                <Phone fill="currentColor" size={24} /> (724) 750-6935
             </Link>
          </div>
          <p className="text-[10px] text-text/80 font-bold uppercase tracking-widest">
            Licensed Experts &middot; 24/7 Emergency Dispatch &middot; Full Diagnostic Camera Analysis
          </p>
        </div>
      </div>
    </ServicePageLayout>
  );
}
