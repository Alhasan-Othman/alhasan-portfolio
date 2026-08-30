import { siteConfig } from "@/config/site";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { LangToggle } from "@/components/ui/lang-toggle";

export function Header() {
  const navItems = [
    { label: "ABOUT", href: "#about" },
    { label: "APPROACH", href: "#why-me" },
    { label: "SERVICES", href: "#services" },
    { label: "WORK", href: "#work" },
    { label: "CONTACT", href: "#contact" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-md bg-white/80 dark:bg-black/80 border-b border-zinc-200 dark:border-zinc-800 transition-colors">
      <div className="max-w-5xl mx-auto px-6 md:px-12 h-16 flex items-center justify-between font-mono text-xs">
        {/* Brand Name */}
        <a
          href="#"
          className="font-bold text-black dark:text-white uppercase tracking-widest hover:opacity-80 transition-opacity"
        >
          {siteConfig.name}
        </a>

        {/* Desktop Navigation Anchors */}
        <nav className="hidden md:flex items-center gap-6 text-zinc-600 dark:text-zinc-400 uppercase tracking-wider">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="hover:text-black dark:hover:text-white transition-colors"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Controls */}
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <LangToggle />
        </div>
      </div>
    </header>
  );
}