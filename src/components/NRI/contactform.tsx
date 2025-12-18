"use client";

import React from "react";

const ContactForm: React.FC = () => {
  const [submitting, setSubmitting] = React.useState(false);
  const [errors, setErrors] = React.useState<Record<string, string>>({});
  const [successMsg, setSuccessMsg] = React.useState<string | null>(null);
  const [errorMsg, setErrorMsg] = React.useState<string | null>(null);

  // Refs to open native pickers programmatically
  const dateRef = React.useRef<HTMLInputElement>(null);
  const timeRef = React.useRef<HTMLInputElement>(null);

  // Helper to open the browser's native date/time picker if supported
  const lastOpenedRef = React.useRef<number>(0);
  const openNativePicker = (
    ref: React.RefObject<HTMLInputElement>,
    evt?: { isTrusted?: boolean }
  ) => {
    if (evt && evt.isTrusted === false) return; // must be a real user gesture
    const el = ref.current as any;
    if (!el || typeof el.showPicker !== "function") return;
    const now = Date.now();
    if (now - lastOpenedRef.current < 300) return; // debounce rapid triggers
    try {
      el.focus?.({ preventScroll: true });
      el.showPicker();
      lastOpenedRef.current = now;
    } catch (_err) {
      // Silently ignore NotAllowedError or unsupported scenarios
    }
  };

  const validate = (form: HTMLFormElement) => {
    const formData = new FormData(form);
    const name = String(formData.get("name") || "").trim();
    const email = String(formData.get("email") || "").trim();
    const phone = String(formData.get("phone") || "").trim();
    const date = String(formData.get("date") || "").trim();
    const time = String(formData.get("time") || "").trim();

    const nextErrors: Record<string, string> = {};

    if (!name || name.length < 2) nextErrors.name = "Please enter your full name";

    const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!emailRe.test(email)) nextErrors.email = "Enter a valid email address";

    if (phone && !/^[+]?\d[\d\s-]{7,15}$/.test(phone)) {
      nextErrors.phone = "Enter a valid phone number";
    }

    if (!date) nextErrors.date = "Select a date";
    if (!time) nextErrors.time = "Select a time";

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSuccessMsg(null);
    setErrorMsg(null);

    const form = e.currentTarget;
    if (!validate(form)) return;

    const formData = new FormData(form);

    const payload = {
      name: formData.get("name"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      date: formData.get("date"),
      time: formData.get("time"),
      message: formData.get("message"),
      source: "nri-contact",
    } as Record<string, any>;
        
    try {
      setSubmitting(true);
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload), 
      });

      if (!res.ok) throw new Error("Failed to submit");
      const data = await res.json();
      setSuccessMsg("Thanks! We will reach out shortly.");
      form.reset();
    } catch (error) {
      console.error("Error submitting form:", error);
      setErrorMsg("Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  const Field = ({
    id,
    label,
    hint,
    error,
    children,
    className = "",
  }: {
    id: string;
    label: string;
    hint?: string;
    error?: string;
    children: React.ReactNode;
    className?: string;
  }) => (
    <div className={className}>
      <label htmlFor={id} className="mb-1 block text-sm font-medium text-gray-700">
        {label}
      </label>
      {children}
      <div className="h-5">
        {error ? (
          <p className="text-xs text-red-600 mt-1">{error}</p>
        ) : hint ? (
          <p className="text-xs text-gray-500 mt-1">{hint}</p>
        ) : null}
      </div>
    </div>
  );

  const Section = ({
    id,
    title,
    subtitle,
    children,
  }: {
    id?: string;
    title: string;
    subtitle?: string;
    children?: React.ReactNode;
  }) => (
    <section id={id} className="py-5 md:py-10">
      <div className="max-w-6xl mx-auto px-4">
        <div className="mb-6 md:mb-8 text-center">
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-900">
            {title}
          </h2>
          {subtitle && (
            <p className="mt-2 text-gray-600 md:text-lg">{subtitle}</p>
          )}
        </div>
        {children}
      </div>
    </section>
  );

  return (
    <Section
      id="consult"
      title="Speak with an NRI Advisor"
      subtitle="Book a 20-minute discovery call to discuss your goals and constraints"
    >
      <div className="rounded-2xl border border-emerald-200 bg-gradient-to-br from-emerald-50 to-white p-6 md:p-8">
        {successMsg && (
          <div className="mb-4 rounded-xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-emerald-800">
            {successMsg}
          </div>
        )}
        {errorMsg && (
          <div className="mb-4 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-red-800">
            {errorMsg}
          </div>
        )}
        <form onSubmit={handleSubmit} noValidate className="grid gap-4 md:grid-cols-3">
          <Field id="name" label="Full name" error={errors.name}>
            <input
              id="name"
              type="text"
              name="name"
              placeholder="Full Name"
              required
              minLength={2}
              className="w-full rounded-2xl border px-3 py-1 focus:ring-2 focus:ring-emerald-500"
            />
          </Field>

          <Field id="email" label="Email" error={errors.email}>
            <input
              id="email"
              type="email"
              name="email"
              placeholder="Email Address"
              required
              inputMode="email"
              className="w-full rounded-2xl border px-3 py-1 focus:ring-2 focus:ring-emerald-500"
            />
          </Field>

          <Field id="phone" label="Phone (optional)" hint="Include country code if outside India" error={errors.phone}>
            <input
              id="phone"
              type="tel"
              name="phone"
              placeholder="Mobile Number"
              inputMode="tel"
              pattern="[+]?\\d[\\d\\s-]{7,15}"
              className="w-full rounded-2xl border px-3 py-1 focus:ring-2 focus:ring-emerald-500"
            />
          </Field>

          <Field id="date" label="Preferred date" error={errors.date}>
            <input
              id="date"
              type="date"
              name="date"
              required
              min={new Date().toISOString().split("T")[0]}
              ref={dateRef}
              onPointerDown={(e) => {
                e.preventDefault();
                openNativePicker(dateRef, e.nativeEvent as any);
              }}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  openNativePicker(dateRef, e.nativeEvent as any);
                }
              }}
              className="w-full rounded-2xl border px-3 py-1 focus:ring-2 focus:ring-emerald-500"
            />
          </Field>

          <Field id="time" label="Preferred time" error={errors.time}>
            <input
              id="time"
              type="time"
              name="time"
              required
              ref={timeRef}
              onPointerDown={(e) => {
                e.preventDefault();
                openNativePicker(timeRef, e.nativeEvent as any);
              }}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  openNativePicker(timeRef, e.nativeEvent as any);
                }
              }}
              className="w-full rounded-2xl border px-3 py-1 focus:ring-2 focus:ring-emerald-500"
            />
          </Field>

          <Field id="message" label="Goals (optional)" className="md:col-span-3">
            <textarea
              id="message"
              name="message"
              placeholder="Tell us about your goals"
              className="h-28 w-full rounded-2xl border px-3 py-1 focus:ring-2 focus:ring-emerald-500"
            />
          </Field>

          <div className="md:col-span-3 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
            <p className="text-sm text-gray-500">
              By submitting, you agree to our terms and privacy policy.
            </p>
            <button
              type="submit"
              disabled={submitting}
              className="inline-flex items-center justify-center gap-2 rounded-2xl bg-emerald-600 px-5 py-2.5 text-white font-medium hover:bg-emerald-700 disabled:opacity-70"
            >
              {submitting && (
                <svg className="h-4 w-4 animate-spin" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"></path>
                </svg>
              )}
              {submitting ? "Submitting..." : "Request Callback"}
            </button>
          </div>
        </form>
      </div>
    </Section>
  );
};

export default ContactForm;
