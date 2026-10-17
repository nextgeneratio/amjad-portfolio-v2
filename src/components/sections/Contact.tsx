"use client";

import { Mail, MapPin, MessageSquare, Phone, Send } from "lucide-react";
import { useState } from "react";
import { useReticleStore } from "@reticlehq/react/store";

import { portfolio } from "@/data/portfolio";
import SectionHeading from "@/components/ui/SectionHeading";

const initialForm = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

export default function Contact() {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [error, setError] = useState("");
  useReticleStore("contact-form", {
    status,
    hasName: Boolean(form.name.trim()),
    hasEmail: Boolean(form.email.trim()),
    hasSubject: Boolean(form.subject.trim()),
    hasMessage: Boolean(form.message.trim()),
    hasError: Boolean(error),
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const trimmed = {
      name: form.name.trim(),
      email: form.email.trim(),
      subject: form.subject.trim(),
      message: form.message.trim(),
    };

    if (!trimmed.name || !trimmed.email || !trimmed.subject || !trimmed.message) {
      setStatus("error");
      setError("Please complete all required fields before sending your message.");
      return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(trimmed.email)) {
      setStatus("error");
      setError("Please enter a valid email address.");
      return;
    }

    setStatus("loading");
    setError("");

    const mailtoLink = `mailto:${portfolio.email}?subject=${encodeURIComponent(trimmed.subject)}&body=${encodeURIComponent(
      `Name: ${trimmed.name}\nEmail: ${trimmed.email}\n\n${trimmed.message}`
    )}`;

    window.location.href = mailtoLink;
    setTimeout(() => {
      setStatus("success");
      setForm(initialForm);
    }, 250);
  };

  return (
    <section id="contact" className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
      <SectionHeading
        eyebrow="Contact"
        title="Have a project or opportunity in mind?"
        description="I’m interested in meaningful software projects, professional opportunities, and collaborations where I can learn, contribute, and build useful solutions."
      />

      <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="space-y-5 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
          <div className="flex items-start gap-3">
            <Mail className="mt-1 h-5 w-5 text-sky-600 dark:text-sky-400" suppressHydrationWarning />
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-slate-500 dark:text-slate-400">Email</p>
              <a href={`mailto:${portfolio.email}`} className="mt-1 block text-base text-slate-700 transition hover:text-sky-600 dark:text-slate-200 dark:hover:text-sky-400">
                {portfolio.email}
              </a>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <Phone className="mt-1 h-5 w-5 text-sky-600 dark:text-sky-400" suppressHydrationWarning />
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-slate-500 dark:text-slate-400">Phone</p>
              <p className="mt-1 text-base text-slate-700 dark:text-slate-200">{portfolio.phone} <span className="text-slate-500 dark:text-slate-400">({portfolio.phoneVerificationNote})</span></p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <MapPin className="mt-1 h-5 w-5 text-sky-600 dark:text-sky-400" suppressHydrationWarning />
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-slate-500 dark:text-slate-400">Location</p>
              <p className="mt-1 text-base text-slate-700 dark:text-slate-200">{portfolio.location}</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <MessageSquare className="mt-1 h-5 w-5 text-sky-600 dark:text-sky-400" suppressHydrationWarning />
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-slate-500 dark:text-slate-400">GitHub</p>
              <a href={portfolio.githubUrl} target="_blank" rel="noreferrer" className="mt-1 block text-base text-slate-700 transition hover:text-sky-600 dark:text-slate-200 dark:hover:text-sky-400">
                {portfolio.githubUrl}
              </a>
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
          <div className="grid gap-5 sm:grid-cols-2">
            <label className="block text-sm font-medium text-slate-700 dark:text-slate-200">
              Name
              <input
                type="text"
                name="name"
                data-testid="contact-name"
                value={form.name}
                onChange={handleChange}
                className="mt-2 w-full rounded-xl border border-slate-300 bg-white px-3 py-3 text-slate-900 outline-none transition focus:border-sky-400 focus:ring-2 focus:ring-sky-200 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-100 dark:focus:ring-sky-900"
                placeholder="Your name"
                required
              />
            </label>

            <label className="block text-sm font-medium text-slate-700 dark:text-slate-200">
              Email
              <input
                type="email"
                name="email"
                data-testid="contact-email"
                value={form.email}
                onChange={handleChange}
                className="mt-2 w-full rounded-xl border border-slate-300 bg-white px-3 py-3 text-slate-900 outline-none transition focus:border-sky-400 focus:ring-2 focus:ring-sky-200 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-100 dark:focus:ring-sky-900"
                placeholder="your@email.com"
                required
              />
            </label>
          </div>

          <label className="mt-5 block text-sm font-medium text-slate-700 dark:text-slate-200">
            Subject
            <input
              type="text"
              name="subject"
              data-testid="contact-subject"
              value={form.subject}
              onChange={handleChange}
              className="mt-2 w-full rounded-xl border border-slate-300 bg-white px-3 py-3 text-slate-900 outline-none transition focus:border-sky-400 focus:ring-2 focus:ring-sky-200 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-100 dark:focus:ring-sky-900"
              placeholder="Project, internship, or collaboration"
              required
            />
          </label>

          <label className="mt-5 block text-sm font-medium text-slate-700 dark:text-slate-200">
            Message
            <textarea
              name="message"
              data-testid="contact-message"
              value={form.message}
              onChange={handleChange}
              rows={6}
              className="mt-2 w-full rounded-xl border border-slate-300 bg-white px-3 py-3 text-slate-900 outline-none transition focus:border-sky-400 focus:ring-2 focus:ring-sky-200 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-100 dark:focus:ring-sky-900"
              placeholder="Tell me a bit about your project or opportunity..."
              required
            />
          </label>

          {status === "error" ? (
            <p className="mt-4 rounded-xl border border-rose-200 bg-rose-50 px-3 py-2 text-sm text-rose-700 dark:border-rose-900 dark:bg-rose-950/40 dark:text-rose-300">
              {error}
            </p>
          ) : null}

          {status === "success" ? (
            <p className="mt-4 rounded-xl border border-emerald-200 bg-emerald-50 px-3 py-2 text-sm text-emerald-700 dark:border-emerald-900 dark:bg-emerald-950/40 dark:text-emerald-300">
              Your email app should open with the message prepared.
            </p>
          ) : null}

          <button
            type="submit"
            data-testid="contact-submit"
            disabled={status === "loading"}
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-sky-600 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-sky-500 disabled:cursor-not-allowed disabled:bg-sky-400"
          >
            <Send className="h-4 w-4" suppressHydrationWarning />
            {status === "loading" ? "Preparing..." : "Send message"}
          </button>
        </form>
      </div>
    </section>
  );
}
