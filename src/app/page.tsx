import { Metadata } from "next";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

// Core Homepage Flow
import { Hero } from "@/components/hero";
import { HowItWorks } from "@/components/how-it-works";
import { ServicesGrid } from "@/components/services-grid";
import { ServiceAreas } from "@/components/service-areas";
import { Testimonials } from "@/components/testimonials";
import { CTASection } from "@/components/cta-section";
import { FAQ } from "@/components/faq";
import { WhyChooseUsSection } from "@/components/why-choose-us-section";
import { UrgencySection } from "@/components/urgency-section";
import { CommonProblems } from "@/components/common-problems";

export const metadata: Metadata = {
  title: "Drain Cleaning Services Near Me | 24/7 Emergency Plumbers USA",
  description: "Drain cleaning near me with 24/7 emergency service. Fast clogged drain & sewer cleaning by licensed pros across the USA. Call now for immediate help!",
  keywords: [
    "drain cleaning near me",
    "emergency drain cleaning",
    "clogged drain service",
    "sewer cleaning",
    "24/7 drain service"
  ],
};

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1 bg-card">
        {/* 1. HERO — H1 lives here */}
        <Hero />

        {/* 2. SERVICES GRID */}
        <ServicesGrid />

        {/* 3. WHY CHOOSE US */}
        <WhyChooseUsSection />

        {/* 4. HOW IT WORKS */}
        <HowItWorks />

        {/* 5. SERVICE AREAS */}
        <ServiceAreas />

        {/* 6. COMMON PROBLEMS */}
        <CommonProblems />

        {/* 7. TESTIMONIALS */}
        <Testimonials />

        {/* 8. URGENCY SECTION */}
        <UrgencySection />

        {/* 9. FAQ */}
        <FAQ />

        {/* 10. FINAL CTA */}
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
