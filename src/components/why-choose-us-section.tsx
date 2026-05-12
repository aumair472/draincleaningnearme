import { ShieldCheck, Quote, Truck, Trash2, Globe, DollarSign, CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";

const features = [
  {
    title: "Fast 30-60 minute dispatch",
    description: "Our local experts are typically on-site within an hour to address your drainage emergencies fast.",
    icon: Truck,
  },
  {
    title: "Licensed professionals",
    description: "Every technician in our network is a fully licensed and insured plumbing expert you can trust.",
    icon: ShieldCheck,
  },
  {
    title: "Nationwide service coverage",
    description: "Broad availability across the entire United States, ensuring expert help is always nearby.",
    icon: Globe,
  },
  {
    title: "Transparent pricing",
    description: "Get honest, upfront pricing for your specific drain challenge before any work begins on-site.",
    icon: DollarSign,
  },
  {
    title: "No mess guarantee",
    description: "Our professionals prioritize cleanliness and treat your property with complete care and respect.",
    icon: Trash2,
  },
];

export function WhyChooseUsSection() {
  return (
    <section id="why-us" className="py-16 md:py-20 bg-bg relative border-y border-border font-body">
      <div className="container relative z-10">
        <div className="text-center mb-12 md:mb-16 space-y-3">
          <h2 className="text-3xl md:text-5xl font-black tracking-tight text-text leading-tight uppercase animate-fade-in italic underline decoration-primary decoration-4 underline-offset-8">
            Why choose us?
          </h2>
          <p className="text-text/70 font-medium max-w-2xl mx-auto text-base md:text-lg leading-relaxed animate-fade-in [animation-delay:100ms] italic">
            Your problem is solved quickly, safely and professionally. We focus on results that keep your pipes flowing.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-5">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="p-6 rounded-[2rem] bg-card border border-border text-center transition-all hover:shadow-2xl hover:border-primary/20 group flex flex-col items-center h-full shadow-sm animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-primary/5 text-primary mb-6 transition-transform group-hover:scale-110 group-hover:bg-primary group-hover:text-white shadow-inner">
                <feature.icon size={24} />
              </div>
              <h3 className="text-base font-black tracking-tight mb-3 text-text leading-tight group-hover:text-primary transition-colors uppercase italic">
                {feature.title}
              </h3>
              <p className="text-xs text-text/60 leading-relaxed font-medium italic">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* 🔹 AIRTASKER STYLE TESTIMONIAL HIGHLIGHT */}
        <div
          className="mt-12 p-8 md:p-12 rounded-[2.5rem] bg-primary/10 border border-primary/20 relative overflow-hidden group shadow-2xl animate-fade-in-up [animation-delay:600ms]"
        >
          <div className="absolute top-0 right-0 p-12 opacity-5 scale-150 rotate-12 transition-transform group-hover:scale-[1.7] group-hover:rotate-0">
            <Quote size={120} className="text-primary" />
          </div>
          <div className="relative z-10 max-w-4xl mx-auto text-center">
            <div className="flex justify-center gap-1.5 mb-6 text-accent">
              {[1, 2, 3, 4, 5].map((s) => (
                <CheckCircle2 key={s} size={16} fill="currentColor" />
              ))}
            </div>
            <p className="text-lg md:text-2xl font-black tracking-tight text-text mb-8 leading-relaxed italic uppercase">
              "Your problem is solved quickly, safely and professionally. If we leave a mess, we haven't done our job."
            </p>
            <div className="flex flex-col items-center gap-3">
              <div className="w-14 h-14 rounded-full bg-primary flex items-center justify-center font-black text-lg text-white shadow-xl shadow-primary/20 border-4 border-card uppercase italic">DN</div>
              <div className="text-center">
                <p className="text-sm font-black text-text uppercase italic tracking-tight">Drain Network Quality Team</p>
                <p className="text-[10px] font-black text-text/40 tracking-widest uppercase italic">Verified satisfaction standard</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


