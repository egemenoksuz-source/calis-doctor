import type { Metadata } from "next";
import Link from "next/link";

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

const SITE_URL = "https://calisdoctor.com";
const PHONE_NUMBER = "+905519354800";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),

  title: {
    absolute:
      "Calis Doctor | English-Speaking Doctor in Çalış Beach & Fethiye",
  },

  description:
    "24/7 English-speaking private doctor service in Çalış Beach and Fethiye. Hotel visits, home visits and urgent medical assistance for tourists, families and international residents.",

  keywords: [
    "Calis doctor",
    "Çalış doctor",
    "doctor in Fethiye",
    "English speaking doctor Fethiye",
    "doctor near me",
    "hotel doctor Fethiye",
    "home visit doctor Fethiye",
    "tourist doctor Fethiye",
    "private doctor Fethiye",
    "emergency doctor Fethiye",
    "doctor open now Fethiye",
    "24/7 doctor Fethiye",
    "IV therapy Fethiye",
    "food poisoning doctor Fethiye",
    "ear infection doctor Fethiye",
    "gastroenteritis doctor Fethiye",
    "child doctor Fethiye",
    "dehydration treatment Fethiye",
  ],

  authors: [
    {
      name: "Calis Doctor",
      url: SITE_URL,
    },
  ],

  creator: "Calis Doctor",
  publisher: "Calis Doctor",

  category: "Healthcare",

  alternates: {
    canonical: "/",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: "Calis Doctor",
    locale: "en_GB",

    title:
      "Calis Doctor | English-Speaking Doctor in Çalış Beach & Fethiye",

    description:
      "Private English-speaking doctor services, hotel visits, home visits and urgent medical assistance in Çalış Beach and Fethiye.",

    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Calis Doctor private medical service in Çalış Beach and Fethiye",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title:
      "Calis Doctor | English-Speaking Doctor in Çalış Beach & Fethiye",

    description:
      "24/7 private doctor services for tourists, families and international residents in Çalış Beach and Fethiye.",

    images: ["/images/og-image.jpg"],
  },
};

const medicalBusinessSchema = {
  "@context": "https://schema.org",
  "@type": ["MedicalBusiness", "LocalBusiness"],

  "@id": `${SITE_URL}/#medicalbusiness`,

  name: "Calis Doctor",

  alternateName: [
    "Çalış Doctor",
    "Fethiye Doctor",
    "English-Speaking Doctor Fethiye",
  ],

  url: SITE_URL,

  telephone: PHONE_NUMBER,

  description:
    "Private English-speaking doctor service providing hotel visits, home visits and urgent medical assistance in Çalış Beach and Fethiye.",

  image: `${SITE_URL}/images/og-image.jpg`,

  logo: `${SITE_URL}/images/logo.png`,

  priceRange: "$$",

  currenciesAccepted: "TRY, EUR, GBP",

  paymentAccepted: "Cash, Credit Card",

  availableLanguage: ["English", "Turkish"],

  areaServed: [
    {
      "@type": "Place",
      name: "Çalış Beach",
    },
    {
      "@type": "City",
      name: "Fethiye",
    },
    {
      "@type": "Place",
      name: "Ölüdeniz",
    },
    {
      "@type": "Place",
      name: "Hisarönü",
    },
    {
      "@type": "Place",
      name: "Ovacık",
    },
    {
      "@type": "Place",
      name: "Kayaköy",
    },
    {
      "@type": "Place",
      name: "Faralya",
    },
    {
      "@type": "Place",
      name: "Kabak",
    },
    {
      "@type": "Place",
      name: "Göcek",
    },
    {
      "@type": "Place",
      name: "Dalaman",
    },
  ],

  contactPoint: {
    "@type": "ContactPoint",
    telephone: PHONE_NUMBER,
    contactType: "medical assistance",
    areaServed: "TR",
    availableLanguage: ["English", "Turkish"],
  },

  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "00:00",
      closes: "23:59",
    },
  ],

  medicalSpecialty: "PrimaryCare",

  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Private Medical Services in Fethiye",

    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "MedicalProcedure",
          name: "Hotel Doctor Visit",
          url: `${SITE_URL}/hotel-doctor-fethiye`,
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "MedicalProcedure",
          name: "Home Visit Doctor",
          url: `${SITE_URL}/home-visit-doctor-fethiye`,
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "MedicalProcedure",
          name: "Urgent Medical Assessment",
          url: `${SITE_URL}/emergency-doctor-fethiye`,
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "MedicalProcedure",
          name: "IV Therapy Assessment",
          url: `${SITE_URL}/iv-therapy-fethiye`,
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "MedicalProcedure",
          name: "Food Poisoning Assessment",
          url: `${SITE_URL}/food-poisoning-doctor-fethiye`,
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "MedicalProcedure",
          name: "Ear Infection Assessment",
          url: `${SITE_URL}/ear-infection-doctor-fethiye`,
        },
      },
    ],
  },
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",

  "@id": `${SITE_URL}/#website`,

  url: SITE_URL,

  name: "Calis Doctor",

  alternateName: "Çalış Doctor",

  description:
    "English-speaking private doctor services in Çalış Beach and Fethiye.",

  inLanguage: "en-GB",

  publisher: {
    "@id": `${SITE_URL}/#medicalbusiness`,
  },
};

const webPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",

  "@id": `${SITE_URL}/#webpage`,

  url: SITE_URL,

  name: "English-Speaking Doctor in Çalış Beach and Fethiye",

  description:
    "Private doctor visits, hotel medical assistance and home visits for tourists and international residents in Çalış Beach and Fethiye.",

  isPartOf: {
    "@id": `${SITE_URL}/#website`,
  },

  about: {
    "@id": `${SITE_URL}/#medicalbusiness`,
  },

  primaryImageOfPage: {
    "@type": "ImageObject",
    url: `${SITE_URL}/images/og-image.jpg`,
  },

  inLanguage: "en-GB",
};

const localServiceLinks = [
  {
    title: "Hotel Doctor",
    description:
      "Private medical assessment at your hotel, resort or holiday accommodation.",
    href: "/hotel-doctor-fethiye",
  },
  {
    title: "Home Visit Doctor",
    description:
      "English-speaking doctor visits for villas, apartments and private homes.",
    href: "/home-visit-doctor-fethiye",
  },
  {
    title: "Urgent Medical Care",
    description:
      "Prompt assessment for urgent, non-life-threatening medical concerns.",
    href: "/emergency-doctor-fethiye",
  },
  {
    title: "IV Therapy",
    description:
      "Medical hydration assessment when oral fluids cannot be tolerated.",
    href: "/iv-therapy-fethiye",
  },
  {
    title: "Food Poisoning Care",
    description:
      "Assessment for vomiting, diarrhoea, stomach pain and dehydration.",
    href: "/food-poisoning-doctor-fethiye",
  },
  {
    title: "Ear Infection Care",
    description:
      "Medical assessment for ear pain, blocked ears and swimmer’s ear.",
    href: "/ear-infection-doctor-fethiye",
  },
];

function LocalDoctorIntroduction() {
  return (
    <section
      aria-labelledby="local-doctor-heading"
      className="relative overflow-hidden px-4 py-16 sm:px-6 lg:px-8 lg:py-24"
    >
      <div
        aria-hidden="true"
        className="absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-cyan-200/30 blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl">
        <div className="overflow-hidden rounded-[2rem] border border-cyan-900/10 bg-white/75 shadow-[0_24px_80px_rgba(15,118,110,0.10)] backdrop-blur-xl">
          <div className="grid gap-10 p-6 sm:p-10 lg:grid-cols-[1.05fr_0.95fr] lg:p-14">
            <div>
              <p className="mb-4 text-sm font-bold uppercase tracking-[0.22em] text-teal-700">
                Private medical assistance in Fethiye
              </p>

              <h2
                id="local-doctor-heading"
                className="max-w-3xl text-3xl font-black tracking-tight text-slate-950 sm:text-4xl lg:text-5xl"
              >
                English-speaking doctor visits in Çalış Beach and Fethiye
              </h2>

              <div className="mt-6 space-y-5 text-base leading-8 text-slate-600 sm:text-lg">
                <p>
                  Calis Doctor provides private medical assistance for tourists,
                  families and international residents staying in Çalış Beach
                  and the wider Fethiye area. Depending on your location and
                  medical needs, an English-speaking doctor may visit your
                  hotel, villa, apartment or private residence.
                </p>

                <p>
                  Patients commonly contact us for vomiting, diarrhoea, food
                  poisoning, dehydration, ear pain, fever, respiratory
                  symptoms, minor injuries and other unexpected health concerns
                  during their holiday.
                </p>

                <p>
                  Every patient is assessed individually. Medication, IV fluids
                  and further treatment are recommended only when clinically
                  appropriate. Serious or life-threatening symptoms require
                  immediate emergency care through Turkey’s emergency number,
                  112.
                </p>
              </div>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href={`tel:${PHONE_NUMBER}`}
                  className="inline-flex min-h-12 items-center justify-center rounded-2xl bg-slate-950 px-6 py-3 text-center font-bold text-white shadow-lg transition hover:-translate-y-0.5 hover:bg-slate-800 focus:outline-none focus:ring-4 focus:ring-slate-950/20"
                >
                  Call a Doctor
                </a>

                <a
                  href={`https://wa.me/${PHONE_NUMBER.replace("+", "")}`}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex min-h-12 items-center justify-center rounded-2xl border border-teal-700/20 bg-teal-50 px-6 py-3 text-center font-bold text-teal-900 transition hover:-translate-y-0.5 hover:bg-teal-100 focus:outline-none focus:ring-4 focus:ring-teal-700/20"
                >
                  Contact on WhatsApp
                </a>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
              {localServiceLinks.map((service) => (
                <Link
                  key={service.href}
                  href={service.href}
                  className="group rounded-3xl border border-slate-900/8 bg-[#f3fbfb] p-5 transition duration-300 hover:-translate-y-1 hover:border-teal-700/20 hover:bg-white hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-teal-700/15"
                >
                  <h3 className="text-lg font-extrabold text-slate-950 transition group-hover:text-teal-800">
                    {service.title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    {service.description}
                  </p>

                  <span className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-teal-700">
                    View service
                    <span
                      aria-hidden="true"
                      className="transition-transform group-hover:translate-x-1"
                    >
                      →
                    </span>
                  </span>
                </Link>
              ))}
            </div>
          </div>

          <div className="border-t border-cyan-900/10 bg-teal-950 px-6 py-6 text-sm leading-7 text-teal-50 sm:px-10 lg:px-14">
            <p>
              Service availability and arrival times depend on location,
              traffic, current demand and the medical team’s availability.
              Emergency ambulance services should be contacted by calling{" "}
              <strong className="font-extrabold text-white">112</strong> for
              life-threatening conditions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(medicalBusinessSchema),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteSchema),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(webPageSchema),
        }}
      />

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

        <LocalDoctorIntroduction />

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