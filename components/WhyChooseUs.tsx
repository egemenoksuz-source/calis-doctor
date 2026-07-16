"use client";

import {
  BadgeCheck,
  Clock3,
  HeartHandshake,
  Languages,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { motion } from "framer-motion";
import AnimatedSection from "@/components/AnimatedSection";

const advantages = [
  {
    title: "English Speaking Team",
    description:
      "Clear communication for international visitors and foreign residents.",
    icon: Languages,
  },
  {
    title: "Available 24/7",
    description:
      "Medical assistance is available day and night throughout the week.",
    icon: Clock3,
  },
  {
    title: "Private Medical Care",
    description:
      "Discreet, respectful and patient-focused healthcare wherever you stay.",
    icon: ShieldCheck,
  },
  {
    title: "Fast Response",
    description:
      "Quick medical support across Çalış Beach and nearby Fethiye areas.",
    icon: Sparkles,
  },
  {
    title: "Trusted Service",
    description:
      "Professional healthcare designed around comfort, safety and clarity.",
    icon: BadgeCheck,
  },
  {
    title: "Tourist Friendly",
    description:
      "Support tailored for travellers, families, hotels and holiday guests.",
    icon: HeartHandshake,
  },
];

const gridVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 30,
    scale: 0.96,
    filter: "blur(7px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      duration: 0.65,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

export default function WhyChooseUs() {
  return (
    <section
      id="about"
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
        className="pointer-events-none absolute -left-24 top-20 h-72 w-72 rounded-full bg-cyan-200/20 blur-3xl"
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
        <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <AnimatedSection direction="left">
            <div className="lg:sticky lg:top-32">
              <p className="text-sm font-black uppercase tracking-[0.24em] text-cyan-700">
                Why Choose Calis Doctor
              </p>

              <h2 className="mt-4 text-4xl font-black tracking-[-0.04em] text-slate-950 sm:text-5xl">
                Medical care designed around your comfort.
              </h2>

              <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
                Feeling unwell while travelling or living abroad can be
                stressful. Our goal is to make medical care fast, clear and
                convenient from the first contact.
              </p>

              <motion.div
                whileHover={{
                  y: -8,
                  scale: 1.01,
                }}
                transition={{
                  duration: 0.3,
                }}
                className="relative mt-8 overflow-hidden rounded-[2rem] bg-gradient-to-br from-cyan-600 to-teal-600 p-7 text-white shadow-xl shadow-cyan-950/10"
              >
                <motion.div
                  animate={{
                    x: [0, 30, 0],
                    y: [0, -20, 0],
                    scale: [1, 1.1, 1],
                  }}
                  transition={{
                    duration: 9,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-white/10 blur-3xl"
                />

                <div className="relative">
                  <p className="text-sm font-black uppercase tracking-[0.2em] text-cyan-100">
                    Calis Doctor
                  </p>

                  <p className="mt-3 text-2xl font-black leading-tight">
                    Medical assistance at your hotel, villa, apartment or
                    home.
                  </p>

                  <p className="mt-4 leading-7 text-cyan-50">
                    Support for tourists, expats, international residents and
                    local families throughout Çalış and Fethiye.
                  </p>
                </div>
              </motion.div>
            </div>
          </AnimatedSection>

          <motion.div
            variants={gridVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.12,
            }}
            className="grid gap-5 sm:grid-cols-2"
          >
            {advantages.map((advantage) => {
              const Icon = advantage.icon;

              return (
                <motion.article
                  key={advantage.title}
                  variants={cardVariants}
                  whileHover={{
                    y: -8,
                    scale: 1.02,
                  }}
                  transition={{
                    duration: 0.25,
                  }}
                  className="group relative overflow-hidden rounded-[2rem] border border-slate-200 bg-[#f7fdfd] p-6 shadow-sm hover:border-cyan-200 hover:shadow-xl hover:shadow-cyan-950/10"
                >
                  <motion.div
                    whileHover={{
                      rotate: 6,
                      scale: 1.08,
                    }}
                    className="flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-100 text-cyan-700 transition duration-300 group-hover:bg-cyan-600 group-hover:text-white"
                  >
                    <Icon size={24} />
                  </motion.div>

                  <h3 className="mt-5 text-xl font-black text-slate-950">
                    {advantage.title}
                  </h3>

                  <p className="mt-3 leading-7 text-slate-600">
                    {advantage.description}
                  </p>

                  <div className="pointer-events-none absolute -bottom-14 -right-14 h-28 w-28 rounded-full bg-cyan-100/60 opacity-0 blur-2xl transition duration-300 group-hover:opacity-100" />
                </motion.article>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}