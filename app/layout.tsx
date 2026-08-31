import type { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { fontSans, fontMono } from "@/lib/fonts";
import { LanguageProvider } from "@/context/language-context";
import { Header } from "@/components/layout/header";
import "./globals.css";

export const metadata: Metadata = {
  title: siteConfig.title,
  description: siteConfig.description,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`dark scroll-smooth ${fontSans.variable} ${fontMono.variable}`}
      suppressHydrationWarning
    >
      <body className="min-h-screen bg-black text-white antialiased">
        <LanguageProvider>
          <Header />
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}