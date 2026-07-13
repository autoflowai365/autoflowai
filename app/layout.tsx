import type { Metadata } from "next";
import "./globals.css";

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
  },
  twitter: {
    card: "summary_large_image",
    title: "AutoFlow AI",
    description: "AI Automation Agency helping businesses automate operations.",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
