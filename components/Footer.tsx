import Link from "next/link";
import { MapPin, MessageCircle, Phone } from "lucide-react";

import Logo from "@/components/Logo";

const PHONE_NUMBER = "+905519354800";
const WHATSAPP_URL = "https://wa.me/905519354800";

const footerLinks = [
  { name: "Home", href: "/#home" },
  { name: "For You", href: "/#patients" },
  { name: "Services", href: "/#services" },
  { name: "How It Works", href: "/#how-it-works" },
  { name: "Areas", href: "/#areas" },
  { name: "Location", href: "/#location" },
  { name: "FAQ", href: "/#faq" },
  { name: "Contact", href: "/#contact" },
];

const serviceLinks = [
  {
    name: "Hotel Doctor Fethiye",
    href: "/hotel-doctor-fethiye",
  },
  {
    name: "Home Visit Doctor Fethiye",
    href: "/home-visit-doctor-fethiye",
  },
  {
    name: "Emergency Doctor Fethiye",
    href: "/emergency-doctor-fethiye",
  },
  {
    name: "IV Therapy Fethiye",
    href: "/iv-therapy-fethiye",
  },
  {
    name: "Food Poisoning Doctor",
    href: "/food-poisoning-doctor-fethiye",
  },
  {
    name: "Ear Infection Doctor",
    href: "/ear-infection-doctor-fethiye",
  },
  {
    name: "Gastroenteritis Doctor",
    href: "/gastroenteritis-doctor-fethiye",
  },
  {
    name: "Tourist Doctor Fethiye",
    href: "/tourist-doctor-fethiye",
  },
  {
    name: "Child Doctor Fethiye",
    href: "/child-doctor-fethiye",
  },
  {
    name: "Dehydration Treatment",
    href: "/dehydration-treatment-fethiye",
  },
];

const areaLinks = [
  {
    name: "Doctor in Çalış Beach",
    href: "/#areas",
  },
  {
    name: "Doctor in Fethiye",
    href: "/#areas",
  },
  {
    name: "Doctor in Ölüdeniz",
    href: "/#areas",
  },
  {
    name: "Doctor in Hisarönü",
    href: "/#areas",
  },
  {
    name: "Doctor in Ovacık",
    href: "/#areas",
  },
  {
    name: "Doctor in Kayaköy",
    href: "/#areas",
  },
  {
    name: "Doctor in Faralya",
    href: "/#areas",
  },
  {
    name: "Doctor in Kabak",
    href: "/#areas",
  },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-slate-200 bg-white px-4 pb-28 pt-16 sm:px-6 md:pb-14 lg:px-8">
      <div
        aria-hidden="true"
        className="absolute -left-24 top-8 h-72 w-72 rounded-full bg-cyan-100/60 blur-3xl"
      />

      <div
        aria-hidden="true"
        className="absolute -right-24 bottom-0 h-72 w-72 rounded-full bg-emerald-100/60 blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-[1.25fr_0.7fr_1fr_0.9fr_0.9fr]">
          <div>
            <Link
              href="/"
              aria-label="Calis Doctor home"
              className="inline-flex rounded-xl focus:outline-none focus:ring-4 focus:ring-cyan-700/20"
            >
              <Logo />
            </Link>

            <p className="mt-6 max-w-md leading-7 text-slate-600">
              Private English-speaking medical care for tourists, expats,
              international residents and families in Çalış Beach, Fethiye and
              surrounding holiday areas.
            </p>

            <p className="mt-4 max-w-md text-sm leading-7 text-slate-500">
              Hotel doctor visits, home visits and urgent medical assessments
              may be available 24 hours a day, depending on location and
              medical team availability.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <span className="rounded-full bg-cyan-50 px-4 py-2 text-xs font-black uppercase tracking-wider text-cyan-700">
                24/7 Available
              </span>

              <span className="rounded-full bg-emerald-50 px-4 py-2 text-xs font-black uppercase tracking-wider text-emerald-700">
                English Speaking
              </span>

              <span className="rounded-full bg-slate-100 px-4 py-2 text-xs font-black uppercase tracking-wider text-slate-700">
                Hotel & Home Visits
              </span>
            </div>

            <div className="mt-7 rounded-3xl border border-amber-200 bg-amber-50 p-5">
              <p className="text-sm font-bold leading-6 text-amber-950">
                For life-threatening emergencies, call Turkey’s emergency
                number{" "}
                <a
                  href="tel:112"
                  className="underline decoration-2 underline-offset-4"
                >
                  112
                </a>
                .
              </p>
            </div>
          </div>

          <div>
            <h2 className="font-black text-slate-950">Quick Links</h2>

            <nav aria-label="Footer quick links" className="mt-5">
              <div className="flex flex-col gap-3">
                {footerLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="w-fit text-sm font-semibold text-slate-600 transition hover:text-cyan-700 focus:outline-none focus:ring-2 focus:ring-cyan-700/20"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </nav>
          </div>

          <div>
            <h2 className="font-black text-slate-950">Medical Services</h2>

            <nav aria-label="Medical service pages" className="mt-5">
              <div className="flex flex-col gap-3">
                {serviceLinks.map((service) => (
                  <Link
                    key={service.href}
                    href={service.href}
                    className="w-fit text-sm font-semibold text-slate-600 transition hover:text-cyan-700 focus:outline-none focus:ring-2 focus:ring-cyan-700/20"
                  >
                    {service.name}
                  </Link>
                ))}
              </div>
            </nav>
          </div>

          <div>
            <h2 className="font-black text-slate-950">Areas Served</h2>

            <nav aria-label="Doctor service areas" className="mt-5">
              <div className="flex flex-col gap-3">
                {areaLinks.map((area) => (
                  <Link
                    key={area.name}
                    href={area.href}
                    className="w-fit text-sm font-semibold text-slate-600 transition hover:text-cyan-700 focus:outline-none focus:ring-2 focus:ring-cyan-700/20"
                  >
                    {area.name}
                  </Link>
                ))}
              </div>
            </nav>
          </div>

          <div>
            <h2 className="font-black text-slate-950">Contact</h2>

            <div className="mt-5 space-y-4">
              <a
                href={`tel:${PHONE_NUMBER}`}
                className="flex items-center gap-3 text-sm font-semibold text-slate-600 transition hover:text-cyan-700 focus:outline-none focus:ring-2 focus:ring-cyan-700/20"
              >
                <Phone size={18} className="shrink-0 text-cyan-700" />
                +90 551 935 48 00
              </a>

              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 text-sm font-semibold text-slate-600 transition hover:text-emerald-600 focus:outline-none focus:ring-2 focus:ring-emerald-600/20"
              >
                <MessageCircle
                  size={18}
                  className="shrink-0 text-emerald-500"
                />
                WhatsApp Doctor
              </a>

              <div className="flex items-start gap-3 text-sm font-semibold leading-6 text-slate-600">
                <MapPin
                  size={18}
                  className="mt-0.5 shrink-0 text-cyan-700"
                />
                <span>
                  Çalış Beach
                  <br />
                  Fethiye, Muğla, Türkiye
                </span>
              </div>
            </div>

            <div className="mt-7 rounded-3xl bg-slate-950 p-5 text-white shadow-lg">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-cyan-300">
                Need a doctor?
              </p>

              <p className="mt-2 text-sm leading-6 text-slate-200">
                Send your location, accommodation name, room number and a short
                description of the symptoms.
              </p>

              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noreferrer"
                className="mt-4 inline-flex items-center gap-2 font-black text-white transition hover:text-emerald-300"
              >
                <MessageCircle size={18} />
                Message on WhatsApp
              </a>
            </div>
          </div>
        </div>

        <div className="mt-14 rounded-[2rem] border border-cyan-900/10 bg-[#f3fbfb] p-6 sm:p-8">
          <h2 className="text-xl font-black text-slate-950">
            English-Speaking Doctor Service in Çalış Beach and Fethiye
          </h2>

          <p className="mt-4 max-w-5xl text-sm leading-7 text-slate-600">
            Calis Doctor supports tourists, families, expats and international
            residents requiring private medical assistance in Çalış Beach,
            Fethiye Centre, Ölüdeniz, Hisarönü, Ovacık, Kayaköy, Faralya and
            nearby holiday areas. Depending on availability, a doctor may
            attend hotels, villas, apartments and private homes for medical
            assessment. Treatment is recommended according to the patient’s
            individual condition and examination findings.
          </p>
        </div>

        <div className="mt-12 flex flex-col justify-between gap-4 border-t border-slate-200 pt-8 text-sm text-slate-500 sm:flex-row sm:items-center">
          <p>© 2026 Calis Doctor. All rights reserved.</p>

          <p>Private medical care in Çalış Beach and Fethiye.</p>
        </div>
      </div>

      <div className="fixed bottom-4 left-4 right-4 z-50 grid grid-cols-2 gap-3 md:hidden">
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noreferrer"
          aria-label="Contact Calis Doctor on WhatsApp"
          className="flex min-w-0 items-center justify-center gap-2 rounded-2xl bg-emerald-500 px-3 py-4 font-black text-white shadow-xl transition active:scale-[0.98]"
        >
          <MessageCircle size={19} />
          WhatsApp
        </a>

        <a
          href={`tel:${PHONE_NUMBER}`}
          aria-label="Call Calis Doctor"
          className="flex min-w-0 items-center justify-center gap-2 rounded-2xl bg-slate-950 px-3 py-4 font-black text-white shadow-xl transition active:scale-[0.98]"
        >
          <Phone size={19} />
          Call Now
        </a>
      </div>
    </footer>
  );
}