"use client";

import {
  CalendarCheck,
  CheckCircle2,
  Hotel,
  House,
  MessageCircle,
  Plane,
  Stethoscope,
  Users,
} from "lucide-react";
import { motion } from "framer-motion";
import AnimatedSection from "@/components/AnimatedSection";

const touristFeatures = [
  "Hotel, villa and apartment visits",
  "Urgent medical assistance",
  "Food poisoning and dehydration care",
  "Ear infections and swimming-related problems",
  "Medical support during your holiday",
];

const residentFeatures = [
  "Routine medical consultations",
  "Family and home doctor visits",
  "Blood tests and health checks",
  "Prescription and medication support",
  "Ongoing care for existing conditions",
];

export default function Audience() {
  return (
    <section
      id="patients"
      className="scroll-mt-28 px-4 py-24 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        <AnimatedSection className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-black uppercase tracking-[0.24em] text-cyan-700">
            Who We Help
          </p>

          <h2 className="mt-4 text-4xl font-black tracking-[-0.04em] text-slate-950 sm:text-5xl">
            Medical support for visitors and residents.
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            Whether you are visiting Çalış for a holiday or living in Fethiye
            permanently, our English-speaking medical team is ready to help.
          </p>
        </AnimatedSection>

        <div className="mt-14 grid gap-8 lg:grid-cols-2">
          <AnimatedSection direction="left">
            <motion.article
              whileHover={{
                y: -8,
                scale: 1.01,
              }}
              transition={{
                duration: 0.3,
              }}
              className="relative h-full overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-cyan-600 to-sky-700 p-8 text-white shadow-2xl shadow-cyan-950/15 sm:p-10"
            >
              <motion.div
                animate={{
                  x: [0, -25, 0],
                  y: [0, 20, 0],
                  scale: [1, 1.08, 1],
                }}
                transition={{
                  duration: 10,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-white/10 blur-2xl"
              />

              <div className="relative">
                <div className="flex items-center justify-between gap-5">
                  <motion.div
                    animate={{
                      y: [0, -6, 0],
                      rotate: [0, 3, 0],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white/15 backdrop-blur"
                  >
                    <Plane size={30} />
                  </motion.div>

                  <div className="rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-black">
                    Holiday Medical Care
                  </div>
                </div>

                <p className="mt-8 text-sm font-black uppercase tracking-[0.22em] text-cyan-100">
                  For Tourists
                </p>

                <h3 className="mt-3 text-4xl font-black tracking-[-0.04em]">
                  Fast medical help during your holiday.
                </h3>

                <p className="mt-5 text-lg leading-8 text-cyan-50">
                  We visit hotels, resorts, villas, apartments and holiday homes
                  throughout Çalış Beach and Fethiye.
                </p>

                <div className="mt-8 space-y-4">
                  {touristFeatures.map((feature) => (
                    <motion.div
                      key={feature}
                      whileHover={{ x: 5 }}
                      className="flex items-start gap-3"
                    >
                      <CheckCircle2
                        size={21}
                        className="mt-0.5 shrink-0 text-cyan-100"
                      />
                      <span className="font-semibold">{feature}</span>
                    </motion.div>
                  ))}
                </div>

                <div className="mt-9 flex flex-col gap-4 sm:flex-row">
                  <motion.a
                    whileHover={{ y: -4, scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    href="https://wa.me/905519354800"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center gap-3 rounded-2xl bg-white px-6 py-4 font-black text-cyan-800"
                  >
                    <MessageCircle size={20} />
                    Request Hotel Visit
                  </motion.a>

                  <a
                    href="#services"
                    className="inline-flex items-center justify-center gap-3 rounded-2xl border border-white/20 bg-white/10 px-6 py-4 font-black text-white transition hover:bg-white/20"
                  >
                    <Hotel size={20} />
                    Tourist Services
                  </a>
                </div>
              </div>
            </motion.article>
          </AnimatedSection>

          <AnimatedSection direction="right" delay={0.1}>
            <motion.article
              whileHover={{
                y: -8,
                scale: 1.01,
              }}
              transition={{
                duration: 0.3,
              }}
              className="relative h-full overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-teal-600 to-emerald-700 p-8 text-white shadow-2xl shadow-teal-950/15 sm:p-10"
            >
              <motion.div
                animate={{
                  x: [0, 25, 0],
                  y: [0, -20, 0],
                  scale: [1, 1.08, 1],
                }}
                transition={{
                  duration: 11,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -bottom-24 -left-20 h-72 w-72 rounded-full bg-white/10 blur-2xl"
              />

              <div className="relative">
                <div className="flex items-center justify-between gap-5">
                  <motion.div
                    animate={{
                      y: [0, -6, 0],
                      rotate: [0, -3, 0],
                    }}
                    transition={{
                      duration: 4.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white/15 backdrop-blur"
                  >
                    <House size={30} />
                  </motion.div>

                  <div className="rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-black">
                    Ongoing Medical Support
                  </div>
                </div>

                <p className="mt-8 text-sm font-black uppercase tracking-[0.22em] text-emerald-100">
                  For International Residents
                </p>

                <h3 className="mt-3 text-4xl font-black tracking-[-0.04em]">
                  Dependable healthcare for everyday life.
                </h3>

                <p className="mt-5 text-lg leading-8 text-emerald-50">
                  English-speaking medical care for expats, foreign residents
                  and families living in Çalış and Fethiye.
                </p>

                <div className="mt-8 space-y-4">
                  {residentFeatures.map((feature) => (
                    <motion.div
                      key={feature}
                      whileHover={{ x: 5 }}
                      className="flex items-start gap-3"
                    >
                      <CheckCircle2
                        size={21}
                        className="mt-0.5 shrink-0 text-emerald-100"
                      />
                      <span className="font-semibold">{feature}</span>
                    </motion.div>
                  ))}
                </div>

                <div className="mt-9 flex flex-col gap-4 sm:flex-row">
                  <motion.a
                    whileHover={{ y: -4, scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    href="tel:+905519354800"
                    className="inline-flex items-center justify-center gap-3 rounded-2xl bg-white px-6 py-4 font-black text-emerald-800"
                  >
                    <Stethoscope size={20} />
                    Speak to a Doctor
                  </motion.a>

                  <a
                    href="#services"
                    className="inline-flex items-center justify-center gap-3 rounded-2xl border border-white/20 bg-white/10 px-6 py-4 font-black text-white transition hover:bg-white/20"
                  >
                    <CalendarCheck size={20} />
                    Resident Services
                  </a>
                </div>
              </div>
            </motion.article>
          </AnimatedSection>
        </div>

        <AnimatedSection delay={0.15}>
          <div className="mt-8 grid gap-5 rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm sm:grid-cols-3 sm:p-8">
            {[
              {
                title: "All Ages",
                text: "Adults, children and families",
                icon: Users,
                style: "bg-cyan-100 text-cyan-700",
              },
              {
                title: "English Speaking",
                text: "Clear medical communication",
                icon: Stethoscope,
                style: "bg-teal-100 text-teal-700",
              },
              {
                title: "Mobile Doctor",
                text: "Visits where you are staying",
                icon: House,
                style: "bg-emerald-100 text-emerald-700",
              },
            ].map((item) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.title}
                  whileHover={{
                    y: -5,
                  }}
                  className="flex items-center gap-4"
                >
                  <div
                    className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl ${item.style}`}
                  >
                    <Icon size={22} />
                  </div>

                  <div>
                    <p className="font-black text-slate-950">{item.title}</p>
                    <p className="mt-1 text-sm text-slate-600">{item.text}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}