export type SeoFaq = {
  question: string;
  answer: string;
};

export type SeoPage = {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  eyebrow: string;
  heading: string;
  introduction: string;
  sections: {
    title: string;
    content: string[];
  }[];
  symptoms?: string[];
  benefits?: string[];
  faq: SeoFaq[];
  relatedPages: {
    title: string;
    href: string;
  }[];
};

export const seoPages: SeoPage[] = [
  {
    slug: "hotel-doctor-fethiye",
    title: "Hotel Doctor Fethiye",
    metaTitle:
      "Hotel Doctor Fethiye | 24/7 English-Speaking Doctor Visit",
    metaDescription:
      "Need a hotel doctor in Fethiye or Calis Beach? Contact our English-speaking medical team for private hotel room visits, assessment and treatment 24/7.",
    eyebrow: "24/7 Hotel Doctor Service",
    heading: "English-Speaking Hotel Doctor in Fethiye",
    introduction:
      "Feeling unwell during your holiday can be stressful, especially when you are unfamiliar with the local healthcare system. Calis Doctor provides private English-speaking doctor visits directly to hotels, resorts and holiday accommodation throughout Calis Beach and Fethiye. Our medical team can assess your symptoms in the privacy and comfort of your room and explain the recommended next steps clearly.",
    sections: [
      {
        title: "Private doctor visits directly to your hotel room",
        content: [
          "When you become ill while travelling, leaving your hotel and trying to find a suitable medical facility can be difficult. Language barriers, transportation problems and uncertainty about where to go may make the situation more stressful. Our hotel doctor service allows you to request medical assistance directly at your accommodation.",
          "An English-speaking medical professional can visit your hotel room, villa, apartment or holiday rental in Calis Beach and the wider Fethiye area. During the visit, the doctor will discuss your symptoms, review relevant medical history, perform an appropriate examination and explain possible treatment options.",
          "Hotel visits are suitable for many common illnesses and non-life-threatening medical concerns. When hospital care, imaging, laboratory testing or specialist treatment is needed, the doctor can explain the next steps and help you understand the most appropriate course of action.",
        ],
      },
      {
        title: "Medical care for tourists and international visitors",
        content: [
          "Our service is designed for tourists, holidaymakers, expatriates and international residents who prefer to communicate in English. Clear communication is especially important when discussing symptoms, medications, allergies and previous medical conditions.",
          "The medical team aims to explain the assessment and recommended treatment in straightforward language. Patients can ask questions and receive guidance about medication use, recovery, warning signs and whether further medical evaluation is required.",
          "We understand that visitors may be unfamiliar with pharmacies, hospitals and private healthcare services in Turkey. Where appropriate, patients can also receive practical information about obtaining medication or arranging additional care.",
        ],
      },
      {
        title: "Common conditions assessed during hotel visits",
        content: [
          "A hotel doctor can assess a wide range of common health problems that may occur during a holiday. These include stomach illnesses, respiratory infections, ear pain, fever, dehydration, allergic reactions, headaches, minor injuries and worsening symptoms from an existing condition.",
          "Food poisoning and gastroenteritis are frequent concerns among travellers. Symptoms may include nausea, vomiting, diarrhoea, abdominal discomfort, weakness and difficulty keeping fluids down. A medical assessment can help determine the severity of dehydration and whether supportive treatment or further investigation is appropriate.",
          "Swimming-related ear infections, sore throats, coughs, urinary symptoms and heat-related illness are also common during the summer season. Treatment decisions are made according to the patient's symptoms, examination findings and individual medical needs.",
        ],
      },
      {
        title: "What happens during a hotel doctor appointment?",
        content: [
          "After contacting Calis Doctor, you will be asked for your location, hotel name, room information and a brief description of the medical problem. Providing accurate details helps the team understand the situation and arrange an appropriate response.",
          "During the visit, the doctor may check your temperature, blood pressure, pulse, oxygen level and other relevant observations. The examination will depend on your symptoms and may include assessment of the throat, ears, chest, abdomen, hydration status or an injured area.",
          "Following the examination, the doctor will explain the findings and discuss the recommended plan. This may include supportive care, medication when clinically appropriate, monitoring instructions or referral for further assessment. No treatment is automatically suitable for every patient, so decisions are based on the individual medical evaluation.",
        ],
      },
      {
        title: "Hotel doctor service in Calis Beach and Fethiye",
        content: [
          "Calis Doctor provides medical visits across Calis Beach and many surrounding parts of Fethiye. Visits may be available for hotels, resorts, villas, apartments, Airbnb properties and private holiday accommodation.",
          "When contacting the medical team, send the name of your accommodation and your location. A Google Maps location pin can be helpful when staying in a villa or private apartment that may be difficult to find.",
          "Response times depend on the location, current demand, traffic conditions and medical team availability. The team will provide practical information after receiving your request.",
        ],
      },
      {
        title: "When should you seek emergency medical assistance?",
        content: [
          "The hotel doctor service is intended for non-life-threatening medical problems. Certain symptoms require immediate emergency assistance rather than waiting for a private hotel visit.",
          "Call Turkey's emergency number 112 immediately for severe chest pain, serious breathing difficulty, loss of consciousness, signs of stroke, uncontrolled bleeding, major trauma, seizures, severe allergic reactions or any rapidly worsening condition.",
          "When you are uncertain whether the situation is an emergency, prioritise safety. Emergency medical services are better equipped to provide ambulance transport and immediate hospital-level care for serious conditions.",
        ],
      },
      {
        title: "Medication and prescriptions",
        content: [
          "Medication may only be recommended after an appropriate medical assessment. The doctor will consider your symptoms, examination findings, medical history, allergies and any medicines you already use.",
          "Antibiotics are not suitable for every infection and should not be used without a clinical reason. Viral illnesses, dehydration and other conditions may require different forms of treatment. The aim is to provide medically appropriate care rather than unnecessary medication.",
          "Patients should follow the dosage instructions provided and seek further medical care if symptoms become worse, new warning signs develop or recovery does not progress as expected.",
        ],
      },
      {
        title: "Using travel insurance for medical care",
        content: [
          "Many tourists have private travel insurance that may cover unexpected medical treatment during their trip. Coverage varies according to the insurer and policy conditions, so patients should check directly with their insurance provider.",
          "Keep relevant medical documents, reports, prescriptions, invoices and receipts if you plan to submit a reimbursement claim. Your insurer may request these documents as evidence of the medical service received.",
          "Some insurance companies require policyholders to contact an assistance line before receiving treatment. Checking the policy conditions early may help avoid difficulties with a later claim.",
        ],
      },
      {
        title: "Why choose a private hotel doctor?",
        content: [
          "A hotel visit offers convenience, privacy and direct communication. Patients do not need to arrange transport or wait in an unfamiliar medical environment for common non-emergency health concerns.",
          "The service can be particularly useful for families with children, older travellers, patients experiencing weakness or dehydration and visitors who are uncomfortable travelling while unwell.",
          "English-speaking care helps reduce misunderstandings and gives patients an opportunity to describe their symptoms clearly. The doctor can also explain which warning signs require additional medical attention.",
        ],
      },
    ],
    symptoms: [
      "Nausea, vomiting and diarrhoea",
      "Food poisoning symptoms",
      "Abdominal pain and stomach problems",
      "Dehydration and weakness",
      "Fever, cough and sore throat",
      "Ear pain after swimming",
      "Headaches and dizziness",
      "Urinary symptoms",
      "Allergic reactions and skin rashes",
      "Minor injuries and holiday-related illness",
    ],
    benefits: [
      "English-speaking medical assistance",
      "Private examination in your hotel room",
      "Visits to hotels, villas and apartments",
      "Available day and night, subject to availability",
      "Clear explanations and patient guidance",
      "Support for tourists and international residents",
      "Assessment based on individual medical needs",
      "Guidance when hospital care is required",
    ],
    faq: [
      {
        question: "Can a doctor visit my hotel room in Fethiye?",
        answer:
          "Yes. Private doctor visits may be arranged for hotels, resorts, villas, apartments and holiday rentals in Calis Beach and Fethiye, depending on location and availability.",
      },
      {
        question: "Is the doctor able to speak English?",
        answer:
          "Yes. The service is designed for tourists and international residents who need to communicate with a medical professional in English.",
      },
      {
        question: "Is the hotel doctor service available 24 hours?",
        answer:
          "Medical assistance can be requested day or night. Response times and visit availability depend on the patient's location, current demand and medical team availability.",
      },
      {
        question: "What information should I send when requesting a doctor?",
        answer:
          "Send your name, hotel or accommodation name, room number, location and a short description of your symptoms. A Google Maps location pin is useful for villas and private apartments.",
      },
      {
        question: "Can the doctor treat food poisoning at my hotel?",
        answer:
          "A doctor can assess symptoms such as vomiting, diarrhoea, abdominal discomfort and dehydration. Treatment recommendations depend on the examination and severity of the condition.",
      },
      {
        question: "Can IV fluids be provided in my hotel room?",
        answer:
          "IV treatment may be considered only when it is clinically appropriate following a medical assessment. It is not automatically suitable for every patient or illness.",
      },
      {
        question: "Can the doctor provide a prescription?",
        answer:
          "Medication or prescription support may be provided when clinically appropriate after examination. Treatment decisions depend on the patient's condition, history and allergies.",
      },
      {
        question: "Will my travel insurance cover the doctor visit?",
        answer:
          "Coverage depends on your insurance company and policy. Keep medical records, invoices and receipts, and contact your insurer to confirm reimbursement requirements.",
      },
      {
        question: "How quickly can the doctor arrive?",
        answer:
          "Arrival time varies according to your location, traffic, current demand and availability. The medical team can provide an estimated response time after receiving your details.",
      },
      {
        question: "When should I call an ambulance instead?",
        answer:
          "Call 112 immediately for severe chest pain, serious breathing difficulty, loss of consciousness, stroke symptoms, major trauma, seizures, uncontrolled bleeding or another life-threatening emergency.",
      },
    ],
    relatedPages: [
      {
        title: "Home Visit Doctor Fethiye",
        href: "/home-visit-doctor-fethiye",
      },
      {
        title: "Emergency Doctor Fethiye",
        href: "/emergency-doctor-fethiye",
      },
      {
        title: "Food Poisoning Doctor Fethiye",
        href: "/food-poisoning-doctor-fethiye",
      },
      {
        title: "IV Therapy Fethiye",
        href: "/iv-therapy-fethiye",
      },
      {
        title: "Ear Infection Doctor Fethiye",
        href: "/ear-infection-doctor-fethiye",
      },
      {
        title: "Tourist Doctor Fethiye",
        href: "/tourist-doctor-fethiye",
      },
    ],
  },

  {
    slug: "home-visit-doctor-fethiye",
    title: "Home Visit Doctor Fethiye",
    metaTitle:
      "Home Visit Doctor Fethiye | Private Doctor to Villa or Apartment",
    metaDescription:
      "Request an English-speaking home visit doctor in Fethiye or Çalış Beach. Private medical visits to villas, apartments and holiday homes, available 24/7 subject to availability.",
    eyebrow: "Private Medical Care at Your Accommodation",
    heading: "English-Speaking Home Visit Doctor in Fethiye",
    introduction:
      "Calis Doctor provides private home doctor visits for tourists, expatriates, international residents and families staying in villas, apartments, holiday homes and private residences throughout Çalış Beach and Fethiye. A medical professional can assess your symptoms in familiar surroundings, explain the findings in English and provide clear guidance about treatment, monitoring and further care when required.",
    sections: [
      {
        title: "Private medical care in your villa, apartment or home",
        content: [
          "Travelling to a clinic can be difficult when you are experiencing fever, vomiting, diarrhoea, weakness, dizziness or pain. A home visit allows you to receive an appropriate medical assessment without arranging transport or waiting in an unfamiliar healthcare environment.",
          "The service may be suitable for guests staying in villas, apartments, Airbnb properties, holiday homes and private residences. It is also useful for families with children, older patients and people who feel too unwell to travel safely.",
          "During the visit, the doctor will review your symptoms, relevant medical history, allergies and current medication. The examination and recommendations will be based on your individual condition rather than a standard treatment package.",
        ],
      },
      {
        title: "English-speaking medical support for visitors and residents",
        content: [
          "Explaining symptoms accurately is especially important when you are abroad. Our service is designed for patients who prefer to communicate in English and need straightforward information about their condition and treatment options.",
          "The doctor can discuss how long symptoms have been present, whether they are improving or worsening, and which warning signs require additional medical attention. Patients are encouraged to mention existing conditions, previous reactions to medication and any medicines already taken.",
          "International residents can also use the home visit service for common illnesses, routine medical concerns and follow-up guidance when attending a clinic is inconvenient.",
        ],
      },
      {
        title: "Common conditions assessed during home visits",
        content: [
          "Home doctor visits can be appropriate for many common, non-life-threatening medical problems. These include stomach illness, respiratory infections, fever, ear pain, sore throat, urinary symptoms, allergic reactions, minor injuries, headaches and heat-related illness.",
          "Vomiting and diarrhoea can lead to dehydration, particularly during hot weather. The doctor can assess hydration status, abdominal symptoms, temperature, pulse and general condition before recommending oral fluids, medication or further evaluation.",
          "Children may also be assessed for fever, cough, ear pain, rashes, vomiting and diarrhoea. Any treatment recommendation for a child must consider age, weight, symptoms, examination findings and medical history.",
        ],
      },
      {
        title: "What happens during a home doctor appointment?",
        content: [
          "When requesting a visit, provide your name, telephone number, exact location and a brief description of the medical problem. A Google Maps location pin is particularly helpful for villas and private properties that may be difficult to find.",
          "At the appointment, the doctor may check observations such as temperature, blood pressure, pulse and oxygen saturation. The physical examination will depend on the symptoms and may include the throat, ears, chest, abdomen, skin, hydration status or an injured area.",
          "After the assessment, the doctor will explain the likely cause of the symptoms and discuss the recommended plan. This may include supportive care, medication when clinically appropriate, monitoring instructions, follow-up or referral for tests and hospital assessment.",
        ],
      },
      {
        title: "Home visits for families and children",
        content: [
          "A child becoming unwell during a holiday can be stressful for parents. A home visit may be more comfortable because the child can remain in familiar surroundings while being assessed.",
          "Parents should provide information about the child's age, weight, symptoms, fluid intake, urine output, allergies and any medication already given. This information supports safe clinical decision-making.",
          "Breathing difficulty, seizures, unusual drowsiness, a rapidly spreading non-blanching rash, severe dehydration or a rapidly worsening condition require urgent emergency assessment rather than waiting for a routine home visit.",
        ],
      },
      {
        title: "Medication and prescription support",
        content: [
          "Medication is recommended only when it is clinically appropriate following an examination. The doctor will consider your medical history, allergies, current medicines and the possible cause of the illness.",
          "Antibiotics do not treat every infection and should not be used automatically. Viral illnesses, dehydration, allergic conditions and other health problems may require different forms of care.",
          "Patients should follow the instructions provided and seek further assessment if symptoms worsen, new warning signs appear or recovery does not progress as expected.",
        ],
      },
      {
        title: "IV therapy and hydration assessment at home",
        content: [
          "Some patients ask about IV fluids because of vomiting, diarrhoea, weakness or suspected dehydration. IV treatment is not automatically necessary and should only be considered after a proper medical assessment.",
          "When clinically appropriate, IV fluids may be provided at the accommodation, subject to the patient's condition and operational availability. The medical team will monitor the patient and provide aftercare information.",
          "Severe dehydration, persistent inability to keep fluids down, confusion, fainting, severe abdominal pain or blood in vomit or stool may require hospital-level treatment instead of care at home.",
        ],
      },
      {
        title: "Service areas across Çalış Beach and Fethiye",
        content: [
          "Calis Doctor provides home medical visits throughout Çalış Beach, central Fethiye and many surrounding residential and holiday areas. Availability depends on the exact location, traffic, current demand and medical team capacity.",
          "Send the full address, accommodation name and a live or pinned Google Maps location when possible. This helps reduce delays and allows the team to estimate travel time more accurately.",
          "The medical team will confirm whether a visit can be arranged and provide practical information after reviewing your location and symptoms.",
        ],
      },
      {
        title: "When a home visit is not appropriate",
        content: [
          "A private home doctor service is intended for non-life-threatening medical concerns. It does not replace ambulance services, emergency departments or hospital care when serious symptoms are present.",
          "Call Turkey's emergency number 112 immediately for severe chest pain, serious breathing difficulty, loss of consciousness, stroke symptoms, uncontrolled bleeding, major trauma, seizures or a severe allergic reaction.",
          "The doctor may also recommend hospital assessment when imaging, specialist review, laboratory testing or close monitoring is needed. Patient safety takes priority over continuing treatment at the accommodation.",
        ],
      },
      {
        title: "Travel insurance and medical documents",
        content: [
          "Unexpected medical care during a trip may be covered by travel insurance, depending on the policy. Patients should contact their insurance company directly to confirm coverage and claim requirements.",
          "Keep invoices, receipts, prescriptions, medical reports and other documents related to the consultation. These may be requested when submitting a reimbursement claim.",
          "Some insurers require policyholders to call an assistance number before treatment. Checking the policy conditions early can help avoid problems with a later claim.",
        ],
      },
    ],
    symptoms: [
      "Fever, cough and respiratory infections",
      "Food poisoning and stomach illness",
      "Vomiting and diarrhoea",
      "Dehydration, dizziness and weakness",
      "Ear pain and sore throat",
      "Urinary symptoms",
      "Allergic reactions and skin rashes",
      "Headaches and heat-related illness",
      "Minor injuries and wounds",
      "Common childhood illnesses",
    ],
    benefits: [
      "Private visit to your villa, apartment or home",
      "English-speaking medical assistance",
      "No clinic waiting room",
      "Care for tourists, residents and families",
      "Assessment based on individual medical needs",
      "Day and night requests, subject to availability",
      "Clear treatment and aftercare guidance",
      "Hospital referral when further care is required",
    ],
    faq: [
      {
        question: "Can a doctor visit my villa or apartment in Fethiye?",
        answer:
          "Yes. Private doctor visits may be arranged for villas, apartments, holiday homes, Airbnb properties and private residences in Çalış Beach and Fethiye, depending on location and availability.",
      },
      {
        question: "Is the home visit doctor available 24 hours?",
        answer:
          "Medical assistance can be requested day or night. Availability and arrival time depend on your location, current demand, traffic and medical team capacity.",
      },
      {
        question: "Does the doctor speak English?",
        answer:
          "Yes. The service is designed for tourists, expatriates and international residents who need to communicate with a medical professional in English.",
      },
      {
        question: "How do I request a home doctor visit?",
        answer:
          "Send your name, telephone number, exact location and a brief description of your symptoms. A Google Maps location pin is strongly recommended for villas and private properties.",
      },
      {
        question: "How quickly can the doctor arrive?",
        answer:
          "Arrival time varies according to location, traffic, current appointments and the urgency of the request. The team can provide an estimated response time after receiving your details.",
      },
      {
        question: "Can children be examined at our accommodation?",
        answer:
          "Yes. Children can be assessed during a home visit. Treatment decisions consider the child's age, weight, symptoms, examination findings and medical history.",
      },
      {
        question: "Can the doctor provide a prescription?",
        answer:
          "Medication or prescription support may be provided when clinically appropriate after examination. The doctor will consider allergies, medical history and medicines already being used.",
      },
      {
        question: "Can IV fluids be given at home?",
        answer:
          "IV treatment may be considered only after a medical assessment confirms that it is appropriate. It is not required or suitable for every patient with vomiting, diarrhoea or weakness.",
      },
      {
        question: "Can a home doctor treat food poisoning?",
        answer:
          "A doctor can assess vomiting, diarrhoea, stomach pain, fever and dehydration. Recommended treatment depends on the severity of symptoms and the patient's overall condition.",
      },
      {
        question: "Can I use travel insurance for the visit?",
        answer:
          "Coverage depends on your insurer and policy conditions. Keep all medical documents, invoices and receipts and contact your insurance provider to confirm reimbursement requirements.",
      },
      {
        question: "What should I prepare before the doctor arrives?",
        answer:
          "Prepare identification, a list of current medicines, allergy information, relevant medical history and any travel insurance details. For children, provide their age and approximate weight.",
      },
      {
        question: "When should I call an ambulance instead of requesting a home visit?",
        answer:
          "Call 112 immediately for severe chest pain, serious breathing difficulty, unconsciousness, stroke symptoms, seizures, major trauma, uncontrolled bleeding or another life-threatening emergency.",
      },
    ],
    relatedPages: [
      {
        title: "Hotel Doctor Fethiye",
        href: "/hotel-doctor-fethiye",
      },
      {
        title: "Emergency Doctor Fethiye",
        href: "/emergency-doctor-fethiye",
      },
      {
        title: "Child Doctor Fethiye",
        href: "/child-doctor-fethiye",
      },
      {
        title: "IV Therapy Fethiye",
        href: "/iv-therapy-fethiye",
      },
      {
        title: "Food Poisoning Doctor Fethiye",
        href: "/food-poisoning-doctor-fethiye",
      },
      {
        title: "Tourist Doctor Fethiye",
        href: "/tourist-doctor-fethiye",
      },
    ],
  },

  {
    slug: "emergency-doctor-fethiye",
    title: "Emergency Doctor Fethiye",
    metaTitle:
      "Emergency Doctor Fethiye | 24/7 English-Speaking Medical Help",
    metaDescription:
      "Need urgent medical help in Fethiye or Çalış Beach? Contact our English-speaking private doctor for 24/7 hotel, villa and apartment visits for non-life-threatening conditions.",
    eyebrow: "24/7 Urgent Medical Assistance",
    heading: "English-Speaking Emergency Doctor in Fethiye",
    introduction:
      "Sudden illness during a holiday can be frightening, especially when you do not know where to go or how to explain your symptoms. Calis Doctor provides urgent private medical assistance for tourists, expatriates and international residents across Fethiye and Çalış Beach. An English-speaking doctor may visit your hotel, villa, apartment or holiday accommodation to assess urgent but non-life-threatening medical concerns and explain whether treatment at your accommodation or further hospital care is required.",
    sections: [
      {
        title: "Urgent private doctor visits to your accommodation",
        content: [
          "Our emergency doctor service is intended for patients who need prompt medical assessment but are not experiencing an immediately life-threatening emergency. A doctor may visit hotels, resorts, villas, apartments and private residences throughout Çalış Beach and the wider Fethiye area, subject to availability.",
          "During the visit, the doctor will review your symptoms, relevant medical history, allergies and current medications. Depending on the medical problem, the assessment may include temperature, blood pressure, pulse, oxygen saturation, hydration status and examination of the chest, throat, ears, abdomen or injured area.",
          "After the examination, the doctor will explain the findings and recommend the safest next step. This may include supportive care, medication when clinically appropriate, monitoring instructions, laboratory testing, imaging, specialist assessment or hospital referral.",
        ],
      },
      {
        title: "Urgent conditions that may be assessed by a private doctor",
        content: [
          "A private urgent doctor may assess many common problems that begin suddenly during a holiday. These can include fever, severe sore throat, ear pain, vomiting, diarrhoea, dehydration, urinary symptoms, allergic skin reactions, minor wounds and worsening symptoms from an existing condition.",
          "Food poisoning and gastroenteritis can cause rapid fluid loss, weakness and difficulty keeping drinks down. A doctor can assess hydration, abdominal symptoms and warning signs to determine whether care at the accommodation is appropriate.",
          "The service may also be useful for patients with respiratory infections, painful swallowing, headaches, dizziness, insect reactions, heat-related illness and minor accidents. Every patient is assessed individually, and no treatment is automatically suitable for every condition.",
        ],
      },
      {
        title: "This service is not a replacement for an ambulance",
        content: [
          "Calis Doctor is a private mobile medical service and not an ambulance service. Life-threatening symptoms require immediate contact with Turkey's national emergency number, 112.",
          "Call 112 without delay for severe chest pain, serious breathing difficulty, loss of consciousness, signs of stroke, seizures, major trauma, uncontrolled bleeding, severe burns, suspected poisoning or a rapidly worsening condition.",
          "An ambulance team can provide emergency transport and hospital-level intervention that cannot be delivered during a routine private accommodation visit. When in doubt about a potentially serious emergency, prioritise safety and call 112.",
        ],
      },
      {
        title: "English-speaking urgent medical care for tourists",
        content: [
          "Clear communication is especially important when a patient is frightened, in pain or feeling suddenly unwell. Our service is designed for international visitors who prefer to explain their symptoms and understand medical advice in English.",
          "Patients can discuss previous illnesses, allergies, medications and recent travel-related concerns. The doctor will explain the assessment, possible causes, recommended treatment and warning signs that require further medical attention.",
          "Where appropriate, the team may also provide practical guidance about local pharmacies, private hospitals, laboratory testing and follow-up care in Fethiye.",
        ],
      },
      {
        title: "What happens when you request an urgent doctor?",
        content: [
          "When contacting the medical team, provide your name, telephone number, accommodation name, room number or full address, and a short description of the symptoms. A Google Maps location pin is particularly useful for villas and private apartments.",
          "You may be asked when the symptoms started, whether the patient is conscious and breathing normally, whether there is severe pain or bleeding, and whether the patient has important medical conditions or allergies. These questions help the team understand the urgency of the situation.",
          "Response time depends on your location, traffic, current demand and doctor availability. If the symptoms worsen while waiting or become life-threatening, call 112 immediately rather than continuing to wait for a private visit.",
        ],
      },
      {
        title: "Assessment, treatment and hospital referral",
        content: [
          "Many urgent but stable medical problems can be assessed at a hotel or home. The doctor may recommend fluids, rest, symptom-relieving medication, prescription treatment or careful monitoring, depending on the examination findings.",
          "Some symptoms require tests, imaging or treatment that cannot be safely provided at the accommodation. In these situations, the doctor will explain why further assessment is needed and advise the patient about the appropriate healthcare facility.",
          "Hospital referral does not necessarily mean that the condition is life-threatening. It may be recommended because blood tests, X-rays, ultrasound, specialist review or prolonged observation are required for safe diagnosis and treatment.",
        ],
      },
      {
        title: "Urgent medical care for children and older patients",
        content: [
          "Children and older adults may become dehydrated or deteriorate more quickly than healthy younger adults. Parents and caregivers should seek medical advice early when there is persistent vomiting, reduced fluid intake, unusual drowsiness, breathing difficulty or worsening weakness.",
          "For children, the doctor may consider age, weight, temperature, hydration, breathing and behaviour. Medication recommendations must be appropriate for the child's age, weight and medical history.",
          "Older patients and people with chronic heart, lung, kidney or immune conditions may require earlier hospital assessment. Always tell the doctor about existing medical conditions and regular medication.",
        ],
      },
      {
        title: "Travel insurance and urgent medical documentation",
        content: [
          "Travel insurance may cover unexpected medical treatment, but coverage depends on the insurer and policy terms. Patients should contact their insurance assistance line when required by the policy.",
          "Keep invoices, receipts, prescriptions, medical reports and any other documents provided during treatment. These may be requested when submitting a reimbursement claim.",
          "Insurance approval should never delay emergency care. For severe or life-threatening symptoms, call 112 or attend an emergency department immediately.",
        ],
      },
      {
        title: "Areas served in Fethiye and Çalış Beach",
        content: [
          "Urgent private doctor visits may be available across Çalış Beach, central Fethiye and nearby holiday accommodation areas. Coverage and response time vary according to distance, traffic and medical team availability.",
          "When requesting a visit, send your exact location and accommodation details. Clear directions help reduce delays, particularly at private villas, gated complexes and rural properties.",
          "The team will provide an estimated response time after reviewing your location and the current workload. Availability cannot be guaranteed until the request has been confirmed.",
        ],
      },
    ],
    symptoms: [
      "Sudden fever or worsening infection symptoms",
      "Persistent vomiting or diarrhoea",
      "Dehydration, dizziness and weakness",
      "Severe ear or throat pain",
      "Urinary pain or frequent urination",
      "Allergic skin reactions",
      "Heat-related illness",
      "Minor wounds and injuries",
      "Headache and dizziness",
      "Worsening symptoms from an existing condition",
    ],
    benefits: [
      "English-speaking urgent medical assistance",
      "Private hotel, villa and apartment visits",
      "Available day and night, subject to availability",
      "Assessment of urgent non-life-threatening conditions",
      "Clear treatment and monitoring advice",
      "Hospital referral when further care is required",
      "Support for tourists and international residents",
      "Guidance about local medical services",
    ],
    faq: [
      {
        question: "Is Calis Doctor an ambulance service?",
        answer:
          "No. Calis Doctor is a private mobile doctor service. For life-threatening symptoms or situations requiring emergency transport, call Turkey's national emergency number 112 immediately.",
      },
      {
        question: "Can an emergency doctor visit my hotel at night?",
        answer:
          "Urgent medical visits may be requested day or night, subject to location, current demand and doctor availability.",
      },
      {
        question: "Which symptoms require an ambulance instead of a private doctor?",
        answer:
          "Call 112 for severe chest pain, serious breathing difficulty, loss of consciousness, stroke symptoms, seizures, major trauma, uncontrolled bleeding or any rapidly worsening life-threatening condition.",
      },
      {
        question: "Can the doctor visit a villa or apartment in Fethiye?",
        answer:
          "Yes. Visits may be arranged for hotels, villas, apartments and private residences across the service area, depending on location and availability.",
      },
      {
        question: "What information should I provide when requesting urgent help?",
        answer:
          "Provide the patient's name, telephone number, exact location, accommodation details, main symptoms, when they began and any important medical conditions, allergies or medications.",
      },
      {
        question: "How quickly can the doctor arrive?",
        answer:
          "Arrival time depends on distance, traffic, current appointments and availability. The team can provide an estimated response time after receiving your location and medical details.",
      },
      {
        question: "Can the doctor treat food poisoning urgently?",
        answer:
          "A doctor can assess vomiting, diarrhoea, abdominal symptoms and dehydration. Treatment depends on the examination, and severe cases may require hospital assessment.",
      },
      {
        question: "Can IV fluids be given during an urgent visit?",
        answer:
          "IV fluids may be considered only after a medical assessment confirms they are appropriate and safe. Some patients require hospital treatment instead.",
      },
      {
        question: "Can the doctor prescribe medication?",
        answer:
          "Medication or prescription support may be provided when clinically appropriate after examination and review of the patient's history and allergies.",
      },
      {
        question: "Can children receive urgent medical assessment at the hotel?",
        answer:
          "Yes. Children may be assessed at the accommodation, but serious symptoms such as breathing difficulty, seizures, severe dehydration or unusual drowsiness require urgent hospital or ambulance care.",
      },
      {
        question: "Will travel insurance cover an urgent doctor visit?",
        answer:
          "Coverage depends on your insurer and policy. Keep all medical documents, invoices and receipts, and contact your insurance provider for reimbursement requirements.",
      },
      {
        question: "What should I do if the patient gets worse while waiting?",
        answer:
          "If symptoms become severe or life-threatening, do not continue waiting for a private doctor. Call 112 immediately or attend the nearest emergency department.",
      },
    ],
    relatedPages: [
      {
        title: "Hotel Doctor Fethiye",
        href: "/hotel-doctor-fethiye",
      },
      {
        title: "Home Visit Doctor Fethiye",
        href: "/home-visit-doctor-fethiye",
      },
      {
        title: "Food Poisoning Doctor Fethiye",
        href: "/food-poisoning-doctor-fethiye",
      },
      {
        title: "Dehydration Treatment Fethiye",
        href: "/dehydration-treatment-fethiye",
      },
      {
        title: "IV Therapy Fethiye",
        href: "/iv-therapy-fethiye",
      },
      {
        title: "Child Doctor Fethiye",
        href: "/child-doctor-fethiye",
      },
    ],
  },

  {
    slug: "iv-therapy-fethiye",
    title: "IV Therapy in Fethiye",
    metaTitle:
      "IV Therapy Fethiye | Doctor-Assessed IV Drip at Hotel or Home",
    metaDescription:
      "Doctor-assessed IV therapy in Fethiye for dehydration, vomiting and diarrhoea. English-speaking mobile medical care at hotels, villas and apartments.",
    eyebrow: "Doctor-Assessed IV Treatment",
    heading: "Medical IV Therapy in Fethiye",
    introduction:
      "IV therapy may be considered for patients who are dehydrated, unable to keep fluids down or experiencing weakness caused by vomiting, diarrhoea, heat exposure or another illness. Calis Doctor provides English-speaking medical assessment at hotels, villas, apartments and private residences across Fethiye and Çalış Beach. IV treatment is only offered when a doctor determines that it is clinically appropriate and safe for the individual patient.",
    sections: [
      {
        title: "IV therapy begins with a medical assessment",
        content: [
          "An IV drip should not be treated as a general wellness product or ordered without a medical examination. Before considering intravenous fluids, the doctor reviews your symptoms, medical history, current medication, allergies and any existing conditions that may affect treatment.",
          "The assessment may include checking blood pressure, pulse, temperature, oxygen saturation, hydration status and other relevant observations. The doctor will also ask about vomiting, diarrhoea, urine output, fluid intake, abdominal pain and warning signs that could indicate a more serious condition.",
          "Many patients can recover with oral fluids, rest and symptom-based treatment. IV therapy is considered only when the potential benefit is greater than the risk and home-based care is appropriate.",
        ],
      },
      {
        title: "Mobile IV treatment at your accommodation",
        content: [
          "When medically suitable, IV treatment may be provided in a hotel room, villa, apartment or private home. This can be helpful for patients who feel too weak to travel or who would prefer a private consultation in familiar surroundings.",
          "The medical team prepares the necessary equipment, starts the IV line using appropriate clinical precautions and monitors the patient during treatment. The type and volume of fluid depend on the medical assessment rather than a standard package.",
          "Patients receive clear aftercare advice, including hydration guidance, dietary recommendations, medication instructions when relevant and warning signs that require further medical attention.",
        ],
      },
      {
        title: "IV fluids for dehydration",
        content: [
          "Dehydration can occur after repeated vomiting, diarrhoea, high temperatures, prolonged sun exposure, reduced fluid intake or excessive alcohol consumption. Common symptoms include dry mouth, dizziness, weakness, headache, dark urine and reduced urination.",
          "Mild dehydration can often be managed with oral rehydration solutions. IV fluids may be considered when the patient cannot drink enough, repeatedly vomits oral fluids or shows clinical signs that oral hydration is not sufficient.",
          "Severe dehydration, confusion, fainting, very low urine output, rapid deterioration or unstable vital signs may require hospital treatment rather than an accommodation-based IV drip.",
        ],
      },
      {
        title: "IV therapy for vomiting and diarrhoea",
        content: [
          "Vomiting and diarrhoea can cause rapid fluid and electrolyte loss, particularly during hot weather. The doctor assesses the likely cause, duration and severity of symptoms before deciding on treatment.",
          "IV fluids may support hydration, but they do not automatically treat the underlying cause. Depending on the examination, the patient may also need symptom-relieving medication, laboratory tests, imaging or hospital assessment.",
          "Blood in vomit or stool, severe abdominal pain, persistent high fever, confusion, fainting or worsening symptoms require urgent medical review and may not be suitable for hotel-based treatment.",
        ],
      },
      {
        title: "Food poisoning and gastroenteritis care",
        content: [
          "Food poisoning and gastroenteritis are common reasons tourists request medical help in Fethiye. Symptoms may include nausea, vomiting, diarrhoea, stomach cramps, fever, weakness and loss of appetite.",
          "The doctor evaluates hydration, abdominal findings and general condition. Most uncomplicated cases improve with fluids, rest and supportive care, but some patients may need additional investigation or referral.",
          "Antibiotics are not appropriate for every case of diarrhoea or food poisoning. Treatment is selected according to the clinical assessment rather than automatically prescribing medication.",
        ],
      },
      {
        title: "Is IV therapy suitable for everyone?",
        content: [
          "No. IV fluids can be inappropriate or risky for some patients, including people with certain heart, kidney or fluid-balance problems. This is why a medical history and examination are essential before treatment.",
          "The doctor may decide that oral rehydration is safer, that additional tests are required or that the patient should be assessed in a hospital. Patients should disclose all known medical conditions, allergies, pregnancy and regular medication.",
          "Children, older adults, pregnant patients and people with chronic illness may require additional caution and earlier referral depending on their symptoms and examination findings.",
        ],
      },
      {
        title: "What happens during an IV therapy visit?",
        content: [
          "When requesting assistance, provide your name, exact accommodation location and a short description of your symptoms. A Google Maps location pin is particularly useful for villas and private apartments.",
          "During the appointment, the doctor performs an assessment and explains whether IV therapy is recommended. If treatment proceeds, the patient is observed throughout the infusion and the IV site is checked regularly.",
          "After treatment, the doctor explains what to drink and eat, how to use any recommended medication and when to seek additional care. Improvement after an IV drip does not remove the need for follow-up if symptoms return or worsen.",
        ],
      },
      {
        title: "When hospital treatment is safer",
        content: [
          "Accommodation-based care is intended for suitable, non-life-threatening cases. Some symptoms require urgent hospital assessment, blood tests, imaging, monitoring or treatments that cannot safely be provided in a hotel room.",
          "Seek immediate emergency assistance for loss of consciousness, severe breathing difficulty, chest pain, signs of stroke, seizures, uncontrolled bleeding, major trauma or a rapidly worsening condition. In Turkey, call 112 for an ambulance.",
          "Hospital review may also be necessary for severe abdominal pain, blood in stool or vomit, persistent inability to drink, confusion, significant dehydration or concerning vital signs.",
        ],
      },
      {
        title: "IV therapy service areas in Fethiye",
        content: [
          "Calis Doctor provides mobile medical visits across Çalış Beach, central Fethiye and surrounding accommodation areas. Visits may be arranged for hotels, resorts, villas, apartments and private homes depending on location and availability.",
          "Response times vary according to distance, traffic, current demand and medical priority. The team can provide an estimated arrival time after receiving your location and basic medical details.",
          "For the fastest coordination, send the accommodation name, room number when applicable, telephone number and Google Maps location through WhatsApp.",
        ],
      },
    ],
    symptoms: [
      "Dehydration and dry mouth",
      "Persistent vomiting",
      "Diarrhoea and fluid loss",
      "Weakness and dizziness",
      "Reduced oral fluid intake",
      "Heat-related illness",
      "Dark or reduced urine",
      "Food poisoning symptoms",
      "Gastroenteritis symptoms",
      "Headache associated with dehydration",
    ],
    benefits: [
      "Medical assessment before treatment",
      "English-speaking medical care",
      "Hotel, villa and apartment visits",
      "Professional monitoring during treatment",
      "Individual treatment decisions",
      "Clear aftercare instructions",
      "Hospital referral when required",
      "Available day and night, subject to availability",
    ],
    faq: [
      {
        question: "Can I request an IV drip without seeing a doctor?",
        answer:
          "No. IV therapy should only be provided after a medical assessment confirms that it is appropriate and safe for your condition.",
      },
      {
        question: "Can IV therapy be provided in my hotel room?",
        answer:
          "Yes, when the doctor determines that accommodation-based treatment is clinically suitable and the visit can be arranged for your location.",
      },
      {
        question: "Does an IV drip cure food poisoning?",
        answer:
          "IV fluids may help manage dehydration, but they do not automatically treat the underlying cause. The doctor will assess whether other treatment or tests are needed.",
      },
      {
        question: "How do I know whether I need IV fluids?",
        answer:
          "A doctor must assess your symptoms, hydration status, ability to drink, medical history and examination findings. Many patients can rehydrate orally and do not need an IV.",
      },
      {
        question: "How long does an IV drip take?",
        answer:
          "Treatment time varies according to the fluid prescribed, the patient's condition and the required infusion rate. The medical team will monitor you throughout treatment.",
      },
      {
        question: "Can medication be added to the IV drip?",
        answer:
          "Medication is only considered when clinically indicated after examination. It is not automatically added to every IV treatment.",
      },
      {
        question: "Is IV therapy safe for everyone?",
        answer:
          "No. Some heart, kidney and fluid-balance conditions may make IV fluids inappropriate. Patients should disclose all medical conditions, allergies and regular medication.",
      },
      {
        question: "Can children receive IV therapy at a hotel?",
        answer:
          "Children require careful medical assessment. Depending on age, symptoms and severity, hospital-based care may be safer and more appropriate.",
      },
      {
        question: "Can IV therapy help after vomiting and diarrhoea?",
        answer:
          "It may help restore fluids when dehydration is present and oral intake is not sufficient. The doctor must first assess the cause and severity of symptoms.",
      },
      {
        question: "Will travel insurance cover IV treatment?",
        answer:
          "Coverage depends on your policy and insurance provider. Keep medical documents, invoices and receipts, and confirm reimbursement requirements directly with your insurer.",
      },
      {
        question: "When should I go to hospital instead of having an IV at my hotel?",
        answer:
          "Hospital care may be necessary for severe dehydration, confusion, fainting, blood in vomit or stool, severe abdominal pain, unstable vital signs or rapidly worsening symptoms.",
      },
      {
        question: "When should I call an ambulance?",
        answer:
          "Call 112 immediately for severe breathing difficulty, chest pain, unconsciousness, stroke symptoms, seizures, uncontrolled bleeding, major trauma or another life-threatening emergency.",
      },
    ],
    relatedPages: [
      {
        title: "Dehydration Treatment Fethiye",
        href: "/dehydration-treatment-fethiye",
      },
      {
        title: "Food Poisoning Doctor Fethiye",
        href: "/food-poisoning-doctor-fethiye",
      },
      {
        title: "Gastroenteritis Doctor Fethiye",
        href: "/gastroenteritis-doctor-fethiye",
      },
      {
        title: "Hotel Doctor Fethiye",
        href: "/hotel-doctor-fethiye",
      },
      {
        title: "Home Visit Doctor Fethiye",
        href: "/home-visit-doctor-fethiye",
      },
      {
        title: "Emergency Doctor Fethiye",
        href: "/emergency-doctor-fethiye",
      },
    ],
  },

  {
    slug: "food-poisoning-doctor-fethiye",
    title: "Food Poisoning Doctor Fethiye",
    metaTitle:
      "Food Poisoning Doctor Fethiye | Hotel and Home Medical Visit",
    metaDescription:
      "Vomiting, diarrhoea or stomach pain in Fethiye? Contact an English-speaking food poisoning doctor for a private hotel, villa or home visit.",
    eyebrow: "Private Care for Stomach Illness",
    heading: "English-Speaking Food Poisoning Doctor in Fethiye",
    introduction:
      "Food poisoning and gastroenteritis can begin suddenly and quickly disrupt a holiday. Calis Doctor provides private English-speaking medical assessments for tourists, families and international residents experiencing vomiting, diarrhoea, abdominal pain, nausea, weakness or dehydration in Fethiye and Çalış Beach. Where appropriate, a doctor may visit your hotel, villa, apartment or holiday accommodation and explain the safest next steps clearly.",

    sections: [
      {
        title: "Private medical assessment for food poisoning symptoms",
        content: [
          "Food poisoning is usually caused by contaminated food or drink, although similar symptoms may also result from viral gastroenteritis, bacterial infection, medication side effects or another digestive problem. Because the symptoms can overlap, a medical assessment is useful when illness is severe, persistent or causing dehydration.",
          "During a hotel or home visit, the doctor will ask when the symptoms started, what food or drink may have been consumed, how often vomiting or diarrhoea is occurring and whether there are warning signs such as blood, fainting, severe pain or high fever.",
          "The doctor may also check temperature, pulse, blood pressure, oxygen level, hydration status and abdominal findings. Treatment recommendations are based on the individual patient's symptoms, medical history, age, allergies and overall condition.",
        ],
      },
      {
        title: "Common symptoms of food poisoning",
        content: [
          "Typical symptoms include nausea, vomiting, diarrhoea, abdominal cramps, bloating, loss of appetite, weakness and fever. Some patients also experience headache, dizziness, chills or muscle aches.",
          "Symptoms may begin within a few hours of eating contaminated food, but certain infections can take several days to appear. The timing alone does not always identify the cause.",
          "Many mild cases improve with rest and oral hydration. Medical review becomes more important when symptoms are intense, the patient cannot keep fluids down or there are signs of significant dehydration.",
        ],
      },
      {
        title: "Preventing and treating dehydration",
        content: [
          "Vomiting and diarrhoea can cause rapid fluid and electrolyte loss, especially in hot weather. Signs of dehydration include dry mouth, strong thirst, dizziness, reduced urination, dark urine, weakness and a rapid heartbeat.",
          "Frequent small sips of oral rehydration solution are often easier to tolerate than large amounts of plain water. Patients should avoid alcohol and may need to limit very sugary, fatty or spicy foods until symptoms settle.",
          "IV fluids may be considered only after a medical assessment confirms that they are appropriate. An IV drip does not cure the underlying infection, but it may help manage dehydration when oral fluids cannot be tolerated.",
        ],
      },
      {
        title: "Medication and antibiotic use",
        content: [
          "Medication may be recommended to help control nausea, vomiting, abdominal discomfort or other symptoms when clinically appropriate. The doctor will consider your medical history, allergies and current medicines before making a recommendation.",
          "Antibiotics are not required for every case of food poisoning. Many illnesses are viral or self-limiting, and unnecessary antibiotics can cause side effects and contribute to antibiotic resistance.",
          "Patients should not use leftover antibiotics or medication prescribed for another person. Treatment should follow an individual medical assessment and clear dosage instructions.",
        ],
      },
      {
        title: "When food poisoning requires urgent medical care",
        content: [
          "Seek urgent medical assessment for blood in vomit or stool, severe or localised abdominal pain, persistent high fever, repeated fainting, confusion, severe weakness or inability to keep any fluids down.",
          "Very low urine output, worsening dizziness, rapid heartbeat and unusual drowsiness can indicate significant dehydration. Young children, older adults, pregnant patients and people with chronic illnesses may become unwell more quickly.",
          "Call Turkey's emergency number 112 immediately for loss of consciousness, severe breathing difficulty, seizures, shock, rapidly worsening symptoms or another life-threatening condition.",
        ],
      },
      {
        title: "Food poisoning care for children and families",
        content: [
          "Children can become dehydrated more quickly than adults. Parents should monitor drinking, urine output, alertness, fever and how frequently vomiting or diarrhoea is occurring.",
          "Warning signs in children include unusual sleepiness, no tears when crying, a very dry mouth, sunken eyes, reduced wet nappies or urination, breathing difficulty and inability to keep fluids down.",
          "A private accommodation visit can be more comfortable for families, but serious symptoms may still require paediatric or hospital assessment. The doctor will explain when further care is necessary.",
        ],
      },
      {
        title: "Hotel, villa and apartment visits in Fethiye",
        content: [
          "Calis Doctor may provide medical visits to hotels, resorts, villas, apartments, Airbnb properties and private residences across Çalış Beach and Fethiye, depending on location and availability.",
          "When requesting a visit, send your name, accommodation details, room number if applicable, a Google Maps location pin and a short description of the symptoms.",
          "Arrival time depends on traffic, distance, current demand and medical team availability. The team can provide practical information after receiving your details.",
        ],
      },
      {
        title: "Travel insurance and medical documentation",
        content: [
          "Some travel insurance policies may cover unexpected medical treatment abroad. Coverage and reimbursement rules vary between insurers and policies.",
          "Keep invoices, medical reports, prescriptions and receipts if you intend to make a claim. Your insurer may request these documents as evidence of the consultation and treatment.",
          "Certain insurers require patients to contact an assistance line before receiving private treatment. Checking your policy conditions can help prevent difficulties with reimbursement.",
        ],
      },
      {
        title: "Recovery and aftercare",
        content: [
          "Recovery time depends on the cause and severity of the illness. Many uncomplicated cases improve over a few days, but weakness and appetite changes may continue for longer.",
          "Patients should gradually return to normal food as tolerated, continue hydration and follow all medical instructions. Rest is important, particularly in hot weather.",
          "Seek further medical care if symptoms worsen, new warning signs appear, fever persists or recovery does not progress as expected.",
        ],
      },
    ],

    symptoms: [
      "Nausea and repeated vomiting",
      "Diarrhoea",
      "Abdominal cramps or stomach pain",
      "Fever and chills",
      "Weakness and fatigue",
      "Loss of appetite",
      "Dizziness",
      "Dry mouth and thirst",
      "Reduced or dark-coloured urine",
      "Signs of dehydration",
    ],

    benefits: [
      "English-speaking medical assessment",
      "Hotel, villa and apartment visits",
      "Hydration and dehydration evaluation",
      "Medication guidance when appropriate",
      "IV therapy only when clinically indicated",
      "Clear emergency warning signs",
      "Support for tourists and families",
      "Hospital referral when required",
    ],

    faq: [
      {
        question: "Can a doctor visit my hotel for food poisoning in Fethiye?",
        answer:
          "Yes. A private medical visit may be arranged for hotels, villas, apartments and holiday accommodation in Çalış Beach and Fethiye, depending on location and availability.",
      },
      {
        question: "What are the most common symptoms of food poisoning?",
        answer:
          "Common symptoms include nausea, vomiting, diarrhoea, abdominal cramps, fever, weakness, loss of appetite and dehydration.",
      },
      {
        question: "How quickly can food poisoning symptoms begin?",
        answer:
          "Symptoms may start within a few hours or several days after consuming contaminated food or drink, depending on the cause.",
      },
      {
        question: "Do I need antibiotics for food poisoning?",
        answer:
          "Not necessarily. Many cases do not require antibiotics. A doctor should assess your symptoms and determine whether antibiotic treatment is appropriate.",
      },
      {
        question: "Can IV fluids be given at my hotel?",
        answer:
          "IV fluids may be considered after a medical assessment when dehydration is significant and oral fluids cannot be tolerated. They are not automatically suitable for every patient.",
      },
      {
        question: "What should I drink when I have vomiting and diarrhoea?",
        answer:
          "Small, frequent sips of oral rehydration solution are often helpful. A doctor should assess patients who cannot keep fluids down or show signs of dehydration.",
      },
      {
        question: "When is food poisoning dangerous?",
        answer:
          "Blood in vomit or stool, severe abdominal pain, persistent high fever, confusion, fainting, very low urine output or inability to drink require urgent medical assessment.",
      },
      {
        question: "Can children be assessed at our accommodation?",
        answer:
          "Yes. Children may be assessed during a hotel or home visit. Serious symptoms, severe dehydration or rapid deterioration may require hospital care.",
      },
      {
        question: "How long does food poisoning usually last?",
        answer:
          "Many uncomplicated cases improve within a few days, but the duration varies depending on the cause, severity and patient's overall health.",
      },
      {
        question: "Can I continue my holiday activities?",
        answer:
          "Rest and hydration are usually important during recovery. Avoid swimming, alcohol, prolonged sun exposure and strenuous activity until you are feeling stronger.",
      },
      {
        question: "Will travel insurance cover the doctor visit?",
        answer:
          "Coverage depends on your insurer and policy. Keep all medical reports, invoices, prescriptions and receipts and confirm reimbursement requirements directly with your provider.",
      },
      {
        question: "When should I call an ambulance?",
        answer:
          "Call 112 for loss of consciousness, seizures, severe breathing difficulty, shock, major bleeding or another rapidly worsening life-threatening condition.",
      },
    ],

    relatedPages: [
      {
        title: "IV Therapy Fethiye",
        href: "/iv-therapy-fethiye",
      },
      {
        title: "Gastroenteritis Doctor Fethiye",
        href: "/gastroenteritis-doctor-fethiye",
      },
      {
        title: "Dehydration Treatment Fethiye",
        href: "/dehydration-treatment-fethiye",
      },
      {
        title: "Hotel Doctor Fethiye",
        href: "/hotel-doctor-fethiye",
      },
      {
        title: "Home Visit Doctor Fethiye",
        href: "/home-visit-doctor-fethiye",
      },
      {
        title: "Child Doctor Fethiye",
        href: "/child-doctor-fethiye",
      },
    ],
  },

  {
    slug: "ear-infection-doctor-fethiye",
    title: "Ear Infection Doctor Fethiye",
    metaTitle:
      "Ear Infection Doctor Fethiye | Ear Pain After Swimming",
    metaDescription:
      "Ear pain, blocked ears or discharge after swimming in Fethiye? Contact an English-speaking doctor for a private hotel, villa or home visit.",
    eyebrow: "Private Care for Ear Pain and Swimmer's Ear",
    heading: "English-Speaking Ear Infection Doctor in Fethiye",
    introduction:
      "Ear pain, blocked ears and swimmer's ear are common problems during beach holidays. Calis Doctor provides private English-speaking medical assessments for tourists, families and international residents experiencing ear pain, discharge, reduced hearing, itching, fever or dizziness in Fethiye and Çalış Beach. Where appropriate, a doctor may visit your hotel, villa, apartment or holiday accommodation and explain the safest treatment plan clearly.",

    sections: [
      {
        title: "Private assessment for ear pain and ear infections",
        content: [
          "Ear symptoms can have several causes, including swimmer's ear, middle-ear infection, earwax blockage, pressure changes, irritation, trauma or a problem affecting the eardrum. Because treatment differs according to the cause, examination is important before using ear drops or antibiotics.",
          "During a hotel or home visit, the doctor will ask when the pain started, whether swimming or flying may be related, whether there is discharge, fever, hearing loss, dizziness or recent cold symptoms and whether the patient has had previous ear problems.",
          "The doctor may examine the ear canal and eardrum, check temperature and assess nearby areas such as the throat and lymph nodes. Treatment recommendations are based on the examination findings, age, medical history, allergies and current medicines.",
        ],
      },
      {
        title: "Swimmer's ear after the pool or sea",
        content: [
          "Swimmer's ear is an infection or inflammation of the outer ear canal. It often develops after water remains trapped in the ear following swimming in the sea or pool.",
          "Symptoms may include pain when touching or pulling the outer ear, itching, swelling, discharge, a blocked sensation and reduced hearing. The pain can become intense if the inflammation progresses.",
          "Keeping the ear dry and avoiding further swimming are usually important during recovery. Patients should not insert cotton buds, fingers or other objects into the ear canal.",
        ],
      },
      {
        title: "Middle-ear infection and pressure-related pain",
        content: [
          "A middle-ear infection may cause deeper ear pain, pressure, fever, reduced hearing and symptoms following a cold or respiratory infection. Children are especially prone to middle-ear infections.",
          "Air travel, diving and rapid pressure changes can also cause ear pain or a blocked sensation. These symptoms may result from pressure injury rather than infection.",
          "A medical examination helps distinguish between outer-ear infection, middle-ear infection, pressure-related problems and earwax blockage so that treatment is appropriate.",
        ],
      },
      {
        title: "Ear drops, pain relief and antibiotics",
        content: [
          "Treatment may include suitable ear drops, pain relief, advice to keep the ear dry or other medication depending on the diagnosis. Not every ear problem requires antibiotics.",
          "Certain ear drops should not be used if the eardrum may be perforated. For this reason, patients should avoid using leftover or over-the-counter drops without an appropriate examination.",
          "Antibiotics are prescribed only when clinically indicated. The doctor will consider allergies, previous reactions and the likely cause of the symptoms before recommending treatment.",
        ],
      },
      {
        title: "Blocked ears and earwax",
        content: [
          "A blocked sensation or reduced hearing may be caused by earwax rather than infection. Swimming can cause existing wax to swell and make the blockage feel worse.",
          "Patients should not attempt to remove wax with cotton buds, hairpins or other objects, as this can push it deeper or injure the ear canal and eardrum.",
          "The doctor can assess whether wax is present and advise on the safest next step. Removal may require appropriate equipment or referral to a suitable clinic.",
        ],
      },
      {
        title: "Ear infections in children",
        content: [
          "Children may show ear pain by crying, touching the ear, sleeping poorly, becoming irritable or refusing food. Fever, discharge and reduced responsiveness to sound may also occur.",
          "A private accommodation visit can be more comfortable for families, but serious symptoms may require paediatric or hospital assessment.",
          "Parents should seek urgent care for unusual drowsiness, swelling behind the ear, severe headache, neck stiffness, breathing difficulty, seizures or a rapidly worsening condition.",
        ],
      },
      {
        title: "When ear symptoms require urgent medical care",
        content: [
          "Urgent assessment is important for severe dizziness, sudden significant hearing loss, facial weakness, swelling or redness behind the ear, severe headache, persistent high fever or blood coming from the ear.",
          "Ear pain following a major head injury, diving accident or suspected foreign object also requires prompt medical evaluation.",
          "Call Turkey's emergency number 112 for loss of consciousness, seizures, serious head trauma, severe breathing difficulty or another life-threatening condition.",
        ],
      },
      {
        title: "Hotel, villa and apartment visits in Fethiye",
        content: [
          "Calis Doctor may provide ear assessments at hotels, resorts, villas, apartments, Airbnb properties and private residences across Çalış Beach and Fethiye, depending on location and availability.",
          "When requesting a visit, send your name, accommodation details, room number if applicable, a Google Maps location pin and a brief description of the symptoms.",
          "Arrival time depends on traffic, distance, current demand and medical team availability. The team can provide practical information after receiving your details.",
        ],
      },
      {
        title: "Swimming, flying and recovery advice",
        content: [
          "Patients are commonly advised to avoid swimming and keep the affected ear dry until symptoms have improved and treatment is complete.",
          "Flying or diving may worsen pressure-related pain in some conditions. The doctor can advise whether travel plans should be adjusted based on the examination.",
          "Seek further medical care if pain becomes worse, discharge develops, hearing decreases, fever persists or symptoms fail to improve as expected.",
        ],
      },
    ],

    symptoms: [
      "Ear pain",
      "Pain after swimming",
      "Blocked ear sensation",
      "Reduced hearing",
      "Ear discharge",
      "Itching in the ear canal",
      "Fever",
      "Dizziness or imbalance",
      "Pressure after flying or diving",
      "Pain when touching the outer ear",
    ],

    benefits: [
      "English-speaking medical assessment",
      "Hotel, villa and apartment visits",
      "Ear canal and eardrum examination",
      "Treatment guidance based on diagnosis",
      "Prescription support when appropriate",
      "Advice about swimming and flying",
      "Child-friendly assessment",
      "Hospital or specialist referral when required",
    ],

    faq: [
      {
        question: "Can a doctor visit my hotel for ear pain in Fethiye?",
        answer:
          "Yes. A private medical visit may be arranged for hotels, villas, apartments and holiday accommodation in Çalış Beach and Fethiye, depending on location and availability.",
      },
      {
        question: "Can swimming cause an ear infection?",
        answer:
          "Yes. Water trapped in the outer ear canal can contribute to irritation and infection, commonly known as swimmer's ear.",
      },
      {
        question: "What are the symptoms of swimmer's ear?",
        answer:
          "Common symptoms include pain when touching the outer ear, itching, swelling, discharge, reduced hearing and a blocked sensation.",
      },
      {
        question: "Should I keep swimming with an ear infection?",
        answer:
          "It is usually advisable to keep the ear dry and avoid swimming until the ear has been assessed and symptoms have improved.",
      },
      {
        question: "Can I use ear drops without seeing a doctor?",
        answer:
          "It is safer to have the ear examined first because some drops are unsuitable when the eardrum may be perforated or the diagnosis is uncertain.",
      },
      {
        question: "Do all ear infections need antibiotics?",
        answer:
          "No. Treatment depends on whether the problem affects the outer ear, middle ear or has another cause. Antibiotics are used only when clinically appropriate.",
      },
      {
        question: "Can earwax cause pain or hearing loss after swimming?",
        answer:
          "Yes. Water can cause existing earwax to swell, leading to blockage, discomfort and reduced hearing.",
      },
      {
        question: "Can children be examined at our accommodation?",
        answer:
          "Yes. Children may be assessed during a hotel or home visit. Serious symptoms or complications may require hospital or specialist care.",
      },
      {
        question: "Is ear discharge always an infection?",
        answer:
          "Not always. Discharge may be caused by infection, irritation, injury or a perforated eardrum. Medical examination is recommended.",
      },
      {
        question: "Can I fly with an ear infection?",
        answer:
          "Flying may worsen pressure and pain in some ear conditions. A doctor can advise based on the examination and severity of symptoms.",
      },
      {
        question: "When is ear pain urgent?",
        answer:
          "Sudden significant hearing loss, facial weakness, swelling behind the ear, severe dizziness, high fever, blood from the ear or severe headache require urgent assessment.",
      },
      {
        question: "How long does an ear infection take to improve?",
        answer:
          "Recovery time varies according to the cause and severity. Seek further care if symptoms worsen or do not improve as expected.",
      },
    ],

    relatedPages: [
      {
        title: "Hotel Doctor Fethiye",
        href: "/hotel-doctor-fethiye",
      },
      {
        title: "Home Visit Doctor Fethiye",
        href: "/home-visit-doctor-fethiye",
      },
      {
        title: "Child Doctor Fethiye",
        href: "/child-doctor-fethiye",
      },
      {
        title: "Tourist Doctor Fethiye",
        href: "/tourist-doctor-fethiye",
      },
      {
        title: "Emergency Doctor Fethiye",
        href: "/emergency-doctor-fethiye",
      },
      {
        title: "Dehydration Treatment Fethiye",
        href: "/dehydration-treatment-fethiye",
      },
    ],
  },

  {
    slug: "gastroenteritis-doctor-fethiye",
    title: "Gastroenteritis Doctor in Fethiye",
    metaTitle:
      "Gastroenteritis Doctor Fethiye | Vomiting and Diarrhoea Care",
    metaDescription:
      "Medical care for gastroenteritis, vomiting and diarrhoea in Fethiye. English-speaking doctor visits to hotels, villas and apartments.",
    eyebrow: "Vomiting and Diarrhoea Treatment",
    heading: "Gastroenteritis Treatment in Fethiye",
    introduction:
      "Gastroenteritis causes inflammation of the stomach and intestines and commonly results in vomiting, diarrhoea, abdominal cramps and weakness. Our English-speaking doctors provide private assessments at hotels and homes throughout Fethiye.",
    sections: [
      {
        title: "Understanding gastroenteritis",
        content: [
          "Gastroenteritis may be caused by viruses, bacteria or contaminated food and water. Symptoms vary from mild discomfort to significant dehydration.",
          "Most uncomplicated cases improve with hydration and supportive treatment, but medical review may be necessary when symptoms are severe or persistent.",
        ],
      },
      {
        title: "Assessment and treatment",
        content: [
          "The doctor will assess your hydration, temperature, abdominal symptoms and medical history.",
          "Treatment may include hydration advice, symptom-relieving medication, dietary recommendations or further investigation.",
        ],
      },
      {
        title: "Preventing dehydration",
        content: [
          "Frequent small amounts of oral rehydration solution may be easier to tolerate than large drinks.",
          "Patients who cannot retain fluids or who show signs of significant dehydration may require additional medical care.",
        ],
      },
    ],
    symptoms: [
      "Vomiting",
      "Diarrhoea",
      "Abdominal cramps",
      "Nausea",
      "Fever",
      "Weakness",
      "Loss of appetite",
      "Dehydration",
    ],
    benefits: [
      "Private medical assessment",
      "Accommodation visits",
      "Hydration evaluation",
      "English-speaking care",
      "Treatment plan",
      "Follow-up support",
    ],
    faq: [
      {
        question: "Is gastroenteritis the same as food poisoning?",
        answer:
          "The symptoms can be similar. Food poisoning is one possible cause, while gastroenteritis can also result from viral or bacterial infections.",
      },
      {
        question: "How long does gastroenteritis last?",
        answer:
          "Many uncomplicated cases improve within a few days, but duration varies according to the cause and the patient's condition.",
      },
      {
        question: "When should I call a doctor?",
        answer:
          "Seek medical advice if you cannot keep fluids down, symptoms are severe, blood is present, fever persists or signs of dehydration develop.",
      },
    ],
    relatedPages: [
      {
        title: "Food Poisoning Doctor",
        href: "/food-poisoning-doctor-fethiye",
      },
      {
        title: "IV Therapy",
        href: "/iv-therapy-fethiye",
      },
      {
        title: "Dehydration Treatment",
        href: "/dehydration-treatment-fethiye",
      },
    ],
  },

  {
    slug: "tourist-doctor-fethiye",
    title: "Tourist Doctor in Fethiye",
    metaTitle:
      "Tourist Doctor Fethiye | English-Speaking Medical Assistance",
    metaDescription:
      "English-speaking private doctor for tourists in Fethiye and Calis Beach. Hotel, villa and apartment visits available 24/7.",
    eyebrow: "Medical Care for International Visitors",
    heading: "English-Speaking Tourist Doctor in Fethiye",
    introduction:
      "Calis Doctor supports international visitors who need clear, accessible medical care during their holiday. Our private doctor service includes hotel, villa and apartment visits across Fethiye and Calis Beach.",
    sections: [
      {
        title: "Healthcare designed for tourists",
        content: [
          "Becoming unwell abroad can be confusing. Our team explains your condition and treatment options in English and helps you understand when further care is required.",
          "We regularly assist patients with stomach illness, infections, dehydration, ear pain, fever, allergic reactions and minor injuries.",
        ],
      },
      {
        title: "Private accommodation visits",
        content: [
          "Patients can request a medical visit at their hotel, villa, apartment or holiday residence.",
          "This provides privacy and avoids unnecessary travel when you are feeling unwell.",
        ],
      },
      {
        title: "Travel insurance and medical reports",
        content: [
          "Depending on the consultation and treatment, medical documents may be provided for your records or travel insurance claim.",
          "Insurance reimbursement depends on your policy and provider, so patients should confirm coverage directly with their insurer.",
        ],
      },
    ],
    symptoms: [
      "Food poisoning",
      "Ear infections",
      "Fever and flu",
      "Dehydration",
      "Allergic reactions",
      "Sunburn",
      "Urinary symptoms",
      "Minor injuries",
    ],
    benefits: [
      "English-speaking doctor",
      "Tourist-focused service",
      "Hotel and villa visits",
      "24/7 availability",
      "Clear explanations",
      "Medical documentation",
    ],
    faq: [
      {
        question: "Can tourists use private doctors in Turkey?",
        answer:
          "Yes. International visitors can access private medical services and may be able to claim costs through travel insurance depending on their policy.",
      },
      {
        question: "Do I need a Turkish identity number?",
        answer:
          "Private tourist medical consultations can generally be arranged using your passport or travel identification details.",
      },
      {
        question: "Will the doctor speak English?",
        answer:
          "Yes. Our service is specifically designed to provide English-speaking medical assistance.",
      },
    ],
    relatedPages: [
      {
        title: "Hotel Doctor",
        href: "/hotel-doctor-fethiye",
      },
      {
        title: "Emergency Doctor",
        href: "/emergency-doctor-fethiye",
      },
      {
        title: "Home Visit Doctor",
        href: "/home-visit-doctor-fethiye",
      },
    ],
  },

  {
    slug: "child-doctor-fethiye",
    title: "Child Doctor in Fethiye",
    metaTitle:
      "Child Doctor Fethiye | English-Speaking Medical Visit",
    metaDescription:
      "English-speaking doctor visits for children in Fethiye and Calis Beach. Private hotel, villa and apartment medical assessments.",
    eyebrow: "Medical Care for Children",
    heading: "Child Doctor Visits in Fethiye",
    introduction:
      "When a child becomes unwell during a family holiday, parents need clear and reassuring medical guidance. Calis Doctor provides private medical visits for children staying in hotels, villas and apartments across Fethiye.",
    sections: [
      {
        title: "Common childhood illnesses during holidays",
        content: [
          "Children may experience fever, vomiting, diarrhoea, ear pain, sore throat, cough, allergic reactions, sunburn or insect bites.",
          "A doctor can assess the child's general condition and determine whether home care, medication or hospital assessment is required.",
        ],
      },
      {
        title: "Child-friendly accommodation visits",
        content: [
          "Being examined in familiar surroundings can be more comfortable for young children.",
          "Parents receive clear information about warning signs, medication use, hydration and follow-up care.",
        ],
      },
      {
        title: "When urgent care is required",
        content: [
          "Breathing difficulty, seizures, unusual drowsiness, a non-blanching rash, severe dehydration or a rapidly worsening condition require urgent medical attention.",
          "For life-threatening symptoms, call 112 immediately.",
        ],
      },
    ],
    symptoms: [
      "Fever",
      "Vomiting",
      "Diarrhoea",
      "Ear pain",
      "Sore throat",
      "Cough",
      "Rashes",
      "Insect bites",
    ],
    benefits: [
      "Child-friendly assessment",
      "Visit at accommodation",
      "English-speaking doctor",
      "Parent guidance",
      "Treatment advice",
      "Urgent referral when needed",
    ],
    faq: [
      {
        question: "Can the doctor visit my child at our hotel?",
        answer:
          "Yes. We provide medical visits to hotels, villas and apartments, subject to availability.",
      },
      {
        question: "When is a child's fever an emergency?",
        answer:
          "Urgency depends on the child's age, temperature and other symptoms. Breathing difficulty, seizures, extreme drowsiness or dehydration require urgent assessment.",
      },
      {
        question: "Can you prescribe medicine for children?",
        answer:
          "Medication may be prescribed when clinically appropriate after examining the child and considering age, weight and medical history.",
      },
    ],
    relatedPages: [
      {
        title: "Home Visit Doctor",
        href: "/home-visit-doctor-fethiye",
      },
      {
        title: "Ear Infection Doctor",
        href: "/ear-infection-doctor-fethiye",
      },
      {
        title: "Emergency Doctor",
        href: "/emergency-doctor-fethiye",
      },
    ],
  },

  {
    slug: "dehydration-treatment-fethiye",
    title: "Dehydration Treatment in Fethiye",
    metaTitle:
      "Dehydration Treatment Fethiye | Doctor and IV Assessment",
    metaDescription:
      "Medical assessment for dehydration in Fethiye caused by heat, vomiting or diarrhoea. Hotel and home visits available.",
    eyebrow: "Hydration and Heat-Related Illness Care",
    heading: "Dehydration Treatment in Fethiye",
    introduction:
      "Hot weather, vomiting, diarrhoea and inadequate fluid intake can quickly cause dehydration during a holiday. Calis Doctor provides medical assessment and treatment guidance for dehydrated patients across Fethiye and Calis Beach.",
    sections: [
      {
        title: "Signs of dehydration",
        content: [
          "Common symptoms include dry mouth, thirst, dizziness, headache, weakness, reduced urination and dark-coloured urine.",
          "More severe dehydration can cause confusion, fainting, rapid heartbeat and extreme tiredness.",
        ],
      },
      {
        title: "Medical assessment and treatment",
        content: [
          "The doctor will assess your symptoms, fluid intake, urine output and general condition.",
          "Treatment may involve oral rehydration, rest, medication for the underlying illness or IV fluids when medically appropriate.",
        ],
      },
      {
        title: "Heat and dehydration prevention",
        content: [
          "Drink regularly, limit prolonged sun exposure and avoid excessive alcohol during very hot weather.",
          "People experiencing vomiting or diarrhoea should replace both fluids and electrolytes.",
        ],
      },
    ],
    symptoms: [
      "Dry mouth",
      "Dizziness",
      "Weakness",
      "Headache",
      "Dark urine",
      "Reduced urination",
      "Rapid heartbeat",
      "Confusion",
    ],
    benefits: [
      "Hydration assessment",
      "Hotel and home visits",
      "IV therapy when appropriate",
      "English-speaking doctor",
      "Heat illness guidance",
      "Further referral if needed",
    ],
    faq: [
      {
        question: "How do I know if I am dehydrated?",
        answer:
          "Thirst, dry mouth, dizziness, weakness and dark or reduced urine are common signs. Severe symptoms require medical assessment.",
      },
      {
        question: "Do I need an IV drip?",
        answer:
          "Not necessarily. Many patients can rehydrate orally. A doctor should determine whether IV fluids are medically appropriate.",
      },
      {
        question: "When is dehydration dangerous?",
        answer:
          "Confusion, fainting, inability to drink, very low urine output, rapid heartbeat or severe weakness require urgent medical attention.",
      },
    ],
    relatedPages: [
      {
        title: "IV Therapy",
        href: "/iv-therapy-fethiye",
      },
      {
        title: "Food Poisoning Doctor",
        href: "/food-poisoning-doctor-fethiye",
      },
      {
        title: "Gastroenteritis Doctor",
        href: "/gastroenteritis-doctor-fethiye",
      },
    ],
  },
];

export function getSeoPage(slug: string): SeoPage | undefined {
  return seoPages.find((page) => page.slug === slug);
}