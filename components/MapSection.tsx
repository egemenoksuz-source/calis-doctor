import {
  Car,
  Clock3,
  MapPin,
  MessageCircle,
  Navigation,
  Phone,
} from "lucide-react";

const nearbyAreas = [
  "Çalış Beach",
  "Koca Çalış",
  "Foça",
  "Akarca",
  "Karagedik",
  "Fethiye Centre",
];

export default function MapSection() {
  return (
    <section
      id="location"
      className="scroll-mt-28 px-4 py-24 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-black uppercase tracking-[0.24em] text-cyan-700">
            Location & Coverage
          </p>

          <h2 className="mt-4 text-4xl font-black tracking-[-0.04em] text-slate-950 sm:text-5xl">
            Medical care throughout Çalış and Fethiye.
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            Our mobile doctor service provides hotel, villa, apartment and home
            visits across Çalış Beach and nearby Fethiye areas.
          </p>
        </div>

        <div className="mt-14 overflow-hidden rounded-[2.5rem] border border-slate-200 bg-white shadow-2xl shadow-cyan-950/10">
          <div className="grid lg:grid-cols-[1.2fr_0.8fr]">
            <div className="relative min-h-[500px] bg-slate-100">
              <iframe
                title="Calis Doctor service area map"
                src="https://www.google.com/maps?q=Calis%20Beach%20Fethiye%20Turkey&output=embed"
                className="absolute inset-0 h-full w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>

            <div className="px-7 py-12 sm:px-10 lg:px-12 lg:py-14">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-100 text-cyan-700">
                <MapPin size={26} />
              </div>

              <p className="mt-7 text-sm font-black uppercase tracking-[0.22em] text-cyan-700">
                Mobile Doctor Service
              </p>

              <h3 className="mt-3 text-3xl font-black tracking-[-0.03em] text-slate-950">
                We come directly to your location.
              </h3>

              <p className="mt-5 leading-7 text-slate-600">
                You do not need to travel while feeling unwell. Share your
                hotel, villa, apartment or home location and our medical team
                will confirm availability.
              </p>

              <div className="mt-8 space-y-4">
                <div className="flex items-start gap-4 rounded-2xl bg-[#f4fbfb] p-5">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-cyan-100 text-cyan-700">
                    <Navigation size={21} />
                  </div>

                  <div>
                    <p className="font-black text-slate-950">
                      Direct Location Visit
                    </p>

                    <p className="mt-1 text-sm leading-6 text-slate-600">
                      Hotel, villa, apartment and private home visits.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 rounded-2xl bg-[#f4fbfb] p-5">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-teal-100 text-teal-700">
                    <Clock3 size={21} />
                  </div>

                  <div>
                    <p className="font-black text-slate-950">
                      Available Day and Night
                    </p>

                    <p className="mt-1 text-sm leading-6 text-slate-600">
                      Contact us for urgent and planned medical visits.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 rounded-2xl bg-[#f4fbfb] p-5">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-emerald-100 text-emerald-700">
                    <Car size={21} />
                  </div>

                  <div>
                    <p className="font-black text-slate-950">
                      Wide Service Coverage
                    </p>

                    <p className="mt-1 text-sm leading-6 text-slate-600">
                      Çalış Beach, Fethiye Centre and surrounding areas.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                <a
                  href="https://wa.me/905519354800"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-3 rounded-2xl bg-emerald-500 px-5 py-4 font-black text-white transition hover:-translate-y-1 hover:bg-emerald-600"
                >
                  <MessageCircle size={20} />
                  Send Location
                </a>

                <a
                  href="tel:+905519354800"
                  className="inline-flex items-center justify-center gap-3 rounded-2xl bg-slate-950 px-5 py-4 font-black text-white transition hover:-translate-y-1 hover:bg-cyan-700"
                >
                  <Phone size={20} />
                  Call Doctor
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-slate-200 bg-[#f7fdfd] px-7 py-8 sm:px-10 lg:px-12">
            <p className="text-sm font-black uppercase tracking-[0.2em] text-slate-500">
              Main Service Areas
            </p>

            <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
              {nearbyAreas.map((area) => (
                <div
                  key={area}
                  className="flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm font-bold text-slate-700"
                >
                  <MapPin size={16} className="shrink-0 text-cyan-700" />
                  {area}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}