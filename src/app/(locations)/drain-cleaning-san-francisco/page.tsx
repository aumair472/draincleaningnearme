import { Metadata } from "next";
import { SFClient } from "./sf-client";

export const metadata: Metadata = {
  title: "DrainCleaningNearMe in San Francisco | Available 24/7",
  description: "Need professional drain cleaning in San Francisco, CA? We offer expert clogged drain repair & sewer cleaning at affordable rates. 24/7 local experts. Get a free estimate!",
  keywords: [
    "drain cleaning services San Francisco",
    "clogged drain repair San Francisco",
    "sewer line cleaning San Francisco",
    "emergency drain cleaning San Francisco",
    "hydro jetting San Francisco",
    "rooter services San Francisco"
  ],
  alternates: {
    canonical: "https://www.draincleaningnearme.us/drain-cleaning-san-francisco",
  }
};

export default function SanFranciscoPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LocalBusiness",
        "@id": "https://www.draincleaningnearme.us/#organization",
        "name": "DrainCleaningNearMe",
        "description": "Expert drain cleaning services in San Francisco offering emergency rooter services, hydro jetting, sewer line cleaning, and 24/7 clogged drain repair.",
        "url": "https://www.draincleaningnearme.us/",
        "telephone": "(415) 555-DRAIN",
        "image": "https://www.draincleaningnearme.us/logo.png",
        "logo": {
          "@type": "ImageObject",
          "url": "https://www.draincleaningnearme.us/logo.png"
        },
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "San Francisco",
          "addressRegion": "CA",
          "addressCountry": "US"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": 37.7749,
          "longitude": -122.4194
        },
        "areaServed": [
          {
            "@type": "City",
            "name": "San Francisco"
          },
          {
            "@type": "AdministrativeArea",
            "name": "Bay Area"
          }
        ],
        "openingHours": "Mo-Su 00:00-23:59",
        "priceRange": "$$",
        "sameAs": [
          "https://www.facebook.com/draincleaningnearme",
          "https://twitter.com/draincleaningSF"
        ],
        "founder": {
          "@type": "Organization",
          "name": "DrainCleaningNearMe"
        },
        "hasOfferCatalog": {
          "@id": "https://www.draincleaningnearme.us/#offer-catalog"
        },
        "makesOffer": [
          {
            "@id": "https://www.draincleaningnearme.us/#drain-cleaning-service"
          }
        ]
      },
      {
        "@id": "https://www.draincleaningnearme.us/#offer-catalog",
        "@type": "OfferCatalog",
        "name": "Drain Cleaning Services in San Francisco",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@id": "https://www.draincleaningnearme.us/#drain-cleaning-service",
              "@type": "Service",
              "name": "Professional Drain Cleaning Services San Francisco",
              "description": "Expert drain unclogging, sewer line cleaning, hydro jetting, and emergency rooter services for residential and commercial properties.",
              "serviceType": "Drain Cleaning",
              "areaServed": "San Francisco, CA",
              "provider": {
                "@id": "https://www.draincleaningnearme.us/#organization"
              }
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@id": "https://www.draincleaningnearme.us/#hydro-jetting-service",
              "@type": "Service",
              "name": "Hydro Jetting San Francisco",
              "description": "High-pressure water jetting to completely clean pipes and remove grease, roots, and debris.",
              "serviceType": "Hydro Jetting",
              "areaServed": "San Francisco, CA"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@id": "https://www.draincleaningnearme.us/#emergency-drain-service",
              "@type": "Service",
              "name": "24/7 Emergency Drain Cleaning San Francisco",
              "description": "Same-day response for sewer backups, clogged drains, and plumbing emergencies.",
              "serviceType": "Emergency Plumbing",
              "areaServed": "San Francisco, CA",
              "availableChannel": "https://www.draincleaningnearme.us/"
            }
          }
        ]
      },
      {
        "@id": "https://www.draincleaningnearme.us/#drain-cleaning-service",
        "@type": "Service",
        "name": "Drain Cleaning Services San Francisco",
        "description": "Professional drain cleaning including kitchen drains, bathroom unclogging, sewer line cleaning, and hydro jetting for San Francisco homes and businesses.",
        "serviceType": [
          "Drain Cleaning",
          "Sewer Cleaning",
          "Rooter Service",
          "Hydro Jetting"
        ],
        "areaServed": {
          "@type": "City",
          "name": "San Francisco",
          "sameAs": "https://en.wikipedia.org/wiki/San_Francisco"
        },
        "provider": {
          "@id": "https://www.draincleaningnearme.us/#organization"
        },
        "offers": {
          "@type": "Offer",
          "priceCurrency": "USD",
          "price": "250",
          "priceSpecification": {
            "@type": "PriceSpecification",
            "minPrice": 100,
            "maxPrice": 700,
            "eligibleRegion": "San Francisco, CA"
          }
        }
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "How much does drain cleaning cost in San Francisco?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Average cost ranges from $100–$400 for basic drain cleaning (sinks/toilets), $400–$700 for hydro jetting services. Additional fees may apply for emergency calls ($50+). Prices vary based on clog severity, pipe length, and accessibility."
            }
          },
          {
            "@type": "Question",
            "name": "How often should drains be cleaned in San Francisco?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Residential drains should be professionally cleaned annually. Commercial properties (restaurants, offices) need cleaning 2x yearly due to grease buildup. High-risk properties may require quarterly maintenance."
            }
          },
          {
            "@type": "Question",
            "name": "What is hydro jetting and why choose it in San Francisco?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Hydro jetting uses 3,000–4,000 PSI water pressure to completely clean pipe interiors, removing grease, roots, and scale buildup. It's more effective than snaking for San Francisco's aging clay pipes and tree root issues."
            }
          },
          {
            "@type": "Question",
            "name": "Do you offer 24/7 emergency drain service in San Francisco?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, DrainCleaningNearMe provides 24/7 emergency drain cleaning with same-day response throughout San Francisco and Bay Area neighborhoods. Call (415) 555-DRAIN for immediate assistance."
            }
          },
          {
            "@type": "Question",
            "name": "Should I try DIY drain cleaning or call professionals?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "DIY methods risk pipe damage and incomplete cleaning. Professional services use camera inspections and hydro jetting for safe, thorough results. For San Francisco's complex plumbing, always choose certified experts."
            }
          },
          {
            "@type": "Question",
            "name": "What causes most drain clogs in San Francisco homes?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Common causes include grease buildup, hair/soap in bathrooms, tree root intrusion in sewer lines, and debris from aging pipes. San Francisco's hilly terrain and mature trees exacerbate root intrusion problems."
            }
          },
          {
            "@type": "Question",
            "name": "Can you handle both residential and commercial drain services?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, we provide residential drain cleaning for homes and advanced commercial drain services for restaurants, hotels, and offices throughout San Francisco, addressing high-volume grease and debris challenges."
            }
          }
        ]
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <SFClient />
    </>
  );
}
