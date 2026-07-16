import { MapPin, MessageCircle, Phone } from "lucide-react";
import Logo from "@/components/Logo";

const footerLinks = [
  { name: "Home", href: "#home" },
  { name: "For You", href: "#patients" },
  { name: "Services", href: "#services" },
  { name: "How It Works", href: "#how-it-works" },
  { name: "Areas", href: "#areas" },
  { name: "Location", href: "#location" },
  { name: "FAQ", href: "#faq" },
  { name: "Contact", href: "#contact" },
];

const serviceLinks = [
  "Hotel Doctor",
  "Home Visit",
  "Urgent Medical Care",
  "Routine Check-Ups",
  "Blood Tests",
  "Prescription Support",
];

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white px-4 pb-28 pt-16 sm:px-6 md:pb-14 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-[1.25fr_0.7fr_0.8fr_0.9fr]">
          <div>
            <a
              href="#home"
              aria-label="Calis Doctor home"
              className="inline-flex"
            >
              <Logo />
            </a>

            <p className="mt-6 max-w-md leading-7 text-slate-600">
              24/7 English-speaking medical care for tourists, expats,
              international residents and families in Çalış Beach and
              Fethiye.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <span className="rounded-full bg-cyan-50 px-4 py-2 text-xs font-black uppercase tracking-wider text-cyan-700">
                24/7 Available
              </span>

              <span className="rounded-full bg-emerald-50 px-4 py-2 text-xs font-black uppercase tracking-wider text-emerald-700">
                English Speaking
              </span>
            </div>
          </div>

          <div>
            <h3 className="font-black text-slate-950">Quick Links</h3>

            <div className="mt-5 flex flex-col gap-3">
              {footerLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-sm font-semibold text-slate-600 transition hover:text-cyan-700"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-black text-slate-950">Services</h3>

            <div className="mt-5 flex flex-col gap-3">
              {serviceLinks.map((service) => (
                <a
                  key={service}
                  href="#services"
                  className="text-sm font-semibold text-slate-600 transition hover:text-cyan-700"
                >
                  {service}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-black text-slate-950">Contact</h3>

            <div className="mt-5 space-y-4">
              <a
                href="tel:+905519354800"
                className="flex items-center gap-3 text-sm font-semibold text-slate-600 transition hover:text-cyan-700"
              >
                <Phone size={18} className="shrink-0 text-cyan-700" />
                +90 551 935 48 00
              </a>

              <a
                href="https://wa.me/905519354800"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 text-sm font-semibold text-slate-600 transition hover:text-emerald-600"
              >
                <MessageCircle
                  size={18}
                  className="shrink-0 text-emerald-500"
                />
                WhatsApp Doctor
              </a>

              <div className="flex items-center gap-3 text-sm font-semibold text-slate-600">
                <MapPin size={18} className="shrink-0 text-cyan-700" />
                Çalış Beach, Fethiye
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col justify-between gap-4 border-t border-slate-200 pt-8 text-sm text-slate-500 sm:flex-row sm:items-center">
          <p>© 2026 Calis Doctor. All rights reserved.</p>

          <p>Private medical care in Çalış Beach and Fethiye.</p>
        </div>
      </div>

      <div className="fixed bottom-4 left-4 right-4 z-50 grid grid-cols-2 gap-3 md:hidden">
        <a
          href="https://wa.me/905519354800"
          target="_blank"
          rel="noreferrer"
          aria-label="Contact Calis Doctor on WhatsApp"
          className="flex min-w-0 items-center justify-center gap-2 rounded-2xl bg-emerald-500 px-3 py-4 font-black text-white shadow-xl"
        >
          <MessageCircle size={19} />
          WhatsApp
        </a>

        <a
          href="tel:+905519354800"
          aria-label="Call Calis Doctor"
          className="flex min-w-0 items-center justify-center gap-2 rounded-2xl bg-slate-950 px-3 py-4 font-black text-white shadow-xl"
        >
          <Phone size={19} />
          Call Now
        </a>
      </div>
    </footer>
  );
}