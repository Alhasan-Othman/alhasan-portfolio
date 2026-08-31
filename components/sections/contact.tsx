"use client";

import { useState, useTransition } from "react";
import { useLanguage } from "@/context/language-context";
import { FadeIn } from "@/components/ui/fade-in";
import { sendContactMessage } from "@/app/actions/contact";

export function ContactSection() {
  const { language } = useLanguage();

  const [formData, setFormData] = useState({
    email: "",
    company: "",
    phone: "",
    message: "",
  });

  const [isPending, startTransition] = useTransition();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const content = {
    en: {
      badge: "05 // GET IN TOUCH",
      heading: "Let's Build Something Scalable",
      subheading:
        "Have a project in mind, need a security audit, or want to discuss a full-stack solution? Drop a message below.",
      successTitle: "Message Sent Successfully!",
      successMessage:
        "Thank you for reaching out. I will review your project details and get back to you shortly.",
      sendAnother: "Send Another Message",
      labels: {
        email: "Email Address",
        company: "Company / Organization Name",
        phone: "Phone Number",
        optional: "(Optional)",
        message: "Tell us about your project",
      },
      placeholders: {
        email: "john@example.com",
        phone: "+1 (555) 000-0000",
        message: "Describe your scope, goals, timeline, or technical requirements...",
      },
      buttons: {
        submit: "Send Message",
        submitting: "Sending...",
      },
    },
    ar: {
      badge: "05 // تواصل معي",
      heading: "لنبتكر شيئاً قابلاً للتوسع",
      subheading:
        "هل لديك فكرة مشروع، تحتاج إلى فحص أمني، أو ترغب في مناقشة حلول الويب ؟ اترك رسالتك أدناه.",
      successTitle: "تم إرسال الرسالة بنجاح!",
      successMessage:
        "شكراً لتواصلك. سأقوم بمراجعة تفاصيل مشروعك والرد عليك في أقرب وقت.",
      sendAnother: "إرسال رسالة أخرى",
      labels: {
        email: "البريد الإلكتروني",
        company: "اسم الشركة / المؤسسة",
        phone: "رقم الهاتف",
        optional: "(اختياري)",
        message: "حدثنا عن مشروعك",
      },
      placeholders: {
        email: "john@example.com",
        phone: "+1 (555) 000-0000",
        message: "اشرح نطاق مشروعك، أهدافك، الجدول الزمني، أو المتطلبات التقنية...",
      },
      buttons: {
        submit: "إرسال الرسالة",
        submitting: "جاري الإرسال...",
      },
    },
  };

  const t = content[language];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);

    const payload = new FormData();
    payload.append("company", formData.company);
    payload.append("email", formData.email);
    payload.append("phone", formData.phone);
    payload.append("content", formData.message); // نرسل الـ message باسم content ليتوافق مع الـ Action

    startTransition(async () => {
      const result = await sendContactMessage(
        { success: false, message: "" },
        payload
      );

      if (result.success) {
        setIsSubmitted(true);
        setFormData({ email: "", company: "", phone: "", message: "" });
      } else {
        setErrorMessage(result.message);
      }
    });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <section
      id="contact"
      className="relative w-full py-24 px-6 md:px-12 max-w-3xl mx-auto overflow-hidden"
    >
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none z-0" />

      <FadeIn delay={0.1}>
        <div className="mb-10 text-center relative z-10">
          <span className="text-xs font-mono uppercase tracking-widest text-emerald-400/90 font-medium">
            {t.badge}
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mt-3">
            {t.heading}
          </h2>
          <p className="text-sm sm:text-base text-zinc-400 font-light mt-3 max-w-lg mx-auto">
            {t.subheading}
          </p>
        </div>
      </FadeIn>

      <FadeIn delay={0.2} className="relative z-10">
        <div className="p-6 sm:p-10 rounded-2xl bg-zinc-900/60 border border-zinc-800 backdrop-blur-sm shadow-2xl relative">
          {isSubmitted ? (
            <div className="py-12 text-center space-y-4">
              <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto border border-emerald-500/30">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white">{t.successTitle}</h3>
              <p className="text-xs sm:text-sm text-zinc-400 max-w-sm mx-auto leading-relaxed">
                {t.successMessage}
              </p>
              <button
                onClick={() => setIsSubmitted(false)}
                className="mt-4 px-5 py-2.5 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-xs font-mono text-white transition-colors"
              >
                {t.sendAnother}
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              {errorMessage && (
                <div className="p-3 text-xs font-mono text-red-400 bg-red-950/40 border border-red-800/60 rounded-xl">
                  {errorMessage}
                </div>
              )}

              {/* Email Address */}
              <div className="space-y-2">
                <label htmlFor="email" className="text-xs font-mono text-zinc-400">
                  {t.labels.email} <span className="text-emerald-400">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder={t.placeholders.email}
                  className="w-full px-4 py-3 rounded-xl bg-zinc-950/80 border border-zinc-800 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-emerald-500/60 focus:ring-1 focus:ring-emerald-500/60 transition-all"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {/* Company Name */}
                <div className="space-y-2">
                  <label htmlFor="company" className="text-xs font-mono text-zinc-400">
                    {t.labels.company} <span className="text-emerald-400">*</span>
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    required
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-zinc-950/80 border border-zinc-800 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-emerald-500/60 focus:ring-1 focus:ring-emerald-500/60 transition-all"
                  />
                </div>

                {/* Phone Number */}
                <div className="space-y-2">
                  <label htmlFor="phone" className="text-xs font-mono text-zinc-400">
                    {t.labels.phone} <span className="text-zinc-500 text-[10px]">{t.labels.optional}</span>
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder={t.placeholders.phone}
                    className="w-full px-4 py-3 rounded-xl bg-zinc-950/80 border border-zinc-800 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-emerald-500/60 focus:ring-1 focus:ring-emerald-500/60 transition-all"
                  />
                </div>
              </div>

              {/* Message */}
              <div className="space-y-2">
                <label htmlFor="message" className="text-xs font-mono text-zinc-400">
                  {t.labels.message} <span className="text-emerald-400">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder={t.placeholders.message}
                  className="w-full px-4 py-3 rounded-xl bg-zinc-950/80 border border-zinc-800 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-emerald-500/60 focus:ring-1 focus:ring-emerald-500/60 transition-all resize-none"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isPending}
                className="w-full py-3.5 px-6 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-zinc-950 font-semibold text-sm transition-all duration-200 flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(16,185,129,0.2)] disabled:opacity-50 disabled:cursor-not-allowed mt-4"
              >
                {isPending ? (
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 border-2 border-zinc-950 border-t-transparent rounded-full animate-spin" />
                    <span className="font-mono text-xs uppercase tracking-wider">{t.buttons.submitting}</span>
                  </div>
                ) : (
                  <span className="font-mono text-xs uppercase tracking-wider">{t.buttons.submit}</span>
                )}
              </button>
            </form>
          )}
        </div>
      </FadeIn>
    </section>
  );
}