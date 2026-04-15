import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { CTASection } from "@/components/cta-section";
import { TrustBar } from "@/components/trust-bar";
import { CommonCauses } from "@/components/common-causes";
import { CheckCircle2, Phone, ArrowRight, ShieldCheck, Clock, Zap } from "lucide-react";
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
      <main className="flex-1 pt-32 pb-20 bg-bg relative overflow-hidden">
        <section className="container relative z-10 mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h1 className="text-[40px] md:text-[56px] font-bold tracking-tight mb-6 leading-tight text-text">
              {title}
            </h1>
            {subtitle && (
              <p className="text-xl md:text-2xl text-primary font-bold mb-6">
                {subtitle}
              </p>
            )}
            <div className="text-lg text-text/80 font-medium leading-relaxed max-w-3xl mx-auto space-y-6">
              {description}
            </div>

            <div className="flex flex-col sm:flex-row justify-center gap-4 mt-10">
              <Link
                href="tel:+17247506935"
                className={cn(
                  "h-14 px-8 text-lg font-bold rounded-lg flex items-center justify-center gap-3",
                  "bg-accent text-white shadow-sm hover:shadow-md hover:bg-accent/90 transition-all"
                )}
              >
                <Phone fill="currentColor" className="h-5 w-5" />
                (724) 750-6935
              </Link>
              <Link
                href="/contact"
                className={cn(
                  "h-14 px-8 text-lg font-bold rounded-lg border flex items-center justify-center gap-3",
                  "bg-card border-border text-text/90 hover:border-primary hover:text-primary transition-all shadow-sm"
                )}
              >
                Free Estimate
              </Link>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 items-start mt-20">
            {/* Features Col */}
            <div className="bg-card rounded-xl p-8 md:p-10 border border-border shadow-sm hover:shadow-md transition-all duration-300">
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-8 text-text flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary shrink-0">
                  <Zap className="h-6 w-6" />
                </div>
                Key Features
              </h2>
              <ul className="space-y-6">
                {features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-4 group">
                    <CheckCircle2 className="h-6 w-6 text-primary shrink-0 transition-transform group-hover:scale-110" />
                    <span className="text-text/80 font-medium leading-relaxed group-hover:text-text transition-colors">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Why Us Col */}
            <div className="bg-card rounded-xl p-8 md:p-10 border border-border shadow-sm hover:shadow-md transition-all duration-300">
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-8 text-text flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center text-accent shrink-0">
                  <ShieldCheck className="h-6 w-6" />
                </div>
                Why Our Experts
              </h2>
              <ul className="space-y-6">
                {whyChooseUs.map((item, i) => (
                  <li key={i} className="flex items-start gap-4 group">
                    <div className="h-6 w-6 rounded-md bg-accent/10 flex items-center justify-center shrink-0 group-hover:bg-accent transition-colors">
                      <ArrowRight className="h-4 w-4 text-accent group-hover:text-white" />
                    </div>
                    <span className="text-text/80 font-medium leading-relaxed group-hover:text-text transition-colors">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
              
              <div className="mt-10 pt-8 border-t border-border/50 flex flex-col sm:flex-row items-center gap-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                    <Clock size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold tracking-tight text-text">Available 24/7</h4>
                    <p className="text-sm text-text/60 font-medium">Day or night assistance</p>
                  </div>
                </div>
                <Link
                  href="tel:+17247506935"
                  className={cn(
                    "w-full sm:w-auto h-12 px-6 rounded-lg font-bold bg-primary hover:bg-blue-700 text-white shadow-sm flex items-center justify-center transition-all"
                  )}
                >
                  Call Now
                </Link>
              </div>
            </div>
          </div>
          {children && <div className="mt-20">{children}</div>}
        </section>
      </main>
      <Footer />
    </>
  );
}
