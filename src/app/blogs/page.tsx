import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { blogs } from "@/data/blogs";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { ChevronRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Expert Plumbing & Drain Cleaning Blog | Best Tips 2026",
  description: "Read the latest tips, guides, and trends for professional drain cleaning, sewer repair, and home plumbing maintenance across the USA.",
  alternates: {
    canonical: "https://www.draincleaningnearme.us/blogs",
  }
};

export default function BlogsListingPage() {
  return (
    <div className="flex flex-col min-h-screen bg-bg font-body font-black">
      <Navbar />
      <main className="flex-1 pt-32 pb-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16 space-y-4">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-text uppercase font-black">
              Plumbing Insights &amp; Guides
            </h1>
            <p className="text-lg text-text/70 font-medium max-w-2xl mx-auto">
              Expert advice to protect your pipes, prevent backups, and maintain standard drain health across your property.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {blogs.map((blog) => (
              <Link 
                href={`/blogs/${blog.slug}`} 
                key={blog.slug}
                className="flex flex-col bg-card border border-border rounded-xl p-6 group hover:shadow-lg hover:border-primary/20 transition-all shadow-sm"
              >
                <div className="relative w-full aspect-[3/2] mb-6 rounded-lg overflow-hidden bg-bg">
                  <Image 
                    src={blog.image} 
                    alt={blog.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <h2 className="text-2xl font-bold text-text mb-3 leading-tight tracking-tight group-hover:text-primary transition-colors font-black uppercase">
                  {blog.title}
                </h2>
                <p className="text-sm text-text/60 line-clamp-3 mb-6 font-medium">
                  {blog.description}
                </p>
                <div className="mt-auto flex items-center text-primary font-bold text-xs uppercase tracking-widest font-black group/link">
                  Read Article <ChevronRight size={14} className="group-hover/link:translate-x-1 transition-transform ml-1" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
