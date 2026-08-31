"use client";

import { useEffect, useState } from "react";
import { useLanguage } from "@/context/language-context";
import { FadeIn } from "@/components/ui/fade-in";
import DepthCarousel, { DepthItem } from "@/components/ui/visuals/DepthCarousel";
import { getProjects } from "@/lib/projects";
import { Project } from "@/types";

export function WorkSection() {
  const { language } = useLanguage();
  const [dbProjects, setDbProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchProjects() {
      const projects = await getProjects();
      setDbProjects(projects);
      setLoading(false);
    }
    fetchProjects();
  }, []);

  const badgeText = language === "ar" ? "04 // الأعمال المختارة" : "04 // SELECTED WORK";
  const headingText = language === "ar" ? "المشاريع المميزة" : "FEATURED PROJECTS";

  // تحويل البيانات ديناميكياً مع معالجة الرابط والـ Badge والاتجاهات
  const formattedProjects: DepthItem[] = dbProjects.map((item) => {
    const isAr = language === "ar";

    return {
      id: item.id,
      title: isAr ? item.title_ar : item.title_en,
      // قراءة الـ Badge ديناميكياً من الداتابيز
      category: isAr ? (item.category_ar || "مشروع مميز") : (item.category_en || "Featured Project"),
      description: isAr ? item.description_ar : item.description_en,
      // تمرير الرابط فقط إذا كان موجوذاً، وإلا نمرر نصاً فارغاً لإخفاء زر View Live Project
      link: item.demo_url ? item.demo_url.trim() : "",
      features: isAr ? (item.highlights_ar || []) : (item.highlights_en || []),
      image: item.image_url || "https://placehold.co/600x400/18181b/10b981?text=Project",
    };
  });

  return (
    <section
      id="work"
      className="relative w-full pt-8 sm:pt-10 pb-6 px-4 sm:px-8 max-w-7xl mx-auto space-y-4 overflow-hidden"
      dir={language === "ar" ? "rtl" : "ltr"}
    >
      <FadeIn delay={0.1}>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-4">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-emerald-400 font-medium">
              {badgeText}
            </span>
            <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-white mt-1">
              {headingText}
            </h2>
          </div>
        </div>
      </FadeIn>

      <FadeIn delay={0.2}>
        <div className="w-full h-[540px] sm:h-[600px] relative flex items-center justify-center">
          {loading ? (
            <div className="flex flex-col items-center justify-center gap-3 text-zinc-500 font-mono text-xs">
              <div className="w-6 h-6 border-2 border-emerald-500 border-t-transparent rounded-full animate-spin" />
              <span>[ LOADING PROJECTS... ]</span>
            </div>
          ) : formattedProjects.length > 0 ? (
            <DepthCarousel
              items={formattedProjects}
              cardWidth={500}
              cardHeight={500}
              spread={280}
              tilt={12}
              duration={400}
              loop={true}
            />
          ) : (
            <div className="text-zinc-500 font-mono text-xs">
              {language === "ar" ? "لا توجد مشاريع مضافة حالياً." : "No projects found."}
            </div>
          )}
        </div>
      </FadeIn>
    </section>
  );
}

export default WorkSection;