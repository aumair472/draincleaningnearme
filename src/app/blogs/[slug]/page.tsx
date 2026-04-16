import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import { blogs } from "@/data/blogs";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Phone, Home, Hammer } from "lucide-react";

interface Props {
  params: Promise<{ slug: string }>;
}

// Generate Static Params for SSG
export function generateStaticParams() {
  return blogs.map((blog) => ({
    slug: blog.slug,
  }));
}

// Generate SEO Metadata dynamically
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolvedParams = await params;
  const rawSlug = resolvedParams.slug || "";
  const slug = decodeURIComponent(rawSlug).trim();

  const blog = blogs.find((b) => b.slug.toLowerCase() === slug.toLowerCase());
  
  if (!blog) {
    return { title: "Blog Not Found" };
  }

  return {
    title: blog.title,
    description: blog.description,
    keywords: blog.keywords,
    alternates: {
      canonical: `https://www.draincleaningnearme.us/blogs/${blog.slug}`,
    }
  };
}

export default async function BlogDetailPage({ params }: Props) {
  const resolvedParams = await params;
  const rawSlug = resolvedParams.slug || "";
  const slug = decodeURIComponent(rawSlug).trim();

  const blog = blogs.find((b) => b.slug.toLowerCase() === slug.toLowerCase());

  if (!blog) {
    return (
      <div className="pt-32 text-center text-text min-h-screen">
        <h1 className="text-4xl font-bold">404 Debug Mode</h1>
        <p className="mt-4 text-xl">Requested Slug: "{slug}"</p>
        <p className="mt-2 text-text/50">Raw Promise Param: "{rawSlug}"</p>
        <div className="mt-6">
          Available Slugs: 
          {blogs.map(b => (
            <div key={b.slug} className="text-primary font-bold">"{b.slug}"</div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen bg-bg font-body font-black">
      <Navbar />

      {/* Structured Data Setup */}
      {blog.schemas && (
        <>
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: blog.schemas.localBusiness }}
          />
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: blog.schemas.faqs }}
          />
        </>
      )}

      <main className="flex-1 pt-32 pb-24">
        <article className="max-w-4xl mx-auto px-4">
          
          {/* 1. HERO SECTION (SHORTENED) */}
          <header className="mb-12 text-center space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-text uppercase font-black">
              {blog.heroH1}
            </h1>
            <p className="text-lg text-text/70 font-medium max-w-3xl mx-auto">
              {blog.heroDescription}
            </p>
            <div className="relative w-full aspect-[21/9] md:aspect-[2.5/1] mt-8 rounded-2xl overflow-hidden bg-card border border-border shadow-sm">
              <Image 
                src={blog.image}
                alt={blog.title}
                fill
                priority
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 1024px"
              />
            </div>
          </header>

          {/* 2. CONTENT SECTION */}
          <div className="prose prose-invert max-w-none space-y-8">
            {blog.content.map((block, i) => {
              switch (block.type) {
                case "h2":
                  return (
                    <h2 key={i} className="text-3xl font-bold text-text uppercase tracking-tight mt-16 mb-6 font-black border-l-4 border-primary pl-4">
                      {block.text}
                    </h2>
                  );
                case "h3":
                  return (
                    <h3 key={i} className="text-xl font-bold text-text uppercase tracking-tight mt-10 mb-4 font-black">
                      {block.text}
                    </h3>
                  );
                case "p":
                  return (
                    <p key={i} className="text-base md:text-lg text-text/80 font-medium leading-relaxed mb-6">
                      {block.text}
                    </p>
                  );
                case "ul":
                  return (
                    <ul key={i} className="space-y-4 my-8 pl-0">
                      {block.items?.map((li, idx) => (
                        <li key={idx} className="flex gap-4 p-4 rounded-xl bg-card border border-border text-base text-text/80 font-medium leading-relaxed shadow-sm">
                           <CheckCircle2Icon className="text-primary shrink-0 mt-1" />
                           <span>{li}</span>
                        </li>
                      ))}
                    </ul>
                  );
                default:
                  return null;
              }
            })}
          </div>

          {/* FAQs rendered purely for readability since it is part of the blog prompt */}
          {blog.faqs && (
            <div className="mt-20 pt-16 border-t border-border">
              <h2 className="text-3xl font-bold text-text uppercase tracking-tight mb-8 font-black text-center">
                Frequently Asked Questions
              </h2>
              <div className="space-y-4">
                {blog.faqs.map((faq, i) => (
                  <div key={i} className="bg-card border border-border rounded-xl p-6 shadow-sm">
                    <h3 className="text-lg font-bold text-text mb-2 uppercase font-black">{faq.q}</h3>
                    <p className="text-text/70 font-medium text-sm leading-relaxed">{faq.a}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* 3. CTA SECTION (END) */}
          <div className="mt-24 bg-card border border-border rounded-[2rem] p-10 md:p-16 text-center shadow-lg relative overflow-hidden">
             <div className="absolute inset-0 bg-primary/5 blur-[50px] rounded-full pointer-events-none" />
             <div className="relative z-10 space-y-8">
                <h3 className="text-3xl md:text-5xl font-bold text-text uppercase font-black">
                  Ready to Fix Your Pipes?
                </h3>
                <p className="text-lg text-text/70 font-medium max-w-xl mx-auto">
                  Do not wait for a full sewage backup to cost you thousands. Get 24/7 emergency service from licensed professionals today.
                </p>
                <div className="flex flex-col sm:flex-row justify-center items-center gap-6 pt-4">
                  <a
                    href="tel:+17247506935"
                    className="flex items-center justify-center gap-3 px-10 py-5 bg-primary text-white rounded-xl font-bold text-xl uppercase tracking-widest hover:bg-blue-700 transition-colors shadow-xl w-full sm:w-auto"
                  >
                    <Phone size={24} fill="currentColor" />
                    Call Now: (724) 750-6935
                  </a>
                  <Link
                    href="/"
                    className="flex items-center justify-center gap-3 px-10 py-5 bg-bg border border-border text-text rounded-xl font-bold text-sm uppercase tracking-widest hover:border-primary transition-colors w-full sm:w-auto font-black"
                  >
                    <Home size={18} />
                    Back to Services
                  </Link>
                </div>
             </div>
          </div>

        </article>
      </main>
      <Footer />
    </div>
  );
}

// Inline Icon to keep imports clean
function CheckCircle2Icon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
      <path d="m9 11 3 3L22 4" />
    </svg>
  );
}
