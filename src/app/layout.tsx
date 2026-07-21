import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import LoadingScreen from "@/components/LoadingScreen";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatButtons from "@/components/FloatButtons";
import PageTransition from "@/components/PageTransition";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "AJT Overseas | International Recruitment, Study Abroad & Visa Assistance",
  description: "AJT Overseas Private Limited is India's leading ethical recruitment partner and study abroad consultancy, delivering excellence in visa processing and global talent careers.",
  keywords: "international recruitment, study abroad, visa consultancy, ethical hiring, careers in europe, study in uk, study in canada, study in germany, jobs in gulf, visa assistance, AJT Overseas",
  authors: [{ name: "AJT Overseas Private Limited" }],
  viewport: "width=device-width, initial-scale=1",
  robots: "index, follow",
  openGraph: {
    title: "AJT Overseas | Elite International Recruitment & Study Abroad",
    description: "Your trusted gateway to global careers and international higher education. Compliant, transparent, and premium consultancy services.",
    url: "https://ajtoverseas.com",
    siteName: "AJT Overseas",
    images: [
      {
        url: "https://ajtoverseas.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "AJT Overseas - Excellence in Global Recruitment",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AJT Overseas | Global Careers & Education Partners",
    description: "Bridging the gap between ambitious global talents and top international employers and universities.",
    images: ["https://ajtoverseas.com/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Setup JSON-LD structured data for SEO
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "AJT Overseas Private Limited",
    "alternateName": "AJT Overseas",
    "description": "Ethical international recruitment agency and elite study abroad consultancy approved by the Ministry of External Affairs, Govt of India.",
    "url": "https://ajtoverseas.com",
    "logo": "https://ajtoverseas.com/logo.png",
    "sameAs": [
      "https://www.linkedin.com/company/113023890/",
      "https://www.facebook.com/profile.php?id=61582255777532",
      "https://www.instagram.com/ajt_overseas/"
    ],
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "A-1017, Tower 3, NXOne, Techzone 4",
      "addressLocality": "Greater Noida",
      "addressRegion": "Uttar Pradesh",
      "postalCode": "201306",
      "addressCountry": "IN"
    },
    "contactPoint": [
      {
        "@type": "ContactPoint",
        "telephone": "+91-97185-70515",
        "contactType": "Business Enquiries",
        "email": "info@ajtoverseas.com",
        "areaServed": "Global",
        "availableLanguage": ["English", "Hindi"]
      },
      {
        "@type": "ContactPoint",
        "telephone": "+91-97185-73005",
        "contactType": "International Recruitment",
        "email": "hr@ajtoverseas.com",
        "areaServed": "Global",
        "availableLanguage": ["English", "Hindi"]
      },
      {
        "@type": "ContactPoint",
        "telephone": "+91-99908-03701",
        "contactType": "International Recruitment",
        "email": "hr@ajtoverseas.com",
        "areaServed": "Global",
        "availableLanguage": ["English", "Hindi"]
      },
      {
        "@type": "ContactPoint",
        "telephone": "+91-96259-03005",
        "contactType": "Study Abroad Desk",
        "email": "recruiter@ajtoverseas.com",
        "areaServed": "Global",
        "availableLanguage": ["English", "Hindi"]
      },
      {
        "@type": "ContactPoint",
        "telephone": "+91-85954-33005",
        "contactType": "Study Abroad Desk",
        "email": "recruiter@ajtoverseas.com",
        "areaServed": "Global",
        "availableLanguage": ["English", "Hindi"]
      }
    ]
  };

  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-background-custom font-sans antialiased text-text-main selection:bg-accent/30 selection:text-primary">
        <LoadingScreen />
        <SmoothScroll>
          <Navbar />
          <PageTransition>
            <main className="flex-grow pt-[76px] md:pt-[88px]">{children}</main>
          </PageTransition>
          <Footer />
          <FloatButtons />
        </SmoothScroll>
      </body>
    </html>
  );
}
