import type { Metadata } from "next";
import {
  Activity,
  CalendarCheck,
  CheckCircle2,
  ClipboardCheck,
  HeartPulse,
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
  title: "Routine Health Check-Up in Fethiye | English Speaking Doctor",
  description:
    "English-speaking routine health check-ups in Fethiye and Çalış Beach. Private medical consultations, general examinations and health assessments for expats and international residents.",
  alternates: {
    canonical: "https://calisdoctor.com/routine-checkup-fethiye",
  },
  openGraph: {
    title: "Routine Health Check-Up in Fethiye | Calis Doctor",
    description:
      "Private English-speaking health assessments and routine medical consultations in Fethiye and Çalış Beach.",
    url: "https://calisdoctor.com/routine-checkup-fethiye",
    type: "website",
  },
};

const benefits = [
  {
    title: "General Health Assessment",
    description:
      "A private medical consultation focused on your current health, symptoms and concerns.",
    icon: Stethoscope,
  },
  {
    title: "English Communication",
    description:
      "Discuss your medical history and understand recommendations clearly in English.",
    icon: Languages,
  },
  {
    title: "Individual Approach",
    description:
      "The assessment is tailored to your age, symptoms, medical history and risk factors.",
    icon: ShieldCheck,
  },
  {
    title: "Follow-Up Planning",
    description:
      "Further tests, monitoring or treatment may be recommended when clinically appropriate.",
    icon: ClipboardCheck,
  },
];

const assessmentItems = [
  "General medical history review",
  "Current symptoms and concerns",
  "Medication review",
  "Blood pressure assessment",
  "Pulse and general observations",
  "Heart and lung examination",
  "Weight and general health discussion",
  "Lifestyle and risk factor review",
  "Existing medical condition follow-up",
  "Blood test recommendations when appropriate",
  "Prescription review after consultation",
  "Referral recommendations when required",
];

const suitableFor = [
  "Expats living in Fethiye",
  "International residents",
  "Adults wanting a routine check-up",
  "People with ongoing medical conditions",
  "Patients requiring medication review",
  "People with new or unexplained symptoms",
  "Older adults requiring regular assessment",
  "Families seeking English-speaking medical care",
];

const process = [
  {
    number: "01",
    title: "Contact the Medical Team",
    description:
      "Call or send a WhatsApp message and explain the type of consultation you require.",
  },
  {
    number: "02",
    title: "Share Medical Information",
    description:
      "Provide your age, current symptoms, existing conditions and regular medication.",
  },
  {
    number: "03",
    title: "Confirm the Consultation",
    description:
      "The medical team confirms current availability and the most suitable consultation option.",
  },
  {
    number: "04",
    title: "Health Assessment",
    description:
      "The doctor reviews your health and explains any recommended tests, treatment or follow-up.",
  },
];

export default function RoutineCheckupFethiyePage() {
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
              <CalendarCheck size={17} />
              Routine Medical Check-Up
            </div>

            <h1 className="mt-6 max-w-4xl text-5xl font-black leading-[0.98] tracking-[-0.05em] sm:text-6xl lg:text-7xl">
              Routine Health Check-Up in{" "}
              <span className="bg-gradient-to-r from-cyan-600 to-teal-600 bg-clip-text text-transparent">
                Fethiye
              </span>
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-600 sm:text-xl">
              English-speaking general medical assessments for expats,
              international residents and families living in Fethiye and Çalış
              Beach.
            </p>

            <div className="mt-8 space-y-3">
              {[
                "Private English-speaking consultation",
                "General medical examination",
                "Medication and medical history review",
                "Testing and follow-up when appropriate",
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
                Arrange a Check-Up
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
                <HeartPulse size={27} />
              </div>

              <p className="mt-8 text-sm font-black uppercase tracking-[0.22em] text-cyan-100">
                General Health Assessment
              </p>

              <h2 className="mt-3 text-4xl font-black leading-tight">
                Take a proactive approach to your health.
              </h2>

              <p className="mt-5 text-lg leading-8 text-cyan-50">
                A routine medical consultation can help review current
                symptoms, existing conditions, medication and general health
                concerns.
              </p>

              <div className="mt-8 grid gap-4">
                <div className="rounded-2xl border border-white/15 bg-white/10 p-5">
                  <p className="text-sm font-bold text-cyan-100">
                    Consultation Type
                  </p>

                  <p className="mt-1 text-xl font-black">
                    General medical assessment
                  </p>
                </div>

                <div className="rounded-2xl border border-white/15 bg-white/10 p-5">
                  <p className="text-sm font-bold text-cyan-100">
                    Suitable For
                  </p>

                  <p className="mt-1 text-xl font-black">
                    Expats, residents and families
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
              Routine Medical Care
            </p>

            <h2 className="mt-4 text-4xl font-black tracking-[-0.04em] sm:text-5xl">
              A clear and personalised health assessment.
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              Each consultation is based on the patient&apos;s symptoms,
              medical history, existing conditions and individual needs.
            </p>
          </div>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {benefits.map((benefit) => {
              const Icon = benefit.icon;

              return (
                <article
                  key={benefit.title}
                  className="rounded-[2rem] border border-slate-200 bg-[#f7fdfd] p-7 shadow-sm transition hover:-translate-y-2 hover:border-cyan-200 hover:shadow-xl"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-100 text-cyan-700">
                    <Icon size={25} />
                  </div>

                  <h3 className="mt-6 text-xl font-black">{benefit.title}</h3>

                  <p className="mt-3 leading-7 text-slate-600">
                    {benefit.description}
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
              Health Check-Up
            </p>

            <h2 className="mt-4 text-4xl font-black tracking-[-0.04em] sm:text-5xl">
              What may be included in a routine consultation?
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              The exact assessment depends on your age, symptoms, medical
              history and reason for requesting the consultation.
            </p>

            <div className="mt-8 rounded-[2rem] bg-slate-950 p-7 text-white">
              <Activity size={27} className="text-cyan-300" />

              <p className="mt-5 text-sm font-black uppercase tracking-[0.2em] text-cyan-300">
                Individual Medical Plan
              </p>

              <p className="mt-3 text-xl font-black leading-8">
                Tests and treatment are recommended only when clinically
                appropriate.
              </p>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {assessmentItems.map((item) => (
              <div
                key={item}
                className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
              >
                <CheckCircle2
                  size={20}
                  className="mt-0.5 shrink-0 text-emerald-500"
                />

                <span className="font-bold text-slate-700">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-cyan-100 bg-white px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.24em] text-cyan-700">
              Who May Benefit?
            </p>

            <h2 className="mt-4 text-4xl font-black tracking-[-0.04em] sm:text-5xl">
              Routine healthcare for international residents.
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              General medical consultations may be useful for routine
              monitoring, new symptoms or follow-up of an existing condition.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {suitableFor.map((item) => (
              <div
                key={item}
                className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-[#f7fdfd] p-5"
              >
                <Users
                  size={20}
                  className="mt-0.5 shrink-0 text-cyan-700"
                />

                <span className="font-bold text-slate-700">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.24em] text-cyan-700">
              How It Works
            </p>

            <h2 className="mt-4 text-4xl font-black tracking-[-0.04em] sm:text-5xl">
              Arrange a routine consultation in four steps.
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              Share accurate medical information so the consultation can be
              planned around your needs.
            </p>

            <div className="mt-8 flex items-start gap-4 rounded-[2rem] bg-cyan-50 p-6">
              <CalendarCheck
                size={24}
                className="shrink-0 text-cyan-700"
              />

              <div>
                <p className="font-black">Bring your medical information</p>

                <p className="mt-2 leading-7 text-slate-600">
                  Prepare a list of current medication, previous diagnoses and
                  recent test results when available.
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-5">
            {process.map((step) => (
              <article
                key={step.number}
                className="flex gap-5 rounded-[2rem] border border-slate-200 bg-white p-6"
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

      <section className="px-4 pb-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl rounded-[2.5rem] bg-slate-950 px-7 py-14 text-white sm:px-12 lg:px-16">
          <div className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
            <div>
              <div className="flex items-center gap-2 text-cyan-300">
                <MapPin size={19} />

                <p className="text-sm font-black uppercase tracking-[0.24em]">
                  Fethiye & Çalış Beach
                </p>
              </div>

              <h2 className="mt-4 max-w-3xl text-4xl font-black tracking-[-0.04em] sm:text-5xl">
                Would you like a routine health assessment?
              </h2>

              <p className="mt-5 text-lg text-slate-300">
                Contact the medical team and explain your healthcare needs.
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