import type { Metadata } from "next";
import {
  AlertTriangle,
  CheckCircle2,
  ClipboardCheck,
  Clock3,
  Droplets,
  HeartPulse,
  Languages,
  MapPin,
  MessageCircle,
  Phone,
  ShieldCheck,
  Stethoscope,
} from "lucide-react";

import Footer from "@/components/Footer";
import Logo from "@/components/Logo";

export const metadata: Metadata = {
  title: "IV Therapy in Çalış Beach | Medical Hydration Care",
  description:
    "English-speaking medical assessment for dehydration and possible IV therapy in Çalış Beach and Fethiye. Treatment is provided only when clinically appropriate after examination.",
  alternates: {
    canonical: "https://calisdoctor.com/iv-therapy-calis",
  },
  openGraph: {
    title: "IV Therapy in Çalış Beach | Calis Doctor",
    description:
      "Private medical assessment for dehydration and clinically appropriate IV therapy in Çalış Beach and Fethiye.",
    url: "https://calisdoctor.com/iv-therapy-calis",
    type: "website",
  },
};

const assessmentBenefits = [
  {
    title: "Doctor Assessment First",
    description:
      "The patient is examined before any intravenous treatment is considered.",
    icon: Stethoscope,
  },
  {
    title: "Hydration Evaluation",
    description:
      "Symptoms, fluid loss and possible signs of dehydration are assessed.",
    icon: Droplets,
  },
  {
    title: "English Communication",
    description:
      "The findings and recommended treatment are explained clearly in English.",
    icon: Languages,
  },
  {
    title: "Patient Safety",
    description:
      "IV treatment is considered only when clinically appropriate for the patient.",
    icon: ShieldCheck,
  },
];

const possibleReasons = [
  "Vomiting with difficulty keeping fluids down",
  "Diarrhoea with signs of fluid loss",
  "Food poisoning symptoms",
  "Heat-related fluid loss",
  "Dizziness or weakness linked to dehydration",
  "Dry mouth and reduced urination",
  "Medical assessment after prolonged illness",
  "Other concerns identified during examination",
];

const process = [
  {
    number: "01",
    title: "Contact the Medical Team",
    description:
      "Explain the patient's symptoms, age, medical history and current location.",
  },
  {
    number: "02",
    title: "Doctor Examination",
    description:
      "The doctor assesses symptoms, hydration status and the patient's general condition.",
  },
  {
    number: "03",
    title: "Treatment Decision",
    description:
      "The doctor determines whether oral fluids, medication, IV therapy or hospital care is more appropriate.",
  },
  {
    number: "04",
    title: "Monitoring and Advice",
    description:
      "When treatment is provided, the patient is monitored and given clear aftercare instructions.",
  },
];

const urgentSigns = [
  "Confusion or reduced consciousness",
  "Severe breathing difficulty",
  "Chest pain",
  "No urine or very little urine",
  "Severe weakness or collapse",
  "Persistent vomiting with rapid deterioration",
  "Blood in vomit or stool",
  "Serious symptoms in a young child or vulnerable adult",
];

export default function IvTherapyCalisPage() {
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
              <Droplets size={17} />
              Medical Hydration Assessment
            </div>

            <h1 className="mt-6 max-w-4xl text-5xl font-black leading-[0.98] tracking-[-0.05em] sm:text-6xl lg:text-7xl">
              IV Therapy in{" "}
              <span className="bg-gradient-to-r from-cyan-600 to-teal-600 bg-clip-text text-transparent">
                Çalış Beach
              </span>
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-600 sm:text-xl">
              English-speaking medical assessment for dehydration, vomiting,
              diarrhoea and heat-related fluid loss in Çalış Beach and
              Fethiye. IV therapy is considered only after a doctor examines
              the patient.
            </p>

            <div className="mt-8 space-y-3">
              {[
                "Doctor examination before treatment",
                "Assessment of hydration and symptoms",
                "English-speaking medical explanation",
                "Treatment only when clinically appropriate",
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
                <HeartPulse size={27} />
              </div>

              <p className="mt-8 text-sm font-black uppercase tracking-[0.22em] text-cyan-100">
                Clinical Assessment Required
              </p>

              <h2 className="mt-3 text-4xl font-black leading-tight">
                IV treatment is not suitable for every patient.
              </h2>

              <p className="mt-5 text-lg leading-8 text-cyan-50">
                The doctor may recommend oral hydration, medication, IV
                treatment or hospital assessment depending on the examination.
              </p>

              <div className="mt-8 grid gap-4">
                <div className="rounded-2xl border border-white/15 bg-white/10 p-5">
                  <p className="text-sm font-bold text-cyan-100">First Step</p>

                  <p className="mt-1 text-xl font-black">
                    Medical examination
                  </p>
                </div>

                <div className="rounded-2xl border border-white/15 bg-white/10 p-5">
                  <p className="text-sm font-bold text-cyan-100">
                    Treatment Decision
                  </p>

                  <p className="mt-1 text-xl font-black">
                    Based on clinical findings
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
              Safe Medical Approach
            </p>

            <h2 className="mt-4 text-4xl font-black tracking-[-0.04em] sm:text-5xl">
              Hydration care based on the patient&apos;s condition.
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              Mild dehydration may sometimes be managed with oral fluids,
              while more serious cases can require medical treatment. The
              correct option depends on the patient&apos;s symptoms and
              examination.
            </p>
          </div>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {assessmentBenefits.map((benefit) => {
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
              Medical Assessment
            </p>

            <h2 className="mt-4 text-4xl font-black tracking-[-0.04em] sm:text-5xl">
              Situations where hydration assessment may be useful.
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              These symptoms do not automatically mean IV treatment is
              required. The doctor decides the appropriate treatment after
              examination.
            </p>

            <div className="mt-8 rounded-[2rem] bg-slate-950 p-7 text-white">
              <ClipboardCheck size={27} className="text-cyan-300" />

              <p className="mt-5 text-sm font-black uppercase tracking-[0.2em] text-cyan-300">
                Individual Treatment Decision
              </p>

              <p className="mt-3 text-xl font-black leading-8">
                Medical history, symptoms, examination findings and risk
                factors all influence the treatment plan.
              </p>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {possibleReasons.map((reason) => (
              <div
                key={reason}
                className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-white p-5"
              >
                <CheckCircle2
                  size={20}
                  className="mt-0.5 shrink-0 text-emerald-500"
                />

                <span className="font-bold text-slate-700">{reason}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-cyan-100 bg-white px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.24em] text-cyan-700">
              How It Works
            </p>

            <h2 className="mt-4 text-4xl font-black tracking-[-0.04em] sm:text-5xl">
              Medical hydration care in four steps.
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              The treatment decision is made only after reviewing the patient
              and assessing the possible cause of fluid loss.
            </p>

            <div className="mt-8 flex items-start gap-4 rounded-[2rem] bg-cyan-50 p-6">
              <Clock3 size={24} className="shrink-0 text-cyan-700" />

              <div>
                <p className="font-black">Share complete information</p>

                <p className="mt-2 leading-7 text-slate-600">
                  Mention vomiting, diarrhoea, fluid intake, urination,
                  existing medical conditions and current medication.
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
        <div className="mx-auto max-w-7xl rounded-[2.5rem] border border-red-200 bg-red-50 p-7 sm:p-10">
          <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr]">
            <div>
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-red-100 text-red-700">
                <AlertTriangle size={27} />
              </div>

              <p className="mt-7 text-sm font-black uppercase tracking-[0.24em] text-red-700">
                Urgent Warning Signs
              </p>

              <h2 className="mt-4 text-4xl font-black tracking-[-0.04em] sm:text-5xl">
                Some symptoms require emergency care.
              </h2>

              <p className="mt-6 text-lg leading-8 text-slate-700">
                Severe dehydration or rapid deterioration may require hospital
                assessment. For a life-threatening emergency in Türkiye, call
                112.
              </p>

              <a
                href="tel:112"
                className="mt-7 inline-flex items-center gap-3 rounded-2xl bg-red-600 px-6 py-4 font-black text-white transition hover:bg-red-700"
              >
                <Phone size={20} />
                Call 112
              </a>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {urgentSigns.map((sign) => (
                <div
                  key={sign}
                  className="flex items-start gap-3 rounded-2xl border border-red-200 bg-white p-5"
                >
                  <AlertTriangle
                    size={20}
                    className="mt-0.5 shrink-0 text-red-600"
                  />

                  <span className="font-bold text-slate-800">{sign}</span>
                </div>
              ))}
            </div>
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
                  Çalış Beach & Fethiye
                </p>
              </div>

              <h2 className="mt-4 max-w-3xl text-4xl font-black tracking-[-0.04em] sm:text-5xl">
                Concerned about dehydration?
              </h2>

              <p className="mt-5 text-lg text-slate-300">
                Contact the medical team for a professional assessment.
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