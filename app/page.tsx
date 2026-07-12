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
import WhatsNext from "./components/WhatsNext";
import CTA from "./components/CTA";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";
import Reveal from "./components/Reveal";

export default function Home() {
  return (
    <main className="bg-slate-950 min-h-screen">
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
      <Reveal><WhatsNext /></Reveal>
      <Reveal><CTA /></Reveal>
      <Reveal><Footer /></Reveal>
      <WhatsAppButton />
    </main>
  );
}
