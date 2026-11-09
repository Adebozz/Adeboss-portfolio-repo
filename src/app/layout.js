import { Geist, Geist_Mono } from "next/font/google";


import "./globals.css";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import BackToTopButton from "../../components/BackToTopButton";

// Runs before first paint so the saved theme never flashes the wrong colours
const themeScript = `try{var t=localStorage.getItem("color-theme");if(t==="dark"||(!t&&matchMedia("(prefers-color-scheme: dark)").matches))document.documentElement.classList.add("dark")}catch(e){}`;

// Framer Motion renders hidden until JS runs, so reveal everything without it
const noScriptStyles = `[style*="opacity:0"]{opacity:1!important;transform:none!important}`;

export const metadata = {
  metadataBase: new URL("https://adeboss.vercel.app"),
  title: "Adeboss | Full-Stack Developer",
  description:
    "Portfolio of Adeboss — full-stack developer building modern, user-focused web applications with Next.js, TypeScript, and AI integration.",
  keywords: ["Adeboss", "web developer", "full-stack", "Next.js", "portfolio"],
  openGraph: {
    title: "Adeboss | Full-Stack Developer",
    description:
      "Modern, user-focused web applications built with Next.js, TypeScript, and AI integration.",
    type: "website",
    url: "/",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <noscript>
          <style dangerouslySetInnerHTML={{ __html: noScriptStyles }} />
        </noscript>
      </head>
      <body className="bg-white dark:bg-gray-900 text-black dark:text-white transition-colors duration-300">
        <Navbar />
        <main>{children}</main>
        <Footer />
        <BackToTopButton />
      </body>
    </html>
  );
}
