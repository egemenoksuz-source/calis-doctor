import type { Metadata } from "next";
import {
  Activity,
  CheckCircle2,
  ClipboardCheck,
  Clock3,
  Languages,
  MapPin,
  MessageCircle,
  Phone,
  ShieldCheck,
  Stethoscope,
  Syringe,
  TestTube2,
} from "lucide-react";

import Footer from "@/components/Footer";
import Logo from "@/components/Logo";

export const metadata: Metadata = {
  title: "Blood Tests in Çalış Beach & Fethiye | Calis Doctor",
  description:
    "English-speaking medical consultation and blood test arrangements in Çalış Beach and Fethiye. Laboratory testing based on a doctor's assessment and clinical need.",
  alternates: {
    canonical: "https://calisdoctor.com/blood-test-calis",
  },
  openGraph: {
    title: "Blood Tests in Çalış Beach & Fethiye | Calis Doctor",
    description:
      "Private medical assessment and laboratory blood test arrangements for tourists, expats and international residents.",
    url: "https://calisdoctor.com/blood-test-calis",
    type: "website",
  },
};

const benefits = [
  {
    title: "Medical Assessment",
    description:
      "The doctor reviews the patient's symptoms and determines which tests may be appropriate.",
    icon: Stethoscope,
  },
  {
    title: "English Communication",
    description:
      "The testing process and medical recommendations are explained clearly in English.",
    icon: Languages,
  },
  {
    title: "Laboratory Support",
    description:
      "Suitable laboratory tests may be arranged depending on clinical need and availability.",
    icon: TestTube2,
  },
  {
    title: "Result Review",
    description:
      "Test results should be interpreted together with symptoms, history and examination findings.",
    icon: ClipboardCheck,
  },
];

const possibleTests = [
  "Complete blood count",
  "Blood glucose",
  "Liver function tests",
  "Kidney function tests",
  "Inflammation markers",
  "Electrolytes",
  "Thyroid tests",
  "Vitamin and mineral tests",
  "Cholesterol and lipid profile",
  "Iron and ferritin tests",
  "Infection-related testing",
  "Other tests requested after examination",
];

const patientGroups = [
  "Tourists requiring medical evaluation",
  "Expats living in Çalış and Fethiye",
  "International residents",
  "Patients with ongoing medical conditions",
  "People requiring routine health checks",
  "Patients with unexplained symptoms",
  "People requiring follow-up testing",
  "Families needing medical support",
];

const process = [
  {
    number: "01",
    title: "Contact the Medical Team",
    description:
      "Explain the patient's symptoms, medical history and reason for requesting testing.",
  },
  {
    number: "02",
    title: "Doctor Consultation",
    description:
      "The doctor reviews the symptoms and determines whether blood tests may be useful.",
  },
  {
    number: "03",
    title: "Test Arrangement",
    description:
      "Appropriate laboratory testing is arranged according to clinical need and local availability.",
  },
  {
    number: "04",
    title: "Medical Review",
    description:
      "The results are reviewed together with the patient's symptoms, history and examination.",
  },
];

export default function BloodTestCalisPage() {
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
              <TestTube2 size={17} />
              Medical Blood Test Support
            </div>

            <h1 className="mt-6 max-w-4xl text-5xl font-black leading-[0.98] tracking-[-0.05em] sm:text-6xl lg:text-7xl">
              Blood Tests in{" "}
              <span className="bg-gradient-to-r from-cyan-600 to-teal-600 bg-clip-text text-transparent">
                Çalış Beach
              </span>
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-600 sm:text-xl">
              English-speaking medical consultation and laboratory test
              arrangements for tourists, expats, international residents and
              families in Çalış Beach and Fethiye.
            </p>

            <div className="mt-8 space-y-3">
              {[
                "Doctor assessment before testing",
                "Blood tests based on clinical need",
                "English-speaking medical explanation",
                "Professional review of available results",
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
                Ask About Blood Tests
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
                <Syringe size={27} />
              </div>

              <p className="mt-8 text-sm font-black uppercase tracking-[0.22em] text-cyan-100">
                Clinical Assessment First
              </p>

              <h2 className="mt-3 text-4xl font-black leading-tight">
                The correct tests depend on your symptoms.
              </h2>

              <p className="mt-5 text-lg leading-8 text-cyan-50">
                A doctor should review the patient before deciding which
                laboratory tests may provide useful medical information.
              </p>

              <div className="mt-8 grid gap-4">
                <div className="rounded-2xl border border-white/15 bg-white/10 p-5">
                  <p className="text-sm font-bold text-cyan-100">
                    First Step
                  </p>
                  <p className="mt-1 text-xl font-black">
                    Medical consultation
                  </p>
                </div>

                <div className="rounded-2xl border border-white/15 bg-white/10 p-5">
                  <p className="text-sm font-bold text-cyan-100">
                    Testing Decision
                  </p>
                  <p className="mt-1 text-xl font-black">
                    Based on clinical need
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
              Laboratory Test Support
            </p>

            <h2 className="mt-4 text-4xl font-black tracking-[-0.04em] sm:text-5xl">
              Medical testing guided by professional assessment.
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              Blood tests are most useful when selected and interpreted
              together with the patient&apos;s symptoms and medical history.
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
              Possible Blood Tests
            </p>

            <h2 className="mt-4 text-4xl font-black tracking-[-0.04em] sm:text-5xl">
              Tests may be selected according to symptoms and medical need.
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              Not every patient needs the same tests. The doctor chooses tests
              that may help answer a specific medical question.
            </p>

            <div className="mt-8 rounded-[2rem] bg-slate-950 p-7 text-white">
              <Activity size={27} className="text-cyan-300" />

              <p className="mt-5 text-sm font-black uppercase tracking-[0.2em] text-cyan-300">
                Clinical Interpretation
              </p>

              <p className="mt-3 text-xl font-black leading-8">
                An abnormal result does not always confirm a diagnosis and a
                normal result does not always exclude every condition.
              </p>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {possibleTests.map((test) => (
              <div
                key={test}
                className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-white p-5"
              >
                <CheckCircle2
                  size={20}
                  className="mt-0.5 shrink-0 text-emerald-500"
                />
                <span className="font-bold text-slate-700">{test}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-cyan-100 bg-white px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.24em] text-cyan-700">
              Who May Need Testing?
            </p>

            <h2 className="mt-4 text-4xl font-black tracking-[-0.04em] sm:text-5xl">
              Laboratory support for visitors and residents.
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              Blood tests may be considered for new symptoms, routine checks
              or follow-up of an existing medical condition.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {patientGroups.map((group) => (
              <div
                key={group}
                className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-[#f7fdfd] p-5"
              >
                <ShieldCheck
                  size={20}
                  className="mt-0.5 shrink-0 text-cyan-700"
                />
                <span className="font-bold text-slate-700">{group}</span>
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
              Arrange medical testing in four steps.
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              Begin with a medical consultation so the correct tests can be
              selected and unnecessary testing can be avoided.
            </p>

            <div className="mt-8 flex items-start gap-4 rounded-[2rem] bg-cyan-50 p-6">
              <Clock3 size={24} className="shrink-0 text-cyan-700" />

              <div>
                <p className="font-black">Ask about preparation</p>
                <p className="mt-2 leading-7 text-slate-600">
                  Some blood tests may require fasting or a specific testing
                  time. Follow the instructions given by the medical team.
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
                  Çalış Beach & Fethiye
                </p>
              </div>

              <h2 className="mt-4 max-w-3xl text-4xl font-black tracking-[-0.04em] sm:text-5xl">
                Need a consultation about blood tests?
              </h2>

              <p className="mt-5 text-lg text-slate-300">
                Contact the medical team and explain the patient&apos;s
                symptoms and testing needs.
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