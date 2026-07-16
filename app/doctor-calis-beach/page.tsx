import type { Metadata } from "next";
import {
  CheckCircle2,
  Clock3,
  Hotel,
  House,
  MapPin,
  MessageCircle,
  Phone,
  ShieldCheck,
  Stethoscope,
} from "lucide-react";

import Footer from "@/components/Footer";
import Logo from "@/components/Logo";

export const metadata: Metadata = {
  title: "Doctor in Çalış Beach | English Speaking Private Doctor",
  description:
    "English-speaking doctor in Çalış Beach, Fethiye. Private hotel visits, home visits, urgent medical care and medical support for tourists and international residents.",
  alternates: {
    canonical: "https://calisdoctor.com/doctor-calis-beach",
  },
  openGraph: {
    title: "Doctor in Çalış Beach | Calis Doctor",
    description:
      "Private English-speaking doctor service in Çalış Beach for tourists, expats, families and international residents.",
    url: "https://calisdoctor.com/doctor-calis-beach",
    type: "website",
  },
};

const services = [
  {
    title: "Hotel Doctor Visits",
    description:
      "A private doctor can visit your hotel room, resort or holiday accommodation in Çalış Beach.",
    icon: Hotel,
  },
  {
    title: "Home and Villa Visits",
    description:
      "Medical consultations are available at villas, apartments, private homes and holiday rentals.",
    icon: House,
  },
  {
    title: "Urgent Medical Care",
    description:
      "Fast medical assistance for sudden illness, pain, infection, dehydration and other urgent concerns.",
    icon: Clock3,
  },
  {
    title: "English-Speaking Care",
    description:
      "Clear communication throughout the consultation, examination and treatment process.",
    icon: Stethoscope,
  },
];

const commonConditions = [
  "Food poisoning and stomach illness",
  "Vomiting, diarrhoea and dehydration",
  "Ear infections after swimming",
  "Sunstroke and heat-related illness",
  "Fever, cough and respiratory symptoms",
  "Urinary infections",
  "Minor injuries and wounds",
  "Prescription and medication support",
];

export default function DoctorCalisBeachPage() {
  return (
    <main className="min-h-screen bg-[#f3fbfb] text-slate-950">
      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-5 sm:px-6 lg:px-8">
          <a href="/" aria-label="Calis Doctor home">
            <Logo />
          </a>

          <div className="flex items-center gap-3">
            <a
              href="https://wa.me/905519354800"
              target="_blank"
              rel="noreferrer"
              aria-label="Contact Calis Doctor on WhatsApp"
              className="hidden h-11 w-11 items-center justify-center rounded-xl bg-emerald-500 text-white transition hover:bg-emerald-600 sm:flex"
            >
              <MessageCircle size={19} />
            </a>

            <a
              href="tel:+905519354800"
              className="inline-flex items-center gap-2 rounded-xl bg-slate-950 px-5 py-3 text-sm font-black text-white transition hover:bg-cyan-700"
            >
              <Phone size={17} />
              Call Now
            </a>
          </div>
        </div>
      </header>

      <section className="relative overflow-hidden px-4 py-24 sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.2),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(20,184,166,0.18),transparent_35%)]" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-200 bg-white/80 px-4 py-2 text-sm font-black text-cyan-800">
              <MapPin size={17} />
              Doctor Service in Çalış Beach, Fethiye
            </div>

            <h1 className="mt-6 max-w-4xl text-5xl font-black leading-[0.98] tracking-[-0.05em] sm:text-6xl lg:text-7xl">
              English-Speaking Doctor in{" "}
              <span className="bg-gradient-to-r from-cyan-600 to-teal-600 bg-clip-text text-transparent">
                Çalış Beach
              </span>
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-600 sm:text-xl">
              Private medical care for tourists, expats, international
              residents and families. We provide hotel visits, home visits and
              urgent medical assistance throughout Çalış Beach and Fethiye.
            </p>

            <div className="mt-8 space-y-3">
              {[
                "English-speaking medical consultation",
                "Hotel, villa, apartment and home visits",
                "Urgent and planned medical care",
                "Support for visitors and local residents",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 font-bold text-slate-700"
                >
                  <CheckCircle2
                    size={20}
                    className="shrink-0 text-emerald-500"
                  />
                  {item}
                </div>
              ))}
            </div>

            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <a
                href="https://wa.me/905519354800"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-3 rounded-2xl bg-emerald-500 px-7 py-4 font-black text-white shadow-xl shadow-emerald-500/20 transition hover:-translate-y-1 hover:bg-emerald-600"
              >
                <MessageCircle size={21} />
                WhatsApp Doctor
              </a>

              <a
                href="tel:+905519354800"
                className="inline-flex items-center justify-center gap-3 rounded-2xl bg-slate-950 px-7 py-4 font-black text-white transition hover:-translate-y-1 hover:bg-cyan-700"
              >
                <Phone size={20} />
                Call +90 551 935 48 00
              </a>
            </div>
          </div>

          <div className="rounded-[2.5rem] bg-gradient-to-br from-cyan-700 via-teal-600 to-emerald-600 p-8 text-white shadow-2xl shadow-cyan-950/15">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/15">
              <ShieldCheck size={27} />
            </div>

            <p className="mt-8 text-sm font-black uppercase tracking-[0.22em] text-cyan-100">
              Calis Doctor
            </p>

            <h2 className="mt-3 text-4xl font-black leading-tight">
              Medical care where you are staying.
            </h2>

            <p className="mt-5 text-lg leading-8 text-cyan-50">
              You do not need to travel while feeling unwell. Our mobile doctor
              service can visit your hotel, villa, apartment or home in Çalış.
            </p>

            <div className="mt-8 grid gap-4">
              <div className="rounded-2xl border border-white/15 bg-white/10 p-5">
                <p className="text-sm font-bold text-cyan-100">Availability</p>
                <p className="mt-1 text-xl font-black">
                  Urgent and planned visits
                </p>
              </div>

              <div className="rounded-2xl border border-white/15 bg-white/10 p-5">
                <p className="text-sm font-bold text-cyan-100">Service Area</p>
                <p className="mt-1 text-xl font-black">
                  Çalış Beach and Fethiye
                </p>
              </div>

              <div className="rounded-2xl bg-white p-5 text-slate-950">
                <p className="text-sm font-semibold text-slate-500">
                  Contact the medical team
                </p>
                <p className="mt-1 text-xl font-black">
                  +90 551 935 48 00
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-cyan-100 bg-white px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-black uppercase tracking-[0.24em] text-cyan-700">
              Medical Services
            </p>

            <h2 className="mt-4 text-4xl font-black tracking-[-0.04em] sm:text-5xl">
              Private doctor services in Çalış Beach.
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              Medical assistance is available for short-term visitors and
              people living in Çalış and Fethiye.
            </p>
          </div>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service) => {
              const Icon = service.icon;

              return (
                <article
                  key={service.title}
                  className="rounded-[2rem] border border-slate-200 bg-[#f7fdfd] p-7 shadow-sm transition hover:-translate-y-2 hover:border-cyan-200 hover:shadow-xl"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-100 text-cyan-700">
                    <Icon size={25} />
                  </div>

                  <h3 className="mt-6 text-xl font-black">{service.title}</h3>

                  <p className="mt-3 leading-7 text-slate-600">
                    {service.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.24em] text-cyan-700">
              Common Medical Problems
            </p>

            <h2 className="mt-4 text-4xl font-black tracking-[-0.04em] sm:text-5xl">
              Medical help for common illnesses and urgent concerns.
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              A doctor will assess the patient, explain the findings and
              recommend suitable treatment based on the medical examination.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {commonConditions.map((condition) => (
              <div
                key={condition}
                className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-white p-5"
              >
                <CheckCircle2
                  size={20}
                  className="mt-0.5 shrink-0 text-emerald-500"
                />

                <span className="font-bold text-slate-700">{condition}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 pb-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl rounded-[2.5rem] bg-slate-950 px-7 py-14 text-white sm:px-12 lg:px-16">
          <div className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.24em] text-cyan-300">
                Contact Calis Doctor
              </p>

              <h2 className="mt-4 max-w-3xl text-4xl font-black tracking-[-0.04em] sm:text-5xl">
                Need a doctor in Çalış Beach?
              </h2>

              <p className="mt-5 text-lg text-slate-300">
                Contact our English-speaking medical team and share your
                location and symptoms.
              </p>
            </div>

            <div className="flex w-full flex-col gap-4 sm:w-auto sm:flex-row">
              <a
                href="https://wa.me/905519354800"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-3 rounded-2xl bg-emerald-500 px-7 py-4 font-black text-white transition hover:-translate-y-1 hover:bg-emerald-600"
              >
                <MessageCircle size={21} />
                WhatsApp
              </a>

              <a
                href="tel:+905519354800"
                className="inline-flex items-center justify-center gap-3 rounded-2xl bg-white px-7 py-4 font-black text-slate-950 transition hover:-translate-y-1"
              >
                <Phone size={20} />
                Call Now
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}