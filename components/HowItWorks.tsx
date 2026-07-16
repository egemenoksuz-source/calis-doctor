"use client";

import {
  CheckCircle2,
  Clock3,
  MapPin,
  MessageCircle,
  Stethoscope,
} from "lucide-react";
import { motion } from "framer-motion";
import AnimatedSection from "@/components/AnimatedSection";

const steps = [
  {
    number: "01",
    title: "Contact Us",
    description:
      "Call or send a WhatsApp message and briefly explain the patient's symptoms.",
    icon: MessageCircle,
  },
  {
    number: "02",
    title: "Share Your Location",
    description:
      "Send your hotel, villa, apartment or home location in Çalış or Fethiye.",
    icon: MapPin,
  },
  {
    number: "03",
    title: "Doctor Visit",
    description:
      "Our medical team confirms availability and travels directly to your location.",
    icon: Stethoscope,
  },
  {
    number: "04",
    title: "Examination & Care",
    description:
      "The doctor performs an examination and explains the recommended treatment clearly.",
    icon: CheckCircle2,
  },
];

const listVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.14,
    },
  },
};

const stepVariants = {
  hidden: {
    opacity: 0,
    x: 45,
    y: 15,
    scale: 0.97,
    filter: "blur(8px)",
  },
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="relative scroll-mt-28 overflow-hidden border-y border-cyan-100 bg-white px-4 py-24 sm:px-6 lg:px-8"
    >
      <motion.div
        animate={{
          x: [0, 30, 0],
          y: [0, -20, 0],
          scale: [1, 1.08, 1],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute -left-24 top-24 h-72 w-72 rounded-full bg-cyan-200/20 blur-3xl"
      />

      <motion.div
        animate={{
          x: [0, -25, 0],
          y: [0, 25, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute -bottom-28 right-0 h-80 w-80 rounded-full bg-teal-200/20 blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl">
        <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <AnimatedSection direction="left">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.24em] text-cyan-700">
                How It Works
              </p>

              <h2 className="mt-4 text-4xl font-black tracking-[-0.04em] text-slate-950 sm:text-5xl">
                Requesting a doctor visit is simple.
              </h2>

              <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
                Whether you are visiting Çalış for a holiday or living in
                Fethiye, you can arrange medical assistance in just a few
                steps.
              </p>

              <motion.div
                whileHover={{
                  y: -7,
                  scale: 1.01,
                }}
                transition={{
                  duration: 0.3,
                }}
                className="relative mt-8 overflow-hidden rounded-[2rem] bg-slate-950 p-7 text-white shadow-xl shadow-slate-950/15"
              >
                <motion.div
                  animate={{
                    x: [0, 30, 0],
                    y: [0, -20, 0],
                    scale: [1, 1.12, 1],
                  }}
                  transition={{
                    duration: 9,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-cyan-400/15 blur-3xl"
                />

                <div className="relative">
                  <motion.div
                    animate={{
                      y: [0, -6, 0],
                      rotate: [0, 4, 0],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-400/15 text-cyan-300"
                  >
                    <Clock3 size={25} />
                  </motion.div>

                  <p className="mt-5 text-sm font-black uppercase tracking-[0.2em] text-cyan-300">
                    Available Day and Night
                  </p>

                  <p className="mt-3 text-2xl font-black leading-tight">
                    Contact us for urgent medical help or a planned
                    consultation.
                  </p>

                  <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                    <motion.a
                      whileHover={{
                        y: -4,
                        scale: 1.02,
                      }}
                      whileTap={{
                        scale: 0.98,
                      }}
                      href="https://wa.me/905519354800"
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center justify-center gap-3 rounded-2xl bg-emerald-500 px-6 py-4 font-black text-white transition hover:bg-emerald-600"
                    >
                      <MessageCircle size={20} />
                      WhatsApp
                    </motion.a>

                    <motion.a
                      whileHover={{
                        y: -4,
                        scale: 1.02,
                      }}
                      whileTap={{
                        scale: 0.98,
                      }}
                      href="tel:+905519354800"
                      className="inline-flex items-center justify-center rounded-2xl border border-white/15 bg-white/10 px-6 py-4 font-black text-white transition hover:bg-white/20"
                    >
                      +90 551 935 48 00
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            </div>
          </AnimatedSection>

          <div className="relative">
            <motion.div
              initial={{
                scaleY: 0,
              }}
              whileInView={{
                scaleY: 1,
              }}
              viewport={{
                once: true,
                amount: 0.2,
              }}
              transition={{
                duration: 1.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="absolute bottom-8 left-[30px] top-8 hidden w-px origin-top bg-gradient-to-b from-cyan-300 via-teal-300 to-emerald-300 sm:block"
            />

            <motion.div
              variants={listVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{
                once: true,
                amount: 0.1,
              }}
              className="space-y-5"
            >
              {steps.map((step) => {
                const Icon = step.icon;

                return (
                  <motion.article
                    key={step.number}
                    variants={stepVariants}
                    whileHover={{
                      y: -7,
                      scale: 1.01,
                    }}
                    transition={{
                      duration: 0.25,
                    }}
                    className="group relative rounded-[2rem] border border-slate-200 bg-[#f7fdfd] p-6 shadow-sm transition hover:border-cyan-200 hover:shadow-xl hover:shadow-cyan-950/10 sm:pl-24"
                  >
                    <motion.div
                      whileHover={{
                        rotate: 6,
                        scale: 1.08,
                      }}
                      className="mb-5 flex h-15 w-15 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-500 to-teal-600 text-white shadow-lg shadow-cyan-500/15 sm:absolute sm:left-0 sm:top-1/2 sm:mb-0 sm:-translate-x-1/2 sm:-translate-y-1/2"
                    >
                      <Icon size={26} />
                    </motion.div>

                    <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                      <div>
                        <p className="text-xs font-black uppercase tracking-[0.22em] text-cyan-700">
                          Step {step.number}
                        </p>

                        <h3 className="mt-2 text-2xl font-black text-slate-950">
                          {step.title}
                        </h3>

                        <p className="mt-3 max-w-2xl leading-7 text-slate-600">
                          {step.description}
                        </p>
                      </div>

                      <motion.span
                        initial={{
                          opacity: 0,
                          scale: 0.7,
                        }}
                        whileInView={{
                          opacity: 1,
                          scale: 1,
                        }}
                        viewport={{
                          once: true,
                        }}
                        transition={{
                          duration: 0.45,
                        }}
                        className="text-4xl font-black text-cyan-100 transition group-hover:text-cyan-200"
                      >
                        {step.number}
                      </motion.span>
                    </div>

                    <div className="pointer-events-none absolute -bottom-14 -right-14 h-28 w-28 rounded-full bg-cyan-100/60 opacity-0 blur-2xl transition duration-300 group-hover:opacity-100" />
                  </motion.article>
                );
              })}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}