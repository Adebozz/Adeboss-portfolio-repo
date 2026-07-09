import { Geist, Geist_Mono } from "next/font/google";


import "./globals.css";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import BackToTopButton from "../../components/BackToTopButton";
import { ThemeProvider } from "../../components/context/ThemeContext";

export const metadata = {
  title: "Adeboss | Full-Stack Developer",
  description:
    "Portfolio of Adeboss — full-stack developer building modern, user-focused web applications with Next.js, TypeScript, and AI integration.",
  keywords: ["Adeboss", "web developer", "full-stack", "Next.js", "portfolio"],
  openGraph: {
    title: "Adeboss | Full-Stack Developer",
    description:
      "Modern, user-focused web applications built with Next.js, TypeScript, and AI integration.",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-white dark:bg-gray-900 text-black dark:text-white transition-colors duration-300">
        <ThemeProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
          <BackToTopButton />
        </ThemeProvider>
      </body>
    </html>
  );
}
