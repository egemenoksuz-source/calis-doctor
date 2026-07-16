"use client";

import { Clock3, MapPin, Navigation, Phone } from "lucide-react";
import { motion } from "framer-motion";
import AnimatedSection from "@/components/AnimatedSection";

const areas = [
  "Çalış Beach",
  "Koca Çalış",
  "Foça",
  "Akarca",
  "Karagedik",
  "Babataşı",
  "Fethiye Centre",
  "Yanıklar",
];

const listVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 22,
    scale: 0.96,
    filter: "blur(6px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      duration: 0.55,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

export default function Areas() {
  return (
    <section
      id="areas"
      className="relative scroll-mt-28 overflow-hidden px-4 py-24 sm:px-6 lg:px-8"
    >
      <motion.div
        animate={{
          x: [0, 35, 0],
          y: [0, -20, 0],
          scale: [1, 1.08, 1],
        }}
        transition={{
          duration: 13,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute -left-24 top-28 h-72 w-72 rounded-full bg-cyan-200/20 blur-3xl"
      />

      <motion.div
        animate={{
          x: [0, -30, 0],
          y: [0, 25, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute -bottom-28 right-0 h-80 w-80 rounded-full bg-teal-200/20 blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl">
        <motion.div
          initial={{
            opacity: 0,
            y: 40,
            scale: 0.97,
            filter: "blur(8px)",
          }}
          whileInView={{
            opacity: 1,
            y: 0,
            scale: 1,
            filter: "blur(0px)",
          }}
          viewport={{
            once: true,
            amount: 0.15,
          }}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="overflow-hidden rounded-[2.5rem] bg-slate-950 text-white shadow-2xl shadow-slate-950/10"
        >
          <div className="grid lg:grid-cols-[1.05fr_0.95fr]">
            <AnimatedSection direction="left">
              <div className="relative px-7 py-14 sm:px-12 lg:px-16 lg:py-20">
                <motion.div
                  animate={{
                    x: [0, 35, 0],
                    y: [0, -20, 0],
                    scale: [1, 1.1, 1],
                  }}
                  transition={{
                    duration: 11,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute left-0 top-0 h-72 w-72 rounded-full bg-cyan-500/10 blur-3xl"
                />

                <div className="relative">
                  <p className="text-sm font-black uppercase tracking-[0.24em] text-cyan-300">
                    Areas We Cover
                  </p>

                  <h2 className="mt-4 max-w-2xl text-4xl font-black tracking-[-0.04em] sm:text-5xl">
                    Fast doctor visits across Çalış and Fethiye.
                  </h2>

                  <p className="mt-6 max-w-xl text-lg leading-8 text-slate-300">
                    We travel directly to your hotel, villa, apartment or home
                    throughout the Çalış Beach area.
                  </p>

                  <div className="mt-9 grid gap-4 sm:grid-cols-2">
                    <motion.div
                      whileHover={{
                        y: -6,
                        scale: 1.02,
                      }}
                      className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-4"
                    >
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-cyan-400/15 text-cyan-300">
                        <Clock3 size={21} />
                      </div>

                      <div>
                        <p className="font-black">Available 24/7</p>
                        <p className="mt-1 text-sm text-slate-400">
                          Day and night assistance
                        </p>
                      </div>
                    </motion.div>

                    <motion.div
                      whileHover={{
                        y: -6,
                        scale: 1.02,
                      }}
                      className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-4"
                    >
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-emerald-400/15 text-emerald-300">
                        <Navigation size={21} />
                      </div>

                      <div>
                        <p className="font-black">Mobile Doctor</p>
                        <p className="mt-1 text-sm text-slate-400">
                          We come directly to you
                        </p>
                      </div>
                    </motion.div>
                  </div>

                  <motion.a
                    whileHover={{
                      y: -4,
                      scale: 1.02,
                    }}
                    whileTap={{
                      scale: 0.98,
                    }}
                    href="tel:+905519354800"
                    className="mt-9 inline-flex items-center gap-3 rounded-2xl bg-cyan-500 px-7 py-4 font-black text-white transition hover:bg-cyan-400"
                  >
                    <Phone size={20} />
                    Call +90 551 935 48 00
                  </motion.a>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right" delay={0.1}>
              <div className="border-t border-white/10 bg-white/[0.04] px-7 py-14 sm:px-12 lg:border-l lg:border-t-0 lg:px-12 lg:py-20">
                <p className="text-sm font-black uppercase tracking-[0.22em] text-slate-400">
                  Service Locations
                </p>

                <motion.div
                  variants={listVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{
                    once: true,
                    amount: 0.15,
                  }}
                  className="mt-7 grid grid-cols-1 gap-4 sm:grid-cols-2"
                >
                  {areas.map((area) => (
                    <motion.div
                      key={area}
                      variants={itemVariants}
                      whileHover={{
                        y: -5,
                        scale: 1.02,
                      }}
                      className="group flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.06] p-4 transition hover:border-cyan-400/40 hover:bg-white/10"
                    >
                      <motion.div
                        whileHover={{
                          rotate: 8,
                          scale: 1.08,
                        }}
                        className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-cyan-400/10 text-cyan-300"
                      >
                        <MapPin size={19} />
                      </motion.div>

                      <span className="font-bold">{area}</span>
                    </motion.div>
                  ))}
                </motion.div>

                <motion.div
                  initial={{
                    opacity: 0,
                    y: 20,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    duration: 0.6,
                    delay: 0.25,
                  }}
                  whileHover={{
                    y: -5,
                  }}
                  className="mt-7 rounded-2xl border border-cyan-400/20 bg-cyan-400/10 p-5"
                >
                  <p className="font-black text-cyan-200">
                    Your location is not listed?
                  </p>

                  <p className="mt-2 text-sm leading-6 text-slate-300">
                    Contact us and tell us where you are staying. We also serve
                    nearby locations depending on availability.
                  </p>
                </motion.div>
              </div>
            </AnimatedSection>
          </div>
        </motion.div>
      </div>
    </section>
  );
}