import { Geist, Geist_Mono } from "next/font/google";


import "./globals.css";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import BackToTopButton from "../../components/BackToTopButton";
import { ThemeProvider } from "../../components/context/ThemeContext";

export const metadata = {
  title: "Adeboss Portfolio",
  description: "Portfolio built with Next.js and Tailwind CSS",
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
