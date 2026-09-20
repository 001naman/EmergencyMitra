import { Clock, HeartPulse, Instagram, Linkedin, Mail, Phone, Twitter } from "lucide-react";

const QUICK_LINKS = [
  { label: "Home", href: "#home" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "For Patients", href: "#features" },
  { label: "For Doctors", href: "#doctors" },
  { label: "Pricing", href: "#pricing" },
];

const LEGAL_LINKS = ["Privacy Policy", "Terms of Service", "Medical Disclaimer"];

const SOCIALS = [
  { icon: Twitter, label: "Twitter" },
  { icon: Linkedin, label: "LinkedIn" },
  { icon: Instagram, label: "Instagram" },
];

export default function Footer() {
  return (
    <footer className="border-t border-line bg-white">
      <div className="mx-auto w-full max-w-[1200px] px-6 py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <a href="#home" className="flex items-center gap-2.5" aria-label="EmergencyMitraa home">
              <span className="grid h-9 w-9 place-items-center rounded-lg bg-coral text-white">
                <HeartPulse size={19} strokeWidth={2.2} />
              </span>
              <span className="leading-tight">
                <span className="block text-[16px] font-bold tracking-tight text-charcoal">
                  EmergencyMitraa
                </span>
                <span className="block text-[11px] font-medium text-medgray">
                  Aapka Emergency Saathi
                </span>
              </span>
            </a>
            <p className="mt-4 max-w-xs text-[14px] leading-relaxed text-medgray">
              India&apos;s fastest emergency healthcare network — verified doctors, 2-minute
              response, at your doorstep.
            </p>
          </div>

          {/* Quick links */}
          <nav aria-label="Quick links">
            <h3 className="text-[13px] font-bold uppercase tracking-wider text-charcoal">
              Quick Links
            </h3>
            <ul className="mt-5 space-y-3">
              {QUICK_LINKS.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="link-underline text-[14px] text-medgray transition-colors hover:text-charcoal"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Legal */}
          <nav aria-label="Legal">
            <h3 className="text-[13px] font-bold uppercase tracking-wider text-charcoal">Legal</h3>
            <ul className="mt-5 space-y-3">
              {LEGAL_LINKS.map((label) => (
                <li key={label}>
                  <a
                    href="#home"
                    className="link-underline text-[14px] text-medgray transition-colors hover:text-charcoal"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact */}
          <div>
            <h3 className="text-[13px] font-bold uppercase tracking-wider text-charcoal">
              Contact
            </h3>
            <ul className="mt-5 space-y-3.5">
              <li>
                <a
                  href="mailto:help@emergencymitraa.in"
                  className="flex items-center gap-3 text-[14px] text-medgray transition-colors hover:text-coral"
                >
                  <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg border border-line">
                    <Mail size={15} className="text-charcoal" />
                  </span>
                  help@emergencymitraa.in
                </a>
              </li>
              <li>
                <a
                  href="tel:1800XXXXXXX"
                  className="flex items-center gap-3 text-[14px] text-medgray transition-colors hover:text-coral"
                >
                  <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg border border-line">
                    <Phone size={15} className="text-charcoal" />
                  </span>
                  1800-XXX-XXXX
                </a>
              </li>
              <li className="flex items-center gap-3 text-[14px] text-medgray">
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg border border-line">
                  <Clock size={15} className="text-charcoal" />
                </span>
                24/7 Support
              </li>
            </ul>
          </div>
        </div>

        <p className="mt-12 text-[12px] leading-relaxed text-medgray/80">
          Medical disclaimer: EmergencyMitraa is a digital health platform for non-life-threatening
          emergencies. In a critical emergency, call 108 or visit your nearest hospital immediately.
        </p>

        <div className="mt-8 flex flex-col items-center justify-between gap-5 border-t border-line pt-8 sm:flex-row">
          <p className="text-[13px] text-medgray">© 2026 EmergencyMitraa. All rights reserved.</p>
          <div className="flex gap-3">
            {SOCIALS.map((social) => (
              <a
                key={social.label}
                href="#home"
                aria-label={social.label}
                className="grid h-10 w-10 place-items-center rounded-full border border-line text-medgray transition-colors hover:border-coral hover:bg-coral-light/40 hover:text-coral"
              >
                <social.icon size={16} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
