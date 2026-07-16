import type { Metadata } from "next";
import {
  AlertTriangle,
  CheckCircle2,
  Clock3,
  Ear,
  Languages,
  MapPin,
  MessageCircle,
  Phone,
  ShieldCheck,
  Stethoscope,
  Waves,
} from "lucide-react";

import Footer from "@/components/Footer";
import Logo from "@/components/Logo";

export const metadata: Metadata = {
  title: "Ear Infection Doctor in Çalış Beach & Fethiye",
  description:
    "English-speaking doctor for ear pain, swimmer's ear and ear infections in Çalış Beach and Fethiye. Hotel, villa, apartment and home visits.",
  alternates: {
    canonical: "https://calisdoctor.com/ear-infection-doctor-calis",
  },
  openGraph: {
    title: "Ear Infection Doctor in Çalış Beach | Calis Doctor",
    description:
      "Private medical assessment for ear pain, swimmer's ear and ear infections in Çalış Beach and Fethiye.",
    url: "https://calisdoctor.com/ear-infection-doctor-calis",
    type: "website",
  },
};

const symptoms = [
  "Ear pain or pressure",
  "Pain after swimming",
  "Blocked or muffled hearing",
  "Itching inside the ear",
  "Discharge from the ear",
  "Redness or swelling",
  "Tenderness around the ear",
  "Fever with ear discomfort",
  "Dizziness or balance problems",
  "Reduced hearing",
];

const benefits = [
  {
    title: "Medical Examination",
    description:
      "The doctor assesses the ear, symptoms and possible causes before recommending treatment.",
    icon: Stethoscope,
  },
  {
    title: "English Communication",
    description:
      "Symptoms and treatment advice are explained clearly in English.",
    icon: Languages,
  },
  {
    title: "Hotel and Home Visits",
    description:
      "Doctor visits may be arranged at hotels, villas, apartments and private homes.",
    icon: MapPin,
  },
  {
    title: "Swimming-Related Care",
    description:
      "Assessment is available for ear discomfort that develops after swimming.",
    icon: Waves,
  },
];

const steps = [
  {
    number: "01",
    title: "Contact the Medical Team",
    description:
      "Call or send a WhatsApp message and explain the ear symptoms.",
  },
  {
    number: "02",
    title: "Share Patient Details",
    description:
      "Send the patient's name, age, location and how long the symptoms have been present.",
  },
  {
    number: "03",
    title: "Confirm the Visit",
    description:
      "The medical team confirms availability and the next possible consultation time.",
  },
  {
    number: "04",
    title: "Examination and Care",
    description:
      "The doctor examines the ear and recommends suitable care based on the findings.",
  },
];

const urgentSigns = [
  "Severe dizziness or loss of balance",
  "Sudden significant hearing loss",
  "Severe swelling behind the ear",
  "High fever with worsening symptoms",
  "Head injury followed by ear discharge",
  "Severe pain that is rapidly worsening",
];

export default function EarInfectionDoctorCalisPage() {
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
              <Ear size={17} />
              Ear Infection Medical Care
            </div>

            <h1 className="mt-6 max-w-4xl text-5xl font-black leading-[0.98] tracking-[-0.05em] sm:text-6xl lg:text-7xl">
              Ear Infection Doctor in{" "}
              <span className="bg-gradient-to-r from-cyan-600 to-teal-600 bg-clip-text text-transparent">
                Çalış Beach
              </span>
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-600 sm:text-xl">
              English-speaking medical assessment for ear pain, swimmer&apos;s
              ear, blocked hearing and ear infections in Çalış Beach and
              Fethiye. Hotel, villa, apartment and home visits may be arranged.
            </p>

            <div className="mt-8 space-y-3">
              {[
                "Assessment of ear pain and infection symptoms",
                "Swimming-related ear problems",
                "English-speaking consultation",
                "Hotel, villa, apartment and home visits",
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
                <Ear size={27} />
              </div>

              <p className="mt-8 text-sm font-black uppercase tracking-[0.22em] text-cyan-100">
                Private Medical Assessment
              </p>

              <h2 className="mt-3 text-4xl font-black leading-tight">
                Medical support for ear pain during your holiday or daily life.
              </h2>

              <p className="mt-5 text-lg leading-8 text-cyan-50">
                The doctor evaluates the symptoms and examines the ear before
                recommending appropriate treatment.
              </p>

              <div className="mt-8 grid gap-4">
                <div className="rounded-2xl border border-white/15 bg-white/10 p-5">
                  <p className="text-sm font-bold text-cyan-100">
                    Common Concerns
                  </p>
                  <p className="mt-1 text-xl font-black">
                    Ear pain, pressure and blocked hearing
                  </p>
                </div>

                <div className="rounded-2xl border border-white/15 bg-white/10 p-5">
                  <p className="text-sm font-bold text-cyan-100">
                    Visit Locations
                  </p>
                  <p className="mt-1 text-xl font-black">
                    Hotels, villas, apartments and homes
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
              Medical Support
            </p>

            <h2 className="mt-4 text-4xl font-black tracking-[-0.04em] sm:text-5xl">
              Professional assessment for ear pain and infection symptoms.
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              The treatment plan depends on the symptoms, examination findings
              and possible cause of the ear problem.
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
              Common Symptoms
            </p>

            <h2 className="mt-4 text-4xl font-black tracking-[-0.04em] sm:text-5xl">
              Signs commonly associated with ear infections.
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              Ear symptoms can have different causes. A medical examination is
              important before starting treatment.
            </p>

            <div className="mt-8 rounded-[2rem] bg-slate-950 p-7 text-white">
              <Waves size={27} className="text-cyan-300" />

              <p className="mt-5 text-sm font-black uppercase tracking-[0.2em] text-cyan-300">
                Swimmer&apos;s Ear
              </p>

              <p className="mt-3 text-xl font-black leading-8">
                Ear pain and irritation can develop after swimming, especially
                when water remains trapped in the ear canal.
              </p>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {symptoms.map((symptom) => (
              <div
                key={symptom}
                className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-white p-5"
              >
                <CheckCircle2
                  size={20}
                  className="mt-0.5 shrink-0 text-emerald-500"
                />

                <span className="font-bold text-slate-700">{symptom}</span>
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
              Arrange an ear examination in four steps.
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              Share the patient and location information so the medical team
              can confirm availability.
            </p>

            <div className="mt-8 flex items-start gap-4 rounded-[2rem] bg-cyan-50 p-6">
              <Clock3 size={24} className="shrink-0 text-cyan-700" />

              <div>
                <p className="font-black">Mention recent swimming</p>
                <p className="mt-2 leading-7 text-slate-600">
                  Tell the medical team whether the symptoms started after
                  swimming or water exposure.
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-5">
            {steps.map((step) => (
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
                Seek Urgent Medical Help
              </p>

              <h2 className="mt-4 text-4xl font-black tracking-[-0.04em] sm:text-5xl">
                Warning signs requiring prompt assessment.
              </h2>

              <p className="mt-6 text-lg leading-8 text-slate-700">
                Serious or rapidly worsening symptoms may require urgent
                hospital assessment.
              </p>
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
                Experiencing ear pain or blocked hearing?
              </h2>

              <p className="mt-5 text-lg text-slate-300">
                Contact the medical team and share the patient&apos;s symptoms
                and exact location.
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