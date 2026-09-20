import { Activity, BadgeCheck, Check, FileSearch, Fingerprint } from "lucide-react";
import Reveal from "./Reveal";

const POINTS = [
  {
    title: "NMC / State Medical Council license verification",
    desc: "Registration numbers checked against official registries",
  },
  {
    title: "Document verification (MBBS / MD degrees)",
    desc: "Degree certificates validated with issuing universities",
  },
  {
    title: "Real-time OTP authentication",
    desc: "Doctors verify their identity before every consultation",
  },
  {
    title: "Patient ratings & prescription audits",
    desc: "Continuous quality monitoring after every consult",
  },
];

const BADGES = [
  { icon: BadgeCheck, title: "NMC Verified", desc: "Medical Council of India" },
  { icon: Fingerprint, title: "Government ID Verified", desc: "Identity cross-checked" },
  { icon: FileSearch, title: "Background Check", desc: "Practice history reviewed" },
  { icon: Activity, title: "Continuous Monitoring", desc: "Live quality audits" },
];

export default function Verification() {
  return (
    <section id="safety" className="scroll-mt-24 bg-softbg py-20">
      <div className="mx-auto grid w-full max-w-[1200px] items-center gap-14 px-6 lg:grid-cols-2">
        <Reveal>
          <span className="text-[13px] font-bold uppercase tracking-[0.14em] text-coral">
            Trust & Safety
          </span>
          <h2 className="mt-3 text-[32px] font-bold leading-[1.15] tracking-tight text-charcoal md:text-[36px]">
            Trust & Safety First
          </h2>
          <p className="mt-4 max-w-lg text-[16px] leading-relaxed text-medgray">
            Every doctor on EmergencyMitra undergoes a strict{" "}
            <span className="font-semibold text-charcoal">3-layer verification</span> before they
            can accept a single emergency request.
          </p>
          <ul className="mt-8 space-y-5">
            {POINTS.map((point) => (
              <li key={point.title} className="flex gap-3.5">
                <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-emerald-soft">
                  <Check size={13} strokeWidth={3} className="text-emerald" />
                </span>
                <div>
                  <p className="text-[15px] font-semibold text-charcoal">{point.title}</p>
                  <p className="mt-0.5 text-[14px] text-medgray">{point.desc}</p>
                </div>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={0.12}>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {BADGES.map((badge) => (
              <div
                key={badge.title}
                className="group rounded-xl border border-line bg-white p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:border-emerald hover:bg-emerald-soft"
              >
                <span className="mx-auto grid h-12 w-12 place-items-center rounded-full border border-line text-medgray transition-colors duration-300 group-hover:border-emerald group-hover:bg-white group-hover:text-emerald">
                  <badge.icon size={22} strokeWidth={1.8} />
                </span>
                <p className="mt-4 text-[15px] font-bold text-charcoal">{badge.title}</p>
                <p className="mt-1 text-[13px] text-medgray">{badge.desc}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
