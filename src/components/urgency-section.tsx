import { AlertTriangle, ShieldAlert, Phone, Waves, Droplets, Trash2 } from "lucide-react";
import { cn } from "@/lib/utils";

const risks = [
  { t: "Water damage", d: "Leading cause of structural rot and foundation issues.", Icon: Droplets },
  { t: "Sewer backups", d: "Hazardous waste flooding your living or work spaces.", Icon: Waves },
  { t: "Mold growth", d: "Toxic spores developing within 24-48 hours of moisture.", Icon: ShieldAlert },
  { t: "Expensive repairs", d: "Preventable clogs turning into full system replacements.", Icon: Trash2 },
];

export function UrgencySection() {
  return (
    <section className="py-16 md:py-20 bg-card border-y border-border relative overflow-hidden font-body">
      {/* Red Glow Background Effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[500px] bg-red-600/5 blur-[120px] rounded-full opacity-50 -z-10" />

      <div className="container relative z-10">
        <div className="text-center mb-12 md:mb-16 space-y-4">
          <div
            className="inline-flex items-center gap-2 px-4 py-1.5 bg-red-600/10 border border-red-600/20 rounded-full text-[10px] font-black uppercase tracking-widest text-red-600 mx-auto animate-fade-in"
          >
            <AlertTriangle size={12} /> Time is critical
          </div>
          
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-black tracking-tight text-text leading-tight px-4 animate-fade-in [animation-delay:100ms] uppercase italic underline decoration-red-600/30 decoration-4 underline-offset-8">
            Every minute counts
          </h2>
          <p className="text-base md:text-lg text-text/60 font-medium max-w-2xl mx-auto leading-relaxed animate-fade-in [animation-delay:200ms] italic">
             Drain issues don't just stay clogs. Unattended backups can quickly escalate into hazardous conditions and costly structural failures.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-12 md:mb-16">
          {risks.map((risk, i) => (
            <div
              key={i}
              className="p-6 rounded-[2.5rem] bg-card border border-border group hover:border-red-600/30 transition-all shadow-sm hover:shadow-xl hover:-translate-y-1 animate-fade-in-up"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <div className="w-12 h-12 rounded-2xl bg-red-600/5 text-red-600 flex items-center justify-center mb-5 group-hover:bg-red-600 group-hover:text-white transition-all shadow-inner">
                <risk.Icon size={24} strokeWidth={2} />
              </div>
              <h3 className="text-lg font-black text-text tracking-tight mb-2 leading-tight uppercase italic">{risk.t}</h3>
              <p className="text-xs text-text/50 font-black leading-relaxed uppercase italic tracking-tighter">{risk.d}</p>
            </div>
          ))}
        </div>

        <div
           className="p-8 md:p-12 rounded-[2.5rem] md:rounded-[3.5rem] bg-slate-900 border border-red-600/20 text-white text-center shadow-2xl relative overflow-hidden flex flex-col items-center justify-center max-w-4xl mx-auto animate-fade-in-up [animation-delay:600ms]"
        >
           <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-transparent via-red-600 to-transparent" />
           <p className="text-[10px] font-black uppercase tracking-widest mb-4 text-white/40 italic">Immediate response prevents disaster</p>
           <h3 className="text-2xl md:text-4xl lg:text-5xl font-black tracking-tight leading-tight mb-8 text-white uppercase italic underline decoration-red-600/30 decoration-4 underline-offset-8">
              Call now
           </h3>
           <a
              href="tel:+17247506935"
              className="flex items-center justify-center gap-3 px-10 py-5 bg-red-600 text-white rounded-2xl font-bold text-xl shadow-2xl shadow-red-600/30 hover:bg-red-700 hover:-translate-y-1 transition-all active:scale-95 group tracking-tight uppercase"
           >
              <Phone size={24} fill="currentColor" className="group-hover:rotate-12 transition-transform" />
              Emergency help now
           </a>
        </div>
      </div>
    </section>
  );
}


