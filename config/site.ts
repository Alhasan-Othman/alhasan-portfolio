export const siteConfig = {
  name: "ALHASAN",
  domainExtension: ".DEV",
  fullName: "ALHASAN OTHMAN",
  title: "ALHASAN OTHMAN — Software & Systems Engineer",
  description:
    "Web applications, intelligent systems, and security-driven digital products.",
  location: "SYRIA / WORLDWIDE",
  availability: "AVAILABLE FOR SELECTED PROJECTS",
  roles: ["SOFTWARE ENGINEER", "SYSTEMS", "SECURITY"],
  cv: "/Alhasan_Othman_CV.pdf",
  links: {
    github: "https://github.com/Alhasan-Othman",
    whatsapp: "https://wa.me/+963938997544",
    email: "mailto:alhasan.othman04@gmail.com",
  },
  footerColumns: [
    {
      title: "Services",
      links: [
        { name: "Software Architecture", href: "#services" },
        { name: "AI & ML Integration", href: "#services" },
        { name: "Full-Stack Systems", href: "#services" },
        { name: "Security & Auditing", href: "#services" },
      ],
    },
    {
      title: "Explore",
      links: [
        { name: "Featured Projects", href: "#work" },
        { name: "Engineering Process", href: "#why-me" },
        { name: "Tech Stack", href: "#why-me" },
      ],
    },
    {
      title: "Get Started",
      links: [
        { name: "Start a Project", href: "#contact" },
        { name: "About Me", href: "#about" },
      ],
    },
  ],
};

export type SiteConfig = typeof siteConfig;