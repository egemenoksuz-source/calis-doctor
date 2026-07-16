import {
  BadgeCheck,
  Clock3,
  HeartHandshake,
  Languages,
  MapPin,
  MessageCircle,
  ShieldCheck,
  Star,
} from "lucide-react";

const trustItems = [
  {
    title: "English Speaking",
    description:
      "Clear communication for tourists, expats and international residents.",
    icon: Languages,
  },
  {
    title: "Private Care",
    description:
      "Discreet and patient-focused medical support wherever you are staying.",
    icon: ShieldCheck,
  },
  {
    title: "24/7 Availability",
    description:
      "Contact the medical team for urgent and planned doctor visits.",
    icon: Clock3,
  },
  {
    title: "Local Coverage",
    description:
      "Medical visits across Çalış Beach, Fethiye and nearby areas.",
    icon: MapPin,
  },
];

export default function Reviews() {
  return (
    <section
      id="reviews"
      className="px-4 py-24 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-black uppercase tracking-[0.24em] text-cyan-700">
            Patient Confidence
          </p>

          <h2 className="mt-4 text-4xl font-black tracking-[-0.04em] text-slate-950 sm:text-5xl">
            Medical care built around trust and clear communication.
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            Our goal is to make medical support simple, professional and
            reassuring for visitors and international residents in Çalış and
            Fethiye.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {trustItems.map((item) => {
            const Icon = item.icon;

            return (
              <article
                key={item.title}
                className="rounded-[2rem] border border-slate-200 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-2 hover:border-cyan-200 hover:shadow-xl hover:shadow-cyan-950/10"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-100 text-cyan-700">
                  <Icon size={25} />
                </div>

                <h3 className="mt-6 text-xl font-black text-slate-950">
                  {item.title}
                </h3>

                <p className="mt-3 leading-7 text-slate-600">
                  {item.description}
                </p>
              </article>
            );
          })}
        </div>

        <div className="mt-10 overflow-hidden rounded-[2.5rem] bg-slate-950 text-white shadow-2xl shadow-slate-950/10">
          <div className="grid lg:grid-cols-[1.05fr_0.95fr]">
            <div className="px-7 py-12 sm:px-10 lg:px-14 lg:py-16">
              <div className="flex items-center gap-2 text-amber-400">
                {Array.from({ length: 5 }).map((_, index) => (
                  <Star key={index} size={20} fill="currentColor" />
                ))}
              </div>

              <p className="mt-6 text-sm font-black uppercase tracking-[0.22em] text-cyan-300">
                Real Reviews Coming Soon
              </p>

              <h3 className="mt-4 text-3xl font-black tracking-[-0.03em] sm:text-4xl">
                Patient reviews will be added only after verification.
              </h3>

              <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-300">
                To keep this website transparent and trustworthy, we will only
                publish genuine patient feedback and verified reviews.
              </p>
            </div>

            <div className="border-t border-white/10 bg-white/[0.05] px-7 py-12 sm:px-10 lg:border-l lg:border-t-0 lg:px-12 lg:py-16">
              <div className="space-y-5">
                <div className="flex gap-4 rounded-2xl border border-white/10 bg-white/[0.06] p-5">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-emerald-400/15 text-emerald-300">
                    <BadgeCheck size={23} />
                  </div>

                  <div>
                    <p className="font-black">Verified Feedback Only</p>
                    <p className="mt-2 text-sm leading-6 text-slate-300">
                      No invented names, ratings or patient stories.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 rounded-2xl border border-white/10 bg-white/[0.06] p-5">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-cyan-400/15 text-cyan-300">
                    <HeartHandshake size={23} />
                  </div>

                  <div>
                    <p className="font-black">Patient Privacy</p>
                    <p className="mt-2 text-sm leading-6 text-slate-300">
                      Reviews will be shared respectfully and with permission.
                    </p>
                  </div>
                </div>

                <a
                  href="https://wa.me/905519354800"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center gap-3 rounded-2xl bg-emerald-500 px-6 py-4 font-black text-white transition hover:-translate-y-1 hover:bg-emerald-600"
                >
                  <MessageCircle size={20} />
                  Contact on WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}