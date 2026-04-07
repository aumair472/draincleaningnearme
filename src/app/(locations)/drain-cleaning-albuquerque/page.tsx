import Link from "next/link";
import { Phone, MapPin, Droplets, Trees, Building2, CheckCircle, AlertCircle, Clock, Star } from "lucide-react";
import { ServicePageLayout } from "@/components/service-page-layout";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Expert Drain Cleaning in Albuquerque | Emergency Rooter Services",
  description:
    "Top-rated drain cleaning services in Albuquerque. Expert clogged drain repair, sewer line cleaning & hydro jetting; Residential & commercial services available. Book a free estimate!",
  alternates: {
    canonical: "https://www.draincleaningnearme.us/drain-cleaning-albuquerque",
  },
};

const faqs = [
  {
    q: "How much does drain cleaning cost in Albuquerque?",
    a: "Kitchen sinks average $150-250, toilets $180-270, showers $230-330. Varies by severity; free estimates available.",
  },
  {
    q: "How often should I clean drains in Albuquerque, NM?",
    a: "Every 12-18 months for most homes; annually for high-use or older properties due to hard water and roots.",
  },
  {
    q: "DIY vs professional drain unclogging in Albuquerque?",
    a: "DIY works for minor clogs; professional drain cleaning needed for roots, scale or sewer issues to avoid pipe damage.",
  },
  {
    q: "Do you offer emergency services in Albuquerque?",
    a: "Yes, 24/7 emergency plumber are available in Albuquerque within 60 minutes response.",
  },
  {
    q: "What is the best method for sewer cleaning in Albuquerque?",
    a: "Hydro jetting for thorough, chemical-free cleaning of grease and roots.",
  },
  {
    q: "Can tree roots be removed from sewer lines permanently?",
    a: "Tree roots cut and sealed with lining; regrowth prevented in long-term. This issue is common in North Valley.",
  },
];

export default function AlbuquerquePage() {
  return (
    <ServicePageLayout
      title="Professional Drain Cleaning & Rooter Services in Albuquerque"
      subtitle="Fast, Reliable Drain Cleaning Services Albuquerque Residents Trust"
      description={
        <>
          <p>
            Clogged drains causing slow drains, foul odors or backups? DrainCleaningNearMe delivers fast, reliable drain cleaning services in Albuquerque; residents trust for hydro jetting, sewer line cleaning and emergency fixes. Our licensed experts handle everything from kitchen drain clogs to commercial sewer repairs in neighborhoods like Northeast Heights, North Valley and Westside.
          </p>
          <p>
            Call now for same-day service:{" "}
            <Link href="tel:+17247506935" className="font-bold text-white hover:text-primary transition-colors">
              (724) 750-6935
            </Link>{" "}
            | Get your free estimate today!
          </p>
        </>
      }
      features={[
        "Drain Snaking and Rooter Services Albuquerque",
        "Hydro Jetting Services in Albuquerque",
        "Sewer Line Cleaning and Repair Albuquerque",
        "Drain Camera Inspection for Accurate Diagnosis",
        "Emergency Drain Service Albuquerque 24/7",
        "Residential & Commercial Drain Services",
      ]}
      whyChooseUs={[
        "Fast response: 60 minutes for emergency drain service in Albuquerque",
        "Experienced technicians: Hard water & rooter specialists",
        "Advanced equipment: Hydro jetting & drain cameras for precise unclogging",
        "Affordable drain services: Kitchen, bathroom & toilet drains from $150-250",
        "Guarantee: 100% satisfaction or free return service within 7 days",
        "5-star reviews from Northeast Heights to Paradise West",
      ]}
    >
      <div className="space-y-24">

        {/* ── Why Albuquerque Needs Expert Drain Cleaning ── */}
        <section className="p-10 md:p-14 rounded-[3rem] bg-[#111827]/80 border border-white/5 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl opacity-50" />
          <h2 className="text-3xl md:text-4xl font-black uppercase italic tracking-tight text-white mb-6 relative z-10">
            Why Albuquerque Homes Need{" "}
            <span className="text-primary">Expert Drain Cleaning</span>
          </h2>
          <div className="space-y-4 text-[11px] font-bold text-slate-400 uppercase tracking-widest leading-loose relative z-10">
            <p>
              Living in Albuquerque means dealing with unique plumbing challenges from hard water mineral buildup to tree root intrusion in sewer lines. Our dry high-desert climate and extreme temperature swings; dropping to 20°F in winter, cause pipes to contract, trapping grease, hair and debris that lead to frequent clogs.
            </p>
            <p>
              Aging infrastructure adds to the problem, with 80 miles of Albuquerque city radius, 3000 miles of sewer pipes in poor condition, often made of clay or cast iron prone to corrosion and collapse. Whether you are in Academy Hills Park, Los Ranchos de Albuquerque, or Ladera Heights, DrainCleaningNearMe provides professional drain cleaning services in Albuquerque, NM to residents demands, serving both residential and commercial clients with 24/7 emergency drain cleaning availability.
            </p>
            <p>
              We fix clogged drain issues by repairing before they cause sewage backups or costly sewer line repair in Albuquerque projects. Our Albuquerque drain experts use advanced tools for long-lasting results, building trust in communities across the city.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 mt-10 relative z-10">
            {[
              { icon: Droplets, title: "Hard Water Mineral Buildup", text: "Calcium & magnesium scale narrows pipes over time, causing frequent slow drains across the metro." },
              { icon: Trees, title: "Tree Root Intrusion", text: "Rio Grande cottonwoods & elms invade clay pipe joints in North Valley and Academy Acres." },
              { icon: Building2, title: "Aging Infrastructure", text: "50+ year-old clay and cast iron pipes corrode from dry climate shifts and freeze-thaw cycles." },
            ].map((item, i) => (
              <div key={i} className="p-6 rounded-2xl bg-white/5 border border-white/5 hover:border-primary/50 transition-all group">
                <item.icon className="text-primary mb-4 group-hover:scale-110 transition-transform" size={32} />
                <h4 className="font-black uppercase italic tracking-tight mb-2 text-sm text-white group-hover:text-primary transition-colors">
                  {item.title}
                </h4>
                <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── Our Drain Cleaning Services ── */}
        <section className="space-y-8">
          <h2 className="text-3xl md:text-4xl font-black uppercase italic tracking-tight text-white">
            Our Drain Cleaning Services in <span className="text-primary">Albuquerque</span>
          </h2>
          <p className="text-[11px] font-bold text-slate-400 uppercase tracking-widest leading-loose max-w-4xl">
            DrainCleaningNearMe offers comprehensive drain cleaning solutions customized to Albuquerque local needs like Rio Grande Valley tree roots and monsoon storm debris. From drain snaking to high-pressure hydro jetting in Albuquerque, we cover it all.
          </p>

          {/* Service Cards */}
          <div className="grid lg:grid-cols-2 gap-8">

            {/* Drain Snaking */}
            <div className="p-10 rounded-[2.5rem] bg-[#111827]/80 border border-white/5 shadow-2xl space-y-6">
              <h3 className="text-2xl font-black uppercase italic text-white">
                Drain Snaking & Rooter Services <span className="text-primary">Albuquerque</span>
              </h3>
              <p className="text-[11px] font-bold text-slate-400 uppercase tracking-widest leading-loose">
                Our Albuquerque rooter services use powered cabling to break up tough blockages from hair, soap or food in kitchen and bathroom drains. Ideal for quick pipe blockage removal without damaging older pipes common in Far Northeast Heights homes.
              </p>
              <div className="space-y-3">
                <h4 className="text-xs font-black uppercase italic tracking-widest text-primary">Benefits Include:</h4>
                <ul className="space-y-2">
                  {[
                    "Effective for hair and soap buildup in bathroom drain unclogging Albuquerque",
                    "Affordable drain cleaning Albuquerque starting at basic clogs",
                    "Safe for aging systems in neighborhoods like Northwest Heights",
                  ].map((b, i) => (
                    <li key={i} className="flex items-start gap-3 text-[10px] font-bold text-slate-400 uppercase tracking-widest leading-relaxed">
                      <CheckCircle size={14} className="text-primary mt-0.5 shrink-0" />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex flex-wrap gap-3 pt-2">
                <Link href="/bathroom-drain-cleaning-unclogging-services" className="text-[10px] font-black uppercase italic tracking-widest text-primary hover:text-white transition-colors border border-primary/30 hover:border-primary rounded-xl px-4 py-2">
                  → Bathroom Drain Cleaning
                </Link>
                <Link href="/kitchen-sink-drain-cleaning-unclogging-services" className="text-[10px] font-black uppercase italic tracking-widest text-primary hover:text-white transition-colors border border-primary/30 hover:border-primary rounded-xl px-4 py-2">
                  → Kitchen Drain Cleaning
                </Link>
              </div>
            </div>

            {/* Hydro Jetting */}
            <div className="p-10 rounded-[2.5rem] bg-[#111827]/80 border border-white/5 shadow-2xl space-y-6">
              <h3 className="text-2xl font-black uppercase italic text-white">
                Hydro Jetting Services <span className="text-primary">Albuquerque</span>
              </h3>
              <p className="text-[11px] font-bold text-slate-400 uppercase tracking-widest leading-loose">
                Hydro jetting services in Albuquerque blasts away grease clogs, mineral scale and roots with 4000 PSI water; no chemicals needed, eco-friendly for our desert environment. Perfect for sewer and french drain cleaning in Albuquerque after heavy rains.
              </p>
              <div className="space-y-3">
                <h4 className="text-xs font-black uppercase italic tracking-widest text-primary">Benefits Include:</h4>
                <ul className="space-y-2">
                  {[
                    "Clears 99% of buildup, preventing recurring slow drains",
                    "Extends pipe life in hard water areas like Westside",
                    "Superior to snaking for deep sewer line cleaning in Albuquerque",
                  ].map((b, i) => (
                    <li key={i} className="flex items-start gap-3 text-[10px] font-bold text-slate-400 uppercase tracking-widest leading-relaxed">
                      <CheckCircle size={14} className="text-primary mt-0.5 shrink-0" />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
              <Link href="/hydro-jetting-cleaning-services" className="inline-block text-[10px] font-black uppercase italic tracking-widest text-primary hover:text-white transition-colors border border-primary/30 hover:border-primary rounded-xl px-4 py-2">
                → Hydro Jetting Services
              </Link>
            </div>

            {/* Sewer Line Cleaning */}
            <div className="p-10 rounded-[2.5rem] bg-[#111827]/80 border border-white/5 shadow-2xl space-y-6">
              <h3 className="text-2xl font-black uppercase italic text-white">
                Sewer Line Cleaning & Repair <span className="text-primary">Albuquerque</span>
              </h3>
              <p className="text-[11px] font-bold text-slate-400 uppercase tracking-widest leading-loose">
                Albuquerque sewer cleaning tackles tree root intrusion from cottonwoods and elms, common in North Valley and Paradise East. We repair collapsed clay pipes eroded by sewer gases.
              </p>
              <div className="space-y-3">
                <h4 className="text-xs font-black uppercase italic tracking-widest text-primary">Benefits Include:</h4>
                <ul className="space-y-2">
                  {[
                    "Drain camera inspection to pinpoint root intrusion in sewer lines",
                    "Trenchless options for Albuquerque sewer repair without digging up your yard",
                    "Full sewer hydro jetting service for storm drain cleaning in Albuquerque",
                  ].map((b, i) => (
                    <li key={i} className="flex items-start gap-3 text-[10px] font-bold text-slate-400 uppercase tracking-widest leading-relaxed">
                      <CheckCircle size={14} className="text-primary mt-0.5 shrink-0" />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
              <Link href="/sewer-line-cleaning-repair-usa" className="inline-block text-[10px] font-black uppercase italic tracking-widest text-primary hover:text-white transition-colors border border-primary/30 hover:border-primary rounded-xl px-4 py-2">
                → Sewer Line Cleaning & Repair
              </Link>
            </div>

            {/* Camera + Emergency in one column */}
            <div className="space-y-8">
              <div className="p-8 rounded-[2.5rem] bg-[#111827]/80 border border-white/5 shadow-2xl space-y-4">
                <h3 className="text-xl font-black uppercase italic text-white">
                  Drain Camera Inspection <span className="text-primary">Accurate Diagnosis</span>
                </h3>
                <p className="text-[11px] font-bold text-slate-400 uppercase tracking-widest leading-loose">
                  Before any work is started, our sewer camera inspection reveals hidden issues like pipe corrosion or standing water in Ladera Heights pipes.
                </p>
                <Link href="/drain-camera-inspection" className="inline-block text-[10px] font-black uppercase italic tracking-widest text-primary hover:text-white transition-colors border border-primary/30 hover:border-primary rounded-xl px-4 py-2">
                  → Drain Camera Inspection
                </Link>
              </div>
              <div className="p-8 rounded-[2.5rem] bg-gradient-to-br from-red-900/20 to-[#111827] border border-red-500/20 shadow-2xl space-y-4">
                <div className="flex items-center gap-3">
                  <Clock size={24} className="text-red-400" />
                  <h3 className="text-xl font-black uppercase italic text-white">
                    Emergency Drain Service <span className="text-red-400">24/7</span>
                  </h3>
                </div>
                <p className="text-[11px] font-bold text-slate-400 uppercase tracking-widest leading-loose">
                  Sewer backup at midnight? Our emergency plumber in Albuquerque arrives within 60 minutes, even during monsoons.
                </p>
                <Link href="/emergency-drain-cleaning-services" className="inline-block text-[10px] font-black uppercase italic tracking-widest text-red-400 hover:text-white transition-colors border border-red-500/30 hover:border-red-400 rounded-xl px-4 py-2">
                  → Emergency Drain Cleaning
                </Link>
              </div>
            </div>

          </div>
        </section>

        {/* ── Common Drain Problems ── */}
        <section className="p-10 md:p-14 rounded-[3rem] bg-[#111827]/80 border border-white/5 shadow-2xl space-y-8">
          <h2 className="text-3xl md:text-4xl font-black uppercase italic tracking-tight text-white">
            Common Drain Problems in <span className="text-primary">Albuquerque</span>
          </h2>
          <div className="space-y-4 text-[11px] font-bold text-slate-400 uppercase tracking-widest leading-loose">
            <p>
              Albuquerque's hard water, loaded with calcium and magnesium, causes scale buildup that narrows pipes over time, leading to clogged drain scenarios. Combine this with grease from local New Mexican cooking; thick frying green chili and you get stubborn kitchen drain cleaning needs in Albuquerque.
            </p>
            <p>
              Tree root intrusion plagues older sewer drains in neighborhoods like Academy Acres and Los Volcanes, where Rio Grande cottonwoods roots reach into clay pipe joints. Aging infrastructure, with pipes over 50 years old, corrodes from dry climate shifts and freeze-thaw cycles. Monsoon floods exacerbate storm drain cleaning issues in Albuquerque, while extreme heat expands pipes, trapping debris.
            </p>
          </div>
          <div className="space-y-3">
            <h4 className="text-xs font-black uppercase italic tracking-widest text-primary">Examples:</h4>
            <ul className="space-y-3">
              {[
                "Northeast Heights homes see hair clogs from multiple bathrooms",
                "Westside restaurants battle grease clog removal after busy nights",
                "North Valley properties face frequent sewer backups from roots",
              ].map((ex, i) => (
                <li key={i} className="flex items-start gap-3 text-[10px] font-bold text-slate-400 uppercase tracking-widest leading-relaxed">
                  <AlertCircle size={14} className="text-primary mt-0.5 shrink-0" />
                  {ex}
                </li>
              ))}
            </ul>
          </div>
          <p className="text-[11px] font-bold text-slate-400 uppercase tracking-widest leading-loose">
            These regional challenges make professional drain cleaning services repairs essential for preventing foul odor from drains and major plumbing services in Albuquerque NM.
          </p>
        </section>

        {/* ── Signs You Need Professional Service ── */}
        <section className="grid lg:grid-cols-2 gap-8">
          <div className="p-10 md:p-14 rounded-[3rem] bg-[#111827]/80 border border-white/5 shadow-2xl space-y-6">
            <h2 className="text-2xl font-black uppercase italic text-white">
              Signs You Need <span className="text-primary">Professional Drain Cleaning</span>
            </h2>
            <p className="text-[11px] font-bold text-slate-400 uppercase tracking-widest leading-loose">
              Do not ignore early warnings; acting fast saves thousands on drain repair in Albuquerque.
            </p>
            <ul className="space-y-4">
              {[
                { label: "Slow drains", desc: "Water pools in sinks or tubs due to partial blockages from hard water scale." },
                { label: "Gurgling sounds", desc: "Air trapped by grease or hair in pipes, common in bathroom drain needs unclogging in Albuquerque." },
                { label: "Foul odors", desc: "Sewer gases from drain clogs or root intrusion sewer lines." },
                { label: "Frequent clogs", desc: "Recurring issues signal deeper pipe cleaning service needs." },
                { label: "Water backups", desc: "Standing water in multiple fixtures means sewer line problems; call for emergency drain cleaning in Albuquerque." },
              ].map((item, i) => (
                <li key={i} className="space-y-1">
                  <span className="text-[10px] font-black uppercase italic tracking-widest text-primary">{item.label}:</span>
                  <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest leading-relaxed pl-2 border-l border-primary/30">{item.desc}</p>
                </li>
              ))}
            </ul>
            <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest leading-relaxed">
              In Albuquerque, NM; these often stem from tree roots or aging pipes, worsening with temperature swings.
            </p>
          </div>

          {/* Step-by-Step Process */}
          <div className="p-10 md:p-14 rounded-[3rem] bg-[#111827]/80 border border-white/5 shadow-2xl space-y-6">
            <h2 className="text-2xl font-black uppercase italic text-white">
              Our Step-by-Step <span className="text-primary">Drain Cleaning Process</span>
            </h2>
            <p className="text-[11px] font-bold text-slate-400 uppercase tracking-widest leading-loose">
              We ensure transparent, efficient service:
            </p>
            <ol className="space-y-5">
              {[
                { step: "Inspection", desc: "Free visual and camera check for issues like clogging or root removal in the sewer line." },
                { step: "Diagnosis", desc: "Identify causes; clog, grease, roots or corrosion." },
                { step: "Method Selection", desc: "Snaking for simple clogs; hydro jetting for deep cleans in Albuquerque." },
                { step: "Execution", desc: "Safe, thorough cleaning of the whole sewer line." },
                { step: "Final Testing", desc: "Run water to confirm no slow drains or backups." },
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-4">
                  <span className="w-7 h-7 rounded-full bg-primary/20 border border-primary/50 flex items-center justify-center text-[10px] font-black text-primary shrink-0 mt-0.5">
                    {i + 1}
                  </span>
                  <div>
                    <span className="text-[10px] font-black uppercase italic tracking-widest text-white">{item.step}: </span>
                    <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest leading-relaxed">{item.desc}</span>
                  </div>
                </li>
              ))}
            </ol>
            <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest leading-relaxed border-t border-white/5 pt-4">
              This process minimizes downtime for residential & commercial drain services in Albuquerque.
            </p>
          </div>
        </section>

        {/* ── Residential & Commercial ── */}
        <section className="space-y-8">
          <h2 className="text-3xl md:text-4xl font-black uppercase italic tracking-tight text-white">
            Residential & <span className="text-primary">Commercial Services</span>
          </h2>
          <div className="grid lg:grid-cols-2 gap-8">

            {/* Residential */}
            <div className="p-10 rounded-[2.5rem] bg-[#111827]/80 border border-white/5 shadow-2xl space-y-6">
              <h3 className="text-xl font-black uppercase italic text-white">
                Residential Drain Services in <span className="text-primary">Albuquerque</span>
              </h3>
              <p className="text-[11px] font-bold text-slate-400 uppercase tracking-widest leading-loose">
                From single-family homes in Academy Hills to apartments in The Knolls, we handle kitchen drain cleaning Albuquerque and bathroom backups.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link href="/bathroom-drain-cleaning-unclogging-services" className="text-[10px] font-black uppercase italic tracking-widest text-primary hover:text-white transition-colors border border-primary/30 hover:border-primary rounded-xl px-4 py-2">
                  → Bathroom Drain Cleaning
                </Link>
                <Link href="/kitchen-sink-drain-cleaning-unclogging-services" className="text-[10px] font-black uppercase italic tracking-widest text-primary hover:text-white transition-colors border border-primary/30 hover:border-primary rounded-xl px-4 py-2">
                  → Kitchen Drain Cleaning
                </Link>
              </div>
            </div>

            {/* Commercial */}
            <div className="p-10 rounded-[2.5rem] bg-[#111827]/80 border border-white/5 shadow-2xl space-y-6">
              <h3 className="text-xl font-black uppercase italic text-white">
                Commercial Drain Cleaning <span className="text-primary">Albuquerque</span>
              </h3>
              <p className="text-[11px] font-bold text-slate-400 uppercase tracking-widest leading-loose">
                Restaurants in Midtown, offices in Northwest Heights and industrial sites get priority for sewer line cleaning and main drain repair in Albuquerque to avoid business interruptions. Our services include:
              </p>
              <ul className="space-y-2">
                {[
                  "High-volume grease clogs in eateries",
                  "Storm drain cleaning in Albuquerque for warehouses",
                  "24/7 availability for Albuquerque sewer hydro jetting service",
                ].map((s, i) => (
                  <li key={i} className="flex items-start gap-3 text-[10px] font-bold text-slate-400 uppercase tracking-widest leading-relaxed">
                    <CheckCircle size={14} className="text-primary mt-0.5 shrink-0" /> {s}
                  </li>
                ))}
              </ul>
              <Link href="/sewer-line-cleaning-repair-usa" className="inline-block text-[10px] font-black uppercase italic tracking-widest text-primary hover:text-white transition-colors border border-primary/30 hover:border-primary rounded-xl px-4 py-2">
                → Sewer Line & Main Drain Repair
              </Link>
            </div>
          </div>

          {/* Prevention Tips */}
          <div className="p-10 md:p-14 rounded-[3rem] bg-[#111827]/80 border border-white/5 shadow-2xl space-y-6">
            <h3 className="text-2xl font-black uppercase italic text-white">
              Prevention Tips for <span className="text-primary">Albuquerque Drains</span>
            </h3>
            <p className="text-[11px] font-bold text-slate-400 uppercase tracking-widest leading-loose">
              Stay ahead of clogs with these data-backed tips:
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
              {[
                { tip: "Avoid grease disposal", desc: "Kitchen grease and fats should be poured into cans; boiling water helps minor slips of grease." },
                { tip: "Use drain screens", desc: "Catch hair and debris in drain screens in multi-person homes." },
                { tip: "Regular maintenance", desc: "Professional drain cleaning every 12-18 months, or annually for older homes/large families." },
                { tip: "Schedule inspections", desc: "Drain camera checks detect early clogging and root intrusions." },
                { tip: "Hard water awareness", desc: "Install strainers; consider softeners for scale prevention." },
              ].map((item, i) => (
                <div key={i} className="p-5 rounded-2xl bg-white/5 border border-white/5 hover:border-primary/30 transition-all space-y-2">
                  <h4 className="text-[10px] font-black uppercase italic tracking-widest text-primary">{item.tip}</h4>
                  <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
            <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest leading-relaxed border-t border-white/5 pt-4">
              Following these reduces pipe blockage removal needs by 70%, per industry stats.
            </p>
          </div>
        </section>

        {/* ── Service Areas ── */}
        <section className="p-10 md:p-14 rounded-[3rem] bg-gradient-to-br from-[#111827] to-[#0B1120] border border-white/5 shadow-2xl text-center space-y-8">
          <MapPin size={56} className="text-primary mx-auto opacity-50" />
          <h2 className="text-2xl font-black uppercase italic text-white">
            Serving Albuquerque <span className="text-primary">NM & Surrounding Areas</span>
          </h2>
          <p className="text-[11px] font-bold text-slate-400 uppercase tracking-widest leading-loose max-w-2xl mx-auto">
            Whether you are in Academy Hills Park, Los Ranchos de Albuquerque, or Ladera Heights, we provide professional services to both residential and commercial clients with 24/7 availability.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "Northeast Heights", "North Valley", "Westside", "Academy Hills Park",
              "Los Ranchos", "Ladera Heights", "Midtown", "Paradise East",
              "Northwest Heights", "Far Northeast Heights", "Los Volcanes", "Academy Acres",
            ].map((area) => (
              <span key={area} className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-[10px] font-black uppercase tracking-widest text-primary italic">
                {area}
              </span>
            ))}
          </div>
        </section>

        {/* ── Why Choose Us ── */}
        <section className="p-10 md:p-14 rounded-[3rem] bg-[#111827]/80 border border-white/5 shadow-2xl space-y-8">
          <h2 className="text-3xl font-black uppercase italic tracking-tight text-white">
            Why Choose <span className="text-primary">DrainCleaningNearMe</span> in Albuquerque
          </h2>
          <p className="text-[11px] font-bold text-slate-400 uppercase tracking-widest leading-loose max-w-3xl">
            We are the reliable plumbing & drain cleaning service provider of Albuquerque, with licensed technicians equipped for local issues like caliche soil shifts.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: Clock, title: "Fast Response", desc: "60 minutes for emergency drain service in Albuquerque in most cases." },
              { icon: Star, title: "Experienced Technicians", desc: "Decades of handling hard water and rooter services in Albuquerque." },
              { icon: CheckCircle, title: "Advanced Equipment", desc: "Hydro jetting & drain cameras for precise unclogging drains in Albuquerque." },
              { icon: Droplets, title: "Affordable Rates", desc: "Kitchen sinks & bathroom, toilets drain cleaning starts from $150-250." },
              { icon: Building2, title: "Satisfaction Guarantee", desc: "100% guarantee or free return service if issues arise within 7 days." },
              { icon: MapPin, title: "5-Star Reviews", desc: "Trusted by clients from Northeast Heights to Paradise West in Albuquerque." },
            ].map((item, i) => (
              <div key={i} className="p-6 rounded-2xl bg-white/5 border border-white/5 hover:border-primary/50 transition-all group space-y-3">
                <item.icon size={28} className="text-primary group-hover:scale-110 transition-transform" />
                <h4 className="text-xs font-black uppercase italic tracking-widest text-white group-hover:text-primary transition-colors">{item.title}</h4>
                <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── FAQs ── */}
        <section className="p-10 md:p-14 rounded-[3rem] bg-[#111827]/80 border border-white/5 shadow-2xl space-y-10">
          <h2 className="text-3xl font-black uppercase italic tracking-tight text-center text-white">
            Frequently Asked <span className="text-primary">Questions</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-10">
            {faqs.map((faq, i) => (
              <div key={i} className="space-y-3 border-b border-white/5 pb-6">
                <h3 className="text-xs font-black uppercase italic tracking-widest text-white">Q: {faq.q}</h3>
                <p className="text-[11px] font-bold text-slate-500 uppercase tracking-widest leading-relaxed">A: {faq.a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── Final CTA ── */}
        <div className="text-center space-y-8 p-12 rounded-[3.5rem] bg-gradient-to-br from-primary/10 to-accent/5 border border-primary/20 italic">
          <h2 className="text-3xl font-black uppercase tracking-tight text-white italic">
            Get Your Drains Flowing Today: Book Now!
          </h2>
          <p className="text-slate-400 font-bold uppercase tracking-widest text-xs max-w-2xl mx-auto leading-relaxed">
            Do not let clogged drains disrupt your routine life in Albuquerque. Call <strong className="text-white">(724) 750-6935</strong> for same-day drain cleaning services in Albuquerque, schedule services like hydro jetting & drain video camera inspection, or request a free estimate online. Reliable, affordable, expert guidance and consultation; your local drain professionals are ready 24/7.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="tel:+17247506935"
              className="h-16 px-12 bg-accent text-white rounded-2xl flex items-center justify-center gap-3 font-black uppercase italic tracking-widest hover:scale-105 transition-all"
            >
              <Phone fill="currentColor" size={22} /> Call Now
            </Link>
            <Link
              href="/contact"
              className="h-16 px-12 bg-white/5 border border-white/20 text-white rounded-2xl flex items-center justify-center gap-3 font-black uppercase italic tracking-widest hover:bg-white/10 hover:scale-105 transition-all"
            >
              Free Estimate
            </Link>
          </div>
          <p className="text-[10px] text-slate-500 font-black uppercase tracking-widest">
            Licensed Albuquerque Experts &middot; 24/7 Priority Emergency Dispatch &middot; Free Estimates
          </p>
        </div>

        {/* ── Schema Markup ── */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: faqs.map((faq) => ({
                "@type": "Question",
                name: faq.q,
                acceptedAnswer: { "@type": "Answer", text: faq.a },
              })),
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "DrainCleaningNearMe Services Albuquerque",
              description: "Professional drain cleaning, hydro jetting, and sewer repair in Albuquerque NM.",
              url: "https://www.draincleaningnearme.us/drain-cleaning-albuquerque",
              telephone: "(724) 750-6935",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Albuquerque",
                addressRegion: "NM",
                addressCountry: "US",
              },
              areaServed: "Albuquerque NM",
              priceRange: "$$",
            }),
          }}
        />
      </div>
    </ServicePageLayout>
  );
}
