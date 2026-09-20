"use client";

import { motion } from "framer-motion";
import { Clock, HeartPulse, Lock, MapPin, Pill, ShieldCheck, Stethoscope, User } from "lucide-react";
import Reveal from "./Reveal";

const TRUST_BADGES = [
  { icon: ShieldCheck, label: "100% NMC Verified Doctors" },
  { icon: Clock, label: "Available 24/7" },
  { icon: Lock, label: "HIPAA Compliant" },
  { icon: HeartPulse, label: "Secure & Private" },
];

export default function Hero() {
  return (
    <section id="home" className="scroll-mt-24">
      <div className="mx-auto grid w-full max-w-[1200px] items-center gap-14 px-6 pb-20 pt-14 md:pt-20 lg:grid-cols-[1.05fr_1fr] lg:gap-10">
        <div>
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-line bg-white px-4 py-1.5 text-[13px] font-medium text-medgray">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald" />
              </span>
              Aapka Emergency Saathi — live 24/7
            </span>
          </Reveal>

          <Reveal delay={0.08}>
            <h1 className="mt-6 text-[40px] font-bold leading-[1.08] tracking-tight text-charcoal md:text-[48px]">
              Emergency Healthcare, <span className="text-coral">Instant Access</span>
            </h1>
          </Reveal>

          <Reveal delay={0.16}>
            <p className="mt-5 max-w-xl text-[17px] leading-relaxed text-medgray md:text-[18px]">
              Connect with verified local doctors in under 2 minutes. Available 24/7 for voice,
              video, or in-person consultations.
            </p>
          </Reveal>

          <Reveal delay={0.24}>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a
                href="#demo"
                className="inline-flex h-14 items-center justify-center rounded-lg bg-coral px-8 text-[16px] font-semibold text-white transition-all duration-200 hover:scale-[1.05] hover:bg-coral-deep hover:shadow-[0_14px_30px_rgba(231,76,60,0.28)]"
              >
                Request Emergency Help
              </a>
              <a
                href="#how-it-works"
                className="inline-flex h-14 items-center justify-center rounded-lg border border-medgray/40 bg-white px-8 text-[16px] font-semibold text-charcoal transition-all duration-200 hover:scale-[1.05] hover:border-coral hover:bg-coral-light/40 hover:text-coral"
              >
                Find Nearby Doctors
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.32}>
            <div className="mt-10 flex flex-wrap gap-2.5">
              {TRUST_BADGES.map((badge) => (
                <span
                  key={badge.label}
                  className="inline-flex items-center gap-2 rounded-full border border-line bg-white px-4 py-2 text-[13px] font-medium text-medgray"
                >
                  <badge.icon size={15} strokeWidth={2.2} className="text-emerald" />
                  {badge.label}
                </span>
              ))}
            </div>
          </Reveal>
        </div>

        {/* Illustration: doctor + patient connected by an animated EKG line */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          aria-hidden="true"
          className="relative mx-auto h-[300px] w-full max-w-[520px] select-none md:h-[340px]"
        >
          <span className="absolute left-4 top-6 text-[22px] font-bold text-coral-light">+</span>
          <span className="absolute bottom-10 left-10 text-[16px] font-bold text-coral-light">+</span>
          <span className="absolute right-8 top-24 text-[14px] font-bold text-line">+</span>

          <svg viewBox="0 0 520 340" fill="none" className="absolute inset-0 h-full w-full">
            <line
              x1="140"
              y1="170"
              x2="380"
              y2="170"
              stroke="#ECF0F1"
              strokeWidth="2"
              strokeDasharray="5 9"
              strokeLinecap="round"
            />
            <path
              d="M196 170h34l12-26 18 52 14-26h34"
              stroke="#E74C3C"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              pathLength={100}
              className="ekg-path"
            />
          </svg>

          <div className="absolute top-1/2 -translate-y-1/2" style={{ left: "calc(26.9% - 48px)" }}>
            <div className="flex flex-col items-center gap-3">
              <div className="grid h-24 w-24 place-items-center rounded-full border border-line bg-white">
                <Stethoscope size={36} strokeWidth={1.5} className="text-charcoal" />
              </div>
              <div className="text-center">
                <p className="text-[13px] font-semibold text-charcoal">Verified Doctor</p>
                <p className="inline-flex items-center gap-1.5 text-[11px] font-semibold text-emerald">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald" /> NMC Registered
                </p>
              </div>
            </div>
          </div>

          <div className="absolute top-1/2 -translate-y-1/2" style={{ right: "calc(26.9% - 48px)" }}>
            <div className="flex flex-col items-center gap-3">
              <div className="grid h-24 w-24 place-items-center rounded-full border border-line bg-white">
                <User size={36} strokeWidth={1.5} className="text-charcoal" />
              </div>
              <div className="text-center">
                <p className="text-[13px] font-semibold text-charcoal">Patient</p>
                <p className="inline-flex items-center gap-1.5 text-[11px] font-semibold text-coral">
                  <span className="h-1.5 w-1.5 rounded-full bg-coral" /> SOS Requested
                </p>
              </div>
            </div>
          </div>

          <div className="absolute left-1/2 top-5 -translate-x-1/2 animate-[floaty_5s_ease-in-out_infinite]">
            <span className="inline-flex items-center gap-1.5 whitespace-nowrap rounded-full border border-line bg-white px-4 py-2 text-[12px] font-medium text-charcoal">
              <Clock size={13} className="text-coral" /> 2 min avg response
            </span>
          </div>
          <div
            className="absolute bottom-3 right-3 animate-[floaty_6s_ease-in-out_infinite]"
            style={{ animationDelay: "0.8s" }}
          >
            <span className="inline-flex items-center gap-1.5 whitespace-nowrap rounded-full border border-line bg-white px-4 py-2 text-[12px] font-medium text-charcoal">
              <Pill size={13} className="text-coral" /> Medicine delivered
            </span>
          </div>
          <div
            className="absolute bottom-14 left-2 animate-[floaty_7s_ease-in-out_infinite]"
            style={{ animationDelay: "1.6s" }}
          >
            <span className="inline-flex items-center gap-1.5 whitespace-nowrap rounded-full border border-line bg-white px-4 py-2 text-[12px] font-medium text-charcoal">
              <MapPin size={13} className="text-coral" /> Doctors within 2–5 km
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
