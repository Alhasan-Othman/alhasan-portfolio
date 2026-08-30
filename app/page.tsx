import { HeroSection } from "@/components/sections/hero";
import { AboutSection } from "@/components/sections/about";
import { WhyMeSection } from "@/components/sections/why-me";
import { ServicesSection } from "@/components/sections/services";
import { WorkSection } from "@/components/sections/work";
import { ContactSection } from "@/components/sections/contact";
import { Footer } from "@/components/layout/footer";

export default function HomePage() {
  return (
    <main className="relative z-10 min-h-screen text-white">
      <HeroSection />
      <AboutSection />
      <WhyMeSection />
      <ServicesSection />
      <WorkSection />
      <ContactSection />
      <Footer />
    </main>
  );
}