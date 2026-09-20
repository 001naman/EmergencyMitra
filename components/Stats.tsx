"use client";

import { useEffect, useRef } from "react";
import { animate, useInView } from "framer-motion";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

type CountUpProps = {
  value: number;
  decimals?: number;
  prefix?: string;
  suffix?: string;
  duration?: number;
};

function CountUp({
  value,
  decimals = 0,
  prefix = "",
  suffix = "",
  duration = 1.8,
}: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });

  useEffect(() => {
    if (!inView) return;
    const node = ref.current;
    if (!node) return;
    const controls = animate(0, value, {
      duration,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (latest) => {
        node.textContent = `${prefix}${latest.toLocaleString("en-IN", {
          minimumFractionDigits: decimals,
          maximumFractionDigits: decimals,
        })}${suffix}`;
      },
    });
    return () => controls.stop();
  }, [inView, value, decimals, prefix, suffix, duration]);

  return (
    <span ref={ref}>
      {`${prefix}${(0).toLocaleString("en-IN", {
        minimumFractionDigits: decimals,
        maximumFractionDigits: decimals,
      })}${suffix}`}
    </span>
  );
}

type Stat = {
  value: number;
  label: string;
  prefix?: string;
  suffix?: string;
  decimals?: number;
};

const STATS: Stat[] = [
  { value: 500, suffix: "+", label: "Verified Doctors" },
  { value: 10000, suffix: "+", label: "Emergency Consults" },
  { value: 2, prefix: "<", suffix: " min", label: "Average Response" },
  { value: 4.8, decimals: 1, suffix: "/5", label: "Patient Satisfaction" },
];

export default function Stats() {
  return (
    <section id="impact" className="scroll-mt-24 py-20">
      <div className="mx-auto w-full max-w-[1200px] px-6">
        <SectionHeading
          title="Our Impact"
          subtitle="Growing every day, one emergency at a time."
        />

        <div className="mt-14 grid grid-cols-2 gap-4 lg:grid-cols-4">
          {STATS.map((stat, i) => (
            <Reveal key={stat.label} delay={i * 0.08}>
              <div className="rounded-xl border border-line bg-white p-8 text-center transition-all duration-300 hover:-translate-y-1 hover:border-coral/40">
                <p className="text-[36px] font-extrabold tracking-tight text-coral md:text-[40px]">
                  <CountUp
                    value={stat.value}
                    prefix={stat.prefix ?? ""}
                    suffix={stat.suffix ?? ""}
                    decimals={stat.decimals ?? 0}
                  />
                </p>
                <p className="mt-2 text-[14px] font-medium text-medgray">{stat.label}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
