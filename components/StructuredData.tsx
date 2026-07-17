const BASE_URL = "https://calisdoctor.com";
const PHONE_DISPLAY = "+90 551 935 48 00";
const PHONE_E164 = "+905519354800";

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${BASE_URL}/#website`,
  url: `${BASE_URL}/`,
  name: "Calis Doctor",
  alternateName: [
    "Çalış Doctor",
    "Calis Beach Doctor",
    "English Speaking Doctor Calis",
  ],
  description:
    "24/7 English-speaking private doctor service in Çalış Beach and Fethiye.",
  inLanguage: "en-GB",
  publisher: {
    "@id": `${BASE_URL}/#medical-clinic`,
  },
};

const medicalClinicSchema = {
  "@context": "https://schema.org",
  "@type": ["MedicalClinic", "MedicalBusiness", "LocalBusiness"],
  "@id": `${BASE_URL}/#medical-clinic`,
  name: "Calis Doctor",
  alternateName: "Çalış Doctor",
  url: `${BASE_URL}/`,

  description:
    "24/7 English-speaking private doctor service providing hotel visits, home visits and urgent medical assistance in Fethiye.",

  telephone: PHONE_E164,
  priceRange: "$$",

  address: {
    "@type": "PostalAddress",
    addressLocality: "Fethiye",
    addressRegion: "Muğla",
    addressCountry: "TR",
  },

  areaServed: [
    {
      "@type": "City",
      name: "Fethiye",
    },
    {
      "@type": "AdministrativeArea",
      name: "Muğla",
    },
  ],

  availableLanguage: ["English", "Turkish"],

  medicalSpecialty: {
    "@type": "MedicalSpecialty",
    name: "Primary Care",
  },

  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "https://schema.org/Monday",
        "https://schema.org/Tuesday",
        "https://schema.org/Wednesday",
        "https://schema.org/Thursday",
        "https://schema.org/Friday",
        "https://schema.org/Saturday",
        "https://schema.org/Sunday",
      ],
      opens: "00:00",
      closes: "23:59",
    },
  ],

  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: PHONE_E164,
      contactType: "customer service",
      availableLanguage: ["English", "Turkish"],
      areaServed: "TR",
    },
    {
      "@type": "ContactPoint",
      telephone: PHONE_E164,
      contactType: "emergency",
      availableLanguage: ["English", "Turkish"],
      areaServed: "Fethiye",
    },
  ],

  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Medical Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "MedicalService",
          name: "Hotel Doctor Visit",
          description:
            "English-speaking doctor visits for patients staying at hotels in Fethiye.",
          areaServed: "Fethiye",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "MedicalService",
          name: "Home Doctor Visit",
          description:
            "Private doctor visits at homes, villas and holiday accommodation in Fethiye.",
          areaServed: "Fethiye",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "MedicalService",
          name: "Urgent Medical Assistance",
          description:
            "Medical assessment and assistance for urgent health concerns in Fethiye.",
          areaServed: "Fethiye",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "MedicalService",
          name: "IV Therapy",
          description:
            "Medical evaluation and IV therapy when clinically appropriate.",
          areaServed: "Fethiye",
        },
      },
    ],
  },

  sameAs: [],
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "@id": `${BASE_URL}/#breadcrumb`,
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: `${BASE_URL}/`,
    },
  ],
};

const schemas = [websiteSchema, medicalClinicSchema, breadcrumbSchema];

export default function StructuredData() {
  return (
    <>
      {schemas.map((schema, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schema).replace(/</g, "\\u003c"),
          }}
        />
      ))}
    </>
  );
}

export { PHONE_DISPLAY, PHONE_E164 };