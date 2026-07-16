import {
  Clock3,
  MapPin,
  MessageCircle,
  Navigation,
  Phone,
  ShieldCheck,
  Stethoscope,
} from "lucide-react";

const contactDetails = [
  {
    title: "Phone & WhatsApp",
    value: "+90 551 935 48 00",
    description: "Call directly or send us a WhatsApp message.",
    icon: Phone,
  },
  {
    title: "Availability",
    value: "Day and Night",
    description: "Urgent visits and planned consultations.",
    icon: Clock3,
  },
  {
    title: "Service Area",
    value: "Çalış Beach & Fethiye",
    description: "Hotel, villa, apartment and home visits.",
    icon: MapPin,
  },
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="scroll-mt-28 px-4 py-24 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-7xl overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-cyan-600 via-teal-600 to-emerald-600 text-white shadow-2xl shadow-cyan-950/15">
        <div className="grid lg:grid-cols-[1.05fr_0.95fr]">
          <div className="relative px-7 py-14 sm:px-12 lg:px-16 lg:py-20">
            <div className="absolute -left-16 -top-16 h-72 w-72 rounded-full bg-white/10 blur-3xl" />

            <div className="relative">
              <p className="text-sm font-black uppercase tracking-[0.24em] text-cyan-100">
                Contact Calis Doctor
              </p>

              <h2 className="mt-4 max-w-3xl text-4xl font-black tracking-[-0.04em] sm:text-5xl">
                Need medical assistance in Çalış or Fethiye?
              </h2>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-cyan-50">
                Contact our English-speaking medical team for hotel visits,
                home visits, urgent medical care and planned consultations.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <span className="rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-black">
                  Tourists
                </span>

                <span className="rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-black">
                  Expats
                </span>

                <span className="rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-black">
                  International Residents
                </span>

                <span className="rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-black">
                  Families
                </span>
              </div>

              <div className="mt-9 flex flex-col gap-4 sm:flex-row">
                <a
                  href="https://wa.me/905519354800"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-3 rounded-2xl bg-white px-7 py-4 font-black text-emerald-700 transition hover:-translate-y-1"
                >
                  <MessageCircle size={21} />
                  WhatsApp Doctor
                </a>

                <a
                  href="tel:+905519354800"
                  className="inline-flex items-center justify-center gap-3 rounded-2xl bg-slate-950 px-7 py-4 font-black text-white transition hover:-translate-y-1"
                >
                  <Phone size={20} />
                  Call Now
                </a>
              </div>

              <div className="mt-9 flex items-start gap-4 rounded-2xl border border-white/15 bg-white/10 p-5 backdrop-blur">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white/15">
                  <ShieldCheck size={23} />
                </div>

                <div>
                  <p className="font-black">Private and clear communication</p>

                  <p className="mt-2 text-sm leading-6 text-cyan-50">
                    Share your location and a short description of the
                    patient&apos;s symptoms. The team will confirm availability
                    and the next step.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-white/15 bg-white/10 px-7 py-14 backdrop-blur-xl sm:px-12 lg:border-l lg:border-t-0 lg:py-20">
            <div className="space-y-5">
              {contactDetails.map((detail) => {
                const Icon = detail.icon;

                return (
                  <div
                    key={detail.title}
                    className="flex gap-4 rounded-2xl border border-white/15 bg-white/10 p-5"
                  >
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white/15">
                      <Icon size={22} />
                    </div>

                    <div>
                      <p className="text-sm font-bold text-cyan-100">
                        {detail.title}
                      </p>

                      <p className="mt-1 text-xl font-black">{detail.value}</p>

                      <p className="mt-2 text-sm leading-6 text-cyan-50">
                        {detail.description}
                      </p>
                    </div>
                  </div>
                );
              })}

              <a
                href="#location"
                className="flex items-center justify-center gap-3 rounded-2xl border border-white/20 bg-white/10 px-6 py-4 font-black transition hover:bg-white/20"
              >
                <Navigation size={20} />
                View Service Area
              </a>

              <a
                href="#services"
                className="flex items-center justify-center gap-3 rounded-2xl border border-white/20 bg-white/10 px-6 py-4 font-black transition hover:bg-white/20"
              >
                <Stethoscope size={20} />
                View Medical Services
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}