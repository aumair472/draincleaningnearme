import { Star, Quote, CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";

const reviews = [
  {
    name: "James T.",
    text: "Kitchen sink clog fixed the same day!",
    desc: "Fast response and excellent service. Technician arrived in 45 minutes and cleared a stubborn grease clog in no time.",
    stars: 5,
    location: "Verified homeowner"
  },
  {
    name: "Maria S.",
    text: "Solved our main drain clog quickly",
    desc: "Professional and efficient. We had a total backup at midnight and they had someone here within an hour. Saved us from a disaster.",
    stars: 5,
    location: "Property manager"
  },
  {
    name: "David L.",
    text: "Excellent drain and sewer cleaning",
    desc: "Reliable and fast service. The team was very careful not to make a mess and gave us great maintenance tips after finishing.",
    stars: 5,
    location: "Verified customer"
  }
];

export function Testimonials() {
  return (
    <section className="py-16 md:py-20 bg-card relative overflow-hidden border-y border-border font-body">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 p-32 opacity-5 pointer-events-none -translate-y-1/4 translate-x-1/4">
        <Quote size={200} className="text-primary" />
      </div>

      <div className="container relative z-10">
        <div className="text-center mb-12 md:mb-16 space-y-3 animate-fade-in">
          <h2 className="text-3xl md:text-5xl font-black tracking-tight text-text leading-tight uppercase italic underline decoration-primary decoration-4 underline-offset-8">
            Real experiences
          </h2>
          <p className="text-text/70 font-medium max-w-2xl mx-auto text-base md:text-lg leading-relaxed italic">
            Homeowners across the USA trust our network for fast, professional and mess-free results.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((review, i) => (
            <div
              key={i}
              className="p-8 rounded-[2rem] bg-card border border-border flex flex-col items-center text-center transition-all hover:shadow-2xl hover:border-primary/20 group h-full shadow-sm animate-fade-in-up"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <div className="flex gap-1 mb-6">
                {[...Array(review.stars)].map((_, starI) => (
                  <Star key={starI} size={16} className="fill-accent text-accent" />
                ))}
              </div>
              
              <h3 className="text-lg md:text-xl font-black text-text mb-3 leading-tight tracking-tight group-hover:text-primary transition-colors uppercase italic">
                 "{review.text}"
              </h3>
              
              <p className="text-text/60 text-sm font-medium leading-relaxed mb-8 grow italic">
                {review.desc}
              </p>
              
              <div className="flex flex-col items-center gap-1 pt-6 border-t border-border w-full">
                <div className="flex items-center gap-1.5">
                   <p className="text-sm font-black text-text uppercase italic">{review.name}</p>
                   <CheckCircle2 size={14} className="text-primary" />
                </div>
                <p className="text-[10px] font-black text-text/40 tracking-widest uppercase italic">{review.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


