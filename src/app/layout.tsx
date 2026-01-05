import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import BackgroundSound from "./components/BackgroundSound";
const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap", // Improves loading performance
});

// 1. Set your actual domain here when you deploy
const baseUrl = process.env.NEXT_PUBLIC_BASE_URL 
  ? `https://${process.env.NEXT_PUBLIC_BASE_URL}` 
  : "https://emekavictor.com.ng/";

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  
  // SEO: Title Template
  title: {
    default: "Emeka Victor | Full Stack Developer",
    template: "%s | Emeka Victor",
  },
  icons: {
    icon: "/emekavictor.png", 
  },
  
  // SEO: Description
  description: "Full Stack Developer based in Nigeria. Specializing in high-performance web applications, mobile apps, and brand identity.",
  
  // SEO: Keywords
  keywords: ["Next.js", "React", "Full Stack Developer", "Nigeria", "Awka", "Software Engineer", "UI/UX Design", "Portfolio", "ReactNative", "Emeka Victor", "Vicson"],

  // Social Sharing (Open Graph)
  openGraph: {
    title: "Emeka Victor | Full Stack Developer",
    description: "Building digital experiences that balance function with aesthetics.",
    url: baseUrl,
    siteName: "Emeka Victor",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/images/emeka.jpg", // Make sure to add this image to your public folder later
        width: 1200,
        height: 630,
        alt: "Emeka Victor Portfolio",
      },
    ],
  },

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    title: "Emeka Victor | Full Stack Developer",
    images: ["/images/emekavictor.png"],
  },

  // Indexing
  robots: {
    index: true,
    follow: true,
  },
};

// Structured Data (JSON-LD)
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Emeka Victor",
  "url": baseUrl,
  "jobTitle": "Full Stack Developer",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Awka",
    "addressCountry": "Nigeria"
  },
  "knowsAbout": ["Next.js", "React", "Supabase", "UI/UX Design"],
  "sameAs": [
    "https://x.com/devemmy001_",
    "https://github.com/dev-emmy001",
    "https://www.linkedin.com/in/victor-chukwuemeka-a70156310/"
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${montserrat.variable} font-sans antialiased`}>
        {/* Inject Structured Data for Google */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        
        <BackgroundSound />
        {children}
      </body>
    </html>
  );
}