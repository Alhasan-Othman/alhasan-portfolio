import { HeroSection } from "@/components/sections/hero";
import { AboutSection } from "@/components/sections/about";
import { WhyMeSection } from "@/components/sections/why-me";
import { ServicesSection } from "@/components/sections/services";
import { WorkSection } from "@/components/sections/work";
import { ContactSection } from "@/components/sections/contact";
import { Footer } from "@/components/layout/footer";
import { ScrollSpyNav } from "@/components/ui/scroll-spy-nav";
import { getProjects } from "@/lib/projects";

// Re-fetch projects from Supabase at most once a minute
export const revalidate = 60;

export default async function HomePage() {
  const projects = await getProjects();

  return (
    <main className="relative z-10 min-h-screen text-white">
      <ScrollSpyNav />
      <HeroSection />
      <AboutSection />
      <WhyMeSection />
      <ServicesSection />
      <WorkSection projects={projects} />
      <ContactSection />
      <Footer />
    </main>
  );
}