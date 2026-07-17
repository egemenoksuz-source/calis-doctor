export type SeoPage = {
  slug: string;
  metaTitle: string;
  description: string;
  heading: string;
  intro: string;
  sections: {
    title: string;
    text: string;
  }[];
  faq: {
    question: string;
    answer: string;
  }[];
};

export const seoPages: SeoPage[] = [
  {
    slug: "doctor-fethiye",
    metaTitle: "Doctor in Fethiye | 24/7 English-Speaking Medical Care",
    description:
      "Contact an English-speaking doctor in Fethiye for hotel visits, home visits and urgent medical assistance, available 24/7.",
    heading: "English-Speaking Doctor in Fethiye",
    intro:
      "Calis Doctor provides private medical assistance for tourists, residents and international visitors throughout Fethiye. Hotel, villa and home visits may be arranged according to availability.",
    sections: [
      {
        title: "Private Doctor Visits in Fethiye",
        text:
          "Receive a medical assessment at your hotel, home, villa or holiday accommodation without travelling while you feel unwell.",
      },
      {
        title: "Medical Care in English",
        text:
          "English-speaking support helps international patients explain their symptoms and understand medical guidance more clearly.",
      },
      {
        title: "Available Day and Night",
        text:
          "Telephone assistance is available 24 hours a day for medical requests in Fethiye. For life-threatening emergencies, call 112.",
      },
    ],
    faq: [
      {
        question: "Can a doctor visit my hotel in Fethiye?",
        answer:
          "Yes. Hotel, villa, apartment and home visits may be arranged throughout Fethiye, subject to availability.",
      },
      {
        question: "Is medical communication available in English?",
        answer:
          "Yes. The service is designed for English-speaking tourists and international residents.",
      },
    ],
  },
  {
    slug: "doctor-calis-beach",
    metaTitle: "Doctor in Çalış Beach | English-Speaking Doctor Service",
    description:
      "24/7 English-speaking doctor service in Çalış Beach for hotel visits, home visits and urgent medical assistance.",
    heading: "Doctor Service in Çalış Beach",
    intro:
      "Private English-speaking medical assistance is available for visitors and residents staying in Çalış Beach and nearby areas of Fethiye.",
    sections: [
      {
        title: "Doctor Visits in Çalış",
        text:
          "A private doctor visit may be arranged at hotels, apartments, villas and homes in Çalış Beach.",
      },
      {
        title: "Support for Tourists",
        text:
          "International patients can communicate their symptoms and concerns in English.",
      },
      {
        title: "Urgent Medical Assistance",
        text:
          "Contact the service for urgent, non-life-threatening medical assessment. For a life-threatening emergency, call 112.",
      },
    ],
    faq: [
      {
        question: "Is the service available 24/7 in Çalış?",
        answer:
          "Telephone assistance is available 24/7, with visits arranged according to medical need and availability.",
      },
      {
        question: "Can a doctor visit holiday accommodation?",
        answer:
          "Yes. Visits may be arranged at hotels, villas, apartments and private homes.",
      },
    ],
  },
  {
    slug: "english-speaking-doctor-fethiye",
    metaTitle: "English-Speaking Doctor Fethiye | Private Medical Care",
    description:
      "English-speaking doctor service in Fethiye for tourists, expats and international residents. Hotel and home visits available.",
    heading: "English-Speaking Doctor in Fethiye",
    intro:
      "Clear communication matters when you need medical care abroad. Calis Doctor helps English-speaking patients access private medical assessment in Fethiye.",
    sections: [
      {
        title: "Consultations in English",
        text:
          "Patients can discuss symptoms, medicines and recommended next steps in English.",
      },
      {
        title: "Care at Your Location",
        text:
          "Hotel, home, villa and apartment visits may be arranged across Fethiye.",
      },
      {
        title: "Tourists and International Residents",
        text:
          "The service is suitable for holidaymakers, international residents and visiting families.",
      },
    ],
    faq: [
      {
        question: "Will the consultation be in English?",
        answer:
          "Yes. English-language communication is available during the medical consultation.",
      },
      {
        question: "Do I need to travel to a clinic?",
        answer:
          "Not necessarily. A private visit may be arranged at your location, subject to availability.",
      },
    ],
  },
  {
    slug: "hotel-doctor-fethiye",
    metaTitle: "Hotel Doctor Fethiye | Doctor Visit to Your Hotel",
    description:
      "Arrange an English-speaking hotel doctor visit in Fethiye for private medical assessment at your accommodation.",
    heading: "Hotel Doctor Service in Fethiye",
    intro:
      "When you feel unwell during your holiday, a private doctor visit may be arranged at your hotel, resort or other accommodation in Fethiye.",
    sections: [
      {
        title: "Doctor Visit to Your Hotel",
        text:
          "Request a medical assessment at your accommodation instead of travelling while you are unwell.",
      },
      {
        title: "English-Speaking Assistance",
        text:
          "International guests can explain symptoms and understand medical guidance in English.",
      },
      {
        title: "Fethiye Coverage",
        text:
          "Hotel visit requests are accepted throughout Fethiye and Çalış Beach.",
      },
    ],
    faq: [
      {
        question: "Can a doctor come to my hotel room?",
        answer:
          "A visit may be arranged subject to availability and the hotel's access rules.",
      },
      {
        question: "How do I request a hotel visit?",
        answer:
          "Call or send a WhatsApp message with your hotel name, location and a brief description of the symptoms.",
      },
    ],
  },
  {
    slug: "home-visit-doctor-fethiye",
    metaTitle: "Home Visit Doctor Fethiye | Private Doctor at Home",
    description:
      "Arrange an English-speaking home doctor visit in Fethiye for assessment at your home, apartment or villa.",
    heading: "Home Visit Doctor in Fethiye",
    intro:
      "Private medical assessment may be provided at your home, apartment, villa or holiday accommodation in Fethiye.",
    sections: [
      {
        title: "Medical Care at Home",
        text:
          "A home visit can be convenient when a patient feels too unwell to travel.",
      },
      {
        title: "Visits for Families and Visitors",
        text:
          "The service is suitable for adults, families, tourists and international residents.",
      },
      {
        title: "English-Speaking Support",
        text:
          "Medical communication and general guidance are available in English.",
      },
    ],
    faq: [
      {
        question: "Can a doctor visit my villa in Fethiye?",
        answer:
          "Yes. Visits may be arranged for villas, apartments and private residences.",
      },
      {
        question: "Is the service available at weekends?",
        answer:
          "Telephone assistance is available every day, including weekends.",
      },
    ],
  },
  {
    slug: "emergency-doctor-fethiye",
    metaTitle: "Urgent Doctor Fethiye | 24/7 Medical Assistance",
    description:
      "Contact an English-speaking doctor in Fethiye for urgent, non-life-threatening medical assessment. Call 112 for emergencies.",
    heading: "Urgent Doctor Assistance in Fethiye",
    intro:
      "Contact Calis Doctor for urgent medical assessment in Fethiye. For chest pain, severe breathing difficulty, unconsciousness, major injury or another life-threatening emergency, call 112 immediately.",
    sections: [
      {
        title: "Urgent Medical Assessment",
        text:
          "Prompt medical assistance may be arranged for health concerns that require timely assessment.",
      },
      {
        title: "Available Day and Night",
        text:
          "Telephone assistance is available 24 hours a day, seven days a week.",
      },
      {
        title: "When to Call 112",
        text:
          "Call Türkiye's emergency number 112 for severe or life-threatening symptoms.",
      },
    ],
    faq: [
      {
        question: "Should I use this service for a life-threatening emergency?",
        answer:
          "No. Call 112 immediately for any life-threatening emergency.",
      },
      {
        question: "Can an urgent hotel visit be arranged?",
        answer:
          "Urgent hotel or home visits may be arranged depending on the situation and availability.",
      },
    ],
  },
  {
    slug: "private-doctor-fethiye",
    metaTitle: "Private Doctor Fethiye | English-Speaking Medical Care",
    description:
      "Private English-speaking doctor service in Fethiye for hotel, home, villa and apartment visits.",
    heading: "Private Doctor Service in Fethiye",
    intro:
      "Receive confidential private medical assessment at your accommodation or residence in Fethiye.",
    sections: [
      {
        title: "Private Medical Consultations",
        text:
          "Consultations are conducted privately and with respect for patient confidentiality.",
      },
      {
        title: "Visits at Your Location",
        text:
          "Visits may be arranged at hotels, villas, apartments and private homes.",
      },
      {
        title: "English-Language Support",
        text:
          "International patients can receive medical explanations and guidance in English.",
      },
    ],
    faq: [
      {
        question: "Is this a private medical service?",
        answer:
          "Yes. It provides private medical consultations and location visits.",
      },
      {
        question: "Do you cover Fethiye?",
        answer:
          "Requests are accepted throughout Fethiye, subject to location and availability.",
      },
    ],
  },
  {
    slug: "tourist-doctor-fethiye",
    metaTitle: "Tourist Doctor Fethiye | Medical Care for Holidaymakers",
    description:
      "English-speaking tourist doctor service in Fethiye for hotel visits, holiday illness and urgent medical assistance.",
    heading: "Doctor Service for Tourists in Fethiye",
    intro:
      "Calis Doctor supports tourists and international visitors who need English-speaking medical assistance while staying in Fethiye.",
    sections: [
      {
        title: "Medical Help During Your Holiday",
        text:
          "Request assistance when illness or a minor injury interrupts your holiday.",
      },
      {
        title: "Hotel and Accommodation Visits",
        text:
          "A private visit may be arranged at your hotel, apartment, villa or other accommodation.",
      },
      {
        title: "Clear English Communication",
        text:
          "Patients can explain symptoms and understand medical guidance in English.",
      },
    ],
    faq: [
      {
        question: "Do you help tourists without Turkish language skills?",
        answer:
          "Yes. The service offers English-speaking support for international visitors.",
      },
      {
        question: "Can you visit my holiday accommodation?",
        answer:
          "Yes. A visit may be arranged subject to location and availability.",
      },
    ],
  },
];

export function getSeoPage(slug: string): SeoPage | undefined {
  return seoPages.find((page) => page.slug === slug);
}