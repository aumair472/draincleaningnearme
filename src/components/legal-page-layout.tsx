import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

interface LegalPageLayoutProps {
  title: string;
  subtitle?: string;
  effectiveDate: string;
  children: React.ReactNode;
}

export function LegalPageLayout({
  title,
  subtitle,
  effectiveDate,
  children,
}: LegalPageLayoutProps) {
  return (
    <>
      <Navbar />
      <main className="flex-1 pt-32 pb-24">
        <article className="container mx-auto px-4 max-w-4xl">
          <header className="text-center mb-16">
            <span className="inline-flex items-center gap-2 px-3 py-1 bg-slate-100 dark:bg-slate-800 text-slate-500 rounded-full text-xs font-bold tracking-wider uppercase mb-6 border">
              Legal Information
            </span>
            <h1 className="text-3xl md:text-5xl font-black tracking-tight mb-4 lowercase italic">
              {title}
            </h1>
            {subtitle && (
              <p className="text-xl text-slate-400 font-medium mb-4 italic">
                {subtitle}
              </p>
            )}
            <p className="text-sm font-bold text-slate-400 uppercase tracking-widest">
              Effective Date: {effectiveDate}
            </p>
          </header>

          <div className="prose prose-slate dark:prose-invert max-w-none 
            prose-headings:font-black prose-headings:tracking-tight prose-headings:uppercase prose-headings:italic
            prose-h2:text-2xl prose-h2:border-b prose-h2:pb-2 prose-h2:mt-12
            prose-p:text-slate-500 prose-p:leading-relaxed
            prose-li:text-slate-500 prose-li:leading-relaxed
            prose-strong:text-foreground
            prose-a:text-primary prose-a:no-underline hover:prose-a:underline">
            {children}
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
