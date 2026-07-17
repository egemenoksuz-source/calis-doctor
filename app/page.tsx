import type { Metadata } from "next";

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

export const metadata: Metadata = {
  title: "Calis Doctor | English-Speaking Doctor in Çalış & Fethiye",

  description:
    "24/7 English-speaking doctor service in Çalış Beach and Fethiye. Hotel visits, home visits and urgent medical assistance for tourists and international residents.",

  alternates: {
    canonical: "/",
  },

  openGraph: {
    type: "website",
    url: "https://calisdoctor.com/",
    siteName: "Calis Doctor",
    locale: "en_GB",
    title: "Calis Doctor | English-Speaking Doctor in Çalış & Fethiye",
    description:
      "Private English-speaking doctor services, hotel visits, home visits and urgent medical assistance in Çalış Beach and Fethiye.",
  },

  twitter: {
    card: "summary",
    title: "Calis Doctor | English-Speaking Doctor in Çalış & Fethiye",
    description:
      "24/7 private doctor services for tourists and international residents in Çalış Beach and Fethiye.",
  },
};

export default function Home() {
  return (
    <>
      <a
        href="#main-content"
        className="sr-only fixed left-4 top-4 z-[100] rounded-xl bg-slate-950 px-4 py-3 font-semibold text-white focus:not-sr-only"
      >
        Skip to main content
      </a>

      <Navbar />

      <main
        id="main-content"
        className="min-h-screen overflow-x-hidden bg-[#f3fbfb] text-slate-950"
      >
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
      </main>

      <Footer />
    </>
  );
}