import { Fragment } from "react";
import { ArrowDown, ArrowRight, LocateFixed, Pill, Siren, Stethoscope, Video } from "lucide-react";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const STEPS = [
  { icon: Siren, title: "Press SOS", desc: "One tap emergency request", hot: true },
  { icon: LocateFixed, title: "GPS Location", desc: "We find doctors near you", hot: false },
  { icon: Stethoscope, title: "Match Doctor", desc: "Available doctors notified instantly", hot: false },
  { icon: Video, title: "Consult", desc: "Video or voice call within 2 minutes", hot: false },
  { icon: Pill, title: "Medicine Delivered", desc: "Prescription sent to nearby chemist", hot: false },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="scroll-mt-24 py-20">
      <div className="mx-auto w-full max-w-[1200px] px-6">
        <SectionHeading
          title="How EmergencyMitraa Works"
          subtitle="From SOS to medicine at your doorstep — five simple steps, under two minutes."
        />

        <div className="mt-14 flex flex-col items-stretch gap-3 lg:flex-row lg:gap-2">
          {STEPS.map((step, i) => (
            <Fragment key={step.title}>
              <Reveal delay={i * 0.08} className="lg:flex-1">
                <div className="h-full rounded-xl border border-line bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(44,62,80,0.08)]">
                  <div className="flex items-center justify-between">
                    <span
                      className={`grid h-12 w-12 place-items-center rounded-lg ${
                        step.hot ? "bg-coral text-white" : "bg-coral-light text-coral"
                      }`}
                    >
                      <step.icon size={22} strokeWidth={1.9} />
                    </span>
                    <span className="text-[13px] font-bold tracking-widest text-medgray/60">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <h3 className="mt-5 text-[17px] font-bold text-charcoal">{step.title}</h3>
                  <p className="mt-1.5 text-[14px] leading-relaxed text-medgray">{step.desc}</p>
                </div>
              </Reveal>
              {i < STEPS.length - 1 && (
                <div className="flex items-center justify-center" aria-hidden="true">
                  <ArrowDown
                    size={20}
                    className="animate-[march-y_1.8s_ease-in-out_infinite] text-medgray lg:hidden"
                  />
                  <ArrowRight
                    size={20}
                    className="hidden animate-[march_1.8s_ease-in-out_infinite] text-medgray lg:block"
                  />
                </div>
              )}
            </Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}
