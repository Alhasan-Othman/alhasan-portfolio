"use client";

import { useState } from "react";
import { FadeIn } from "@/components/ui/fade-in";

export function ContactSection() {
  const [formData, setFormData] = useState({
    email: "",
    company: "",
    phone: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate network request
    await new Promise((resolve) => setTimeout(resolve, 1200));

    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormData({ email: "", company: "", phone: "", message: "" });
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
      {/* Background Accent Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none z-0" />

      {/* Section Header */}
      <FadeIn delay={0.1}>
        <div className="mb-10 text-center relative z-10">
          <span className="text-xs font-mono uppercase tracking-widest text-emerald-400/90 font-medium">
            05 // Get In Touch
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mt-3">
            Let&apos;s Build Something Scalable
          </h2>
          <p className="text-sm sm:text-base text-zinc-400 font-light mt-3 max-w-lg mx-auto">
            Have a project in mind, need a security audit, or want to discuss a full-stack solution? Drop a message below.
          </p>
        </div>
      </FadeIn>

      {/* Contact Form Card */}
      <FadeIn delay={0.2} className="relative z-10">
        <div className="p-6 sm:p-10 rounded-2xl bg-zinc-900/60 border border-zinc-800 backdrop-blur-sm shadow-2xl relative">
          {isSubmitted ? (
            <div className="py-12 text-center space-y-4">
              <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto border border-emerald-500/30">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white">Message Sent Successfully!</h3>
              <p className="text-xs sm:text-sm text-zinc-400 max-w-sm mx-auto leading-relaxed">
                Thank you for reaching out. I will review your project details and get back to you shortly.
              </p>
              <button
                onClick={() => setIsSubmitted(false)}
                className="mt-4 px-5 py-2.5 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-xs font-mono text-white transition-colors"
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Email Address */}
              <div className="space-y-2">
                <label htmlFor="email" className="text-xs font-mono text-zinc-400">
                  Email Address <span className="text-emerald-400">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john@example.com"
                  className="w-full px-4 py-3 rounded-xl bg-zinc-950/80 border border-zinc-800 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-emerald-500/60 focus:ring-1 focus:ring-emerald-500/60 transition-all"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {/* Company Name */}
                <div className="space-y-2">
                  <label htmlFor="company" className="text-xs font-mono text-zinc-400">
                    Company / Organization Name
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Acme Inc."
                    className="w-full px-4 py-3 rounded-xl bg-zinc-950/80 border border-zinc-800 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-emerald-500/60 focus:ring-1 focus:ring-emerald-500/60 transition-all"
                  />
                </div>

                {/* Phone Number (Optional) */}
                <div className="space-y-2">
                  <label htmlFor="phone" className="text-xs font-mono text-zinc-400">
                    Phone Number <span className="text-zinc-500 text-[10px]">(Optional)</span>
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+1 (555) 000-0000"
                    className="w-full px-4 py-3 rounded-xl bg-zinc-950/80 border border-zinc-800 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-emerald-500/60 focus:ring-1 focus:ring-emerald-500/60 transition-all"
                  />
                </div>
              </div>

              {/* Message / Project Details */}
              <div className="space-y-2">
                <label htmlFor="message" className="text-xs font-mono text-zinc-400">
                  Tell us about your project <span className="text-emerald-400">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Describe your scope, goals, timeline, or technical requirements..."
                  className="w-full px-4 py-3 rounded-xl bg-zinc-950/80 border border-zinc-800 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-emerald-500/60 focus:ring-1 focus:ring-emerald-500/60 transition-all resize-none"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3.5 px-6 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-zinc-950 font-semibold text-sm transition-all duration-200 flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(16,185,129,0.2)] disabled:opacity-50 disabled:cursor-not-allowed mt-4"
              >
                {isSubmitting ? (
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 border-2 border-zinc-950 border-t-transparent rounded-full animate-spin" />
                    <span className="font-mono text-xs uppercase tracking-wider">Sending...</span>
                  </div>
                ) : (
                  <span className="font-mono text-xs uppercase tracking-wider">Send Message</span>
                )}
              </button>
            </form>
          )}
        </div>
      </FadeIn>
    </section>
  );
}