import { Quote, Star } from "lucide-react";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const TESTIMONIALS = [
  {
    quote: "Found a doctor in 90 seconds at 2 AM. Lifesaver!",
    name: "Rajesh K.",
    city: "Delhi",
    initials: "RK",
  },
  {
    quote: "As a doctor, I can help patients immediately. Great platform.",
    name: "Dr. Priya S.",
    city: "Mumbai",
    initials: "PS",
  },
  {
    quote: "Medicine delivered in 25 minutes. No need to visit hospital.",
    name: "Anita M.",
    city: "Bangalore",
    initials: "AM",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="scroll-mt-24 py-20">
      <div className="mx-auto w-full max-w-[1200px] px-6">
        <SectionHeading
          title="Lives We've Impacted"
          subtitle="Real stories from patients and doctors who trust EmergencyMitraa in critical moments."
        />

        <div className="no-scrollbar mt-14 flex snap-x snap-mandatory gap-6 overflow-x-auto pb-2 md:grid md:grid-cols-3 md:overflow-visible md:pb-0">
          {TESTIMONIALS.map((testimonial, i) => (
            <Reveal
              key={testimonial.name}
              delay={i * 0.1}
              className="min-w-[300px] shrink-0 snap-start md:min-w-0 md:shrink"
            >
              <figure className="flex h-full flex-col rounded-xl border border-line bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(44,62,80,0.08)]">
                <div className="flex items-center justify-between">
                  <Quote size={26} className="fill-coral text-coral" />
                  <span className="flex gap-0.5" aria-label="Rated 5 out of 5">
                    {Array.from({ length: 5 }).map((_, star) => (
                      <Star key={star} size={13} className="fill-coral text-coral" />
                    ))}
                  </span>
                </div>
                <blockquote className="mt-5 flex-1 text-[15px] leading-relaxed text-charcoal">
                  &ldquo;{testimonial.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-3">
                  <span className="grid h-10 w-10 place-items-center rounded-full bg-coral-light text-[12px] font-bold text-coral">
                    {testimonial.initials}
                  </span>
                  <span>
                    <span className="block text-[14px] font-semibold text-charcoal">
                      {testimonial.name}
                    </span>
                    <span className="block text-[13px] text-medgray">{testimonial.city}</span>
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
