import type { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { fontSans, fontMono } from "@/lib/fonts";
import { LanguageProvider } from "@/context/language-context";
import { Header } from "@/components/layout/header";
import "./globals.css";

// Global SEO metadata and OpenGraph configuration
export const metadata: Metadata = {
  metadataBase: new URL("https://alhasan-dev.vercel.app"),
  title: siteConfig.title,
  description: siteConfig.description,
  openGraph: {
    title: siteConfig.title,
    description: siteConfig.description,
    url: "https://alhasan-dev.vercel.app",
    siteName: "Alhasan Othman",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: siteConfig.title,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
    images: ["/og-image.png"],
  },
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
        {/* Global providers and main layout shell */}
        <LanguageProvider>
          <Header />
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}