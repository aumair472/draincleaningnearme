import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

// Core Homepage Flow
import { Hero } from "@/components/hero";
import { HowItWorks } from "@/components/how-it-works";
import { ServicesGrid } from "@/components/services-grid";
import { ServiceAreas } from "@/components/service-areas";
import { TopProfessionals } from "@/components/top-professionals";
import { Testimonials } from "@/components/testimonials";
import { CTASection } from "@/components/cta-section";
import { FAQ } from "@/components/faq";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1 bg-card">
        {/* 1. HERO — H1 lives here */}
        <Hero />

        {/* 2. HOW IT WORKS */}
        <HowItWorks />

        {/* 3. SERVICE CATEGORIES */}
        <ServicesGrid />

        {/* 4. SERVICE AREAS — Internal links to all city pages */}
        <ServiceAreas />

        {/* 6. TESTIMONIALS */}
        <Testimonials />

        {/* 7. STRONG CTA */}
        <CTASection />

        {/* 8. FAQ */}
        <FAQ />
      </main>
      <Footer />
    </>
  );
}
