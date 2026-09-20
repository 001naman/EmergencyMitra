"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useScroll, useSpring } from "framer-motion";
import { HeartPulse, Menu, X } from "lucide-react";

const LINKS = [
  { label: "How It Works", href: "#how-it-works", id: "how-it-works" },
  { label: "For Patients", href: "#features", id: "features" },
  { label: "Pricing", href: "#pricing", id: "pricing" },
  { label: "For Doctors", href: "#doctors", id: "doctors" },
];

const SECTION_IDS = ["home", "how-it-works", "features", "demo", "safety", "pricing", "doctors"];

export default function Navbar() {
  const [active, setActive] = useState("home");
  const [open, setOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 140, damping: 28, mass: 0.4 });

  useEffect(() => {
    const sections = SECTION_IDS.map((id) => document.getElementById(id)).filter(
      (el): el is HTMLElement => Boolean(el)
    );
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-35% 0px -60% 0px", threshold: 0 }
    );
    sections.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-white/90 backdrop-blur-md">
      {/* Scroll progress indicator */}
      <motion.div
        aria-hidden="true"
        style={{ scaleX: progress }}
        className="absolute inset-x-0 top-0 h-[2px] origin-left bg-coral"
      />

      <nav className="mx-auto flex h-16 w-full max-w-[1200px] items-center justify-between px-6">
        <a href="#home" className="flex items-center gap-2.5" aria-label="EmergencyMitra home">
          <span className="grid h-9 w-9 place-items-center rounded-lg bg-coral text-white">
            <HeartPulse size={19} strokeWidth={2.2} />
          </span>
          <span className="leading-tight">
            <span className="block text-[16px] font-bold tracking-tight text-charcoal">
              EmergencyMitra
            </span>
            <span className="block text-[11px] font-medium text-medgray">
              Aapka Emergency Saathi
            </span>
          </span>
        </a>

        <div className="hidden items-center gap-8 lg:flex">
          {LINKS.map((link) => (
            <a
              key={link.id}
              href={link.href}
              data-active={active === link.id}
              className="link-underline text-[15px] font-medium text-charcoal transition-colors hover:text-coral"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <a
            href="#demo"
            className="hidden h-10 items-center rounded-lg bg-coral px-5 text-[14px] font-semibold text-white transition-all duration-200 hover:scale-[1.05] hover:bg-coral-deep lg:inline-flex"
          >
            Request Help
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            className="grid h-11 w-11 place-items-center rounded-lg border border-line text-charcoal transition hover:border-coral hover:text-coral lg:hidden"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="overflow-hidden border-t border-line bg-white lg:hidden"
          >
            <div className="mx-auto flex w-full max-w-[1200px] flex-col gap-1 px-6 py-4">
              {[
                { label: "Home", href: "#home", id: "home" },
                { label: "Live Demo", href: "#demo", id: "demo" },
                ...LINKS,
              ].map((link) => (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={`rounded-lg px-3 py-3 text-[15px] font-medium transition-colors ${
                    active === link.id
                      ? "bg-coral-light/50 text-coral"
                      : "text-charcoal hover:bg-softbg"
                  }`}
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#demo"
                onClick={() => setOpen(false)}
                className="mt-2 inline-flex h-12 items-center justify-center rounded-lg bg-coral text-[15px] font-semibold text-white transition hover:bg-coral-deep"
              >
                Request Help
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
