import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { getSeoPage, seoPages } from "@/data/seoPages";

type SeoPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return seoPages.map((page) => ({
    slug: page.slug,
  }));
}

export async function generateMetadata({
  params,
}: SeoPageProps): Promise<Metadata> {
  const { slug } = await params;
  const page = getSeoPage(slug);

  if (!page) {
    return {
      title: "Page Not Found | Calis Doctor",
      robots: {
        index: false,
        follow: false,
      },
    };
  }

  const canonicalUrl = `https://calisdoctor.com/${page.slug}`;

  return {
    title: page.metaTitle,
    description: page.description,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      type: "website",
      url: canonicalUrl,
      siteName: "Calis Doctor",
      locale: "en_GB",
      title: page.metaTitle,
      description: page.description,
    },
    twitter: {
      card: "summary",
      title: page.metaTitle,
      description: page.description,
    },
  };
}

export default async function SeoLandingPage({ params }: SeoPageProps) {
  const { slug } = await params;
  const page = getSeoPage(slug);

  if (!page) {
    notFound();
  }

  const pageUrl = `https://calisdoctor.com/${page.slug}`;

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: page.faq.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://calisdoctor.com/",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: page.heading,
        item: pageUrl,
      },
    ],
  };

  return (
    <>
      <Navbar />

      <main className="min-h-screen overflow-x-hidden bg-[#f3fbfb] text-slate-950">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(faqSchema).replace(/</g, "\\u003c"),
          }}
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(breadcrumbSchema).replace(/</g, "\\u003c"),
          }}
        />

        <section className="px-5 pb-16 pt-32 sm:px-8 lg:px-12">
          <div className="mx-auto max-w-5xl">
            <nav
              aria-label="Breadcrumb"
              className="mb-8 text-sm font-medium text-slate-600"
            >
              <Link
                href="/"
                className="transition hover:text-cyan-700"
              >
                Home
              </Link>
              <span aria-hidden="true" className="mx-2">
                /
              </span>
              <span aria-current="page">{page.heading}</span>
            </nav>

            <div className="rounded-[2rem] border border-cyan-100 bg-white/80 p-7 shadow-xl shadow-cyan-950/5 backdrop-blur sm:p-10 lg:p-14">
              <p className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-cyan-700">
                Calis Doctor · Fethiye
              </p>

              <h1 className="max-w-4xl text-4xl font-black tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
                {page.heading}
              </h1>

              <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-700">
                {page.intro}
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href="tel:+905519354800"
                  className="inline-flex min-h-12 items-center justify-center rounded-2xl bg-slate-950 px-6 py-3 font-bold text-white transition hover:bg-slate-800"
                >
                  Call +90 551 935 48 00
                </a>

                <a
                  href="https://wa.me/905519354800"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-12 items-center justify-center rounded-2xl border border-cyan-200 bg-cyan-50 px-6 py-3 font-bold text-cyan-900 transition hover:bg-cyan-100"
                >
                  Contact on WhatsApp
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="px-5 py-16 sm:px-8 lg:px-12">
          <div className="mx-auto grid max-w-5xl gap-6 lg:grid-cols-3">
            {page.sections.map((section) => (
              <article
                key={section.title}
                className="rounded-3xl border border-cyan-100 bg-white p-7 shadow-lg shadow-cyan-950/5"
              >
                <h2 className="text-2xl font-black tracking-tight text-slate-950">
                  {section.title}
                </h2>
                <p className="mt-4 leading-7 text-slate-700">
                  {section.text}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section className="px-5 py-16 sm:px-8 lg:px-12">
          <div className="mx-auto max-w-5xl">
            <div className="rounded-[2rem] bg-cyan-950 p-7 text-white sm:p-10">
              <h2 className="text-3xl font-black tracking-tight">
                Frequently Asked Questions
              </h2>

              <div className="mt-8 space-y-4">
                {page.faq.map((item) => (
                  <details
                    key={item.question}
                    className="group rounded-2xl bg-white/10 p-5"
                  >
                    <summary className="cursor-pointer list-none font-bold">
                      {item.question}
                    </summary>
                    <p className="mt-3 leading-7 text-cyan-50">
                      {item.answer}
                    </p>
                  </details>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="px-5 py-16 sm:px-8 lg:px-12">
          <div className="mx-auto max-w-5xl rounded-[2rem] border border-cyan-100 bg-white p-7 text-center shadow-xl shadow-cyan-950/5 sm:p-10">
            <h2 className="text-3xl font-black tracking-tight text-slate-950">
              Need medical assistance in Fethiye?
            </h2>
            <p className="mx-auto mt-4 max-w-2xl leading-7 text-slate-700">
              Contact Calis Doctor for English-speaking private medical
              assistance. For a life-threatening emergency, call 112.
            </p>

            <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row">
              <Link
                href="/#services"
                className="inline-flex min-h-12 items-center justify-center rounded-2xl border border-slate-200 px-6 py-3 font-bold text-slate-900 transition hover:bg-slate-50"
              >
                View Services
              </Link>

              <Link
                href="/#contact"
                className="inline-flex min-h-12 items-center justify-center rounded-2xl bg-cyan-700 px-6 py-3 font-bold text-white transition hover:bg-cyan-800"
              >
                Contact Calis Doctor
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}