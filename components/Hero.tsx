"use client";

import {
  CheckCircle2,
  Clock3,
  Home,
  MapPin,
  MessageCircle,
  Phone,
  ShieldCheck,
  Stethoscope,
  Users,
} from "lucide-react";
import { motion } from "framer-motion";

const features = [
  "English-speaking medical team",
  "Care for tourists and international residents",
  "Hotel, villa, apartment and home visits",
  "Routine consultations and urgent medical support",
];

const statistics = [
  {
    value: "24/7",
    label: "Available",
  },
  {
    value: "Tourists",
    label: "Holiday Care",
  },
  {
    value: "Residents",
    label: "Ongoing Care",
  },
  {
    value: "English",
    label: "Speaking",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 28,
    filter: "blur(8px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.75,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden px-4 pb-20 pt-32 sm:px-6 lg:px-8"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.22),transparent_36%),radial-gradient(circle_at_bottom_right,rgba(20,184,166,0.2),transparent_38%)]" />

      <motion.div
        animate={{
          x: [0, 35, 0],
          y: [0, -20, 0],
          scale: [1, 1.08, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute left-[8%] top-32 h-64 w-64 rounded-full bg-cyan-300/20 blur-3xl"
      />

      <motion.div
        animate={{
          x: [0, -30, 0],
          y: [0, 25, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-10 right-[4%] h-80 w-80 rounded-full bg-teal-300/20 blur-3xl"
      />

      <div className="relative mx-auto grid w-full max-w-7xl items-center gap-14 lg:grid-cols-[1.08fr_0.92fr]">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div
            variants={itemVariants}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-200 bg-white/80 px-4 py-2 text-sm font-bold text-cyan-800 shadow-sm backdrop-blur"
          >
            <span className="h-2.5 w-2.5 animate-pulse rounded-full bg-emerald-500" />
            24/7 English-Speaking Doctor in Çalış Beach
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="max-w-4xl text-5xl font-black leading-[0.98] tracking-[-0.05em] text-slate-950 sm:text-6xl lg:text-7xl"
          >
            Medical Care for Tourists and{" "}
            <span className="bg-gradient-to-r from-cyan-600 to-teal-600 bg-clip-text text-transparent">
              International Residents
            </span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="mt-7 max-w-2xl text-lg leading-8 text-slate-600 sm:text-xl"
          >
            Private medical care for holidaymakers, expats, families and local
            residents in Çalış Beach and Fethiye. We provide hotel visits, home
            visits, routine consultations and urgent medical assistance.
          </motion.p>

          <motion.div variants={itemVariants} className="mt-7 space-y-3">
            {features.map((feature) => (
              <motion.div
                key={feature}
                whileHover={{ x: 5 }}
                className="flex items-center gap-3 text-sm font-bold text-slate-700 sm:text-base"
              >
                <CheckCircle2
                  size={20}
                  className="shrink-0 text-emerald-500"
                />
                {feature}
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="mt-9 flex flex-col gap-4 sm:flex-row"
          >
            <motion.a
              whileHover={{ y: -4, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              href="https://wa.me/905519354800"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-3 rounded-2xl bg-emerald-500 px-7 py-4 text-base font-black text-white shadow-xl shadow-emerald-500/20 transition hover:bg-emerald-600"
            >
              <MessageCircle size={21} />
              WhatsApp Doctor
            </motion.a>

            <motion.a
              whileHover={{ y: -4, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              href="tel:+905519354800"
              className="inline-flex items-center justify-center gap-3 rounded-2xl bg-slate-950 px-7 py-4 text-base font-black text-white shadow-xl shadow-slate-950/15 transition hover:bg-cyan-700"
            >
              <Phone size={20} />
              Call Now
            </motion.a>

            <motion.a
              whileHover={{ y: -4, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              href="#services"
              className="inline-flex items-center justify-center gap-3 rounded-2xl border border-slate-200 bg-white px-7 py-4 text-base font-black text-slate-900 transition hover:border-cyan-300"
            >
              <Stethoscope size={20} />
              View Services
            </motion.a>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="mt-10 grid max-w-2xl grid-cols-2 gap-4 sm:grid-cols-4"
          >
            {statistics.map((statistic, index) => (
              <motion.div
                key={statistic.label}
                whileHover={{
                  y: -6,
                  scale: 1.03,
                }}
                transition={{
                  duration: 0.25,
                }}
                className="rounded-2xl border border-white/80 bg-white/70 p-4 shadow-sm backdrop-blur"
              >
                <motion.p
                  initial={{
                    opacity: 0,
                    scale: 0.8,
                  }}
                  animate={{
                    opacity: 1,
                    scale: 1,
                  }}
                  transition={{
                    delay: 0.9 + index * 0.1,
                    duration: 0.5,
                  }}
                  className="text-xl font-black text-slate-950"
                >
                  {statistic.value}
                </motion.p>

                <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-slate-500">
                  {statistic.label}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          initial={{
            opacity: 0,
            x: 70,
            scale: 0.94,
            filter: "blur(12px)",
          }}
          animate={{
            opacity: 1,
            x: 0,
            scale: 1,
            filter: "blur(0px)",
          }}
          transition={{
            duration: 1,
            delay: 0.25,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="relative"
        >
          <motion.div
            animate={{
              rotate: [0, 2, 0, -2, 0],
              scale: [1, 1.03, 1],
            }}
            transition={{
              duration: 9,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute -inset-6 rounded-[3rem] bg-gradient-to-br from-cyan-400/25 to-teal-400/20 blur-3xl"
          />

          <motion.div
            whileHover={{
              y: -8,
              rotate: 0.4,
            }}
            transition={{
              duration: 0.35,
            }}
            className="relative overflow-hidden rounded-[2.5rem] border border-white/80 bg-white p-3 shadow-2xl shadow-cyan-950/10"
          >
            <div className="relative min-h-[560px] overflow-hidden rounded-[2rem] bg-gradient-to-br from-cyan-700 via-teal-600 to-emerald-500 p-7 text-white sm:p-8">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.3),transparent_30%)]" />

              <div className="relative flex min-h-[500px] flex-col justify-between">
                <div>
                  <motion.div
                    animate={{
                      y: [0, -7, 0],
                      rotate: [0, 3, 0],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/20 backdrop-blur"
                  >
                    <Stethoscope size={28} />
                  </motion.div>

                  <p className="mt-8 text-sm font-bold uppercase tracking-[0.22em] text-cyan-100">
                    Calis Doctor
                  </p>

                  <h2 className="mt-3 text-4xl font-black leading-tight">
                    One medical service for holidays and everyday life.
                  </h2>

                  <p className="mt-5 max-w-md text-lg leading-8 text-cyan-50">
                    Fast medical help for visitors and dependable ongoing care
                    for international residents living in Çalış and Fethiye.
                  </p>
                </div>

                <div className="grid gap-4">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <motion.div
                      whileHover={{ y: -5, scale: 1.02 }}
                      className="rounded-2xl border border-white/20 bg-white/15 p-5 backdrop-blur-xl"
                    >
                      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/20">
                        <MapPin size={21} />
                      </div>

                      <p className="mt-4 text-sm font-bold text-cyan-100">
                        For Tourists
                      </p>

                      <p className="mt-1 text-lg font-black">
                        Hotel and holiday visits
                      </p>
                    </motion.div>

                    <motion.div
                      whileHover={{ y: -5, scale: 1.02 }}
                      className="rounded-2xl border border-white/20 bg-white/15 p-5 backdrop-blur-xl"
                    >
                      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/20">
                        <Home size={21} />
                      </div>

                      <p className="mt-4 text-sm font-bold text-cyan-100">
                        For Residents
                      </p>

                      <p className="mt-1 text-lg font-black">
                        Routine and home care
                      </p>
                    </motion.div>
                  </div>

                  <motion.div
                    whileHover={{ y: -5 }}
                    className="flex items-center justify-between gap-4 rounded-2xl bg-white p-5 text-slate-950 shadow-lg"
                  >
                    <div>
                      <p className="text-sm font-semibold text-slate-500">
                        Need medical assistance?
                      </p>

                      <p className="mt-1 text-xl font-black">
                        +90 551 935 48 00
                      </p>
                    </div>

                    <motion.div
                      animate={{
                        scale: [1, 1.1, 1],
                      }}
                      transition={{
                        duration: 2.5,
                        repeat: Infinity,
                      }}
                      className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-cyan-100 text-cyan-700"
                    >
                      <Users size={22} />
                    </motion.div>
                  </motion.div>

                  <div className="flex items-center gap-4 rounded-2xl border border-white/20 bg-white/10 p-4">
                    <Clock3 size={21} className="shrink-0 text-cyan-100" />

                    <p className="text-sm font-bold">
                      Available for urgent care and planned consultations.
                    </p>

                    <ShieldCheck
                      size={21}
                      className="ml-auto shrink-0 text-cyan-100"
                    />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}