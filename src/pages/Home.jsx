import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Stats from "../components/Stats";
import Services from "../components/Services";
import WhyChooseUs from "../components/WhyChooseUs";
import HowItWorks from "../components/HowItWorks";
import CoverageArea from "../components/CoverageArea";
import Testimonials from "../components/Testimonials";
import CTA from "../components/CTA";
import Footer from "../components/Footer";
import FloatingWhatsapp from "../components/FloatingWhatsapp";
import Packages from "../components/Packages";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Stats />
      <Services />
      <Packages />
      <WhyChooseUs />
      <HowItWorks />
      <CoverageArea />
      <Testimonials />
      <CTA />
      <Footer />
      <FloatingWhatsapp />
    </>
  );
}