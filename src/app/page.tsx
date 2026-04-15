import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

// Core Homepage Flow
import { Hero } from "@/components/hero";
import { HowItWorks } from "@/components/how-it-works";
import { ServicesGrid } from "@/components/services-grid";
import { TopProfessionals } from "@/components/top-professionals";
import { Testimonials } from "@/components/testimonials";
import { CTASection } from "@/components/cta-section";
import { FAQ } from "@/components/faq";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1 bg-card">
        {/* HOMEPAGE STRUCTURE (STRICT — NO EXTRA SECTIONS) */}
        {/* 1. HERO (Search + Trust) */}
        <Hero />

        {/* 2. HOW IT WORKS (3 steps only) */}
        <HowItWorks />

        {/* 3. SERVICE CATEGORIES (Grid) */}
        <ServicesGrid />

        {/* 5. TESTIMONIALS */}
        <Testimonials />

        {/* 6. STRONG CTA SECTION */}
        <CTASection />

        {/* 7. FAQ */}
        <FAQ />
      </main>
      <Footer />
    </>
  );
}
