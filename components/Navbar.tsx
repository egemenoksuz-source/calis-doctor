"use client";

import { Menu, MessageCircle, Phone, X } from "lucide-react";
import { useState } from "react";
import Logo from "@/components/Logo";

const navigation = [
  { name: "Home", href: "#home" },
  { name: "For You", href: "#patients" },
  { name: "Services", href: "#services" },
  { name: "How It Works", href: "#how-it-works" },
  { name: "Areas", href: "#areas" },
  { name: "Location", href: "#location" },
  { name: "FAQ", href: "#faq" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  function closeMenu() {
    setMobileMenuOpen(false);
  }

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="mx-auto max-w-7xl px-4 pt-4 sm:px-6 lg:px-8">
        <nav className="relative flex items-center justify-between rounded-2xl border border-white/70 bg-white/90 px-4 py-3 shadow-xl shadow-cyan-950/5 backdrop-blur-xl sm:px-5">
          <a
            href="#home"
            aria-label="Calis Doctor home"
            onClick={closeMenu}
            className="flex items-center"
          >
            <Logo />
          </a>

          <div className="hidden items-center gap-5 xl:flex">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="relative py-2 text-sm font-bold text-slate-700 transition hover:text-cyan-700"
              >
                {item.name}
              </a>
            ))}
          </div>

          <div className="hidden items-center gap-3 md:flex">
            <a
              href="https://wa.me/905519354800"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Contact Calis Doctor on WhatsApp"
              className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-500 text-white shadow-md shadow-emerald-500/20 transition hover:-translate-y-0.5 hover:bg-emerald-600"
            >
              <MessageCircle size={20} />
            </a>

            <a
              href="tel:+905519354800"
              className="inline-flex items-center gap-2 rounded-xl bg-slate-950 px-5 py-3 text-sm font-black text-white shadow-md transition hover:-translate-y-0.5 hover:bg-cyan-700"
            >
              <Phone size={17} />
              Call Now
            </a>
          </div>

          <button
            type="button"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setMobileMenuOpen((previous) => !previous)}
            className="flex h-11 w-11 items-center justify-center rounded-xl bg-slate-950 text-white transition hover:bg-cyan-700 md:hidden"
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>

          {mobileMenuOpen && (
            <div
              id="mobile-navigation"
              className="absolute left-0 right-0 top-[calc(100%+0.75rem)] overflow-hidden rounded-2xl border border-slate-200 bg-white p-4 shadow-2xl md:hidden"
            >
              <div className="flex flex-col">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={closeMenu}
                    className="rounded-xl px-4 py-3 font-bold text-slate-700 transition hover:bg-cyan-50 hover:text-cyan-700"
                  >
                    {item.name}
                  </a>
                ))}
              </div>

              <div className="mt-3 grid grid-cols-2 gap-3 border-t border-slate-100 pt-4">
                <a
                  href="https://wa.me/905519354800"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={closeMenu}
                  className="flex items-center justify-center gap-2 rounded-xl bg-emerald-500 px-3 py-3 font-black text-white transition hover:bg-emerald-600"
                >
                  <MessageCircle size={18} />
                  WhatsApp
                </a>

                <a
                  href="tel:+905519354800"
                  onClick={closeMenu}
                  className="flex items-center justify-center gap-2 rounded-xl bg-slate-950 px-3 py-3 font-black text-white transition hover:bg-cyan-700"
                >
                  <Phone size={18} />
                  Call
                </a>
              </div>
            </div>
          )}
        </nav>
      </div>
    </header>
  );
}