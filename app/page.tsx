import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TrustedLogos from "./components/TrustedLogos";
import CaseStudies from "./components/CaseStudies";
import Services from "./components/Services";
import HowItWorks from "./components/HowItWorks";
import Stats from "./components/Stats";
import ROI from "./components/ROI";
import Testimonials from "./components/Testimonials";
import FAQ from "./components/FAQ";
import CTA from "./components/CTA";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";

export default function Home() {
  return (
    <main className="bg-slate-950 min-h-screen">
      <Navbar />
      <Hero />
      <TrustedLogos />
      <CaseStudies />
      <Services />
      <HowItWorks />
      <Stats />
      <ROI />
      <Testimonials />
      <FAQ />
      <CTA />
      <Footer />
      <WhatsAppButton />
    </main>
  );
}
