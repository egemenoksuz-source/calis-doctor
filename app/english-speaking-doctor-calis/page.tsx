import type { Metadata } from "next";
import {
  CheckCircle2,
  Clock3,
  HeartHandshake,
  Home,
  Languages,
  MapPin,
  MessageCircle,
  Phone,
  ShieldCheck,
  Stethoscope,
  Users,
} from "lucide-react";

import Footer from "@/components/Footer";
import Logo from "@/components/Logo";

export const metadata: Metadata = {
  title: "English Speaking Doctor in Çalış Beach & Fethiye",
  description:
    "English-speaking doctor service in Çalış Beach and Fethiye. Private medical care, hotel visits, home visits and consultations for tourists, expats and international residents.",
  alternates: {
    canonical:
      "https://calisdoctor.com/english-speaking-doctor-calis",
  },
  openGraph: {
    title: "English Speaking Doctor in Çalış Beach | Calis Doctor",
    description:
      "Private English-speaking medical care for tourists, expats and international residents in Çalış Beach and Fethiye.",
    url: "https://calisdoctor.com/english-speaking-doctor-calis",
    type: "website",
  },
};

const advantages = [
  {
    title: "Clear Communication",
    description:
      "Symptoms, examination findings and treatment recommendations are explained clearly in English.",
    icon: Languages,
  },
  {
    title: "Tourist-Friendly Care",
    description:
      "Medical support designed for visitors staying in hotels, resorts, villas and apartments.",
    icon: HeartHandshake,
  },
  {
    title: "Support for Residents",
    description:
      "Routine consultations and ongoing medical assistance for expats and international residents.",
    icon: Users,
  },
  {
    title: "Private Doctor Visits",
    description:
      "Receive professional medical care at your hotel, villa, apartment or private home.",
    icon: Home,
  },
];

const services = [
  "Hotel doctor visits",
  "Villa and apartment visits",
  "Urgent medical consultations",
  "Routine health assessments",
  "Food poisoning treatment",
  "Ear infection assessment",
  "IV therapy when medically appropriate",
  "Blood tests and laboratory support",
  "Prescription support",
  "Family medical care",
  "Chronic condition follow-up",
  "General medical examination",
];

const process = [
  {
    number: "01",
    title: "Contact Us",
    description:
      "Call or send a WhatsApp message and briefly describe the patient's symptoms.",
  },
  {
    number: "02",
    title: "Share Your Details",
    description:
      "Send the patient's name, age, location and accommodation information.",
  },
  {
    number: "03",
    title: "Confirm Availability",
    description:
      "The medical team confirms the next available appointment or doctor visit.",
  },
  {
    number: "04",
    title: "Consultation in English",
    description:
      "The doctor examines the patient and explains the recommended care clearly.",
  },
];

export default function EnglishSpeakingDoctorCalisPage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[#f3fbfb] text-slate-950">
      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-5 sm:px-6 lg:px-8">
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
              className="inline-flex items-center gap-2 rounded-xl bg-slate-950 px-4 py-3 text-sm font-black text-white transition hover:bg-cyan-700 sm:px-5"
            >
              <Phone size={17} />
              Call Now
            </a>
          </div>
        </div>
      </header>

      <section className="relative overflow-hidden px-4 py-24 sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.22),transparent_36%),radial-gradient(circle_at_bottom_right,rgba(20,184,166,0.2),transparent_38%)]" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[1.08fr_0.92fr]">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-200 bg-white/80 px-4 py-2 text-sm font-black text-cyan-800">
              <Languages size={17} />
              English-Speaking Medical Care
            </div>

            <h1 className="mt-6 max-w-4xl text-5xl font-black leading-[0.98] tracking-[-0.05em] sm:text-6xl lg:text-7xl">
              English-Speaking Doctor in{" "}
              <span className="bg-gradient-to-r from-cyan-600 to-teal-600 bg-clip-text text-transparent">
                Çalış Beach
              </span>
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-600 sm:text-xl">
              Private English-speaking medical care for tourists, expats,
              international residents and families in Çalış Beach and
              Fethiye. Hotel visits, home visits and planned consultations are
              available.
            </p>

            <div className="mt-8 space-y-3">
              {[
                "Medical consultation conducted in English",
                "Clear explanation of findings and treatment",
                "Hotel, villa, apartment and home visits",
                "Care for tourists and international residents",
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
                +90 551 935 48 00
              </a>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-cyan-700 via-teal-600 to-emerald-600 p-8 text-white shadow-2xl shadow-cyan-950/15">
            <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-white/10 blur-3xl" />

            <div className="relative">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/15">
                <Stethoscope size={27} />
              </div>

              <p className="mt-8 text-sm font-black uppercase tracking-[0.22em] text-cyan-100">
                Calis Doctor
              </p>

              <h2 className="mt-3 text-4xl font-black leading-tight">
                Medical care without a language barrier.
              </h2>

              <p className="mt-5 text-lg leading-8 text-cyan-50">
                Clear communication helps patients explain their symptoms,
                understand the examination and follow treatment advice with
                confidence.
              </p>

              <div className="mt-8 grid gap-4">
                <div className="rounded-2xl border border-white/15 bg-white/10 p-5">
                  <p className="text-sm font-bold text-cyan-100">
                    Communication
                  </p>
                  <p className="mt-1 text-xl font-black">
                    English-speaking consultations
                  </p>
                </div>

                <div className="rounded-2xl border border-white/15 bg-white/10 p-5">
                  <p className="text-sm font-bold text-cyan-100">
                    Patient Groups
                  </p>
                  <p className="mt-1 text-xl font-black">
                    Tourists, expats and residents
                  </p>
                </div>

                <div className="rounded-2xl bg-white p-5 text-slate-950">
                  <p className="text-sm font-semibold text-slate-500">
                    Phone and WhatsApp
                  </p>
                  <p className="mt-1 text-xl font-black">
                    +90 551 935 48 00
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-cyan-100 bg-white px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-black uppercase tracking-[0.24em] text-cyan-700">
              Why English Communication Matters
            </p>

            <h2 className="mt-4 text-4xl font-black tracking-[-0.04em] sm:text-5xl">
              Understand your medical care clearly.
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              Clear communication helps the doctor understand your symptoms
              and enables you to follow the recommended medical plan.
            </p>
          </div>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {advantages.map((advantage) => {
              const Icon = advantage.icon;

              return (
                <article
                  key={advantage.title}
                  className="rounded-[2rem] border border-slate-200 bg-[#f7fdfd] p-7 shadow-sm transition hover:-translate-y-2 hover:border-cyan-200 hover:shadow-xl"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-100 text-cyan-700">
                    <Icon size={25} />
                  </div>

                  <h3 className="mt-6 text-xl font-black">
                    {advantage.title}
                  </h3>

                  <p className="mt-3 leading-7 text-slate-600">
                    {advantage.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.24em] text-cyan-700">
              Medical Services
            </p>

            <h2 className="mt-4 text-4xl font-black tracking-[-0.04em] sm:text-5xl">
              English-speaking medical services in Çalış and Fethiye.
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              Medical support is available for urgent concerns, routine
              consultations and ongoing healthcare needs.
            </p>

            <div className="mt-8 rounded-[2rem] bg-slate-950 p-7 text-white">
              <ShieldCheck size={27} className="text-cyan-300" />

              <p className="mt-5 text-sm font-black uppercase tracking-[0.2em] text-cyan-300">
                Private Medical Care
              </p>

              <p className="mt-3 text-xl font-black leading-8">
                Consultations are handled respectfully, professionally and
                with clear communication.
              </p>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {services.map((service) => (
              <div
                key={service}
                className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
              >
                <CheckCircle2
                  size={20}
                  className="mt-0.5 shrink-0 text-emerald-500"
                />
                <span className="font-bold text-slate-700">{service}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-cyan-100 bg-white px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.24em] text-cyan-700">
              How to Arrange Care
            </p>

            <h2 className="mt-4 text-4xl font-black tracking-[-0.04em] sm:text-5xl">
              Arrange an English-speaking doctor visit in four steps.
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              Contact the medical team and provide the patient and location
              details needed to arrange the consultation.
            </p>

            <div className="mt-8 flex items-start gap-4 rounded-[2rem] bg-cyan-50 p-6">
              <Clock3 size={24} className="shrink-0 text-cyan-700" />

              <div>
                <p className="font-black text-slate-950">
                  Urgent and planned consultations
                </p>
                <p className="mt-2 leading-7 text-slate-600">
                  Availability and arrival time are confirmed after receiving
                  your information.
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-5">
            {process.map((step) => (
              <article
                key={step.number}
                className="flex gap-5 rounded-[2rem] border border-slate-200 bg-[#f7fdfd] p-6"
              >
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-500 to-teal-600 font-black text-white">
                  {step.number}
                </div>

                <div>
                  <h3 className="text-xl font-black">{step.title}</h3>
                  <p className="mt-3 leading-7 text-slate-600">
                    {step.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl rounded-[2.5rem] bg-slate-950 px-7 py-14 text-white sm:px-12 lg:px-16">
          <div className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
            <div>
              <div className="flex items-center gap-2 text-cyan-300">
                <MapPin size={19} />
                <p className="text-sm font-black uppercase tracking-[0.24em]">
                  Çalış Beach & Fethiye
                </p>
              </div>

              <h2 className="mt-4 max-w-3xl text-4xl font-black tracking-[-0.04em] sm:text-5xl">
                Need an English-speaking doctor?
              </h2>

              <p className="mt-5 text-lg text-slate-300">
                Contact the medical team and share the patient&apos;s location
                and symptoms.
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