import type { Metadata } from "next";
import {
  CheckCircle2,
  Clock3,
  HeartHandshake,
  Home,
  House,
  Languages,
  MapPin,
  MessageCircle,
  Navigation,
  Phone,
  ShieldCheck,
  Stethoscope,
} from "lucide-react";

import Footer from "@/components/Footer";
import Logo from "@/components/Logo";

export const metadata: Metadata = {
  title: "Home Visit Doctor in Çalış Beach & Fethiye",
  description:
    "English-speaking home visit doctor in Çalış Beach and Fethiye. Private medical visits to villas, apartments, holiday homes and residential properties.",
  alternates: {
    canonical: "https://calisdoctor.com/home-visit-doctor-calis",
  },
  openGraph: {
    title: "Home Visit Doctor in Çalış Beach | Calis Doctor",
    description:
      "Private English-speaking doctor visits to villas, apartments and homes throughout Çalış Beach and Fethiye.",
    url: "https://calisdoctor.com/home-visit-doctor-calis",
    type: "website",
  },
};

const benefits = [
  {
    title: "Doctor Comes to You",
    description:
      "Receive medical care at your villa, apartment, holiday home or private residence.",
    icon: Home,
  },
  {
    title: "English-Speaking Care",
    description:
      "Discuss symptoms and understand the recommended treatment clearly in English.",
    icon: Languages,
  },
  {
    title: "Private Consultation",
    description:
      "Discreet and patient-focused medical care in a familiar environment.",
    icon: ShieldCheck,
  },
  {
    title: "Flexible Medical Support",
    description:
      "Contact the team for urgent concerns or a planned home consultation.",
    icon: Clock3,
  },
];

const suitableFor = [
  "Tourists staying in villas and apartments",
  "Expats and international residents",
  "Families with children",
  "Patients who prefer not to travel",
  "People feeling too unwell to leave home",
  "Older patients requiring convenient care",
  "Holiday rental and Airbnb guests",
  "Residents requiring a planned consultation",
];

const commonReasons = [
  "Fever, cough and respiratory symptoms",
  "Food poisoning and stomach illness",
  "Vomiting, diarrhoea and dehydration",
  "Ear infections and ear pain",
  "Urinary infection symptoms",
  "Minor wounds and injuries",
  "Allergic reactions and insect bites",
  "Prescription and medication support",
  "Routine medical check-ups",
  "General medical assessment",
];

const steps = [
  {
    number: "01",
    title: "Contact Us",
    description:
      "Call or send a WhatsApp message with a short description of the patient's symptoms.",
  },
  {
    number: "02",
    title: "Share Your Location",
    description:
      "Send your villa, apartment or home address and a live location when possible.",
  },
  {
    number: "03",
    title: "Confirm the Visit",
    description:
      "The medical team confirms availability and provides the next available visit time.",
  },
  {
    number: "04",
    title: "Receive Medical Care",
    description:
      "The doctor visits your location, examines the patient and explains the recommended care.",
  },
];

export default function HomeVisitDoctorCalisPage() {
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
              <House size={17} />
              Private Home Doctor Visits
            </div>

            <h1 className="mt-6 max-w-4xl text-5xl font-black leading-[0.98] tracking-[-0.05em] sm:text-6xl lg:text-7xl">
              Home Visit Doctor in{" "}
              <span className="bg-gradient-to-r from-cyan-600 to-teal-600 bg-clip-text text-transparent">
                Çalış Beach
              </span>
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-600 sm:text-xl">
              Private English-speaking medical visits to villas, apartments,
              holiday homes and residential properties throughout Çalış Beach
              and Fethiye.
            </p>

            <div className="mt-8 space-y-3">
              {[
                "Doctor visits directly to your location",
                "English-speaking private consultation",
                "Care for tourists, expats and residents",
                "Urgent and planned home visits",
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
                Request Home Visit
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
                <Home size={27} />
              </div>

              <p className="mt-8 text-sm font-black uppercase tracking-[0.22em] text-cyan-100">
                Mobile Doctor Service
              </p>

              <h2 className="mt-3 text-4xl font-black leading-tight">
                Medical care in the comfort of your home.
              </h2>

              <p className="mt-5 text-lg leading-8 text-cyan-50">
                Share your location and patient details. The medical team will
                confirm availability and arrange a private doctor visit.
              </p>

              <div className="mt-8 grid gap-4">
                <div className="rounded-2xl border border-white/15 bg-white/10 p-5">
                  <p className="text-sm font-bold text-cyan-100">
                    Visit Locations
                  </p>
                  <p className="mt-1 text-xl font-black">
                    Villas, apartments and homes
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

      <section className="border-y border-cyan-100 bg-white px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-black uppercase tracking-[0.24em] text-cyan-700">
              Home Visit Benefits
            </p>

            <h2 className="mt-4 text-4xl font-black tracking-[-0.04em] sm:text-5xl">
              Convenient private medical care where you live or stay.
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              Avoid unnecessary travel and receive a professional consultation
              in a familiar and comfortable environment.
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
              Who Can Request a Visit?
            </p>

            <h2 className="mt-4 text-4xl font-black tracking-[-0.04em] sm:text-5xl">
              Home medical care for visitors and residents.
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              The service supports people visiting the region as well as those
              living permanently in Çalış and Fethiye.
            </p>

            <div className="mt-8 rounded-[2rem] bg-slate-950 p-7 text-white">
              <HeartHandshake size={27} className="text-cyan-300" />

              <p className="mt-5 text-sm font-black uppercase tracking-[0.2em] text-cyan-300">
                Patient-Focused Support
              </p>

              <p className="mt-3 text-xl font-black leading-8">
                Medical care is arranged according to the patient&apos;s
                symptoms, location and current availability.
              </p>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {suitableFor.map((item) => (
              <div
                key={item}
                className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-white p-5"
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
        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.24em] text-cyan-700">
              How It Works
            </p>

            <h2 className="mt-4 text-4xl font-black tracking-[-0.04em] sm:text-5xl">
              Arrange a home doctor visit in four simple steps.
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              Providing accurate patient and location information helps the
              medical team arrange your visit efficiently.
            </p>

            <div className="mt-8 flex items-start gap-4 rounded-[2rem] bg-cyan-50 p-6">
              <Navigation size={24} className="shrink-0 text-cyan-700" />

              <div>
                <p className="font-black">Send a live location</p>
                <p className="mt-2 leading-7 text-slate-600">
                  Sharing your live location through WhatsApp can make it
                  easier for the team to reach you.
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
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.24em] text-cyan-700">
              Common Reasons for Home Visits
            </p>

            <h2 className="mt-4 text-4xl font-black tracking-[-0.04em] sm:text-5xl">
              Medical support for common health concerns.
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              The doctor assesses the patient and recommends appropriate care
              based on the examination and clinical findings.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {commonReasons.map((reason) => (
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
                Need a doctor at your home or villa?
              </h2>

              <p className="mt-5 text-lg text-slate-300">
                Contact the medical team and share the patient&apos;s symptoms
                and location.
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