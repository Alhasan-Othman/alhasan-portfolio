import { siteConfig } from "@/config/site";
import { ContactForm } from "@/components/sections/contact-form";

export function ContactSection() {
  return (
    <section id="contact" className="p-8 md:p-16 max-w-5xl mx-auto border-t border-zinc-800 space-y-12">
      <div className="text-xs font-mono uppercase text-zinc-500 tracking-widest">
        05 / CONTACT & INQUIRIES
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left Side Info */}
        <div className="lg:col-span-6 space-y-6">
          <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight text-white leading-tight">
            LET’S BUILD SOMETHING <br />
            <span className="text-zinc-500">EXCEPTIONAL.</span>
          </h2>

          <p className="text-zinc-400 text-sm leading-relaxed">
            Available for technical consulting, full-stack application development, and security auditing. Reach out directly or fill out the message form.
          </p>

          <div className="pt-4 space-y-4 font-mono text-xs">
            <div>
              <span className="block text-zinc-500 uppercase">// DIRECT EMAIL</span>
              <a
                href={siteConfig.links.email}
                className="text-base text-white hover:text-zinc-400 transition-colors underline decoration-zinc-700 underline-offset-4"
              >
                contact@alhasan.dev
              </a>
            </div>

            <div className="flex gap-4 text-zinc-400 uppercase pt-2">
              <a
                href={siteConfig.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
              >
                [ GITHUB ]
              </a>
              <span>[ SYRIA / WORLDWIDE ]</span>
            </div>
          </div>
        </div>

        {/* Right Side Interactive Form */}
        <div className="lg:col-span-6">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}