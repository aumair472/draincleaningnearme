import Link from "next/link";
import { Zap, Phone, AlertTriangle, ShieldAlert, Clock } from "lucide-react";
import { ServicePageLayout } from "@/components/service-page-layout";
import { CallConclusion } from "@/components/call-conclusion";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Emergency Drain Cleaning Services | 24/7 Professional Plumbers",
  description: "Emergency drain cleaning near you. Get fast 24/7 professional service for clogged drains & sewer backups. Call now for immediate help from DrainCleaningNearMe.",
  alternates: {
    canonical: "https://www.draincleaningnearme.us/emergency-drain-cleaning-services",
  }
};

export default function EmergencyDrainPage() {
  return (
    <ServicePageLayout
      title="Emergency Drain Cleaning Services"
      subtitle="24/7 Priority Support — Fast Help When Drains Fail"
      description={
        <>
          <p>
            When you have a plumbing nightmare like a sewage backup or a main line clog, 
            you need an <span className="text-text font-bold ">&quot;emergency drain cleaning near me&quot;</span> specialist who responds fast. 
            At DrainCleaningNearMe, we understand that drain emergencies do not wait for business hours. 
            That is why we provide 24/7 emergency service nationwide.
          </p>
          <p>
            Our network connects you with licensed local experts who can handle the most urgent 
            issues; from a overflowing toilet to a basement flood caused by a blocked sewer. 
            If you need an emergency plumber for clogged drain relief, call now.
          </p>
        </>
      }
      features={[
        "24/7 Priority emergency dispatch",
        "Sewage backup emergency response",
        "Overflowing toilet & sink relief",
        "Main line blockage clearing",
        "Basement flood prevention",
        "Urgent diagnostic camera inspection",
      ]}
      whyChooseUs={[
        "Technicians on-site within 60 minutes",
        "Available 365 days a year—nights & weekends",
        "Vetted local licensed experts nationwide",
        "Transparent emergency upfront pricing",
        "Specialized high-priority response system",
      ]}
    >
      <div className="space-y-24">
        {/* Indicators Section */}
        <section className="p-10 md:p-14 rounded-xl bg-card border border-border shadow-sm  relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl opacity-50" />
          <h3 className="text-3xl md:text-4xl font-bold uppercase tracking-tight text-text mb-8 relative z-10">
            When Do You Need <span className="text-primary ">Emergency Service?</span>
          </h3>
          <div className="grid md:grid-cols-2 gap-12 relative z-10">
            <div className="space-y-6">
              <p className="text-text/80 font-bold uppercase tracking-widest text-xs leading-loose">
                Not every slow drain is an emergency, but certain signs demand 
                24/7 drain cleaning. You should call immediately if you see:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { title: "Water Backups", desc: "Water rising into fixtures is a major hazard." },
                  { title: "Sewage Odors", desc: "Foul smells from drains mean deep line issues." },
                  { title: "Multiple Clogs", desc: "Many drains blocked at once is a main line fail." },
                  { title: "Gurgling Pipes", desc: "Strange sounds mean air is trapped by a backup." }
                ].map((item, i) => (
                  <div key={i} className="p-6 rounded-lg bg-bg border-gray-1000 border border-border group hover:border-primary/20 transition-all hover:shadow-md transition-colors">
                     <h4 className="text-xs font-bold uppercase tracking-widest text-primary mb-2 group-hover:text-text transition-colors">{item.title}</h4>
                     <p className="text-[10px] font-bold text-text/80 uppercase tracking-widest leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="p-10 rounded-xl bg-primary/5 border border-primary/20 flex items-center justify-center text-center">
              <p className="text-slate-300 font-bold uppercase tracking-wider text-sm leading-loose ">
                These are classic signs of a sewer backup service situation that can 
                quickly turn into water damage, mold and health hazards.
              </p>
            </div>
          </div>
        </section>

        {/* Emergency Types Grid */}
        <section className="grid lg:grid-cols-3 gap-8">
          <div className="p-10 rounded-xl bg-bg border border-border shadow-sm  col-span-1 lg:col-span-2">
            <h3 className="text-2xl font-bold uppercase mb-8 text-text">Common Emergency Scenarios</h3>
            <div className="grid md:grid-cols-2 gap-8">
               {[
                 { title: "Overflowing Toilets", desc: "When water rises instead of draining, it indicates a main line blockage or partial sewer clog that needs immediate attention." },
                 { title: "Sewer Line Backups", desc: "Wastewater backing up into your home through floor drains or tubs is dangerous and causes costly restoration work." },
                 { title: "Flooding Risks", desc: "A completely blocked drain that stops flow altogether can cause flooding in bathrooms, basements or yards." },
                 { title: "Septic Tank Issues", desc: "If blockages originate from a full or failing septic system, we can connect you with specialized help fast." }
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
          <div className="p-10 rounded-xl bg-card border border-border shadow-sm  flex flex-col justify-center text-center">
             <AlertTriangle className="h-16 w-16 text-primary mx-auto mb-6 opacity-50" />
             <h3 className="text-xl font-bold uppercase  mb-4 text-text">Immediate Action Critical</h3>
             <p className="text-text/80 font-bold uppercase tracking-widest text-xs leading-loose mb-6">
                Ignoring warning signs can turn a minor clog into a major disaster involving water damage and mold.
             </p>
             <div className="py-3 px-6 rounded-xl bg-primary/10 border border-primary/20 text-primary font-bold uppercase  tracking-widest text-xs">
                Call Now for 60-Minute Response
             </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="p-10 md:p-14 rounded-xl bg-card border border-border shadow-sm ">
          <h3 className="text-3xl font-bold uppercase mb-12 text-center text-text">
            Emergency Service <span className="text-primary">FAQ</span>
          </h3>
          <div className="grid md:grid-cols-2 gap-12">
            {[
              { q: "How quickly can you arrive for a clog emergency?", a: "For most calls, technicians can arrive within an hour, and we offer same-day service for severe backups nationwide." },
              { q: "Is hydrojetting safe for emergency clearing?", a: "Yes, when performed by licensed pros. It scours the pipe walls clean without damage, providing a longer-lasting fix than snaking." },
              { q: "Can a clogged drain cause a sewer backup?", a: "Absolutely. A partial clog in the main line can progressively worsen until wastewater backs up into your home." },
              { q: "What should I do if sewage is backing up now?", a: "Stop using all water, move valuables from the area, and call professional emergency sewer cleaning right away." },
              { q: "Do you offer septic tank cleaning near me?", a: "We can connect you with septic specialists if the problem originates from a full or failing septic system." }
            ].map((faq, i) => (
              <div key={i} className="space-y-3">
                 <h4 className="text-xs font-bold uppercase tracking-widest text-text ">Q: {faq.q}</h4>
                 <p className="text-[11px] font-bold text-text/80 uppercase tracking-widest leading-relaxed">A: {faq.a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Process Steps */}
        <section className="p-10 md:p-14 rounded-xl bg-bg border border-border ">
          <h3 className="text-2xl font-bold uppercase  mb-10 text-text text-center">Our rapid Response Process</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
             {[
               { n: "01", t: "Call Anytime", d: "Describe your emergency and location. We match you with the nearest tech immediately." },
               { n: "02", t: "Instant Match", d: "We find a local drain team active in your area for the shortest possible arrival." },
               { n: "03", t: "Assessment", d: "The technician inspects the drains and uses camera diagnostic tools if needed." },
               { n: "04", t: "Restoration", d: "We apply the right method—snaking or hydrojetting—to fix the safety issue fast." }
             ].map((step, i) => (
               <div key={i} className="relative p-6 rounded-lg bg-bg border-border/50 border border-border hover:border-primary/20 transition-all transition-all group">
                 <span className="absolute -top-4 -left-4 w-10 h-10 rounded-xl bg-primary flex items-center justify-center font-bold text-text  shadow-lg group-hover:scale-110 transition-transform">{step.n}</span>
                 <h4 className="text-xs font-bold uppercase tracking-widest text-text mb-3 mt-2 ">{step.t}</h4>
                 <p className="text-[10px] font-bold text-text/80 uppercase tracking-widest leading-relaxed">{step.d}</p>
               </div>
             ))}
          </div>
        </section>

        {/* Conclusion CTA */}
        <CallConclusion />
      </div>
    </ServicePageLayout>

  );
}
