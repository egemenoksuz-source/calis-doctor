"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Activity,
  Ambulance,
  Baby,
  CalendarCheck,
  ClipboardPlus,
  Droplets,
  HeartPulse,
  Hotel,
  House,
  Languages,
  Pill,
  Stethoscope,
  Syringe,
} from "lucide-react";

import AnimatedSection from "@/components/AnimatedSection";

const touristServices = [
  {
    title: "Hotel Doctor",
    description:
      "Private medical examination and treatment directly in your hotel room.",
    icon: Hotel,
    href: "/hotel-doctor-fethiye",
  },
  {
    title: "Holiday Home Visit",
    description:
      "Doctor visits to villas, apartments, Airbnb properties and holiday accommodation.",
    icon: House,
    href: "/home-visit-doctor-fethiye",
  },
  {
    title: "Urgent Medical Care",
    description:
      "Fast medical assistance for sudden illness and urgent health problems.",
    icon: Ambulance,
    href: "/emergency-doctor-fethiye",
  },
  {
    title: "Food Poisoning",
    description:
      "Assessment and treatment for nausea, vomiting, diarrhoea and dehydration.",
    icon: HeartPulse,
    href: "/food-poisoning-doctor-fethiye",
  },
  {
    title: "Ear Infection",
    description:
      "Examination and treatment for ear pain and swimming-related infections.",
    icon: Stethoscope,
    href: "/ear-infection-doctor-fethiye",
  },
  {
    title: "IV Therapy",
    description:
      "Intravenous fluid and supportive treatment when medically appropriate.",
    icon: Droplets,
    href: "/iv-therapy-fethiye",
  },
];

const residentServices = [
  {
    title: "Routine Check-Ups",
    description:
      "General medical consultations and regular health assessments.",
    icon: CalendarCheck,
  },
  {
    title: "Family Medical Care",
    description:
      "Medical support for adults, children and families living in the area.",
    icon: Baby,
    href: "/child-doctor-fethiye",
  },
  {
    title: "Blood Tests",
    description:
      "Laboratory testing and medical evaluation based on your symptoms.",
    icon: Syringe,
  },
  {
    title: "Prescription Support",
    description:
      "Consultation and prescription support when clinically appropriate.",
    icon: Pill,
    href: "/tourist-doctor-fethiye",
  },
  {
    title: "Chronic Condition Follow-Up",
    description:
      "Ongoing support for existing conditions and regular medication needs.",
    icon: ClipboardPlus,
  },
  {
    title: "ECG and Assessment",
    description:
      "Heart rhythm checks and professional medical evaluation.",
    icon: Activity,
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
    y: 35,
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

export default function Services() {
  return (
    <section
      id="services"
      className="relative scroll-mt-28 overflow-hidden px-4 py-24 sm:px-6 lg:px-8"
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
        className="pointer-events-none absolute -left-20 top-40 h-72 w-72 rounded-full bg-cyan-200/20 blur-3xl"
      />

      <motion.div
        animate={{
          x: [0, -25, 0],
          y: [0, 20, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute -right-20 bottom-40 h-80 w-80 rounded-full bg-teal-200/20 blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl">
        <AnimatedSection className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-black uppercase tracking-[0.24em] text-cyan-700">
            Medical Services
          </p>

          <h2 className="mt-4 text-4xl font-black tracking-[-0.04em] text-slate-950 sm:text-5xl">
            Medical care for your holiday and everyday life.
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            Our English-speaking medical team supports tourists, expats,
            international residents and families throughout Çalış and Fethiye.
          </p>
        </AnimatedSection>

        {/* TOURIST SERVICES */}
        <div className="mt-16">
          <AnimatedSection direction="left">
            <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full bg-cyan-100 px-4 py-2 text-sm font-black text-cyan-800">
                  <Hotel size={17} />
                  For Tourists and Holidaymakers
                </div>

                <h3 className="mt-4 text-3xl font-black tracking-[-0.03em] text-slate-950">
                  Fast medical help during your stay.
                </h3>

                <p className="mt-3 max-w-2xl leading-7 text-slate-600">
                  Convenient medical care at hotels, villas, apartments and
                  holiday accommodation.
                </p>
              </div>

              <motion.a
                whileHover={{
                  x: 5,
                }}
                href="https://wa.me/905519354800?text=Hello%2C%20I%20need%20a%20doctor%20visit%20in%20Fethiye."
                target="_blank"
                rel="noopener noreferrer"
                className="font-black text-cyan-700 transition hover:text-cyan-900"
              >
                Request a doctor visit →
              </motion.a>
            </div>
          </AnimatedSection>

          <motion.div
            variants={gridVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.1,
            }}
            className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          >
            {touristServices.map((service) => {
              const Icon = service.icon;

              return (
                <motion.article
                  key={service.title}
                  variants={cardVariants}
                  whileHover={{
                    y: -10,
                    scale: 1.02,
                  }}
                  transition={{
                    duration: 0.25,
                  }}
                  className="group relative flex h-full flex-col overflow-hidden rounded-[2rem] border border-slate-200/80 bg-white p-7 shadow-sm transition hover:border-cyan-200 hover:shadow-xl hover:shadow-cyan-950/10"
                >
                  <motion.div
                    initial={{
                      opacity: 0,
                      scale: 0.6,
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
                    className="relative flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-100 text-cyan-700 transition duration-300 group-hover:bg-cyan-600 group-hover:text-white"
                  >
                    <Icon size={26} />
                  </motion.div>

                  <h4 className="mt-6 text-xl font-black text-slate-950">
                    {service.title}
                  </h4>

                  <p className="mt-3 flex-1 leading-7 text-slate-600">
                    {service.description}
                  </p>

                  <Link
                    href={service.href}
                    aria-label={`Learn more about ${service.title}`}
                    className="mt-6 inline-flex items-center gap-2 text-sm font-black text-cyan-700 transition hover:translate-x-1 hover:text-cyan-900"
                  >
                    Learn more
                    <span aria-hidden="true">→</span>
                  </Link>

                  <div className="pointer-events-none absolute -bottom-16 -right-16 h-32 w-32 rounded-full bg-cyan-100/50 opacity-0 blur-2xl transition duration-300 group-hover:opacity-100" />
                </motion.article>
              );
            })}
          </motion.div>
        </div>

        {/* RESIDENT SERVICES */}
        <AnimatedSection delay={0.1}>
          <div className="mt-20 rounded-[2.5rem] border border-teal-100 bg-white p-7 shadow-sm sm:p-10">
            <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full bg-teal-100 px-4 py-2 text-sm font-black text-teal-800">
                  <Languages size={17} />
                  For Expats and International Residents
                </div>

                <h3 className="mt-4 text-3xl font-black tracking-[-0.03em] text-slate-950">
                  Dependable ongoing medical support.
                </h3>

                <p className="mt-3 max-w-2xl leading-7 text-slate-600">
                  Regular consultations, family healthcare and home visits for
                  foreign residents living in Çalış and Fethiye.
                </p>
              </div>

              <motion.a
                whileHover={{
                  x: 5,
                }}
                href="tel:+905519354800"
                className="font-black text-teal-700 transition hover:text-teal-900"
              >
                Speak to our medical team →
              </motion.a>
            </div>

            <motion.div
              variants={gridVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{
                once: true,
                amount: 0.1,
              }}
              className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
            >
              {residentServices.map((service) => {
                const Icon = service.icon;

                return (
                  <motion.article
                    key={service.title}
                    variants={cardVariants}
                    whileHover={{
                      y: -10,
                      scale: 1.02,
                    }}
                    transition={{
                      duration: 0.25,
                    }}
                    className="group relative flex h-full flex-col overflow-hidden rounded-[2rem] border border-slate-200 bg-[#f7fdfd] p-7 transition hover:border-teal-200 hover:shadow-xl hover:shadow-teal-950/10"
                  >
                    <motion.div
                      initial={{
                        opacity: 0,
                        scale: 0.6,
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
                      className="flex h-14 w-14 items-center justify-center rounded-2xl bg-teal-100 text-teal-700 transition duration-300 group-hover:bg-teal-600 group-hover:text-white"
                    >
                      <Icon size={26} />
                    </motion.div>

                    <h4 className="mt-6 text-xl font-black text-slate-950">
                      {service.title}
                    </h4>

                    <p className="mt-3 flex-1 leading-7 text-slate-600">
                      {service.description}
                    </p>

                    {"href" in service && service.href ? (
                      <Link
                        href={service.href}
                        aria-label={`Learn more about ${service.title}`}
                        className="mt-6 inline-flex items-center gap-2 text-sm font-black text-teal-700 transition hover:translate-x-1 hover:text-teal-900"
                      >
                        Learn more
                        <span aria-hidden="true">→</span>
                      </Link>
                    ) : (
                      <a
                        href="#contact"
                        aria-label={`Contact a doctor about ${service.title}`}
                        className="mt-6 inline-flex items-center gap-2 text-sm font-black text-teal-700 transition hover:translate-x-1 hover:text-teal-900"
                      >
                        Contact doctor
                        <span aria-hidden="true">→</span>
                      </a>
                    )}

                    <div className="pointer-events-none absolute -bottom-16 -right-16 h-32 w-32 rounded-full bg-teal-100/50 opacity-0 blur-2xl transition duration-300 group-hover:opacity-100" />
                  </motion.article>
                );
              })}
            </motion.div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}