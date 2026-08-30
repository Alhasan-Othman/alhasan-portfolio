import { siteConfig } from "@/config/site";

export function Footer() {
  return (
    <footer className="p-8 md:p-16 max-w-5xl mx-auto border-t border-zinc-800 flex flex-col md:flex-row justify-between items-start md:items-center gap-6 font-mono text-xs text-zinc-500 uppercase">
      <div>
        <p className="text-white font-bold tracking-widest">{siteConfig.name}</p>
        <p className="text-[10px] text-zinc-600 mt-0.5">© {new Date().getFullYear()} ALL RIGHTS RESERVED.</p>
      </div>

      <div className="flex items-center gap-6">
        <span>SECURITY & ENGINEERING</span>
        <a href="#top" className="hover:text-white transition-colors">
          [ ↑ BACK TO TOP ]
        </a>
      </div>
    </footer>
  );
}