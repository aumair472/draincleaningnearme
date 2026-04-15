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
      <main className="flex-1 pt-32 pb-20 bg-card">
        <article className="container mx-auto px-4 max-w-4xl">
          <header className="text-center mb-16">
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary border-primary/20 rounded-full text-xs font-bold tracking-wider uppercase mb-6 border">
              Legal Information
            </span>
            <h1 className="text-[36px] md:text-[48px] font-bold tracking-tight mb-4 text-text leading-tight">
              {title}
            </h1>
            {subtitle && (
              <p className="text-xl text-text/80 font-medium mb-6">
                {subtitle}
              </p>
            )}
            <p className="text-sm font-bold text-text/60 uppercase tracking-widest">
              Effective Date: {effectiveDate}
            </p>
          </header>

          <div className="prose max-w-none 
            prose-headings:font-bold prose-headings:tracking-tight prose-headings:text-text
            prose-h2:text-2xl prose-h2:border-b prose-h2:border-border/50 prose-h2:pb-4 prose-h2:mt-12
            prose-h3:text-xl prose-h3:mt-8
            prose-p:text-text/80 prose-p:leading-relaxed prose-p:text-lg
            prose-li:text-text/80 prose-li:leading-relaxed prose-li:text-lg
            prose-strong:text-text
            prose-a:text-primary prose-a:font-medium hover:prose-a:text-blue-700 transition-colors">
            {children}
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
