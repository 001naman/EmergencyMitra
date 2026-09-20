"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  CheckCircle2,
  HeartPulse,
  LocateFixed,
  MapPin,
  Mic,
  MousePointerClick,
  Pill,
  Siren,
  Stethoscope,
  Video,
} from "lucide-react";
import Reveal from "./Reveal";

type Stage = "idle" | "locating" | "searching" | "matched" | "connected";

const DOCTORS = [
  { initials: "AS", name: "Dr. Ananya Sharma", meta: "General Physician · 1.2 km · ★ 4.9" },
  { initials: "RM", name: "Dr. Rohan Mehta", meta: "Internal Medicine · 1.8 km · ★ 4.8" },
  { initials: "KR", name: "Dr. Kavita Rao", meta: "Emergency Care · 2.4 km · ★ 4.9" },
];

const TRACK = ["Request", "GPS", "Match", "Connect"];

const FLOW = [
  { icon: Siren, title: "SOS pressed", desc: "One tap sends your emergency request." },
  { icon: LocateFixed, title: "GPS located", desc: "We pinpoint your location instantly." },
  { icon: Stethoscope, title: "Doctors matched", desc: "Nearby verified doctors get alerted." },
  { icon: Video, title: "Connected", desc: "Video or voice call starts in seconds." },
];

const QUICK_ACTIONS = [
  { icon: Mic, label: "Voice" },
  { icon: Video, label: "Video" },
  { icon: Pill, label: "Medicine" },
];

function trackIndex(stage: Stage): number {
  if (stage === "idle") return -1;
  if (stage === "locating") return 1;
  if (stage === "searching" || stage === "matched") return 2;
  return 3;
}

function SosButton({ busy, onClick }: { busy: boolean; onClick?: () => void }) {
  return (
    <div className="relative grid place-items-center">
      <span
        aria-hidden="true"
        className="absolute h-36 w-36 animate-[sos-ring_2s_ease-out_infinite] rounded-full border-2 border-coral/30"
      />
      <span
        aria-hidden="true"
        className="absolute h-36 w-36 animate-[sos-ring_2s_ease-out_infinite] rounded-full border-2 border-coral/30"
        style={{ animationDelay: "1s" }}
      />
      <button
        type="button"
        onClick={onClick}
        disabled={busy}
        aria-label="Request emergency help"
        className="relative grid h-32 w-32 place-items-center rounded-full bg-coral text-white transition-transform duration-200 hover:scale-105 active:scale-95 disabled:cursor-default disabled:hover:scale-100"
      >
        {busy ? (
          <span className="flex items-center gap-1.5">
            {[0, 1, 2].map((i) => (
              <span
                key={i}
                className="h-2.5 w-2.5 animate-[dotpulse_1.1s_ease-in-out_infinite] rounded-full bg-white"
                style={{ animationDelay: `${i * 0.18}s` }}
              />
            ))}
          </span>
        ) : (
          <span className="flex flex-col items-center leading-none">
            <span className="text-[30px] font-extrabold tracking-[0.18em]">SOS</span>
            <span className="mt-1.5 text-[10px] font-semibold tracking-wide text-white/80">
              TAP FOR HELP
            </span>
          </span>
        )}
      </button>
    </div>
  );
}

export default function LiveDemo() {
  const [stage, setStage] = useState<Stage>("idle");
  const [connectedDoctor, setConnectedDoctor] = useState<string | null>(null);
  const timers = useRef<ReturnType<typeof setTimeout>[]>([]);

  const clearTimers = useCallback(() => {
    timers.current.forEach((t) => clearTimeout(t));
    timers.current = [];
  }, []);

  useEffect(() => clearTimers, [clearTimers]);

  const startSOS = useCallback(() => {
    clearTimers();
    setConnectedDoctor(null);
    setStage("locating");
    timers.current.push(setTimeout(() => setStage("searching"), 2000));
    timers.current.push(setTimeout(() => setStage("matched"), 5000));
  }, [clearTimers]);

  const connect = useCallback(
    (name: string) => {
      clearTimers();
      setConnectedDoctor(name);
      setStage("connected");
    },
    [clearTimers]
  );

  const reset = useCallback(() => {
    clearTimers();
    setConnectedDoctor(null);
    setStage("idle");
  }, [clearTimers]);

  return (
    <section id="demo" className="scroll-mt-24 py-20">
      <div className="mx-auto grid w-full max-w-[1200px] items-center gap-14 px-6 lg:grid-cols-2">
        {/* Left: explanation */}
        <div>
          <Reveal>
            <span className="text-[13px] font-bold uppercase tracking-[0.14em] text-coral">
              Live Demo
            </span>
            <h2 className="mt-3 text-[32px] font-bold leading-[1.15] tracking-tight text-charcoal md:text-[36px]">
              See It In Action
            </h2>
            <p className="mt-4 max-w-lg text-[16px] leading-relaxed text-medgray">
              Experience the exact flow a patient goes through — from pressing SOS to a doctor
              picking up, all in under two minutes.
            </p>
          </Reveal>

          <div className="mt-10 space-y-6">
            {FLOW.map((step, i) => (
              <Reveal key={step.title} delay={0.08 * i}>
                <div className="relative flex gap-4">
                  {i < FLOW.length - 1 && (
                    <span
                      aria-hidden="true"
                      className="absolute left-[19px] top-11 h-[calc(100%-16px)] w-px bg-line"
                    />
                  )}
                  <span className="z-10 grid h-10 w-10 shrink-0 place-items-center rounded-full border border-line bg-white">
                    <step.icon size={17} strokeWidth={2} className="text-coral" />
                  </span>
                  <span>
                    <span className="block text-[15px] font-semibold text-charcoal">
                      {step.title}
                    </span>
                    <span className="block text-[14px] text-medgray">{step.desc}</span>
                  </span>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.35}>
            <div className="mt-10 flex items-start gap-3 rounded-xl bg-coral-light/50 p-4">
              <MousePointerClick size={18} className="mt-0.5 shrink-0 text-coral" />
              <p className="text-[14px] leading-relaxed text-charcoal">
                <span className="font-semibold">Try it yourself</span> — tap the SOS button on the
                phone. This is a simulation; no real request is placed.
              </p>
            </div>
          </Reveal>
        </div>

        {/* Right: interactive phone */}
        <Reveal delay={0.15} y={32}>
          <div className="mx-auto w-full max-w-[300px]">
            <div className="rounded-[40px] border border-line bg-white p-2.5">
              <div className="relative flex h-[600px] flex-col overflow-hidden rounded-[32px] border border-line bg-white">
                {/* App top bar */}
                <div className="flex items-center justify-between border-b border-line px-5 pb-3 pt-4">
                  <span className="flex items-center gap-1.5">
                    <span className="grid h-6 w-6 place-items-center rounded-md bg-coral text-white">
                      <HeartPulse size={13} />
                    </span>
                    <span className="text-[13px] font-bold text-charcoal">EmergencyMitraa</span>
                  </span>
                  <span className="rounded-full bg-emerald-soft px-2.5 py-1 text-[10px] font-bold text-emerald">
                    24/7 LIVE
                  </span>
                </div>

                {/* Progress track */}
                <div className="flex items-start px-6 pt-4">
                  {TRACK.map((label, i) => {
                    const cur = trackIndex(stage);
                    const done = cur > i;
                    const isCur = cur === i;
                    return (
                      <div key={label} className="flex flex-1 flex-col items-center gap-1.5">
                        <span
                          className={`h-2 w-2 rounded-full transition-colors duration-300 ${
                            isCur ? "animate-pulse bg-coral" : done ? "bg-emerald" : "bg-line"
                          }`}
                        />
                        <span
                          className={`text-[9px] font-semibold uppercase tracking-wide transition-colors duration-300 ${
                            isCur ? "text-coral" : done ? "text-emerald" : "text-medgray/60"
                          }`}
                        >
                          {label}
                        </span>
                      </div>
                    );
                  })}
                </div>

                {/* Stage content */}
                <div className="relative flex flex-1 items-center justify-center px-5 pb-8 pt-2">
                  <AnimatePresence mode="wait" initial={false}>
                    <motion.div
                      key={stage}
                      initial={{ opacity: 0, y: 16 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -16 }}
                      transition={{ duration: 0.3, ease: "easeOut" }}
                      className="flex w-full flex-col items-center gap-5"
                    >
                      {stage === "idle" && (
                        <>
                          <p className="text-[15px] font-semibold text-charcoal">Find Help Now</p>
                          <SosButton onClick={startSOS} busy={false} />
                          <p className="text-center text-[12px] leading-relaxed text-medgray">
                            Tap to request emergency assistance.
                            <br />
                            Verified doctors within 2–5 km will be alerted.
                          </p>
                          <div className="flex gap-2">
                            {QUICK_ACTIONS.map((action) => (
                              <span
                                key={action.label}
                                className="flex items-center gap-1.5 rounded-full border border-line px-3 py-1.5 text-[11px] font-semibold text-charcoal"
                              >
                                <action.icon size={12} className="text-coral" />
                                {action.label}
                              </span>
                            ))}
                          </div>
                        </>
                      )}

                      {stage === "locating" && (
                        <>
                          <SosButton busy />
                          <div className="flex flex-col items-center gap-1.5 text-center">
                            <p className="flex items-center gap-2 text-[14px] font-semibold text-charcoal">
                              <MapPin size={16} className="animate-bounce text-coral" />
                              Locating your position…
                            </p>
                            <p className="text-[12px] text-medgray">28.6139° N, 77.2090° E</p>
                          </div>
                        </>
                      )}

                      {stage === "searching" && (
                        <>
                          <p className="text-[14px] font-semibold text-charcoal">
                            Searching nearby doctors…
                          </p>
                          <div className="w-full space-y-3" aria-hidden="true">
                            {[0, 1, 2].map((i) => (
                              <div
                                key={i}
                                className="flex items-center gap-3 rounded-xl border border-line p-3"
                              >
                                <span className="h-10 w-10 animate-pulse rounded-full bg-mist" />
                                <span className="flex-1 space-y-2">
                                  <span className="block h-2.5 w-28 animate-pulse rounded bg-mist" />
                                  <span className="block h-2 w-20 animate-pulse rounded bg-mist" />
                                </span>
                                <span className="h-7 w-14 animate-pulse rounded-lg bg-coral-light/60" />
                              </div>
                            ))}
                          </div>
                        </>
                      )}

                      {stage === "matched" && (
                        <div className="w-full">
                          <p className="mb-3 text-center text-[13px] font-semibold text-charcoal">
                            3 doctors found nearby — pick one
                          </p>
                          <div className="space-y-3">
                            {DOCTORS.map((doctor, i) => (
                              <motion.div
                                key={doctor.name}
                                initial={{ opacity: 0, y: 22 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.15, duration: 0.4, ease: "easeOut" }}
                                className="flex items-center gap-3 rounded-xl border border-line p-3"
                              >
                                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-coral-light text-[13px] font-bold text-coral">
                                  {doctor.initials}
                                </span>
                                <span className="min-w-0 flex-1">
                                  <span className="block truncate text-[13px] font-semibold text-charcoal">
                                    {doctor.name}
                                  </span>
                                  <span className="block truncate text-[11px] text-medgray">
                                    {doctor.meta}
                                  </span>
                                </span>
                                <button
                                  type="button"
                                  onClick={() => connect(doctor.name)}
                                  className="shrink-0 rounded-lg bg-coral px-3 py-2 text-[12px] font-semibold text-white transition hover:bg-coral-deep active:scale-95"
                                >
                                  Accept
                                </button>
                              </motion.div>
                            ))}
                          </div>
                        </div>
                      )}

                      {stage === "connected" && (
                        <div className="flex w-full flex-col items-center gap-4 text-center">
                          <span className="grid h-16 w-16 place-items-center rounded-full bg-emerald-soft">
                            <CheckCircle2 size={30} className="text-emerald" />
                          </span>
                          <div>
                            <p className="text-[15px] font-bold text-charcoal">Doctor connected!</p>
                            <p className="mt-1 text-[12px] text-medgray">
                              Starting video call with {connectedDoctor}…
                            </p>
                          </div>
                          <div className="flex w-full items-center justify-center gap-3 rounded-xl border border-line px-4 py-3">
                            <span className="relative grid h-10 w-10 place-items-center rounded-full bg-coral-light">
                              <Video size={17} className="text-coral" />
                              <span
                                aria-hidden="true"
                                className="absolute inset-0 animate-[sos-ring_2s_ease-out_infinite] rounded-full border border-coral"
                              />
                            </span>
                            <span className="text-left">
                              <span className="block text-[13px] font-semibold text-charcoal">
                                Video Consultation
                              </span>
                              <span className="block text-[11px] font-semibold text-emerald">
                                Connecting…
                              </span>
                            </span>
                          </div>
                          <button
                            type="button"
                            onClick={reset}
                            className="rounded-lg border border-medgray/40 px-4 py-2 text-[12px] font-semibold text-charcoal transition hover:border-coral hover:text-coral"
                          >
                            Reset demo
                          </button>
                        </div>
                      )}
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>
            </div>
            <p className="mt-4 text-center text-[12px] text-medgray">
              Interactive simulation — no real emergency request is placed.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
