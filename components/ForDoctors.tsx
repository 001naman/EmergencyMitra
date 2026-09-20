"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle2, Upload, X } from "lucide-react";
import Reveal from "./Reveal";

type FieldKey = "name" | "email" | "phone" | "council";
type FieldErrors = Partial<Record<FieldKey, string>>;

const BENEFITS = [
  "Earn additional income with emergency on-call consults",
  "Flexible availability — go online or offline anytime",
  "Serve your local community when it matters most",
  "Digital prescription tools built for speed",
  "Verified profile badge that builds patient trust",
];

const inputClass = (invalid: boolean) =>
  `w-full rounded-lg border bg-white px-4 py-3 text-[15px] text-charcoal placeholder:text-medgray/50 transition-colors focus:border-coral ${
    invalid ? "border-coral" : "border-line hover:border-medgray/40"
  }`;

export default function ForDoctors() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [council, setCouncil] = useState("");
  const [files, setFiles] = useState<File[]>([]);
  const [errors, setErrors] = useState<FieldErrors>({});
  const [submitted, setSubmitted] = useState(false);

  const clearError = (key: FieldKey) =>
    setErrors((prev) => ({ ...prev, [key]: undefined }));

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const next: FieldErrors = {};
    if (name.trim().length < 3) next.name = "Please enter your full name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim()))
      next.email = "Please enter a valid email address.";
    const digits = phone
      .replace(/\D/g, "")
      .replace(/^91(?=\d{10}$)/, "")
      .replace(/^0(?=\d{10}$)/, "");
    if (digits.length !== 10) next.phone = "Enter a valid 10-digit mobile number.";
    if (council.trim().length < 4)
      next.council = "Enter your medical council registration number.";
    setErrors(next);
    if (Object.values(next).some(Boolean)) return;
    setSubmitted(true);
  };

  const resetForm = () => {
    setName("");
    setEmail("");
    setPhone("");
    setCouncil("");
    setFiles([]);
    setErrors({});
    setSubmitted(false);
  };

  return (
    <section id="doctors" className="scroll-mt-24 bg-softbg py-20">
      <div className="mx-auto grid w-full max-w-[1200px] items-start gap-14 px-6 lg:grid-cols-2">
        {/* Left: benefits */}
        <Reveal>
          <span className="text-[13px] font-bold uppercase tracking-[0.14em] text-coral">
            For Doctors
          </span>
          <h2 className="mt-3 text-[32px] font-bold leading-[1.15] tracking-tight text-charcoal md:text-[36px]">
            Are You a Doctor?
          </h2>
          <p className="mt-4 max-w-lg text-[16px] leading-relaxed text-medgray">
            Join our network of emergency healthcare providers and be there for your community when
            it matters most.
          </p>
          <ul className="mt-8 space-y-4">
            {BENEFITS.map((benefit) => (
              <li key={benefit} className="flex items-start gap-3">
                <CheckCircle2 size={20} strokeWidth={2.1} className="mt-0.5 shrink-0 text-emerald" />
                <span className="text-[15px] font-medium text-charcoal">{benefit}</span>
              </li>
            ))}
          </ul>
          <a
            href="#doctor-form"
            className="mt-10 inline-flex h-12 items-center justify-center rounded-lg bg-line px-7 text-[15px] font-semibold text-charcoal transition-all duration-200 hover:scale-[1.03] hover:bg-coral hover:text-white"
          >
            Register as Doctor
          </a>
        </Reveal>

        {/* Right: registration form */}
        <Reveal delay={0.1}>
          <div id="doctor-form" className="scroll-mt-28 rounded-xl border border-line bg-white p-8">
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="flex flex-col items-center gap-4 py-12 text-center"
              >
                <span className="grid h-16 w-16 place-items-center rounded-full bg-emerald-soft">
                  <CheckCircle2 size={30} className="text-emerald" />
                </span>
                <h3 className="text-[20px] font-bold text-charcoal">Application submitted!</h3>
                <p className="max-w-sm text-[15px] leading-relaxed text-medgray">
                  We&apos;ll verify your credentials within 48 hours and reach out on your email
                  and phone.
                </p>
                <button
                  type="button"
                  onClick={resetForm}
                  className="mt-2 rounded-lg border border-medgray/40 px-5 py-2.5 text-[14px] font-semibold text-charcoal transition hover:border-coral hover:text-coral"
                >
                  Submit another application
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} noValidate>
                <h3 className="text-[20px] font-bold text-charcoal">Register as Doctor</h3>
                <p className="mt-1 text-[14px] text-medgray">
                  Fill in your details — verification takes under 48 hours.
                </p>

                <div className="mt-6 space-y-4">
                  <div>
                    <label htmlFor="doc-name" className="mb-1.5 block text-[13px] font-semibold text-charcoal">
                      Full Name *
                    </label>
                    <input
                      id="doc-name"
                      type="text"
                      autoComplete="name"
                      placeholder="Dr. Ananya Sharma"
                      value={name}
                      onChange={(e) => {
                        setName(e.target.value);
                        clearError("name");
                      }}
                      className={inputClass(Boolean(errors.name))}
                    />
                    {errors.name && (
                      <p className="mt-1.5 text-[12px] font-medium text-coral">{errors.name}</p>
                    )}
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label htmlFor="doc-email" className="mb-1.5 block text-[13px] font-semibold text-charcoal">
                        Email *
                      </label>
                      <input
                        id="doc-email"
                        type="email"
                        autoComplete="email"
                        placeholder="doctor@example.in"
                        value={email}
                        onChange={(e) => {
                          setEmail(e.target.value);
                          clearError("email");
                        }}
                        className={inputClass(Boolean(errors.email))}
                      />
                      {errors.email && (
                        <p className="mt-1.5 text-[12px] font-medium text-coral">{errors.email}</p>
                      )}
                    </div>
                    <div>
                      <label htmlFor="doc-phone" className="mb-1.5 block text-[13px] font-semibold text-charcoal">
                        Phone *
                      </label>
                      <input
                        id="doc-phone"
                        type="tel"
                        autoComplete="tel"
                        placeholder="98765 43210"
                        value={phone}
                        onChange={(e) => {
                          setPhone(e.target.value);
                          clearError("phone");
                        }}
                        className={inputClass(Boolean(errors.phone))}
                      />
                      {errors.phone && (
                        <p className="mt-1.5 text-[12px] font-medium text-coral">{errors.phone}</p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label htmlFor="doc-council" className="mb-1.5 block text-[13px] font-semibold text-charcoal">
                      Medical Council Registration Number *
                    </label>
                    <input
                      id="doc-council"
                      type="text"
                      placeholder="e.g. DMC/R/12345"
                      value={council}
                      onChange={(e) => {
                        setCouncil(e.target.value);
                        clearError("council");
                      }}
                      className={inputClass(Boolean(errors.council))}
                    />
                    {errors.council && (
                      <p className="mt-1.5 text-[12px] font-medium text-coral">{errors.council}</p>
                    )}
                  </div>

                  <div>
                    <span className="mb-1.5 block text-[13px] font-semibold text-charcoal">
                      Upload Documents
                    </span>
                    <label
                      htmlFor="doc-upload"
                      className="flex cursor-pointer flex-col items-center gap-1.5 rounded-lg border border-dashed border-line px-4 py-6 text-center transition-colors hover:border-coral hover:bg-coral-light/20"
                    >
                      <Upload size={20} className="text-medgray" />
                      <span className="text-[13px] font-semibold text-charcoal">
                        Degree & council registration certificates
                      </span>
                      <span className="text-[12px] text-medgray">
                        PDF, JPG or PNG — click to browse
                      </span>
                      <input
                        id="doc-upload"
                        type="file"
                        multiple
                        accept=".pdf,.jpg,.jpeg,.png"
                        className="sr-only"
                        onChange={(e) => {
                          const list = Array.from(e.target.files ?? []);
                          if (list.length) setFiles((prev) => [...prev, ...list]);
                          e.target.value = "";
                        }}
                      />
                    </label>
                    {files.length > 0 && (
                      <ul className="mt-3 space-y-2">
                        {files.map((file) => (
                          <li
                            key={file.name}
                            className="flex items-center justify-between gap-3 rounded-lg border border-line px-3 py-2"
                          >
                            <span className="truncate text-[13px] text-charcoal">{file.name}</span>
                            <button
                              type="button"
                              onClick={() =>
                                setFiles((prev) => prev.filter((f) => f.name !== file.name))
                              }
                              aria-label={`Remove ${file.name}`}
                              className="text-medgray transition hover:text-coral"
                            >
                              <X size={15} />
                            </button>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>

                <button
                  type="submit"
                  className="mt-6 inline-flex h-12 w-full items-center justify-center rounded-lg bg-coral text-[15px] font-semibold text-white transition-all duration-200 hover:scale-[1.02] hover:bg-coral-deep hover:shadow-[0_12px_26px_rgba(231,76,60,0.28)]"
                >
                  Apply Now
                </button>
                <p className="mt-3 text-center text-[12px] text-medgray">
                  Applications are reviewed by our medical board within 48 hours.
                </p>
              </form>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
