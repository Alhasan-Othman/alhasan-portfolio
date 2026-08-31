"use client";

import { useLanguage } from "@/context/language-context";
import { FadeIn } from "@/components/ui/fade-in";

export function AboutSection() {
  const { language } = useLanguage();

  const content = {
    en: {
      badge: "01 // About Me",
      heading: "Engineering secure backend systems & intelligent architectures.",
      narrativeParagraph1:
        "I design and build secure, intelligent systems and enterprise software. My work bridges strong software architecture with threat-aware security engineering and modern AI capabilities.",
      narrativeParagraph2:
        "From automated vulnerability scanners to scalable enterprise platforms, I focus on delivering reliable performance and long-term architectural stability.",
      techBadge: "// TECHNICAL EXPERTISE & STACK",
      skillsCategories: [
        {
          category: "Backend & Core",
          skills: ["Laravel", "Node.js", "ASP.NET Core", "PHP", "C#", "REST APIs"],
        },
        {
          category: "Frontend & UI",
          skills: ["Next.js", "React", "Tailwind CSS", "Blade", "JavaScript", "HTML5/CSS3"],
        },
        {
          category: "Security & AI",
          skills: ["App Security", "OWASP", "Vulnerability Assessment", "LLM / RAG"],
        },
        {
          category: "Databases & DevOps",
          skills: ["PostgreSQL", "MySQL", "Oracle", "Docker", "Linux", "CI/CD"],
        },
      ],
      academicBadge: "ACADEMIC FOUNDATION",
      university: "Syrian Private University",
      degree: "B.Sc. in Artificial Intelligence Engineering",
      deptLabel: "Department of",
      deptName: "Intelligent Information Security Systems Engineering",
      theoreticalTitle: "Theoretical & Engineering Core",
      theoreticalDesc:
        "Grounded in artificial intelligence foundations, mathematical modeling, algorithmic problem-solving, and advanced computational architectures.",
      securityTitle: "Specialized Security Track",
      securityDesc:
        "Focused study on intelligent information security, network defense structures, threat analysis principles, and secure system design methodologies.",
    },
    ar: {
      badge: "01 // من أنا",
      heading: "هندسة أنظمة خلفية آمنة وبنى برمجية ذكية.",
      narrativeParagraph1:
        "أصمم وأبني أنظمة ذكية وآمنة وبرمجيات متكاملة للمؤسسات. يجمع عملي بين الهندسة البرمجية المتينة، الهندسة الأمنية الواعية بالتهديدات، وإمكانيات الذكاء الاصطناعي الحديثة.",
      narrativeParagraph2:
        "بدءاً من أدوات فحص الثغرات المؤتمتة وحتى المنصات المؤسساتية القابلة للتوسع، أركز على تقديم أداء موثوق واستقرار بنيوي طويل الأمد.",
      techBadge: "// المهارات والتقنيات الأساسية",
      skillsCategories: [
        {
          category: "الأنظمة الخلفية والأساسيات",
          skills: ["Laravel", "Node.js", "ASP.NET Core", "PHP", "C#", "REST APIs"],
        },
        {
          category: "الواجهات وتجربة المستخدم",
          skills: ["Next.js", "React", "Tailwind CSS", "Blade", "JavaScript", "HTML5/CSS3"],
        },
        {
          category: "الأمان والذكاء الاصطناعي",
          skills: ["App Security", "OWASP", "Vulnerability Assessment", "LLM / RAG"],
        },
        {
          category: "قواعد البيانات والـ DevOps",
          skills: ["PostgreSQL", "MySQL", "Oracle", "Docker", "Linux", "CI/CD"],
        },
      ],
      academicBadge: "الخلفية الأكاديمية",
      university: "الجامعة السورية الخاصة",
      degree: "بكالوريوس في هندسة الذكاء الاصطناعي",
      deptLabel: "قسم",
      deptName: "هندسة نظم أمن المعلومات الذكية",
      theoreticalTitle: "الأساس الهندسي والنظري",
      theoreticalDesc:
        "مرتكز على أصول الذكاء الاصطناعي، النمذجة الرياضية، حل المشكلات الخوارزمية، والبنى الحسابية المتقدمة.",
      securityTitle: "مسار الأمان المتخصص",
      securityDesc:
        "دراسة متخصصة في أمن المعلومات الذكي، بنى الدفاع الشبكي، مبادئ تحليل التهديدات، ومناهج تصميم الأنظمة الآمنة.",
    },
  };

  const t = content[language];

  return (
    <section id="about" className="relative w-full py-24 px-6 md:px-12 max-w-5xl mx-auto space-y-10">
      
      {/* Section Header */}
      <FadeIn delay={0.1}>
        <div>
          <span className="text-xs font-mono uppercase tracking-widest text-emerald-400/90 font-medium">
            {t.badge}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mt-3">
            {t.heading}
          </h2>
        </div>
      </FadeIn>

      {/* Top Grid: Narrative + Tech Stack Categories */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        
        {/* Narrative */}
        <FadeIn delay={0.2} className="lg:col-span-6 space-y-5 text-zinc-300 font-light leading-relaxed text-base sm:text-lg flex flex-col justify-center">
          <p>{t.narrativeParagraph1}</p>
          <p>{t.narrativeParagraph2}</p>
        </FadeIn>

        {/* Tech Stack Categories */}
        <FadeIn delay={0.3} className="lg:col-span-6 flex flex-col justify-center">
          <div className="space-y-3">
            <span className="text-xs font-mono uppercase tracking-wider text-emerald-400/90 font-medium block">
              {t.techBadge}
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {t.skillsCategories.map((cat, index) => (
                <div 
                  key={index}
                  className="group relative p-3.5 rounded-xl bg-zinc-900/70 border border-zinc-800 hover:border-emerald-400/80 hover:shadow-[0_0_20px_rgba(16,185,129,0.15)] transition-all duration-300 space-y-1.5 shadow-md overflow-hidden"
                >
                  <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-emerald-500/0 group-hover:via-emerald-400 transition-all duration-500" />

                  <h4 className="text-xs font-mono font-semibold text-zinc-200 group-hover:text-emerald-400 transition-colors duration-300">
                    {cat.category}
                  </h4>
                  <p className="text-xs text-zinc-300 font-light leading-relaxed">
                    {cat.skills.join(" • ")}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>

      </div>

      {/* Bottom Card: Academic Foundation */}
      <FadeIn delay={0.4}>
        <div className="w-full p-8 sm:p-10 rounded-2xl bg-zinc-900/60 border border-zinc-800 backdrop-blur-sm shadow-2xl relative overflow-hidden group hover:border-emerald-500/40 transition-all duration-300">
          
          <div className="absolute top-0 ltr:right-0 rtl:left-0 w-56 h-56 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />

          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6">
            <div className="space-y-2">
              <span className="text-xs font-mono uppercase tracking-wider text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded border border-emerald-500/20 inline-block font-medium">
                {t.academicBadge}
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight pt-1">
                {t.university}
              </h3>
              <p className="text-sm font-mono text-emerald-400 font-medium">
                {t.degree}
              </p>
            </div>
            
            <div className="ltr:text-left rtl:text-right md:ltr:text-right md:rtl:text-left font-mono space-y-1">
              <span className="block text-xs uppercase tracking-widest text-zinc-400 font-medium">
                {t.deptLabel}
              </span>
              <span className="text-sm sm:text-base text-zinc-100 font-semibold block">
                {t.deptName}
              </span>
            </div>
          </div>

          <div className="pt-6 grid grid-cols-1 md:grid-cols-2 gap-6 border-t border-zinc-800/80">
            <div className="flex items-start gap-4">
              <div className="p-2.5 rounded-xl bg-emerald-500/10 text-emerald-400 mt-0.5 border border-emerald-500/20 shrink-0">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <div className="space-y-1">
                <h4 className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-zinc-200">
                  {t.theoreticalTitle}
                </h4>
                <p className="text-xs sm:text-sm text-zinc-300 font-light leading-relaxed">
                  {t.theoreticalDesc}
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-2.5 rounded-xl bg-emerald-500/10 text-emerald-400 mt-0.5 border border-emerald-500/20 shrink-0">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <div className="space-y-1">
                <h4 className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-zinc-200">
                  {t.securityTitle}
                </h4>
                <p className="text-xs sm:text-sm text-zinc-300 font-light leading-relaxed">
                  {t.securityDesc}
                </p>
              </div>
            </div>
          </div>

        </div>
      </FadeIn>

    </section>
  );
}