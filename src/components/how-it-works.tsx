import { Phone, MessageSquare, UserCheck, CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";

const steps = [
  {
    number: "1",
    title: "Call us anytime (24/7)",
    description: "Speak with our professional coordination team instantly for immediate support across the USA.",
    icon: Phone,
  },
  {
    number: "2",
    title: "Describe your problem",
    description: "Tell us exactly what’s happening – from minor kitchen clogs to major sewer line backups.",
    icon: MessageSquare,
  },
  {
    number: "3",
    title: "Get matched instantly",
    description: "We instantly connect you with a verified local drain expert who is closest to your location.",
    icon: UserCheck,
  },
  {
    number: "4",
    title: "Problem solved fast",
    description: "Technician arrives with HD cameras and professional gear to fix the issue on the spot.",
    icon: CheckCircle2,
  },
];

export function HowItWorks() {
  return (
    <section className="py-16 md:py-20 bg-card border-y border-border relative overflow-hidden font-body">
      <div className="container relative z-10">
        <div className="text-center mb-12 md:mb-16 space-y-3">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-text leading-tight uppercase font-black italic animate-fade-in">
            How it works – simple & fast
          </h2>
          <p className="text-text/70 font-medium max-w-2xl mx-auto text-base md:text-lg leading-relaxed animate-fade-in [animation-delay:100ms] italic">
            Connecting you with top-tier local expertise shouldn't be complicated. We've streamlined the process for maximum speed.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative items-start">
          {/* Connecting line for desktop */}
          <div className="hidden lg:block absolute top-10 left-[10%] right-[10%] h-0.5 bg-border -z-10" />

          {steps.map((step, i) => (
            <div key={i} className="flex flex-col items-center text-center group animate-fade-in-up" style={{ animationDelay: `${i * 100}ms` }}>
              <div
                className="w-20 h-20 rounded-[2rem] bg-card border-2 border-border text-primary flex items-center justify-center shadow-xl mb-6 relative group-hover:bg-primary group-hover:text-white group-hover:border-primary transition-all duration-300"
              >
                <div className="absolute -top-1 -right-1 w-7 h-7 rounded-full bg-primary text-white text-[10px] font-black flex items-center justify-center border-4 border-card group-hover:bg-white group-hover:text-primary transition-colors uppercase">
                  {step.number}
                </div>
                <step.icon size={28} strokeWidth={2} />
              </div>
              
              <h3 className="text-lg font-bold text-text mb-3 leading-tight tracking-tight px-2 group-hover:text-primary transition-colors uppercase font-black">
                {step.title}
              </h3>
              <p className="text-xs md:text-sm text-text/60 font-medium leading-relaxed italic">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


