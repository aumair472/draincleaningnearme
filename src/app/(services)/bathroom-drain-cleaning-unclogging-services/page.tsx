import Link from "next/link";
import { Zap, Phone } from "lucide-react";
import { ServicePageLayout } from "@/components/service-page-layout";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Bathroom Drain Cleaning | Unclog Sinks, Tubs & Showers",
  description: "Professional bathroom drain cleaning services. We unclog bathroom sinks, tubs, and showers fast. Licensed 24/7 plumbers near you at DrainCleaningNearMe.",
  alternates: {
    canonical: "https://www.draincleaningnearme.us/bathroom-drain-cleaning-unclogging-services",
  }
};

export default function BathroomDrainPage() {
  return (
    <ServicePageLayout
      title="Bathroom Drain Cleaning & Unclogging"
      subtitle="Fast Relief for Sinks, Tubs & Showers"
      description={
        <>
          <p>
            Dealing with a <span className="text-text font-bold ">bathroom sink drain clogged</span> or a slow-draining tub? 
            Bathroom drains are among the most used and most likely to clog in any home. 
            At DrainCleaningNearMe, we connect you with local experts who can 
            <span className="text-text font-bold "> unclog bathroom sink</span> and shower lines 24/7.
          </p>
          <p>
            Our licensed technicians use professional-grade tools to remove hair, soap scum, and 
            other common blockages, restoring your bathroom&apos;s comfort and hygiene instantly. 
            Don&apos;t let a backup ruin your day—call now for rapid, reliable service nationwide.
          </p>
        </>
      }
      features={[
        "Emergency 24/7 bathroom drain relief",
        "Expert hair & soap scum removal",
        "Safe for all pipe types & fixtures",
        "Modern motorized snaking technology",
        "Licensed & insured local technicians",
        "Upfront pricing with no hidden fees",
      ]}
      whyChooseUs={[
        "Fast response times (often within 60 mins)",
        "Specialized tools for delicate fixtures",
        "Comprehensive drain & sewer diagnostics",
        "Nationwide network of local experts",
        "Guaranteed results for every bathroom clog",
        "Clean work & property protection",
      ]}
    >
      <div className="space-y-24">
        {/* Why Bathroom Clogs Happen */}
        <section className="p-10 md:p-14 rounded-xl bg-card border border-border shadow-sm  relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl opacity-50" />
          <h3 className="text-3xl md:text-4xl font-bold uppercase tracking-tight text-text mb-8 relative z-10">
            Why Bathroom <span className="text-primary ">Drains Clog</span>
          </h3>
          <div className="grid md:grid-cols-2 gap-12 relative z-10">
            <div className="space-y-6">
              <p className="text-text/80 font-bold uppercase tracking-widest text-xs leading-loose">
                Bathroom clogs are unique because they involve materials that bind together 
                inside narrow pipes. Understanding the cause is the first step to an &quot;unclog bathroom sink&quot; solution.
              </p>
              <div className="space-y-6">
                <h3 className="text-xl font-bold uppercase  tracking-tight text-primary">The Culprits</h3>
                <ul className="space-y-6">
                  {[
                    { title: "Hair & Fur", desc: "Long and short hair strands wrap around pipe components and catch other debris, creating a dense, nested clog." },
                    { title: "Soap Scum & Products", desc: "Shampoos, conditioners, and bar soaps contain oils that coat pipes and trap hair, narrowing the drain." },
                    { title: "Toothpaste & Hygiene Items", desc: "Dense pastes and items like floss or cotton swabs can snag and build into major blockages." }
                  ].map((cause, i) => (
                    <li key={i} className="group">
                      <h4 className="text-xs font-bold uppercase tracking-widest text-text mb-2 group-hover:text-primary transition-colors ">
                        {cause.title}
                      </h4>
                      <p className="text-[11px] font-medium text-text/80 uppercase tracking-widest leading-relaxed">
                        {cause.desc}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="p-10 rounded-xl bg-primary/5 border border-primary/20 flex items-center justify-center text-center">
              <p className="text-slate-300 font-bold uppercase tracking-wider text-sm leading-loose ">
                A bathroom sink drain clogged with hair and soap is frustrating and unsanitary. 
                Professional cleaning removes the entire buildup, not just the temporary obstruction.
              </p>
            </div>
          </div>
        </section>

        {/* Services List */}
        <section className="grid lg:grid-cols-2 gap-8">
          <div className="p-10 md:p-14 rounded-xl bg-bg border border-border shadow-sm ">
            <h3 className="text-2xl font-bold uppercase mb-8 text-text">Our bathroom Services</h3>
            <div className="space-y-8">
              {[
                { title: "Sewer & Drain Cleaning", desc: "Deep cleaning for the entire bathroom line system using motorized augers to restore full flow capacity." },
                { title: "Bathroom Sink Unclogging", desc: "Precision removal of hair and hygiene debris from P-traps and branch lines." },
                { title: "Tub & Shower Drain Repair", desc: "Advanced snaking for floor-level drains that are often harder to reach and prone to heavy hair clogs." }
              ].map((service, i) => (
                <div key={i} className="group">
                  <h4 className="text-xs font-bold uppercase tracking-widest text-primary mb-2 ">{service.title}</h4>
                  <p className="text-[11px] font-medium text-text/80 uppercase tracking-widest leading-relaxed group-hover:text-text/80 transition-colors">
                    {service.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="p-10 md:p-14 rounded-xl bg-card border border-border shadow-sm ">
             <h3 className="text-2xl font-bold uppercase mb-8 text-text">Signs You Need Help</h3>
             <div className="space-y-6">
                <p className="text-text/80 font-bold uppercase tracking-widest text-xs leading-loose">
                   Don&apos;t wait for a flood. Look for these bathroom drain warning signs:
                </p>
                <ul className="space-y-4">
                   {[
                     "Water pooling around your feet in the shower.",
                     "Slow drainage in the bathroom sink or tub.",
                     "Gurgling sounds coming from the pipes or toilet.",
                     "Foul odors or damp smells emanating from the drains."
                   ].map((item, i) => (
                     <li key={i} className="flex gap-3 text-[11px] font-bold uppercase  text-text/80 tracking-widest leading-relaxed">
                        <Zap size={14} className="text-primary shrink-0" /> {item}
                     </li>
                   ))}
                </ul>
             </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="p-10 md:p-14 rounded-xl bg-card border border-border shadow-sm ">
          <h3 className="text-3xl font-bold uppercase mb-12 text-center text-text">
            Bathroom Drain <span className="text-primary">FAQs</span>
          </h3>
          <div className="grid md:grid-cols-2 gap-12">
            {[
              { q: "Can I use chemical cleaners in my bathroom?", a: "We advise against it. Harsh chemicals can damage older pipes, tile, and chrome finishes. Professional snaking is safer and more effective." },
              { q: "How do you unclog a shower drain with lots of hair?", a: "Technicians use specialized drain snakes with hooks designed to grab and pull out hair mats from deep within the line." },
              { q: "Why is my bathroom sink drain clogged again?", a: "It may be a deeper blockage in the main line or soap scum coating the walls. A professional cleaning clears the entire line." },
              { q: "How long does a typical bathroom drain cleaning take?", a: "Most service calls are completed within an hour, depending on the severity of the blockage and accessibility." },
              { q: "Do you offer emergency bathroom service?", a: "Yes! We provide 24/7 support for bathroom backups and flooding nationwide." }
            ].map((faq, i) => (
              <div key={i} className="space-y-3">
                 <h4 className="text-xs font-bold uppercase tracking-widest text-text ">Q: {faq.q}</h4>
                 <p className="text-[11px] font-bold text-text/80 uppercase tracking-widest leading-relaxed">A: {faq.a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Prevention Tips */}
        <section className="p-10 md:p-14 rounded-xl bg-gradient-to-br from-primary/5 to-accent/5 border border-border shadow-sm  text-center">
          <h3 className="text-2xl font-bold uppercase tracking-tight text-text mb-8 text-center">
             Keeping Bathroom Drains Clear
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Hair Catchers", desc: "Install strainers in every tub and shower to catch hair before it enter pipes." },
              { title: "Brush Hair First", desc: "Brush your hair before showering to minimize the amount of loose hair going down." },
              { title: "Hot Water", desc: "Flush with hot water once a week to help melt away soap residue." },
              { title: "No Foreign Objects", desc: "Ensure small items like floss or q-tips never enter the drain system." }
            ].map((tip, i) => (
              <div key={i} className="p-6 rounded-lg bg-bg border-gray-1000 border border-border">
                <h4 className="text-xs font-bold uppercase tracking-widest text-primary mb-2 ">{tip.title}</h4>
                <p className="text-[10px] font-bold text-text/80 uppercase tracking-widest leading-relaxed">{tip.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Conclusion CTA */}
        <div className="text-center space-y-8 p-12 rounded-xl bg-gradient-to-br from-primary/10 to-accent/5 border border-primary/20  ">
          <h3 className="text-3xl font-bold uppercase tracking-tight text-text">Unclog Your Bathroom Drain Today</h3>
          <p className="text-text/80 font-bold uppercase tracking-widest text-xs max-w-2xl mx-auto leading-relaxed">
            Stop dealing with standing water and messy backups. Whether you need to unclog bathroom sink 
            or repair a shower line, our local experts are ready to help 24/7.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
             <Link href="tel:+17247506935" className="h-16 px-12 bg-accent text-text rounded-lg flex items-center justify-center gap-3 font-bold uppercase  tracking-widest shadow-md hover:scale-105 transition-all">
                <Phone fill="currentColor" size={24} /> (724) 750-6935
             </Link>
          </div>
          <p className="text-[10px] text-text/80 font-bold uppercase tracking-widest">
            24/7 Emergency bathroom Drain Service &middot; Same-Day Arrival &middot; Expert Technicians
          </p>
        </div>
      </div>
    </ServicePageLayout>
  );
}
