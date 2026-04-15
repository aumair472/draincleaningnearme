import { Star, MapPin, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const professionals = [
  {
    id: "pro-1",
    name: "Michael R.",
    role: "Master Plumber",
    rating: "4.9",
    reviews: 142,
    location: "Available Nationwide",
    price: "$89/hr",
    image: "https://images.unsplash.com/photo-1540569014015-19a7be504e3a?w=400&q=80",
    tags: ["Drain Cleaning", "Hydro Jetting"],
  },
  {
    id: "pro-2",
    name: "David S.",
    role: "Sewer Line Specialist",
    rating: "5.0",
    reviews: 89,
    location: "Available Nationwide",
    price: "$95/hr",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&q=80",
    tags: ["Camera Inspection", "Root Removal"],
  },
  {
    id: "pro-3",
    name: "James L.",
    role: "Emergency Technician",
    rating: "4.8",
    reviews: 215,
    location: "Available Nationwide",
    price: "$85/hr",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80",
    tags: ["24/7 Response", "Clogs"],
  },
];

export function TopProfessionals() {
  return (
    <section className="py-20 bg-bg border-y border-border">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-text mb-4">
            Top Rated Professionals Ready to Help
          </h2>
          <p className="text-base font-medium text-text/80 max-w-2xl mx-auto">
            Connect directly with verified, licensed plumbing experts who have track 
            records of excellence in your area.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {professionals.map((pro) => (
            <div
              key={pro.id}
              className="bg-card p-6 rounded-xl border border-border shadow-sm hover:shadow-lg hover:scale-[1.02] transition-all duration-300 flex flex-col"
            >
              <div className="flex items-start gap-4 mb-6">
                <div className="relative w-16 h-16 rounded-full overflow-hidden border border-border/50 shrink-0">
                  <Image src={pro.image} alt={pro.name} fill sizes="64px" className="object-cover" />
                </div>
                <div>
                  <div className="flex items-center gap-1 mb-1">
                    <h3 className="font-bold text-lg text-text">{pro.name}</h3>
                    <CheckCircle2 size={16} className="text-green-500" />
                  </div>
                  <p className="text-sm font-medium text-primary">{pro.role}</p>
                </div>
              </div>

              <div className="flex items-center gap-4 mb-6 text-sm">
                <div className="flex items-center gap-1">
                  <Star size={16} className="fill-accent text-accent" />
                  <span className="font-bold text-text">{pro.rating}</span>
                  <span className="text-text/60">({pro.reviews})</span>
                </div>
                <div className="w-[1px] h-4 bg-gray-200" />
                <div className="flex items-center gap-1 text-text/80">
                  <MapPin size={16} />
                  <span>{pro.location}</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mb-8">
                {pro.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-bg border border-border rounded-lg text-xs font-bold text-text/80"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="mt-auto flex items-center justify-between pt-4 border-t border-border/50">
                <div>
                  <p className="text-xs font-semibold text-text/60 uppercase tracking-wider mb-0.5">Starting at</p>
                  <p className="font-bold text-lg text-text">{pro.price}</p>
                </div>
                <Link
                  href="/contact"
                  className="px-6 py-2.5 bg-card border-2 border-primary text-primary hover:bg-primary hover:text-white rounded-lg font-bold text-sm transition-colors"
                >
                  Hire Now
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
