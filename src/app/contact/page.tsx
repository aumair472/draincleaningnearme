import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { CTASection } from "@/components/cta-section";
import { TrustBar } from "@/components/trust-bar";
import { Phone, MapPin, Clock, ShieldCheck, Zap, AlertTriangle, Headset, Mail } from "lucide-react";
import { cn } from "@/lib/utils";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contact Us | Drain Cleaning Near Me",
  description:
    "Talk to DrainCleaningNearMe and get 24/7 drain cleaning throughout USA. We connect you to local professionals for emergency drain cleaning.",
};

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1 pt-32 pb-20 bg-bg relative overflow-hidden">
        <section className="container relative z-10 mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-xs font-bold uppercase tracking-widest text-primary mb-6">
              Contact DrainCleaningNearMe.us
            </span>
            <h1 className="text-[40px] md:text-[56px] font-bold tracking-tight mb-6 leading-tight text-text">
              We're Here to <span className="text-primary border-b-4 border-blue-200 pb-1">Help 24/7</span>
            </h1>
            <p className="text-lg text-text/80 font-medium leading-relaxed max-w-3xl mx-auto">
              Have a plumbing emergency or a stubborn drain clog? Our team is standing by to 
              connect you with licensed local experts across the United States. Reaching out is fast and easy.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto mb-20">
            {/* Left: Contact Options */}
            <div className="space-y-6">
              <div className="bg-card rounded-xl p-8 border border-border shadow-sm transition-all hover:shadow-md">
                <h2 className="text-2xl font-bold tracking-tight mb-8 text-text flex items-center gap-3">
                    <Headset className="text-primary" /> Direct Contact
                </h2>
                <div className="space-y-6">
                  <Link 
                    href="tel:1800DRAINPRO" 
                    className="flex items-start gap-4 p-6 rounded-lg border border-border/50 bg-bg group hover:border-primary hover:bg-card transition-all shadow-sm"
                  >
                    <div className="p-4 rounded-lg bg-card shadow-sm text-primary group-hover:bg-primary group-hover:text-white transition-all">
                      <Phone size={24} />
                    </div>
                    <div>
                      <h3 className="font-bold text-sm tracking-wider text-text/60 mb-1 uppercase">Toll-Free Support</h3>
                      <p className="text-xl font-bold text-text group-hover:text-primary transition-colors">1-800-DRAIN-PRO</p>
                      <span className="text-xs font-semibold text-text/60 uppercase tracking-widest">24/7 Live Nationwide</span>
                    </div>
                  </Link>

                  <Link 
                    href="tel:+17247506935" 
                    className="flex items-start gap-4 p-6 rounded-lg border border-border/50 bg-bg group hover:border-primary hover:bg-card transition-all shadow-sm"
                  >
                    <div className="p-4 rounded-lg bg-card shadow-sm text-primary group-hover:bg-primary group-hover:text-white transition-all">
                      <Phone size={24} />
                    </div>
                    <div>
                      <h3 className="font-bold text-sm tracking-wider text-text/60 mb-1 uppercase">Local Direct</h3>
                      <p className="text-xl font-bold text-text group-hover:text-primary transition-colors">724 750 6935</p>
                      <span className="text-xs font-semibold text-text/60 uppercase tracking-widest">Immediate priority line</span>
                    </div>
                  </Link>
                </div>
              </div>

              <div className="bg-accent/10 rounded-xl p-8 border border-accent/20 shadow-sm transition-all hover:shadow-md group">
                  <div className="flex items-center gap-4 mb-6">
                      <div className="p-3 rounded-lg bg-accent text-white shadow-sm">
                          <AlertTriangle size={24} />
                      </div>
                      <h2 className="text-xl font-bold text-text">Emergency Help</h2>
                  </div>
                  <p className="text-text/80 font-medium text-sm leading-relaxed mb-6">
                      Overflowing toilets? Sewer backups? These won't fix themselves. 
                      Our team acts with extreme urgency for critical plumbing flow.
                  </p>
                  <Link href="tel:+17247506935" className="flex items-center justify-center h-12 w-full bg-accent hover:bg-accent/90 text-white rounded-lg font-bold shadow-sm transition-all">
                     Call Experts Now
                  </Link>
              </div>

              <div className="bg-card rounded-xl p-8 border border-border shadow-sm transition-all hover:shadow-md flex items-center gap-6">
                  <div className="p-4 rounded-lg bg-primary/10 text-primary">
                    <MapPin className="h-8 w-8" />
                  </div>
                  <div>
                    <h3 className="font-bold tracking-tight text-text mb-1">Headquarters Address</h3>
                    <p className="text-sm text-text/80 font-medium leading-relaxed">
                        209 Mountain Rd PL NE Ste R<br />
                        Albuquerque, NM 87110, USA
                    </p>
                  </div>
              </div>
            </div>

            {/* Right: Clean Form UI */}
            <div className="bg-card rounded-xl p-8 md:p-10 border border-border shadow-sm">
              <h2 className="text-2xl font-bold tracking-tight mb-8 text-text flex items-center gap-3">
                 <Mail className="text-primary" /> Request a Callback
              </h2>
              <form className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="firstName" className="text-sm font-bold text-text/90">First Name</label>
                    <input 
                      type="text" 
                      id="firstName" 
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-bg text-text focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                      placeholder="Jane"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="lastName" className="text-sm font-bold text-text/90">Last Name</label>
                    <input 
                      type="text" 
                      id="lastName" 
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-bg text-text focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                      placeholder="Doe"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="phone" className="text-sm font-bold text-text/90">Phone Number *</label>
                  <input 
                    type="tel" 
                    id="phone" 
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-bg text-text focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                    placeholder="(555) 123-4567"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="zip" className="text-sm font-bold text-text/90">ZIP Code</label>
                  <input 
                    type="text" 
                    id="zip" 
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-bg text-text focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                    placeholder="e.g. 10001"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-bold text-text/90">How can we help? (Optional)</label>
                  <textarea 
                    id="message" 
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-bg text-text focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none"
                    placeholder="Briefly describe your drain issue..."
                  ></textarea>
                </div>

                <button 
                  type="button" 
                  className="w-full h-14 bg-primary hover:bg-blue-700 text-white rounded-lg font-bold shadow-sm transition-all"
                >
                  Request Callback
                </button>
                
                <p className="text-xs text-center font-medium text-text/60 mt-4">
                  By submitting this form, you agree to our Terms of Service and Privacy Policy.
                </p>
              </form>
            </div>
          </div>
        </section>

        <TrustBar />
        <CTASection 
          title="Call Now for Immediate Help &ndash; Get Your Drain Fixed Today!"
          subtitle="Ready to clear that clog? Call 1-800-DRAIN-PRO or 724 750 6935. Hire a DrainCleaningNearMe professional and reclaim your drains today!"
          variant="accent"
        />
      </main>
      <Footer />
    </>
  );
}
