"use client";

import { ChevronDown, MessageCircle } from "lucide-react";
import { useState } from "react";

const questions = [
  {
    question: "Is the doctor available 24 hours a day?",
    answer:
      "Medical assistance is available 24/7, subject to the medical team's current availability and location.",
  },
  {
    question: "Do you provide hotel doctor visits in Çalış Beach?",
    answer:
      "Yes. A doctor can visit hotels, villas, apartments and holiday accommodation throughout Çalış Beach and nearby Fethiye areas.",
  },
  {
    question: "Does the doctor speak English?",
    answer:
      "Yes. Our service is designed for international patients and clear communication is available in English.",
  },
  {
    question: "How do I request a doctor visit?",
    answer:
      "You can call us directly or contact us through WhatsApp. Please share your location, accommodation name and a short description of the medical problem.",
  },
  {
    question: "Which areas do you cover?",
    answer:
      "We serve Çalış Beach, Koca Çalış, Foça, Akarca, Karagedik, Babataşı, Fethiye Centre and selected nearby areas.",
  },
  {
    question: "Can the doctor visit my villa or apartment?",
    answer:
      "Yes. Home visits are available for villas, apartments, private homes and holiday rentals.",
  },
  {
    question: "Can you help with food poisoning?",
    answer:
      "Yes. The doctor can assess symptoms such as nausea, vomiting, diarrhoea, stomach pain and dehydration, then recommend suitable treatment.",
  },
  {
    question: "Do you treat ear infections caused by swimming?",
    answer:
      "Yes. Ear pain and swimming-related ear problems can be examined and treated after a proper medical assessment.",
  },
  {
    question: "Is IV therapy available?",
    answer:
      "IV therapy may be provided when clinically appropriate following an examination by the doctor.",
  },
  {
    question: "Do you provide medical care for children?",
    answer:
      "Medical assistance is available for children and families. Please mention the child's age and symptoms when contacting us.",
  },
  {
    question: "Can you arrange blood tests?",
    answer:
      "Laboratory testing may be arranged depending on the symptoms, the doctor's assessment and local availability.",
  },
  {
    question: "Do you provide prescriptions?",
    answer:
      "A prescription may be issued only when medically appropriate after consultation and examination.",
  },
  {
    question: "How quickly can the doctor arrive?",
    answer:
      "Arrival time depends on traffic, your location and current demand. The team will provide an estimated arrival time after receiving your details.",
  },
  {
    question: "What information should I send on WhatsApp?",
    answer:
      "Please send the patient's name, age, location, hotel or accommodation name, room number if applicable, symptoms and a contact telephone number.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section
      id="faq"
      className="scroll-mt-28 border-y border-cyan-100 bg-white px-4 py-24 sm:px-6 lg:px-8"
    >
      <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <p className="text-sm font-black uppercase tracking-[0.24em] text-cyan-700">
            Frequently Asked Questions
          </p>

          <h2 className="mt-4 text-4xl font-black tracking-[-0.04em] text-slate-950 sm:text-5xl">
            Everything you may need to know.
          </h2>

          <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
            Find answers about doctor visits, service areas, communication and
            medical assistance in Çalış Beach.
          </p>

          <div className="mt-8 rounded-[2rem] bg-slate-950 p-7 text-white">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-cyan-300">
              Still have a question?
            </p>

            <p className="mt-3 text-2xl font-black">
              Contact our medical team directly.
            </p>

            <a
              href="https://wa.me/905519354800"
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-flex items-center gap-3 rounded-2xl bg-emerald-500 px-6 py-4 font-black text-white transition hover:-translate-y-1 hover:bg-emerald-600"
            >
              <MessageCircle size={20} />
              Ask on WhatsApp
            </a>
          </div>
        </div>

        <div className="space-y-4">
          {questions.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <article
                key={item.question}
                className="overflow-hidden rounded-2xl border border-slate-200 bg-[#f8fdfd]"
              >
                <button
                  type="button"
                  aria-expanded={isOpen}
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="flex w-full items-center justify-between gap-5 px-6 py-5 text-left"
                >
                  <span className="font-black text-slate-950">
                    {item.question}
                  </span>

                  <ChevronDown
                    size={21}
                    className={`shrink-0 text-cyan-700 transition duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="border-t border-slate-200 px-6 py-5">
                    <p className="leading-7 text-slate-600">{item.answer}</p>
                  </div>
                )}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}