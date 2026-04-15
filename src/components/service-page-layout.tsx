import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { CTASection } from "@/components/cta-section";
import { CheckCircle2, Phone, ArrowRight, ShieldCheck, Clock, Zap, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";

interface ServicePageLayoutProps {
  title: string;
  subtitle?: string;
  description: React.ReactNode;
  features: string[];
  whyChooseUs: string[];
  icon?: React.ElementType;
  relatedServices?: { name: string; href: string }[];
  relatedLocations?: { name: string; href: string }[];
  breadcrumb?: { name: string; href: string }[];
  children?: React.ReactNode;
}

const defaultRelatedServices = [
  { name: "Kitchen Sink Drain Cleaning Services", href: "/kitchen-sink-drain-cleaning-unclogging-services" },
  { name: "Bathroom Drain Cleaning Services", href: "/bathroom-drain-cleaning-unclogging-services" },
  { name: "Emergency Drain Cleaning Services", href: "/emergency-drain-cleaning-services" },
  { name: "Hydro Jetting Drain Cleaning", href: "/hydro-jetting-cleaning-services" },
  { name: "Sewer Line Cleaning & Repair", href: "/sewer-line-cleaning-repair-usa" },
  { name: "Drain Camera Inspection Services", href: "/drain-camera-inspection" },
];

const defaultRelatedLocations = [
  { name: "Drain Cleaning in Dallas, TX", href: "/drain-cleaning-dallas" },
  { name: "Drain Cleaning in Houston, TX", href: "/drain-cleaning-houston" },
  { name: "Drain Cleaning in Chicago, IL", href: "/drain-cleaning-chicago" },
  { name: "Drain Cleaning in New York City", href: "/drain-cleaning-nyc" },
  { name: "Drain Cleaning in Los Angeles, CA", href: "/drain-cleaning-los-angeles" },
  { name: "Drain Cleaning in Phoenix, AZ", href: "/drain-cleaning-phoenix" },
];

export function ServicePageLayout({
  title,
  subtitle,
  description,
  features,
  whyChooseUs,
  children,
  relatedServices,
  relatedLocations,
  breadcrumb,
}: ServicePageLayoutProps) {
  const services = relatedServices ?? defaultRelatedServices;
  const locations = relatedLocations ?? defaultRelatedLocations;

  return (
    <>
      <Navbar />
      <main className="flex-1 pt-32 pb-20 bg-bg relative overflow-hidden">
        {/* Breadcrumb */}
        {breadcrumb && breadcrumb.length > 0 && (
          <nav aria-label="Breadcrumb" className="container mx-auto px-4 mb-6">
            <ol className="flex flex-wrap items-center gap-1.5 text-sm text-text/60 font-medium">
              <li>
                <Link href="/" className="hover:text-primary transition-colors">Home</Link>
              </li>
              {breadcrumb.map((crumb, i) => (
                <li key={crumb.href} className="flex items-center gap-1.5">
                  <ChevronRight size={12} className="shrink-0" />
                  {i === breadcrumb.length - 1 ? (
                    <span className="text-text/90">{crumb.name}</span>
                  ) : (
                    <Link href={crumb.href} className="hover:text-primary transition-colors">{crumb.name}</Link>
                  )}
                </li>
              ))}
            </ol>
          </nav>
        )}

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
              <a
                href="tel:+17247506935"
                aria-label="Call for immediate drain cleaning service at (724) 750-6935"
                className={cn(
                  "h-14 px-8 text-lg font-bold rounded-xl flex items-center justify-center gap-3 transition-all active:scale-95 group",
                  "bg-accent text-white shadow-lg hover:shadow-accent/30 hover:bg-accent/90"
                )}
              >
                <Phone fill="currentColor" size={20} className="group-hover:rotate-12 transition-transform" />
                (724) 750-6935
              </a>
              <Link
                href="/contact"
                aria-label="Call or visit our contact page for a free drain cleaning estimate"
                className={cn(
                  "h-14 px-8 text-lg font-bold rounded-xl border-2 flex items-center justify-center gap-3 transition-all active:scale-95",
                  "bg-card border-primary/20 text-text hover:border-primary hover:text-primary shadow-sm"
                )}
              >
                Call for Free Estimate
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
                    <h3 className="font-bold tracking-tight text-text">Available 24/7</h3>
                    <p className="text-sm text-text/60 font-medium">Day or night assistance</p>
                  </div>
                </div>
                <Link
                  href="tel:+17247506935"
                  aria-label="Call now for 24/7 drain cleaning service"
                  className={cn(
                    "w-full sm:w-auto h-12 px-6 rounded-lg font-bold bg-primary hover:bg-blue-700 text-white shadow-sm flex items-center justify-center transition-all"
                  )}
                >
                  Call Now
                </Link>
              </div>
            </div>
          </div>

          {/* Page-specific content (children) */}
          {children && <div className="mt-20">{children}</div>}

          {/* Related Services */}
          <section className="mt-20 p-10 md:p-14 rounded-xl bg-card border border-border shadow-sm">
            <h2 className="text-2xl font-bold tracking-tight text-text mb-8">Related Drain Cleaning Services</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {services.map((service) => (
                <Link
                  key={service.href}
                  href={service.href}
                  className="flex items-center gap-3 p-4 rounded-lg bg-bg border border-border hover:border-primary/30 hover:shadow-md transition-all group"
                >
                  <ChevronRight size={14} className="text-primary shrink-0 group-hover:translate-x-0.5 transition-transform" />
                  <span className="text-sm font-semibold text-text/80 group-hover:text-primary transition-colors">
                    {service.name}
                  </span>
                </Link>
              ))}
            </div>
          </section>

          {/* Nearby Locations */}
          <section className="mt-8 p-10 md:p-14 rounded-xl bg-bg border border-border shadow-sm">
            <h2 className="text-2xl font-bold tracking-tight text-text mb-8">Serving These Locations</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {locations.map((location) => (
                <Link
                  key={location.href}
                  href={location.href}
                  className="flex items-center gap-3 p-4 rounded-lg bg-card border border-border hover:border-primary/30 hover:shadow-md transition-all group"
                >
                  <ChevronRight size={14} className="text-primary shrink-0 group-hover:translate-x-0.5 transition-transform" />
                  <span className="text-sm font-semibold text-text/80 group-hover:text-primary transition-colors">
                    {location.name}
                  </span>
                </Link>
              ))}
            </div>
          </section>
        </section>

        <div className="mt-20">
          <CTASection />
        </div>
      </main>
      <Footer />
    </>
  );
}
