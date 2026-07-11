import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TrustedLogos from "./components/TrustedLogos";
import Services from "./components/Services";
import HowItWorks from "./components/HowItWorks";
import Stats from "./components/Stats";
import CaseStudies from "./components/CaseStudies";
import WhyChoose from "./components/WhyChoose";
import ROI from "./components/ROI";
import Testimonials from "./components/Testimonials";
import FAQ from "./components/FAQ";
import CTA from "./components/CTA";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";
import Reveal from "./components/Reveal";

export default function Home() {
  return (
    <main className="animated-gradient grid-overlay min-h-screen"><div className="fixed inset-0 overflow-hidden pointer-events-none -z-10"><div className="absolute w-[700px] h-[700px] bg-blue-600/20 rounded-full blur-[180px] top-[-250px] left-[-200px] animate-pulse"/><div className="absolute w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[160px] bottom-[-150px] right-[-100px] animate-pulse"/></div>
      <Navbar />
      <Reveal><Hero /></Reveal>
      <Reveal><TrustedLogos /></Reveal>
      <Reveal><Services /></Reveal>
      <Reveal><HowItWorks /></Reveal>
      <Reveal><Stats /></Reveal>
      <Reveal><CaseStudies /></Reveal>
      <Reveal><WhyChoose /></Reveal>
      <Reveal><ROI /></Reveal>
      <Reveal><Testimonials /></Reveal>
      <Reveal><FAQ /></Reveal>
      <Reveal><CTA /></Reveal>
      <Reveal><Footer /></Reveal>
      <WhatsAppButton />
    </main>
  );
}
