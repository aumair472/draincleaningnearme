import { CheckCircle2, ChevronRight, Activity } from "lucide-react";
import { cn } from "@/lib/utils";

const problems = [
  "Kitchen sink clogs",
  "Bathroom drain blockages",
  "Sewer backups",
  "Slow drains",
  "Main drain clog",
  "Washing machine drain issues"
];

export function CommonProblems() {
  return (
    <section className="py-16 md:py-20 bg-bg border-y border-border overflow-hidden font-body">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-10 md:gap-16 items-center">
          <div
            className="space-y-6 animate-fade-in"
          >
            <div className="space-y-3">
              <div
                 className="inline-flex items-center gap-2 px-3 py-1 bg-red-600/10 border border-red-600/20 rounded-full text-[10px] font-black uppercase tracking-widest text-red-600 animate-fade-in italic"
              >
                  <Activity size={12} /> System diagnostics
              </div>
              <h2 className="text-3xl md:text-5xl font-black tracking-tight text-text leading-tight animate-fade-in [animation-delay:100ms] uppercase italic underline decoration-primary decoration-4 underline-offset-8">
                Problems we solve
              </h2>
              <p className="text-base md:text-lg text-text/70 font-medium leading-relaxed max-w-xl animate-fade-in [animation-delay:200ms] italic">
                Drain issues usually build up over time. Our experts are equipped to handle any residential or commercial drainage challenge fast.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-y-3 gap-x-8 animate-fade-in [animation-delay:300ms]">
              {problems.map((problem, i) => (
                <div key={i} className="flex items-center gap-2.5 group translate-x-0 hover:translate-x-1 transition-transform">
                  <CheckCircle2 size={16} className="text-primary group-hover:scale-110 transition-transform" />
                  <span className="text-sm font-black text-text/80 uppercase italic tracking-tight">{problem}</span>
                </div>
              ))}
            </div>

            <a
              href="tel:+17247506935"
              className="inline-flex items-center gap-2 text-primary font-black tracking-widest text-[10px] uppercase group animate-fade-in [animation-delay:400ms] italic"
            >
              Find cleaning near you <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          {/* Visual Element */}
          <div
            className="relative animate-fade-in-up [animation-delay:500ms]"
          >
            <div className="aspect-square bg-card border border-border rounded-[2.5rem] p-6 md:p-8 shadow-2xl relative overflow-hidden group">
               <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent" />
               <div className="h-full flex flex-col justify-center items-center text-center space-y-6 relative z-10">
                  <div className="w-16 h-16 rounded-2xl bg-primary/5 text-primary flex items-center justify-center transition-all shadow-inner">
                     <svg viewBox="0 0 24 24" className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <path d="M12 2L4.5 9h15L12 2zM4.5 9v11a2 2 0 002 2h11a2 2 0 002-2V9H4.5z" />
                        <path d="M12 13a2 2 0 100 4 2 2 0 000-4z" />
                     </svg>
                  </div>
                  <div>
                    <h3 className="text-xl md:text-2xl font-black text-text tracking-tight mb-3 uppercase italic">Expert solutions</h3>
                    <p className="text-text/50 font-black text-[10px] px-4 leading-relaxed uppercase italic tracking-widest">
                      Every drain problem has a root cause. We don't just clear the clog; we solve the system failure.
                    </p>
                  </div>
                  <div className="px-6 py-2.5 bg-primary text-white font-black text-[10px] tracking-widest rounded-xl uppercase italic shadow-lg shadow-primary/20">
                    Verified diagnostics
                  </div>
               </div>
               
               {/* Abstract decorative elements */}
               <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 blur-3xl rounded-full translate-x-1/2 -translate-y-1/2" />
               <div className="absolute bottom-0 left-0 w-32 h-32 bg-secondary/10 blur-3xl rounded-full -translate-x-1/2 translate-y-1/2" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


