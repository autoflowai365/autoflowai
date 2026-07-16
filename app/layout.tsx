import type { Metadata } from "next";
import "./globals.css";
import CookieBanner from "./components/CookieBanner";
import FloatingCTA from "./components/FloatingCTA";
import Script from "next/script";

export const metadata: Metadata = {
  title: "AutoFlow AI | AI Automation Agency for Businesses",
  description: "AutoFlow AI helps businesses automate repetitive tasks using AI, WhatsApp automation, CRM integration, customer support automation and workflow automation.",
  keywords: ["AI Automation","Business Automation","Workflow Automation","WhatsApp Automation","CRM Automation","OpenAI","n8n","AI Agents","Nigeria AI Agency"],
  authors: [{ name: "AutoFlow AI" }],
  creator: "AutoFlow AI",
  openGraph: {
    title: "AutoFlow AI",
    description: "Automate your business. Save hundreds of hours every month.",
    url: "https://autoflowai365.vercel.app",
    siteName: "AutoFlow AI",
    locale: "en_US",
    type: "website",
    images: [{ url: "/og-image.svg", width: 1200, height: 630, alt: "AutoFlow AI" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "AutoFlow AI",
    description: "AI Automation Agency helping businesses automate operations.",
    images: ["/og-image.svg"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <Script async src="https://www.googletagmanager.com/gtag/js?id=G-835NGX0NER" strategy="afterInteractive" />
        <Script id="google-analytics" strategy="afterInteractive">{`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag("js", new Date());
          gtag("config", "G-835NGX0NER");
        `}</Script>
      </head>
      <body>
        {children}
        <CookieBanner />
        <FloatingCTA />
      </body>
    </html>
  );
}
