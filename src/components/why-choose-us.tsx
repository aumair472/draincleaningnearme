import { Globe, ShieldCheck, Zap, DollarSign } from "lucide-react";

const features = [
  {
    title: "Nationwide Coverage",
    description: "From New York to Los Angeles, our network covers all 50 states. No matter where you are, a licensed drain cleaning professional is nearby and ready to help.",
    icon: Globe,
  },
  {
    title: "No Mess, No Damage Guarantee",
    description: "Every call connects you with a pre-vetted, locally licensed technician focused on clean work, pipe-safe methods, and protecting your home from avoidable damage.",
    icon: ShieldCheck,
  },
  {
    title: "Fast Dispatch",
    description: "Most calls are dispatched within minutes. Our technicians typically arrive in 30–60 minutes, even on nights and weekends. Speed matters when water's rising.",
    icon: Zap,
  },
  {
    title: "Transparent Pricing",
    description: "No surprise charges. Get upfront pricing before any work starts. Our technicians explain costs clearly and provide a no-mess, no-damage guarantee. We work to solve your problem quickly and professionally.",
    icon: DollarSign,
  },
];

export function WhyChooseUsSection() {
  return (
    <section className="py-24 bg-slate-900 text-white relative overflow-hidden" id="why-choose-us">
      {/* Decorative Blur */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-[120px] -z-0" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-[120px] -z-0" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black mb-6 uppercase italic tracking-tight">
            Why Choose <span className="text-primary italic">DrainCleaningNearMe?</span>
          </h2>
          <p className="text-slate-400 text-lg md:text-xl max-w-3xl mx-auto font-medium">
            When people search for &apos;drain cleaning near me&apos;, they want fast service and honest results. 
            That is exactly what we focus on. What sets us apart:
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {features.map((feature, i) => (
            <div key={i} className="group p-8 rounded-[2rem] bg-white/5 border border-white/10 hover:bg-white/10 hover:border-primary/50 transition-all shadow-2xl relative overflow-hidden">
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 group-hover:rotate-3 transition-all shrink-0">
                  <feature.icon size={32} strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="text-2xl font-black mb-4 uppercase italic tracking-tight group-hover:text-primary transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-slate-400 leading-relaxed font-medium group-hover:text-slate-300 transition-colors">
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
