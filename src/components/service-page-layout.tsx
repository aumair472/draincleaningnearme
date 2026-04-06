import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { CTASection } from "@/components/cta-section";
import { TrustBar } from "@/components/trust-bar";
import { CommonCauses } from "@/components/common-causes";
import { CheckCircle2, Phone, ArrowRight, ShieldCheck, Clock, Zap } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { motion } from "framer-motion";

interface ServicePageLayoutProps {
  title: string;
  subtitle?: string;
  description: React.ReactNode;
  features: string[];
  whyChooseUs: string[];
  icon?: any;
  children?: React.ReactNode;
}

export function ServicePageLayout({
  title,
  subtitle,
  description,
  features,
  whyChooseUs,
  children,
}: ServicePageLayoutProps) {
  return (
    <>
      <Navbar />
      <main className="flex-1 pt-32 bg-[#0B1120] relative italic overflow-hidden">
        {/* Decorative Gradients for Service Pages */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-0 left-[10%] w-[40%] h-[40%] bg-primary/5 blur-[100px] rounded-full opacity-30" />
          <div className="absolute bottom-1/2 right-0 w-[30%] h-[30%] bg-accent/5 blur-[100px] rounded-full opacity-20" />
        </div>

        <section className="container relative z-10 mx-auto px-4 pb-20">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h1 className="text-4xl md:text-7xl font-black tracking-tight mb-8 leading-[1] uppercase italic text-white">
              {title}
            </h1>
            {subtitle && (
              <p className="text-lg md:text-xl text-primary font-black mb-8 uppercase tracking-widest italic">
                {subtitle}
              </p>
            )}
            <div className="text-base md:text-lg text-slate-400 font-medium leading-relaxed max-w-3xl mx-auto space-y-6">
              {description}
            </div>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4 mt-12">
              <Link 
                href="tel:+17247506935" 
                className={cn(
                  "h-16 px-12 md:px-20 text-xl font-black rounded-2xl flex items-center justify-center gap-3",
                  "bg-accent text-white shadow-accent-glow hover:scale-105 transition-all uppercase tracking-widest italic"
                )}
              >
                <Phone fill="currentColor" className="h-6 w-6" />
                (724) 750-6935
              </Link>
              <Link 
                href="/contact"
                className={cn(
                  "h-16 px-10 md:px-14 text-lg font-black rounded-2xl border-2 flex items-center justify-center gap-3",
                  "border-white/10 text-white hover:bg-white/5 transition-all uppercase tracking-widest italic"
                )}
              >
                Free Estimate
              </Link>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 items-start mt-24">
            {/* Features Col */}
            <div className="bg-[#111827]/80 backdrop-blur-md rounded-[3rem] p-10 md:p-14 border border-white/5 shadow-2xl transition-all hover:border-primary/20">
              <h2 className="text-3xl font-black tracking-tight italic uppercase mb-10 text-white flex items-center gap-4">
                <Zap className="h-8 w-8 text-primary fill-primary/10" /> Key Features
              </h2>
              <ul className="space-y-8">
                {features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-4 group italic">
                    <CheckCircle2 className="h-6 w-6 text-primary shrink-0 group-hover:scale-110 transition-transform" />
                    <span className="text-slate-300 font-bold leading-relaxed transition-colors group-hover:text-white">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Why Us Col */}
            <div className="bg-gradient-to-br from-[#111827] to-[#0B1120] rounded-[3rem] p-10 md:p-14 border border-white/5 shadow-2xl relative overflow-hidden transition-all hover:border-accent/20">
              <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl opacity-50" />
              <h2 className="text-3xl font-black tracking-tight italic uppercase mb-10 text-white flex items-center gap-4 relative z-10">
                <ShieldCheck className="h-8 w-8 text-accent fill-accent/10" /> Why Our Experts
              </h2>
              <ul className="space-y-8 relative z-10 italic">
                {whyChooseUs.map((item, i) => (
                  <li key={i} className="flex items-start gap-4 group">
                    <div className="h-7 w-7 rounded-lg bg-accent/10 flex items-center justify-center shrink-0 group-hover:bg-accent/30 transition-colors">
                      <ArrowRight className="h-4 w-4 text-accent" />
                    </div>
                    <span className="text-slate-300 font-bold leading-relaxed group-hover:text-white transition-colors">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
              <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center gap-6 relative z-10">
                <div className="flex items-center gap-4">
                   <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center text-primary">
                      <Clock size={28} />
                   </div>
                  <div>
                    <h4 className="font-black uppercase tracking-tight italic text-white text-sm">Available 24/7</h4>
                    <p className="text-[10px] text-slate-500 font-medium uppercase tracking-widest">Day or night assistance</p>
                  </div>
                </div>
                <Link 
                  href="tel:+17247506935"
                  className={cn(
                    "w-full sm:w-auto h-12 px-6 rounded-xl font-black uppercase italic tracking-widest bg-primary text-white text-xs flex items-center justify-center"
                  )}
                >
                  Call Now
                </Link>
              </div>
            </div>
          </div>
          {children && <div className="mt-24">{children}</div>}
        </section>

        <CommonCauses />
        <TrustBar />
        <CTASection 
          title="Need Emergency Help?" 
          subtitle="Our local licensed experts are available 24/7 to solve your drainage problems. Call now for priority dispatch."
          variant="accent"
        />
      </main>
      <Footer />
    </>
  );
}
