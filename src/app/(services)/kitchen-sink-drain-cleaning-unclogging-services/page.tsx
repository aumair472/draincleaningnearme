import Link from "next/link";
import { Zap, Phone } from "lucide-react";
import { ServicePageLayout } from "@/components/service-page-layout";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kitchen Sink Drain Cleaning & Unclogging Services | Drain Cleaning Near Me",
  description: "Professional kitchen sink drain cleaning and unclogging services. 24/7 emergency clogged sink repair and kitchen drain pipe cleaning nationwide.",
};

export default function KitchenSinkPage() {
  return (
    <ServicePageLayout
      title="Kitchen Sink Drain Cleaning & Unclogging"
      subtitle="Professional & Rapid Relief for Clogged Kitchen Drains"
      description={
        <>
          <p>
            Is your kitchen sink clogged, draining slowly or backed up? A &quot;kitchen sink clog&quot; 
            is one of the most common household plumbing issues, often caused by grease, food scraps and soap scum. 
            When you need fast &quot;kitchen sink drain cleaning near me,&quot; our experts are here to help.
          </p>
          <p>
            At DrainCleaningNearMe, we connect you with licensed local professionals who provide 
            comprehensive kitchen sink drain cleaning services nationwide. From simple unclog kitchen 
            sink jobs to clearing stubborn blockages in your garbage disposal or main kitchen line, 
            our network is available 24/7 for emergency help.
          </p>
        </>
      }
      features={[
        "Clogged sink repair for all models",
        "Motorized augers & plumbing snakes",
        "P-trap cleaning & debris removal",
        "Garbage disposal clog resolution",
        "Main kitchen line clearing",
        "Pipe-safe mechanical methods",
      ]}
      whyChooseUs={[
        "24/7 emergency clogged sink repair expertise",
        "Licensed local drain cleaning experts nationwide",
        "Same-day service for most kitchen backups",
        "Transparent, no-hidden-fee pricing always",
        "Clean work & property protection guarantee",
      ]}
    >
      <div className="space-y-24">
        {/* Why Clogs Happen */}
        <section className="p-10 md:p-14 rounded-[3rem] bg-[#111827]/80 border border-white/5 shadow-2xl italic relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl opacity-50" />
          <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight text-white mb-8 relative z-10">
            Why Kitchen Sink <span className="text-primary italic">Drain Clogs</span> Happen
          </h2>
          <div className="grid md:grid-cols-2 gap-12 relative z-10">
            <div className="space-y-6">
              <p className="text-slate-400 font-bold uppercase tracking-widest text-xs leading-loose">
                Before you go searching for a &quot;best drain cleaner for kitchen sink&quot; off the store shelf, 
                it helps to understand what&apos;s really happening inside your pipes.
              </p>
              <div className="space-y-6">
                <h3 className="text-xl font-black uppercase italic tracking-tight text-primary">Everyday Causes</h3>
                <ul className="space-y-6">
                  {[
                    { title: "Grease & Cooking Oil", desc: "Liquid fats cool inside the pipe and solidify into thick, rubbery clogs that DIY plungers and chemical cleaners rarely remove." },
                    { title: "Food Particles & Debris", desc: "Small scraps, coffee grounds, eggshells and rice expand in water and stick to grease, creating stubborn blockages." },
                    { title: "Soap Scum & Minerals", desc: "Dish soap and hard water minerals coat pipe walls, narrowing the opening and trapping debris over time." }
                  ].map((cause, i) => (
                    <li key={i} className="group">
                      <h4 className="text-xs font-black uppercase tracking-widest text-white mb-2 group-hover:text-primary transition-colors italic">
                        {cause.title}
                      </h4>
                      <p className="text-[11px] font-medium text-slate-500 uppercase tracking-widest leading-relaxed">
                        {cause.desc}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="p-10 rounded-[2.5rem] bg-primary/5 border border-primary/20 flex items-center justify-center text-center">
              <p className="text-slate-300 font-black uppercase tracking-wider text-sm leading-loose italic">
                If ignored, these clogs can turn from a slow drain into a kitchen sink drain stopped or 
                even a sewage backup. Professional intervention helps prevent this plumbing nightmare.
              </p>
            </div>
          </div>
        </section>

        {/* Detailed Services */}
        <section className="grid lg:grid-cols-2 gap-8">
          <div className="p-10 md:p-14 rounded-[3rem] bg-gradient-to-br from-[#111827] to-[#0B1120] border border-white/5 shadow-2xl italic">
            <h2 className="text-2xl font-black uppercase italic mb-8 text-white">Our Kitchen Sink Services</h2>
            <div className="space-y-8">
              {[
                { title: "Clogged Sink Repair", desc: "Use motorized augers and plumbing snakes to break up and remove deep clogs safely without damaging fixtures." },
                { title: "Unclog Kitchen Sink Permanently", desc: "Combine mechanical tools with hydrojetting (when needed) to flush away grease and food debris from the entire pipe." },
                { title: "Kitchen Drain Repair & Inspection", desc: "Visually inspect the drain line. If necessary, use drain camera inspection to check for structural issues." }
              ].map((service, i) => (
                <div key={i} className="group">
                  <h4 className="text-xs font-black uppercase tracking-widest text-primary mb-2 italic">{service.title}</h4>
                  <p className="text-[11px] font-medium text-slate-500 uppercase tracking-widest leading-relaxed group-hover:text-slate-400 transition-colors">
                    {service.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="p-10 md:p-14 rounded-[3rem] bg-[#111827]/80 border border-white/5 shadow-2xl italic">
            <h2 className="text-2xl font-black uppercase italic mb-8 text-white">DIY vs. Professional</h2>
            <div className="space-y-6">
              <p className="text-slate-400 font-bold uppercase tracking-widest text-xs leading-loose">
                Many homeowners start with DIY hacks like baking soda or store-bought chemicals. These have serious limitations:
              </p>
              <ul className="space-y-4">
                 {[
                   "Harsh chemicals can damage older pipes or tile surrounds.",
                   "They rarely remove deep grease or mineral buildup.",
                   "Over-aggressive DIY methods can crack pipes or push clogs further down."
                 ].map((item, i) => (
                   <li key={i} className="flex gap-3 text-[11px] font-black uppercase italic text-slate-500 tracking-widest leading-relaxed">
                      <Zap size={14} className="text-primary shrink-0" /> {item}
                   </li>
                 ))}
              </ul>
              <div className="mt-8 p-6 rounded-2xl bg-primary/10 border border-primary/20 text-center">
                 <p className="text-primary font-black uppercase tracking-widest text-xs italic">
                    Professional services are safer, more effective and often more cost-efficient!
                 </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="p-10 md:p-14 rounded-[3rem] bg-[#111827]/80 border border-white/5 shadow-2xl italic">
          <h2 className="text-3xl font-black uppercase italic mb-12 text-center text-white">
            Frequently Asked <span className="text-primary">Questions</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            {[
              { q: "How fast can you unclog my kitchen sink?", a: "Most kitchen sink drain clogged cases are resolved within the same day. For emergencies, technicians can arrive within 1–2 hours." },
              { q: "Is hydrojetting safe for my kitchen pipes?", a: "Yes, when performed by licensed professionals. Hydrojetting is adjusted to your pipe type and age, making it safe for most kitchen drain lines." },
              { q: "What is the best drain cleaner for grease?", a: "While store products exist, they are often temporary. Professional drain cleaning with augers or hydrojetting is far more effective for grease." },
              { q: "Can a blocked sink cause other issues?", a: "Yes, it can lead to backups, foul odors and in severe cases, sewer line problems. Early intervention helps prevent this." },
              { q: "Why hire DrainCleaningNearMe?", a: "We connect you with local licensed professionals who follow local codes, while offering nationwide coverage and 24/7 emergency support." }
            ].map((faq, i) => (
              <div key={i} className="space-y-3">
                 <h4 className="text-xs font-black uppercase tracking-widest text-white italic">Q: {faq.q}</h4>
                 <p className="text-[11px] font-bold text-slate-500 uppercase tracking-widest leading-relaxed">A: {faq.a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Prevention Tips */}
        <section className="p-10 md:p-14 rounded-[3rem] bg-gradient-to-br from-primary/5 to-accent/5 border border-white/5 shadow-2xl italic text-center">
          <h2 className="text-2xl font-black uppercase tracking-tight text-white mb-8 text-center uppercase italic">
             Keeping Your Kitchen Sink Drain Clear
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "No Grease", desc: "Never pour grease down the sink; dispose of it in the trash instead." },
              { title: "Sink Strainer", desc: "Use a strainer to catch food scraps and clean it daily." },
              { title: "Hot Water Flush", desc: "Flush with hot water for 30–60 seconds once a week." },
              { title: "Avoid Chemicals", desc: "Avoid harsh chemicals that can erode pipes long-term." }
            ].map((tip, i) => (
              <div key={i} className="p-6 rounded-2xl bg-[#0B1120]/50 border border-white/5">
                <h4 className="text-xs font-black uppercase tracking-widest text-primary mb-2 italic">{tip.title}</h4>
                <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest leading-relaxed">{tip.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Other Services */}
        <section className="p-10 md:p-14 rounded-[3rem] bg-[#111827]/80 border border-white/5 italic">
           <h2 className="text-2xl font-black uppercase italic mb-10 text-white text-center">Our Other Services</h2>
           <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { title: "Bathroom Drain", href: "/bathroom-drain-cleaning-unclogging-services/" },
                { title: "Emergency Service", href: "/emergency-drain-cleaning-services/" },
                { title: "Hydro Jetting", href: "/hydro-jetting-cleaning-services/" },
                { title: "Drain Camera", href: "/drain-camera-inspection/" },
              ].map((service, i) => (
                <Link key={i} href={service.href} className="p-6 rounded-xl bg-[#0B1120]/50 border border-white/5 hover:border-primary/50 text-center group transition-all">
                  <span className="text-[10px] font-black uppercase tracking-widest text-slate-500 group-hover:text-primary transition-colors italic">
                    {service.title} &rarr;
                  </span>
                </Link>
              ))}
           </div>
        </section>

        {/* Conclusion CTA */}
        <div className="text-center space-y-8 p-12 rounded-[3.5rem] bg-gradient-to-br from-primary/10 to-accent/5 border border-primary/20 italic shadow-primary-glow/20">
          <h2 className="text-3xl font-black uppercase tracking-tight text-white italic">Get Your Kitchen Sink Drain Fixed Today</h2>
          <p className="text-slate-400 font-bold uppercase tracking-widest text-xs max-w-2xl mx-auto leading-relaxed">
            If your kitchen sink drain stopped or you are constantly trying to unclog kitchen sink with 
            store-bought products, it is time to call in professional drain cleaners. 
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
             <Link href="tel:+17247506935" className="h-16 px-12 bg-accent text-white rounded-2xl flex items-center justify-center gap-3 font-black uppercase italic tracking-widest shadow-accent-glow hover:scale-105 transition-all">
                <Phone fill="currentColor" size={24} /> (724) 750-6935
             </Link>
          </div>
          <p className="text-[10px] text-slate-500 font-black uppercase tracking-widest">
            24/7 Emergency Clogged Sink Repair &middot; Same-Day Service &middot; Transparent Pricing
          </p>
        </div>
      </div>
    </ServicePageLayout>
  );
}
