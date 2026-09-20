import { Apple, MapPin, Mic, Pill, Play, Signal, Star, Video } from "lucide-react";
import Reveal from "./Reveal";

const QUICK_ACTIONS = [
  { icon: Mic, label: "Voice" },
  { icon: Video, label: "Video" },
  { icon: Pill, label: "Medicine" },
];

const NEARBY = [
  { initials: "AS", name: "Dr. Ananya Sharma", distance: "1.2 km" },
  { initials: "RM", name: "Dr. Rohan Mehta", distance: "1.8 km" },
];

export default function DownloadApp() {
  return (
    <section id="download" className="scroll-mt-24 bg-softbg py-20">
      <div className="mx-auto grid w-full max-w-[1200px] items-center gap-14 px-6 lg:grid-cols-2">
        <Reveal>
          <h2 className="text-[32px] font-bold leading-[1.15] tracking-tight text-charcoal md:text-[36px]">
            Download EmergencyMitra App
          </h2>
          <p className="mt-4 max-w-lg text-[16px] leading-relaxed text-medgray">
            Emergency healthcare in your pocket — SOS, video consults and medicine delivery, one
            tap away.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
            <a
              href="#download"
              aria-label="Download on the App Store"
              className="inline-flex items-center gap-3 rounded-lg bg-inkblack px-6 py-3.5 text-white transition-all duration-200 hover:scale-[1.03] hover:bg-charcoal"
            >
              <Apple size={26} strokeWidth={1.8} />
              <span className="text-left leading-tight">
                <span className="block text-[11px] font-medium uppercase tracking-wider text-white/70">
                  Download on the
                </span>
                <span className="block text-[16px] font-semibold">App Store</span>
              </span>
            </a>
            <a
              href="#download"
              aria-label="Get it on Google Play"
              className="inline-flex items-center gap-3 rounded-lg bg-inkblack px-6 py-3.5 text-white transition-all duration-200 hover:scale-[1.03] hover:bg-charcoal"
            >
              <Play size={22} className="fill-current" />
              <span className="text-left leading-tight">
                <span className="block text-[11px] font-medium uppercase tracking-wider text-white/70">
                  Get it on
                </span>
                <span className="block text-[16px] font-semibold">Google Play</span>
              </span>
            </a>
          </div>

          <div className="mt-6 flex flex-wrap items-center gap-2 text-[14px] text-medgray">
            <Star size={15} className="fill-coral text-coral" />
            <span>
              <span className="font-semibold text-charcoal">4.8</span> rating · 50,000+ downloads ·
              Free forever
            </span>
          </div>
        </Reveal>

        {/* Phone mockup showing the app home screen */}
        <Reveal delay={0.12} y={32}>
          <div className="mx-auto w-full max-w-[280px]" aria-hidden="true">
            <div className="rounded-[36px] border border-line bg-white p-2.5">
              <div className="flex h-[500px] flex-col overflow-hidden rounded-[28px] border border-line bg-white px-5 pb-5 pt-3">
                <div className="flex items-center justify-between text-[11px] font-semibold text-medgray">
                  <span>9:41</span>
                  <Signal size={13} />
                </div>

                <div className="mt-4">
                  <p className="text-[18px] font-bold text-charcoal">Namaste, Amit</p>
                  <p className="mt-0.5 inline-flex items-center gap-1 text-[12px] text-medgray">
                    <MapPin size={11} className="text-coral" />
                    Connaught Place, New Delhi
                  </p>
                </div>

                <div className="relative mx-auto my-auto grid place-items-center py-6">
                  <span className="absolute h-32 w-32 animate-[sos-ring_2s_ease-out_infinite] rounded-full border-2 border-coral/25" />
                  <span
                    className="absolute h-32 w-32 animate-[sos-ring_2s_ease-out_infinite] rounded-full border-2 border-coral/25"
                    style={{ animationDelay: "1s" }}
                  />
                  <div className="grid h-28 w-28 place-items-center rounded-full bg-coral text-white">
                    <span className="flex flex-col items-center leading-none">
                      <span className="text-[26px] font-extrabold tracking-[0.16em]">SOS</span>
                      <span className="mt-1 text-[9px] font-semibold text-white/80">
                        TAP FOR HELP
                      </span>
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-2">
                  {QUICK_ACTIONS.map((action) => (
                    <div
                      key={action.label}
                      className="flex flex-col items-center gap-1 rounded-xl border border-line py-3"
                    >
                      <action.icon size={16} className="text-coral" />
                      <span className="text-[10px] font-semibold text-charcoal">
                        {action.label}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="mt-4 space-y-2">
                  <p className="text-[11px] font-bold uppercase tracking-wide text-medgray">
                    Doctors online near you
                  </p>
                  {NEARBY.map((doctor) => (
                    <div
                      key={doctor.name}
                      className="flex items-center gap-2.5 rounded-xl border border-line px-3 py-2.5"
                    >
                      <span className="grid h-8 w-8 place-items-center rounded-full bg-coral-light text-[11px] font-bold text-coral">
                        {doctor.initials}
                      </span>
                      <span className="min-w-0 flex-1 truncate text-[12px] font-semibold text-charcoal">
                        {doctor.name}
                      </span>
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald" />
                      <span className="text-[11px] text-medgray">{doctor.distance}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
