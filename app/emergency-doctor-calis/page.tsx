import type { Metadata } from "next";
import {
  AlertTriangle,
  CheckCircle2,
  Clock3,
  HeartPulse,
  Languages,
  MapPin,
  MessageCircle,
  Navigation,
  Phone,
  ShieldAlert,
  Stethoscope,
} from "lucide-react";

import Footer from "@/components/Footer";
import Logo from "@/components/Logo";

export const metadata: Metadata = {
  title: "Emergency Doctor in Çalış Beach | Urgent Medical Care",
  description:
    "Urgent English-speaking doctor service in Çalış Beach and Fethiye. Hotel, villa, apartment and home visits for sudden illness and non-life-threatening medical concerns.",
  alternates: {
    canonical: "https://calisdoctor.com/emergency-doctor-calis",
  },
  openGraph: {
    title: "Emergency Doctor in Çalış Beach | Calis Doctor",
    description:
      "Urgent English-speaking medical assistance and mobile doctor visits throughout Çalış Beach and Fethiye.",
    url: "https://calisdoctor.com/emergency-doctor-calis",
    type: "website",
  },
};

const urgentCareBenefits = [
  {
    title: "Fast Contact",
    description:
      "Call or send a WhatsApp message and explain the patient's symptoms and location.",
    icon: Phone,
  },
  {
    title: "English-Speaking Care",
    description:
      "Communicate symptoms and understand the medical advice clearly in English.",
    icon: Languages,
  },
  {
    title: "Doctor to Your Location",
    description:
      "Visits may be arranged for hotels, villas, apartments and private homes.",
    icon: Navigation,
  },
  {
    title: "Day and Night Contact",
    description:
      "Contact the medical team for current availability and the next possible visit.",
    icon: Clock3,
  },
];

const suitableConcerns = [
  "Food poisoning and stomach illness",
  "Vomiting, diarrhoea and dehydration",
  "Fever and flu-like symptoms",
  "Ear infections and severe ear pain",
  "Urinary infection symptoms",
  "Sunstroke and heat-related illness",
  "Allergic skin reactions",
  "Insect bites and local swelling",
  "Minor cuts, wounds and injuries",
  "Sudden pain requiring assessment",
  "Respiratory symptoms without severe distress",
  "Urgent prescription support after assessment",
];

const emergencyWarnings = [
  "Severe difficulty breathing",
  "Chest pain or suspected heart attack",
  "Loss of consciousness",
  "Signs of stroke",
  "Severe uncontrolled bleeding",
  "Major accident or serious trauma",
  "Seizure lasting several minutes",
  "Severe allergic reaction affecting breathing",
];

const steps = [
  {
    number: "01",
    title: "Describe the Problem",
    description:
      "Call or message us with the patient's age, symptoms and how long the problem has been present.",
  },
  {
    number: "02",
    title: "Share the Location",
    description:
      "Send the hotel name, room number, home address or live WhatsApp location.",
  },
  {
    number: "03",
    title: "Medical Triage",
    description:
      "The information is reviewed to determine whether a doctor visit is suitable or emergency services are required.",
  },
  {
    number: "04",
    title: "Doctor Visit",
    description:
      "When appropriate and available, a doctor travels to the patient's location for examination.",
  },
];

export default function EmergencyDoctorCalisPage() {
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
              <HeartPulse size={17} />
              Urgent Doctor Service in Çalış Beach
            </div>

            <h1 className="mt-6 max-w-4xl text-5xl font-black leading-[0.98] tracking-[-0.05em] sm:text-6xl lg:text-7xl">
              Emergency Doctor in{" "}
              <span className="bg-gradient-to-r from-cyan-600 to-teal-600 bg-clip-text text-transparent">
                Çalış Beach
              </span>
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-600 sm:text-xl">
              Urgent English-speaking medical assistance for tourists, expats
              and international residents in Çalış Beach and Fethiye. Doctor
              visits may be arranged for suitable non-life-threatening
              conditions.
            </p>

            <div className="mt-8 space-y-3">
              {[
                "Urgent medical assessment",
                "English-speaking consultation",
                "Hotel, villa, apartment and home visits",
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
                Urgent Medical Assistance
              </p>

              <h2 className="mt-3 text-4xl font-black leading-tight">
                Contact the medical team and explain the symptoms.
              </h2>

              <p className="mt-5 text-lg leading-8 text-cyan-50">
                The information provided helps determine whether a mobile
                doctor visit may be suitable or whether emergency services
                should be contacted.
              </p>

              <div className="mt-8 grid gap-4">
                <div className="rounded-2xl border border-white/15 bg-white/10 p-5">
                  <p className="text-sm font-bold text-cyan-100">
                    Doctor Visit Locations
                  </p>

                  <p className="mt-1 text-xl font-black">
                    Hotels, villas, apartments and homes
                  </p>
                </div>

                <div className="rounded-2xl border border-white/15 bg-white/10 p-5">
                  <p className="text-sm font-bold text-cyan-100">
                    Service Area
                  </p>

                  <p className="mt-1 text-xl font-black">
                    Çalış Beach and Fethiye
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

      <section className="px-4 pb-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl rounded-[2rem] border border-red-200 bg-red-50 p-6 sm:p-8">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-start">
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-red-100 text-red-700">
              <AlertTriangle size={27} />
            </div>

            <div>
              <p className="text-sm font-black uppercase tracking-[0.2em] text-red-700">
                Life-Threatening Emergency
              </p>

              <h2 className="mt-2 text-2xl font-black text-slate-950">
                Call 112 immediately for a serious or life-threatening
                emergency.
              </h2>

              <p className="mt-3 max-w-4xl leading-7 text-slate-700">
                Do not wait for a private doctor visit when the patient has
                severe breathing difficulty, chest pain, unconsciousness,
                stroke symptoms, major trauma or uncontrolled bleeding.
              </p>

              <a
                href="tel:112"
                className="mt-5 inline-flex items-center gap-3 rounded-2xl bg-red-600 px-6 py-4 font-black text-white transition hover:bg-red-700"
              >
                <Phone size={20} />
                Call 112
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-cyan-100 bg-white px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-black uppercase tracking-[0.24em] text-cyan-700">
              Urgent Doctor Service
            </p>

            <h2 className="mt-4 text-4xl font-black tracking-[-0.04em] sm:text-5xl">
              Convenient medical assessment for urgent concerns.
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              Mobile medical support can help patients who require timely
              assessment but do not appear to have a life-threatening
              emergency.
            </p>
          </div>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {urgentCareBenefits.map((benefit) => {
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
              Suitable Medical Concerns
            </p>

            <h2 className="mt-4 text-4xl font-black tracking-[-0.04em] sm:text-5xl">
              Conditions that may be suitable for a doctor visit.
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              Suitability depends on the patient&apos;s condition, symptoms and
              clinical urgency. The medical team may advise emergency services
              when necessary.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {suitableConcerns.map((concern) => (
              <div
                key={concern}
                className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-white p-5"
              >
                <CheckCircle2
                  size={20}
                  className="mt-0.5 shrink-0 text-emerald-500"
                />

                <span className="font-bold text-slate-700">{concern}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-red-100 bg-white px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.24em] text-red-700">
              Call 112 Without Delay
            </p>

            <h2 className="mt-4 text-4xl font-black tracking-[-0.04em] sm:text-5xl">
              Warning signs requiring emergency services.
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              The following situations may require immediate ambulance and
              hospital care rather than a private home visit.
            </p>

            <div className="mt-8 rounded-[2rem] bg-red-600 p-7 text-white">
              <ShieldAlert size={28} />

              <p className="mt-5 text-2xl font-black">
                In Türkiye, the emergency telephone number is 112.
              </p>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {emergencyWarnings.map((warning) => (
              <div
                key={warning}
                className="flex items-start gap-3 rounded-2xl border border-red-200 bg-red-50 p-5"
              >
                <AlertTriangle
                  size={20}
                  className="mt-0.5 shrink-0 text-red-600"
                />

                <span className="font-bold text-slate-800">{warning}</span>
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
              Request urgent medical assistance in four steps.
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              Provide accurate information so the medical team can understand
              the urgency and recommend the correct next step.
            </p>
          </div>

          <div className="space-y-5">
            {steps.map((step) => (
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
                  Çalış Beach & Fethiye
                </p>
              </div>

              <h2 className="mt-4 max-w-3xl text-4xl font-black tracking-[-0.04em] sm:text-5xl">
                Need urgent medical assistance?
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