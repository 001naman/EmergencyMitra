import { Check } from "lucide-react";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

type Plan = {
  name: string;
  price: string;
  unit: string;
  features: string[];
  highlight: boolean;
};

const PLANS: Plan[] = [
  {
    name: "Emergency Voice",
    price: "₹50-100",
    unit: "per consultation",
    features: ["5-min voice consultation", "Digital prescription", "24/7 availability"],
    highlight: false,
  },
  {
    name: "Emergency Video",
    price: "₹100-200",
    unit: "per consultation",
    features: [
      "10-min video consultation",
      "Digital prescription",
      "Priority doctor matching",
      "Medicine delivery",
    ],
    highlight: true,
  },
  {
    name: "Family Plan",
    price: "₹299",
    unit: "/month",
    features: ["Unlimited emergency consults", "Up to 4 family members", "Priority support"],
    highlight: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="scroll-mt-24 py-20">
      <div className="mx-auto w-full max-w-[1200px] px-6">
        <SectionHeading
          title="Affordable Emergency Care"
          subtitle="Transparent pricing with no hidden charges — help when you need it, at a price that makes sense."
        />

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {PLANS.map((plan, i) => (
            <Reveal key={plan.name} delay={i * 0.1} className="h-full">
              <div
                className={`relative flex h-full flex-col rounded-xl border p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(44,62,80,0.1)] ${
                  plan.highlight
                    ? "border-coral/30 bg-coral-light"
                    : "border-line bg-white"
                }`}
              >
                {plan.highlight && (
                  <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-coral px-4 py-1 text-[11px] font-bold uppercase tracking-wide text-white">
                    Most Popular
                  </span>
                )}

                <h3 className="text-[17px] font-bold text-charcoal">{plan.name}</h3>
                <div className="mt-4 flex flex-wrap items-baseline gap-x-2 gap-y-1">
                  <span className="text-[36px] font-extrabold tracking-tight text-charcoal">
                    {plan.price}
                  </span>
                  <span className="text-[13px] font-medium text-medgray">{plan.unit}</span>
                </div>

                <ul className="mt-6 flex-1 space-y-3">
                  {plan.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-2.5 text-[14px] text-charcoal"
                    >
                      <Check size={16} strokeWidth={2.5} className="mt-0.5 shrink-0 text-emerald" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <a
                  href="#demo"
                  className={`mt-8 inline-flex h-12 items-center justify-center rounded-lg text-[15px] font-semibold transition-all duration-200 hover:scale-[1.03] ${
                    plan.highlight
                      ? "bg-coral text-white hover:bg-coral-deep hover:shadow-[0_12px_26px_rgba(231,76,60,0.28)]"
                      : "border border-medgray/40 text-charcoal hover:border-coral hover:text-coral"
                  }`}
                >
                  Get Started
                </a>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2}>
          <p className="mt-10 text-center text-[14px] text-medgray">
            No subscription needed for one-time emergencies — pay only when you consult. The Family
            Plan covers everyone you love.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
