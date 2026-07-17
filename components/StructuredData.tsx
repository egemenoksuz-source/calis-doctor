const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://calisdoctor.com/#website",
  url: "https://calisdoctor.com/",
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
    "@id": "https://calisdoctor.com/#organization",
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": ["Organization", "MedicalBusiness"],
  "@id": "https://calisdoctor.com/#organization",
  name: "Calis Doctor",
  alternateName: "Çalış Doctor",
  url: "https://calisdoctor.com/",
  logo: {
    "@type": "ImageObject",
    url: "https://calisdoctor.com/images/logo.png",
  },
  image: "https://calisdoctor.com/images/og-image.jpg",
  description:
    "English-speaking private doctor service providing hotel visits, home visits and urgent medical assistance in Çalış Beach and Fethiye.",
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
      "@type": "AdministrativeArea",
      name: "Muğla",
    },
  ],
  availableLanguage: ["English", "Turkish"],
  medicalSpecialty: "https://schema.org/PrimaryCare",
  sameAs: [],
};

const medicalServiceSchema = {
  "@context": "https://schema.org",
  "@type": "MedicalClinic",
  "@id": "https://calisdoctor.com/#medical-service",
  name: "Calis Doctor",
  url: "https://calisdoctor.com/",
  description:
    "Private medical assistance for tourists, expats and international residents in Çalış Beach and Fethiye.",
  provider: {
    "@id": "https://calisdoctor.com/#organization",
  },
  areaServed: [
    "Çalış Beach",
    "Fethiye",
    "Muğla",
  ],
  availableService: [
    {
      "@type": "MedicalProcedure",
      name: "Hotel Doctor Visit",
      description:
        "English-speaking doctor visits for patients staying at hotels in Çalış Beach and Fethiye.",
    },
    {
      "@type": "MedicalProcedure",
      name: "Home Doctor Visit",
      description:
        "Private doctor visits at homes, villas and holiday accommodation.",
    },
    {
      "@type": "MedicalProcedure",
      name: "Urgent Medical Assistance",
      description:
        "Medical assessment and assistance for urgent health concerns.",
    },
    {
      "@type": "MedicalProcedure",
      name: "IV Therapy",
      description:
        "Medical evaluation and IV therapy when clinically appropriate.",
    },
  ],
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "@id": "https://calisdoctor.com/#breadcrumb",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://calisdoctor.com/",
    },
  ],
};

const schemas = [
  websiteSchema,
  organizationSchema,
  medicalServiceSchema,
  breadcrumbSchema,
];

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