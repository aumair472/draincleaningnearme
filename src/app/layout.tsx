import type { Metadata, Viewport } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { JsonLd } from "@/components/json-ld";
import { cn } from "@/lib/utils";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#0B1120",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Drain Cleaning Services Near Me | 24/7 Emergency Plumbers",
  description:
    "Need drain cleaning near you? Get 24/7 emergency drain cleaning for kitchen sink clogs & bathroom drains through hydro jetting & Camera inspection. Licensed pros on-site within 60 minutes",
  keywords: [
    "drain cleaning near me",
    "emergency drain cleaning",
    "bathroom drain cleaning",
    "kitchen sink clog",
    "drain and sewer cleaning",
  ],
  authors: [{ name: "Drain Cleaning Near Me" }],
  metadataBase: new URL("https://www.draincleaningnearme.us"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Drain Cleaning Services Near Me | 24/7 Emergency Plumbers",
    description: "Professional Drain Cleaning & Emergency Service Nationwide. Available 24/7.",
    type: "website",
    url: "https://www.draincleaningnearme.us/",
    siteName: "Drain Cleaning Near Me",
    images: [
      {
        url: "/img/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Drain Cleaning Near Me",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Drain Cleaning Services Near Me | 24/7 Emergency Plumbers",
    description: "Professional Drain Cleaning & Emergency Service Nationwide. Available 24/7.",
    images: ["/img/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      <body
        suppressHydrationWarning
        className={cn(
          "min-h-screen bg-background font-sans antialiased flex flex-col",
          inter.variable,
          outfit.variable
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          forcedTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          <JsonLd />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
