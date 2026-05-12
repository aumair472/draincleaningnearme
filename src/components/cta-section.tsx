import { Phone, CheckCircle2, MapPin, Zap } from "lucide-react";
import { cn } from "@/lib/utils";

export function CTASection() {
  const mainTelLink = "tel:+17247506935";

  return (
    <section className="py-16 md:py-20 bg-bg relative overflow-hidden font-body">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none -z-10">
         <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-primary/5 blur-[120px] rounded-full" />
         <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-secondary/5 blur-[120px] rounded-full" />
      </div>

      <div className="container relative z-10">
        <div
           className="p-8 md:p-14 lg:p-16 rounded-[2.5rem] md:rounded-[3.5rem] bg-slate-900 border border-border shadow-2xl relative overflow-hidden group animate-fade-in-up"
        >
          {/* Internal background glow */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/20 blur-[150px] -translate-y-1/2 translate-x-1/2 rounded-full" />
          
          <div className="container-narrow relative z-10 space-y-8 md:space-y-10">
            <div className="space-y-5 text-center">
                <div
                   className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 border border-white/20 rounded-full text-[10px] font-black uppercase tracking-widest text-primary animate-fade-in"
                >
                  <Zap size={12} className="fill-primary" /> Active response network
                </div>
                
                <h2 className="text-3xl md:text-5xl lg:text-6xl font-black tracking-tight leading-tight text-white px-4 animate-fade-in [animation-delay:100ms] uppercase italic underline decoration-primary decoration-4 underline-offset-8">
                  Get your drains cleared today
                </h2>
                
                <p className="text-base md:text-lg text-white/60 font-medium max-w-2xl mx-auto leading-relaxed animate-fade-in [animation-delay:200ms] italic">
                  Whether it’s a minor clog or major emergency, we’re standing by to connect you with a local expert within minutes. Available 24/7 across the USA.
                </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-5 animate-fade-in-up [animation-delay:400ms]">
                <a
                   href={mainTelLink}
                   className="w-full sm:w-auto flex items-center justify-center gap-3 px-10 py-5 bg-primary text-white rounded-2xl font-bold text-xl shadow-xl hover:bg-blue-700 hover:-translate-y-1 transition-all active:scale-95 group tracking-tight uppercase"
                >
                   <Phone size={24} fill="currentColor" className="group-hover:rotate-12 transition-transform" />
                   Call now (free estimate)
                </a>
                <a
                   href={mainTelLink}
                   className="w-full sm:w-auto flex items-center justify-center gap-3 px-10 py-5 bg-white/10 text-white border-2 border-white/20 rounded-2xl font-bold text-xl hover:bg-white hover:text-slate-900 transition-all active:scale-95 tracking-tight uppercase"
                >
                   Available 24/7
                </a>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 pt-10 border-t border-white/10 animate-fade-in [animation-delay:600ms]">
               {[
                 { t: "Expert match", Icon: CheckCircle2 },
                 { t: "Fast dispatch", Icon: Zap },
                 { t: "Licensed pros", Icon: MapPin },
                 { t: "No mess", Icon: CheckCircle2 }
               ].map((item, i) => (
                 <div key={i} className="flex flex-col items-center gap-1.5 group">
                    <item.Icon size={20} className="text-primary opacity-50 group-hover:opacity-100 transition-opacity" />
                    <span className="text-[10px] font-black uppercase tracking-widest text-white/40 group-hover:text-white/60 transition-colors">{item.t}</span>
                 </div>
               ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


