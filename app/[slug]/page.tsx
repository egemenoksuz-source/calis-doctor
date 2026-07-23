import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  Check,
  Clock3,
  MapPin,
  MessageCircle,
  Phone,
  ShieldCheck,
  Stethoscope,
} from "lucide-react";

import { getSeoPage, seoPages } from "@/data/seoPages";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

const siteUrl = "https://calisdoctor.com";
const phoneNumber = "+905519354800";
const displayPhone = "+90 551 935 48 00";
const whatsappUrl =
  "https://wa.me/905519354800?text=Hello%2C%20I%20need%20medical%20assistance%20in%20Fethiye.";

export function generateStaticParams() {
  return seoPages.map((page) => ({
    slug: page.slug,
  }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const page = getSeoPage(slug);

  if (!page) {
    return {
      title: "Page Not Found | Calis Doctor",
    };
  }

  const canonicalUrl = `${siteUrl}/${page.slug}`;

  return {
    title: page.metaTitle,
    description: page.metaDescription,

    alternates: {
      canonical: canonicalUrl,
    },

    openGraph: {
      title: page.metaTitle,
      description: page.metaDescription,
      url: canonicalUrl,
      siteName: "Calis Doctor",
      locale: "en_GB",
      type: "website",
    },

    twitter: {
      card: "summary_large_image",
      title: page.metaTitle,
      description: page.metaDescription,
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
  };
}

export default async function SeoServicePage({ params }: PageProps) {
  const { slug } = await params;
  const page = getSeoPage(slug);

  if (!page) {
    notFound();
  }

  const canonicalUrl = `${siteUrl}/${page.slug}`;

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: siteUrl,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Medical Services",
        item: `${siteUrl}/#services`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: page.title,
        item: canonicalUrl,
      },
    ],
  };

  const medicalClinicSchema = {
    "@context": "https://schema.org",
    "@type": ["MedicalClinic", "LocalBusiness"],
    "@id": `${siteUrl}/#medicalclinic`,
    name: "Calis Doctor",
    url: siteUrl,
    telephone: phoneNumber,
    description:
      "24/7 English-speaking private doctor service providing hotel, villa, apartment and home visits in Calis Beach and Fethiye.",
    priceRange: "$$",
    medicalSpecialty: "PrimaryCare",
    availableService: seoPages.map((service) => ({
      "@type": "MedicalTherapy",
      name: service.title,
      url: `${siteUrl}/${service.slug}`,
    })),
    areaServed: [
      {
        "@type": "City",
        name: "Fethiye",
      },
      {
        "@type": "Place",
        name: "Calis Beach",
      },
    ],
    contactPoint: {
      "@type": "ContactPoint",
      telephone: phoneNumber,
      contactType: "medical assistance",
      availableLanguage: ["English", "Turkish"],
      areaServed: "TR",
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
  };

  const medicalWebPageSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalWebPage",
    "@id": `${canonicalUrl}#webpage`,
    url: canonicalUrl,
    name: page.metaTitle,
    headline: page.heading,
    description: page.metaDescription,
    inLanguage: "en-GB",
    isPartOf: {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      name: "Calis Doctor",
      url: siteUrl,
    },
    about: {
      "@type": "MedicalClinic",
      "@id": `${siteUrl}/#medicalclinic`,
      name: "Calis Doctor",
    },
    mainEntity: {
      "@type": "MedicalTherapy",
      name: page.title,
      description: page.introduction,
    },
    breadcrumb: {
      "@id": `${canonicalUrl}#breadcrumb`,
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `${canonicalUrl}#faq`,
    mainEntity: page.faq.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  const combinedSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        ...breadcrumbSchema,
        "@id": `${canonicalUrl}#breadcrumb`,
      },
      medicalClinicSchema,
      medicalWebPageSchema,
      faqSchema,
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(combinedSchema).replace(/</g, "\\u003c"),
        }}
      />

      <main className="min-h-screen overflow-hidden bg-[#f7fbfc] text-slate-900">
        {/* HERO */}
        <section className="relative isolate overflow-hidden bg-gradient-to-br from-[#063b4c] via-[#07576a] to-[#0795a5] text-white">
          <div className="absolute inset-0 -z-10">
            <div className="absolute -left-24 top-16 h-80 w-80 rounded-full bg-cyan-300/20 blur-3xl" />
            <div className="absolute -right-20 bottom-0 h-96 w-96 rounded-full bg-sky-200/20 blur-3xl" />
          </div>

          <div className="mx-auto max-w-7xl px-5 pb-20 pt-8 sm:px-8 lg:px-10 lg:pb-28">
            <nav
              aria-label="Breadcrumb"
              className="mb-14 flex flex-wrap items-center gap-2 text-sm text-cyan-50/85"
            >
              <Link
                href="/"
                className="transition hover:text-white"
              >
                Home
              </Link>

              <span aria-hidden="true">/</span>

              <Link
                href="/#services"
                className="transition hover:text-white"
              >
                Services
              </Link>

              <span aria-hidden="true">/</span>

              <span aria-current="page" className="text-white">
                {page.title}
              </span>
            </nav>

            <div className="grid items-center gap-12 lg:grid-cols-[1fr_380px]">
              <div>
                <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] backdrop-blur">
                  <Stethoscope className="h-4 w-4" />
                  {page.eyebrow}
                </div>

                <h1 className="max-w-4xl text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
                  {page.heading}
                </h1>

                <p className="mt-7 max-w-3xl text-lg leading-8 text-cyan-50 sm:text-xl">
                  {page.introduction}
                </p>

                <div className="mt-9 flex flex-col gap-4 sm:flex-row">
                  <a
                    href={`tel:${phoneNumber}`}
                    className="inline-flex min-h-14 items-center justify-center gap-3 rounded-2xl bg-white px-7 py-4 font-bold text-[#07576a] shadow-xl shadow-slate-950/15 transition hover:-translate-y-0.5"
                  >
                    <Phone className="h-5 w-5" />
                    Call {displayPhone}
                  </a>

                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-14 items-center justify-center gap-3 rounded-2xl border border-white/30 bg-white/10 px-7 py-4 font-bold text-white backdrop-blur transition hover:bg-white/20"
                  >
                    <MessageCircle className="h-5 w-5" />
                    WhatsApp
                  </a>
                </div>
              </div>

              <aside className="rounded-[2rem] border border-white/20 bg-white/10 p-7 shadow-2xl backdrop-blur-xl">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-100">
                  Private medical assistance
                </p>

                <div className="mt-6 space-y-5">
                  <div className="flex gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/15">
                      <Clock3 className="h-5 w-5" />
                    </div>

                    <div>
                      <p className="font-bold">Available 24/7</p>
                      <p className="mt-1 text-sm leading-6 text-cyan-50/80">
                        Day and night medical assistance, subject to
                        availability.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/15">
                      <MapPin className="h-5 w-5" />
                    </div>

                    <div>
                      <p className="font-bold">Fethiye and Calis Beach</p>
                      <p className="mt-1 text-sm leading-6 text-cyan-50/80">
                        Hotel, villa, apartment and home visits.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/15">
                      <ShieldCheck className="h-5 w-5" />
                    </div>

                    <div>
                      <p className="font-bold">English-speaking care</p>
                      <p className="mt-1 text-sm leading-6 text-cyan-50/80">
                        Clear communication for international visitors.
                      </p>
                    </div>
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </section>

        {/* MAIN CONTENT */}
        <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-10 lg:py-24">
          <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_320px]">
            <article className="space-y-16">
              {page.sections.map((section) => (
                <section
                  key={section.title}
                  className="rounded-[2rem] border border-slate-200/80 bg-white p-7 shadow-sm sm:p-10"
                >
                  <h2 className="text-2xl font-bold tracking-tight text-[#063b4c] sm:text-3xl">
                    {section.title}
                  </h2>

                  <div className="mt-6 space-y-5 text-base leading-8 text-slate-600 sm:text-lg">
                    {section.content.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </div>
                </section>
              ))}

              {page.symptoms && page.symptoms.length > 0 && (
                <section>
                  <div className="mb-8">
                    <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#07899a]">
                      Medical assessment
                    </p>

                    <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#063b4c]">
                      Common symptoms we assess
                    </h2>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    {page.symptoms.map((symptom) => (
                      <div
                        key={symptom}
                        className="flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
                      >
                        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-cyan-50 text-[#07899a]">
                          <Check className="h-5 w-5" />
                        </span>

                        <span className="font-semibold text-slate-700">
                          {symptom}
                        </span>
                      </div>
                    ))}
                  </div>
                </section>
              )}

              {page.benefits && page.benefits.length > 0 && (
                <section className="rounded-[2rem] bg-[#eaf7f7] p-7 sm:p-10">
                  <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#07899a]">
                    Patient-focused service
                  </p>

                  <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#063b4c]">
                    Why choose Calis Doctor?
                  </h2>

                  <div className="mt-8 grid gap-4 sm:grid-cols-2">
                    {page.benefits.map((benefit) => (
                      <div
                        key={benefit}
                        className="flex items-start gap-3 rounded-2xl bg-white/90 p-5"
                      >
                        <Check className="mt-0.5 h-5 w-5 shrink-0 text-[#07899a]" />

                        <span className="font-semibold leading-7 text-slate-700">
                          {benefit}
                        </span>
                      </div>
                    ))}
                  </div>
                </section>
              )}

              {/* FAQ */}
              <section id="faq">
                <div className="mb-8">
                  <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#07899a]">
                    Helpful information
                  </p>

                  <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#063b4c]">
                    Frequently asked questions
                  </h2>
                </div>

                <div className="space-y-4">
                  {page.faq.map((faq) => (
                    <details
                      key={faq.question}
                      className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm open:border-cyan-200"
                    >
                      <summary className="flex cursor-pointer list-none items-center justify-between gap-5 font-bold text-slate-900">
                        <span>{faq.question}</span>

                        <span className="text-2xl font-light text-[#07899a] transition group-open:rotate-45">
                          +
                        </span>
                      </summary>

                      <p className="mt-5 border-t border-slate-100 pt-5 leading-8 text-slate-600">
                        {faq.answer}
                      </p>
                    </details>
                  ))}
                </div>
              </section>

              {/* RELATED SERVICES */}
              <section>
                <div className="mb-8">
                  <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#07899a]">
                    Continue exploring
                  </p>

                  <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#063b4c]">
                    Related medical services
                  </h2>
                </div>

                <div className="grid gap-5 md:grid-cols-3">
                  {page.relatedPages.map((related) => (
                    <Link
                      key={related.href}
                      href={related.href}
                      className="group flex min-h-40 flex-col justify-between rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-cyan-300 hover:shadow-lg"
                    >
                      <h3 className="text-lg font-bold leading-7 text-[#063b4c]">
                        {related.title}
                      </h3>

                      <span className="mt-8 inline-flex items-center gap-2 font-semibold text-[#07899a]">
                        View service
                        <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                      </span>
                    </Link>
                  ))}
                </div>
              </section>
            </article>

            {/* STICKY SIDEBAR */}
            <aside className="lg:sticky lg:top-28 lg:h-fit">
              <div className="rounded-[2rem] border border-slate-200 bg-white p-7 shadow-xl shadow-slate-200/40">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-50 text-[#07899a]">
                  <Phone className="h-6 w-6" />
                </span>

                <h2 className="mt-6 text-2xl font-bold tracking-tight text-[#063b4c]">
                  Need a doctor?
                </h2>

                <p className="mt-4 leading-7 text-slate-600">
                  Contact our English-speaking medical team for assistance in
                  Fethiye and Calis Beach.
                </p>

                <div className="mt-7 space-y-3">
                  <a
                    href={`tel:${phoneNumber}`}
                    className="flex min-h-14 items-center justify-center gap-3 rounded-2xl bg-[#07576a] px-5 py-4 font-bold text-white transition hover:bg-[#063b4c]"
                  >
                    <Phone className="h-5 w-5" />
                    Call now
                  </a>

                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex min-h-14 items-center justify-center gap-3 rounded-2xl bg-[#20a866] px-5 py-4 font-bold text-white transition hover:bg-[#198c55]"
                  >
                    <MessageCircle className="h-5 w-5" />
                    WhatsApp
                  </a>
                </div>

                <div className="mt-7 border-t border-slate-100 pt-6">
                  <p className="flex items-center gap-3 text-sm font-semibold text-slate-600">
                    <Clock3 className="h-4 w-4 text-[#07899a]" />
                    Available 24 hours a day
                  </p>

                  <p className="mt-3 flex items-center gap-3 text-sm font-semibold text-slate-600">
                    <MapPin className="h-4 w-4 text-[#07899a]" />
                    Fethiye and Calis Beach
                  </p>
                </div>
              </div>

              <Link
                href="/"
                className="mt-5 flex items-center justify-center gap-2 rounded-2xl border border-slate-200 bg-white px-5 py-4 font-semibold text-slate-700 transition hover:border-cyan-300 hover:text-[#07899a]"
              >
                <ArrowLeft className="h-4 w-4" />
                Return to homepage
              </Link>
            </aside>
          </div>
        </section>

        {/* BOTTOM CTA */}
        <section className="px-5 pb-20 sm:px-8 lg:px-10">
          <div className="mx-auto max-w-7xl overflow-hidden rounded-[2.5rem] bg-gradient-to-r from-[#063b4c] to-[#07899a] px-7 py-14 text-center text-white shadow-2xl sm:px-12">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-cyan-100">
              24/7 private medical assistance
            </p>

            <h2 className="mx-auto mt-4 max-w-3xl text-3xl font-bold tracking-tight sm:text-4xl">
              Speak to an English-speaking doctor in Fethiye
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-cyan-50">
              Medical visits to hotels, villas, apartments and private homes
              across Fethiye and Calis Beach.
            </p>

            <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
              <a
                href={`tel:${phoneNumber}`}
                className="inline-flex min-h-14 items-center justify-center gap-3 rounded-2xl bg-white px-8 py-4 font-bold text-[#07576a]"
              >
                <Phone className="h-5 w-5" />
                Call now
              </a>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-14 items-center justify-center gap-3 rounded-2xl border border-white/30 bg-white/10 px-8 py-4 font-bold text-white backdrop-blur transition hover:bg-white/20"
              >
                <MessageCircle className="h-5 w-5" />
                WhatsApp
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}