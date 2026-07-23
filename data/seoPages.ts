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
      "IV Therapy Fethiye | Medical IV Drip at Hotel or Home",
    metaDescription:
      "Doctor-assessed IV therapy in Fethiye for dehydration and illness. Mobile medical visits to hotels, villas and apartments.",
    eyebrow: "Doctor-Assessed IV Treatment",
    heading: "Medical IV Therapy in Fethiye",
    introduction:
      "IV therapy may be considered for patients experiencing dehydration, persistent vomiting, diarrhoea or difficulty drinking enough fluids. At Calis Doctor, IV treatment is only provided following an appropriate medical assessment.",
    sections: [
      {
        title: "IV treatment based on medical need",
        content: [
          "IV fluids are not suitable for every patient. A doctor must first assess your symptoms, general condition and medical history.",
          "Where clinically appropriate, IV fluids may support hydration and recovery. Additional medication is only administered when medically indicated.",
        ],
      },
      {
        title: "Mobile IV therapy",
        content: [
          "Eligible patients may receive treatment at their hotel, villa or apartment, depending on the clinical assessment.",
          "The medical team will monitor your condition during the treatment and provide aftercare instructions.",
        ],
      },
      {
        title: "When further care may be required",
        content: [
          "Severe dehydration, ongoing inability to keep fluids down, blood in vomit or stool, severe abdominal pain or altered consciousness may require hospital treatment.",
          "The doctor will recommend further assessment when home-based care is not appropriate.",
        ],
      },
    ],
    symptoms: [
      "Dehydration",
      "Persistent vomiting",
      "Diarrhoea",
      "Weakness",
      "Heat-related illness",
      "Reduced oral fluid intake",
    ],
    benefits: [
      "Medical assessment first",
      "Treatment at accommodation",
      "Professional monitoring",
      "English-speaking team",
      "Clear aftercare advice",
      "Hospital referral if required",
    ],
    faq: [
      {
        question: "Can I order an IV drip without seeing a doctor?",
        answer:
          "No. IV therapy should only be provided after a medical assessment confirms that it is appropriate and safe.",
      },
      {
        question: "Can IV therapy be given at my hotel?",
        answer:
          "Yes, when medically appropriate and operationally possible, treatment may be provided at your hotel or accommodation.",
      },
      {
        question: "Does an IV drip cure food poisoning?",
        answer:
          "IV fluids do not cure the underlying cause, but they may help manage dehydration. The doctor will assess whether other treatment is required.",
      },
    ],
    relatedPages: [
      {
        title: "Dehydration Treatment",
        href: "/dehydration-treatment-fethiye",
      },
      {
        title: "Food Poisoning Doctor",
        href: "/food-poisoning-doctor-fethiye",
      },
      {
        title: "Home Visit Doctor",
        href: "/home-visit-doctor-fethiye",
      },
    ],
  },

  {
    slug: "food-poisoning-doctor-fethiye",
    title: "Food Poisoning Doctor in Fethiye",
    metaTitle:
      "Food Poisoning Doctor Fethiye | Hotel and Home Medical Visit",
    metaDescription:
      "Suffering from vomiting, diarrhoea or stomach pain in Fethiye? Contact an English-speaking food poisoning doctor for a hotel or home visit.",
    eyebrow: "Stomach Illness Medical Care",
    heading: "Food Poisoning Treatment in Fethiye",
    introduction:
      "Food poisoning and gastroenteritis are common causes of illness during travel. Symptoms may begin suddenly and can lead to dehydration, weakness and severe discomfort. Calis Doctor provides private medical assessments for tourists experiencing stomach illness in Fethiye.",
    sections: [
      {
        title: "Symptoms of food poisoning",
        content: [
          "Common symptoms include nausea, vomiting, diarrhoea, stomach cramps, fever, weakness and loss of appetite.",
          "The severity and cause can vary. A medical assessment helps determine whether supportive care is sufficient or further investigation is needed.",
        ],
      },
      {
        title: "Treatment and hydration",
        content: [
          "Treatment depends on your symptoms, hydration level and overall condition. The doctor may recommend oral hydration, medication, dietary advice or further testing.",
          "IV fluids may be considered when dehydration is significant and the patient cannot tolerate oral fluids.",
        ],
      },
      {
        title: "Warning signs",
        content: [
          "Seek urgent medical attention for blood in stool or vomit, severe abdominal pain, confusion, fainting, high persistent fever or symptoms of severe dehydration.",
          "Young children, elderly patients, pregnant patients and people with chronic illnesses may require earlier medical review.",
        ],
      },
    ],
    symptoms: [
      "Nausea",
      "Vomiting",
      "Diarrhoea",
      "Stomach cramps",
      "Fever",
      "Weakness",
      "Dehydration",
      "Loss of appetite",
    ],
    benefits: [
      "Hotel or home visit",
      "English-speaking doctor",
      "Hydration assessment",
      "Treatment guidance",
      "IV therapy when appropriate",
      "Follow-up support",
    ],
    faq: [
      {
        question: "How quickly does food poisoning start?",
        answer:
          "Symptoms may begin within a few hours or several days after consuming contaminated food or drink, depending on the cause.",
      },
      {
        question: "Do I need antibiotics?",
        answer:
          "Not all cases require antibiotics. A doctor should assess your symptoms and determine whether antibiotics are appropriate.",
      },
      {
        question: "When is food poisoning dangerous?",
        answer:
          "Severe dehydration, blood in stool or vomit, severe pain, fainting, confusion or persistent high fever require urgent medical care.",
      },
    ],
    relatedPages: [
      {
        title: "IV Therapy",
        href: "/iv-therapy-fethiye",
      },
      {
        title: "Gastroenteritis Doctor",
        href: "/gastroenteritis-doctor-fethiye",
      },
      {
        title: "Dehydration Treatment",
        href: "/dehydration-treatment-fethiye",
      },
    ],
  },

  {
    slug: "ear-infection-doctor-fethiye",
    title: "Ear Infection Doctor in Fethiye",
    metaTitle:
      "Ear Infection Doctor Fethiye | Ear Pain After Swimming",
    metaDescription:
      "Ear pain or blocked ears after swimming? Contact an English-speaking doctor in Fethiye for hotel or home assessment and treatment.",
    eyebrow: "Ear Pain and Swimming-Related Infections",
    heading: "Ear Infection Treatment in Fethiye",
    introduction:
      "Ear pain after swimming is a common problem during beach holidays. Water trapped in the ear canal can contribute to irritation or infection. Our doctors assess ear pain, discharge, blocked ears and reduced hearing at hotels and homes across Fethiye.",
    sections: [
      {
        title: "Swimmer's ear and ear infections",
        content: [
          "Swimmer's ear usually affects the outer ear canal and may cause pain, itching, swelling or discharge.",
          "Middle-ear infections can cause deeper pain, fever, pressure and reduced hearing. Correct examination is important because treatment differs.",
        ],
      },
      {
        title: "Medical examination",
        content: [
          "The doctor will examine the ear and assess symptoms such as fever, discharge, hearing changes and dizziness.",
          "Treatment may include ear drops, pain relief or other medication depending on the diagnosis.",
        ],
      },
      {
        title: "Protecting your ear while recovering",
        content: [
          "Patients may be advised to keep the ear dry and avoid swimming until symptoms improve.",
          "Do not insert cotton buds or other objects into the ear canal, as this may worsen irritation or injury.",
        ],
      },
    ],
    symptoms: [
      "Ear pain",
      "Blocked ear",
      "Reduced hearing",
      "Ear discharge",
      "Itching",
      "Fever",
      "Pain after swimming",
      "Dizziness",
    ],
    benefits: [
      "Ear examination",
      "Hotel and home visits",
      "English-speaking doctor",
      "Treatment advice",
      "Prescription support",
      "Follow-up guidance",
    ],
    faq: [
      {
        question: "Can swimming cause an ear infection?",
        answer:
          "Yes. Moisture in the ear canal can create conditions that encourage irritation and infection, commonly known as swimmer's ear.",
      },
      {
        question: "Should I continue swimming?",
        answer:
          "It is generally advisable to keep the affected ear dry until it has been medically assessed and symptoms have improved.",
      },
      {
        question: "Can I use antibiotic ear drops myself?",
        answer:
          "Ear drops should be selected after examination because some products are not appropriate when the eardrum may be damaged.",
      },
    ],
    relatedPages: [
      {
        title: "Hotel Doctor",
        href: "/hotel-doctor-fethiye",
      },
      {
        title: "Child Doctor",
        href: "/child-doctor-fethiye",
      },
      {
        title: "Tourist Doctor",
        href: "/tourist-doctor-fethiye",
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