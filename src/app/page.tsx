import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { TrustBar } from "@/components/trust-bar";
import { FastHelp } from "@/components/fast-help";
import { WhyCallUs } from "@/components/why-call-us";
import { ServicesGrid } from "@/components/services-grid";
import { WhyChooseUsSection } from "@/components/why-choose-us";
import { ImmediateAction } from "@/components/immediate-action";
import { ServiceAreas } from "@/components/service-areas";
import { HowItWorks } from "@/components/how-it-works";
import { Testimonials } from "@/components/testimonials";
import { FAQ } from "@/components/faq";
import { CTASection } from "@/components/cta-section";
import { CommonCauses } from "@/components/common-causes";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Hero />
        
        {/* Full 1:1 Legacy Logical Sync */}
        
        {/* Section 1: Fast Help */}
        <FastHelp />
        
        {/* Section 2: Why Homeowners Call Us (Checklist) */}
        <WhyCallUs />
        
        {/* Section 3: Trust Bar */}
        <TrustBar />
        
        {/* Section 4: Services */}
        <ServicesGrid />
        
        {/* Section 5: Mid CTA */}
        <CTASection 
          title="Get Your Drains Clear in Hours - Call Now"
          subtitle="Talk to a drain cleaning specialist now — we'll connect you with a licensed pro in your area in minutes."
          variant="accent"
        />
        
        {/* Section 6: Why Choose Us (Cards) */}
        <WhyChooseUsSection />
        
        {/* Section 7: Common Causes */}
        <CommonCauses />
        
        {/* Section 8: Testimonials */}
        <Testimonials />
        
        {/* Section 9: Service Areas */}
        <ServiceAreas />
        
        {/* Section 10: How It Works */}
        <HowItWorks />
        
        {/* Section 11: CTA Band 2 */}
        <CTASection 
          title="Every Minute Counts When Drains Overflow"
          subtitle="Water damage gets expensive fast. Call now and we'll have a licensed technician headed your way."
          variant="alert"
        />
        
        {/* Section 12: Why Immediate Action Matters */}
        <ImmediateAction />
        
        {/* Section 13: FAQ */}
        <FAQ />
        
        {/* Section 14: Final CTA */}
        <CTASection 
          title="Get Your Drains Cleared Today"
          subtitle="Whether you need a minor clog removed or urgent drain and sewer cleaning, we are ready to help. Call now for fast, reliable service anywhere in the USA."
          variant="primary"
          showStats={false}
        />
      </main>
      <Footer />
    </>
  );
}
