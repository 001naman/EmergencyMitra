import { Clock, IndianRupee, ShieldCheck } from "lucide-react";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const FEATURES = [
  {
    icon: Clock,
    title: "Real-Time Doctor Matching",
    desc: "Find available doctors within 2 minutes, 2-5 km radius.",
  },
  {
    icon: ShieldCheck,
    title: "100% Verified Doctors",
    desc: "All doctors verified via NMC/State Medical Council.",
  },
  {
    icon: IndianRupee,
    title: "Affordable Emergency Care",
    desc: "₹50-200 per consultation, 60% cheaper than competitors.",
  },
];

export default function Features() {
  return (
    <section id="features" className="scroll-mt-24 bg-softbg py-20">
      <div className="mx-auto w-full max-w-[1200px] px-6">
        <SectionHeading
          title="Why Choose EmergencyMitra"
          subtitle="Built for the moments that matter most — fast, verified, and affordable emergency care."
        />

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {FEATURES.map((feature, i) => (
            <Reveal key={feature.title} delay={i * 0.1}>
              <div className="group h-full rounded-xl border border-line bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:border-medgray/30 hover:shadow-[0_16px_40px_rgba(44,62,80,0.08)]">
                <span className="grid h-12 w-12 place-items-center rounded-lg bg-coral-light text-coral transition-colors duration-300 group-hover:bg-coral group-hover:text-white">
                  <feature.icon size={22} strokeWidth={1.9} />
                </span>
                <h3 className="mt-6 text-[18px] font-bold text-charcoal">{feature.title}</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-medgray">{feature.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
