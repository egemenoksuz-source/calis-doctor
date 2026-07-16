import type { Metadata } from "next";
import {
  BedDouble,
  CheckCircle2,
  Clock3,
  Hotel,
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
  title: "Hotel Doctor in Çalış Beach | Private Doctor Visit",
  description:
    "English-speaking hotel doctor in Çalış Beach and Fethiye. Private medical visits to hotels, resorts, apartments and holiday accommodation.",
  alternates: {
    canonical: "https://calisdoctor.com/hotel-doctor-calis",
  },
  openGraph: {
    title: "Hotel Doctor in Çalış Beach | Calis Doctor",
    description:
      "Private English-speaking doctor visits to hotels and holiday accommodation in Çalış Beach and Fethiye.",
    url: "https://calisdoctor.com/hotel-doctor-calis",
    type: "website",
  },
};

const benefits = [
  {
    title: "Doctor to Your Hotel",
    description:
      "Receive private medical care without leaving your hotel room or holiday accommodation.",
    icon: Hotel,
  },
  {
    title: "English Communication",
    description:
      "Symptoms, examination findings and treatment recommendations are explained clearly in English.",
    icon: Languages,
  },
  {
    title: "Private Consultation",
    description:
      "Discreet and patient-focused care in the comfort and privacy of your room.",
    icon: ShieldCheck,
  },
  {
    title: "Fast Response",
    description:
      "Contact the medical team to confirm availability and an estimated arrival time.",
    icon: Clock3,
  },
];

const visitSteps = [
  {
    number: "01",
    title: "Contact the Medical Team",
    description:
      "Call or send a WhatsApp message with a short description of the patient's symptoms.",
  },
  {
    number: "02",
    title: "Share Hotel Details",
    description:
      "Send the hotel name, room number, patient name, age and contact telephone number.",
  },
  {
    number: "03",
    title: "Confirm the Visit",
    description:
      "The team confirms availability, estimated arrival time and the next step.",
  },
  {
    number: "04",
    title: "Medical Examination",
    description:
      "The doctor visits the room, examines the patient and explains the recommended care.",
  },
];

const commonProblems = [
  "Food poisoning and stomach problems",
  "Vomiting, diarrhoea and dehydration",
  "Ear pain and swimming-related infections",
  "Fever, cough and respiratory symptoms",
  "Sunstroke and heat-related illness",
  "Urinary infection symptoms",
  "Allergic reactions and insect bites",
  "Minor injuries, cuts and wounds",
  "Prescription and medication support",
  "General medical assessment",
];

export default function HotelDoctorCalisPage() {
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
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.2),transparent_36%),radial-gradient(circle_at_bottom_right,rgba(20,184,166,0.18),transparent_36%)]" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[1.08fr_0.92fr]">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-200 bg-white/80 px-4 py-2 text-sm font-black text-cyan-800">
              <BedDouble size={17} />
              Private Hotel Doctor Service
            </div>

            <h1 className="mt-6 max-w-4xl text-5xl font-black leading-[0.98] tracking-[-0.05em] sm:text-6xl lg:text-7xl">
              English-Speaking Hotel Doctor in{" "}
              <span className="bg-gradient-to-r from-cyan-600 to-teal-600 bg-clip-text text-transparent">
                Çalış Beach
              </span>
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-600 sm:text-xl">
              Private medical visits to hotels, resorts, apartments and holiday
              accommodation throughout Çalış Beach and Fethiye. Receive medical
              care without travelling while you feel unwell.
            </p>

            <div className="mt-8 space-y-3">
              {[
                "English-speaking medical consultation",
                "Private examination in your hotel room",
                "Urgent and planned doctor visits",
                "Service across Çalış Beach and Fethiye",
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
                Request Hotel Visit
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
                <Hotel size={27} />
              </div>

              <p className="mt-8 text-sm font-black uppercase tracking-[0.22em] text-cyan-100">
                Hotel Room Medical Visit
              </p>

              <h2 className="mt-3 text-4xl font-black leading-tight">
                The doctor comes directly to where you are staying.
              </h2>

              <p className="mt-5 text-lg leading-8 text-cyan-50">
                Share your hotel name, room number and symptoms. The team will
                confirm availability and arrange the visit.
              </p>

              <div className="mt-8 grid gap-4">
                <div className="rounded-2xl border border-white/15 bg-white/10 p-5">
                  <p className="text-sm font-bold text-cyan-100">
                    Suitable Locations
                  </p>

                  <p className="mt-1 text-xl font-black">
                    Hotels, resorts and apartments
                  </p>
                </div>

                <div className="rounded-2xl border border-white/15 bg-white/10 p-5">
                  <p className="text-sm font-bold text-cyan-100">
                    Communication
                  </p>

                  <p className="mt-1 text-xl font-black">
                    English-speaking medical care
                  </p>
                </div>

                <div className="rounded-2xl bg-white p-5 text-slate-950">
                  <p className="text-sm font-semibold text-slate-500">
                    Call or WhatsApp
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
              Hotel Doctor Benefits
            </p>

            <h2 className="mt-4 text-4xl font-black tracking-[-0.04em] sm:text-5xl">
              Convenient medical care during your holiday.
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              Avoid unnecessary travel and receive professional medical
              assistance in the comfort of your accommodation.
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
        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.24em] text-cyan-700">
              How to Arrange a Visit
            </p>

            <h2 className="mt-4 text-4xl font-black tracking-[-0.04em] sm:text-5xl">
              Requesting a hotel doctor is simple.
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              Contact the team and provide clear accommodation and patient
              details. This helps the medical visit be arranged efficiently.
            </p>

            <div className="mt-8 rounded-[2rem] bg-slate-950 p-7 text-white">
              <Stethoscope size={27} className="text-cyan-300" />

              <p className="mt-5 text-sm font-black uppercase tracking-[0.2em] text-cyan-300">
                Information to Send
              </p>

              <p className="mt-3 text-xl font-black leading-8">
                Patient name, age, hotel name, room number, symptoms and contact
                telephone number.
              </p>
            </div>
          </div>

          <div className="space-y-5">
            {visitSteps.map((step) => (
              <article
                key={step.number}
                className="flex gap-5 rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm"
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

      <section className="border-y border-cyan-100 bg-white px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.24em] text-cyan-700">
              Common Reasons for a Hotel Visit
            </p>

            <h2 className="mt-4 text-4xl font-black tracking-[-0.04em] sm:text-5xl">
              Medical help for common holiday health problems.
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              The doctor will assess the patient and recommend appropriate care
              based on the examination and clinical findings.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {commonProblems.map((problem) => (
              <div
                key={problem}
                className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-[#f7fdfd] p-5"
              >
                <CheckCircle2
                  size={20}
                  className="mt-0.5 shrink-0 text-emerald-500"
                />

                <span className="font-bold text-slate-700">{problem}</span>
              </div>
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
                Need a doctor at your hotel?
              </h2>

              <p className="mt-5 text-lg text-slate-300">
                Contact the medical team and share your hotel and patient
                details.
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