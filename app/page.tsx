import Areas from "@/components/Areas";
import Audience from "@/components/Audience";
import Contact from "@/components/Contact";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import MapSection from "@/components/MapSection";
import Navbar from "@/components/Navbar";
import Reviews from "@/components/Reviews";
import Services from "@/components/Services";
import WhyChooseUs from "@/components/WhyChooseUs";

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[#f3fbfb] text-slate-950">
      <Navbar />
      <Hero />
      <Audience />
      <Services />
      <HowItWorks />
      <WhyChooseUs />
      <Areas />
      <MapSection />
      <Reviews />
      <FAQ />
      <Contact />
      <Footer />
    </main>
  );
}