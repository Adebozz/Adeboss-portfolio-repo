"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { FiMenu, FiX, FiMoon, FiSun } from "react-icons/fi";

export default function Navbar() {
  const [isMounted, setIsMounted] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    setIsMounted(true);

    // Load saved theme
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
      setDarkMode(true);
    }

    // Enable smooth scrolling globally
    document.documentElement.style.scrollBehavior = "smooth";
  }, []);

  const toggleDarkMode = () => {
    if (darkMode) {
      document.documentElement.classList.remove("dark");
      localStorage.theme = "light";
    } else {
      document.documentElement.classList.add("dark");
      localStorage.theme = "dark";
    }
    setDarkMode(!darkMode);
  };

  if (!isMounted) return null;

  const links = ["Home", "About", "Projects", "Contact"];

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg z-50 shadow-sm"
    >
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-xl font-bold text-gray-900 dark:text-white">
          Adeboss Portfolio
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6">
          {links.map((link) => (
            <motion.li
              key={link}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <a
                href={`#${link.toLowerCase()}`}
                className="text-gray-700 dark:text-gray-300 hover:text-blue-500"
              >
                {link}
              </a>
            </motion.li>
          ))}
        </ul>

        {/* Right side: Dark Mode Toggle + Mobile Menu Icon */}
        <div className="flex items-center gap-4">
          <button
            onClick={toggleDarkMode}
            className="text-gray-700 dark:text-gray-300 hover:text-blue-500"
          >
            {darkMode ? <FiSun size={20} /> : <FiMoon size={20} />}
          </button>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-gray-700 dark:text-gray-300 hover:text-blue-500"
          >
            {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Animation */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="mobileMenu"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white dark:bg-gray-900 shadow-lg px-4 py-4 overflow-hidden"
          >
            <ul className="flex flex-col gap-4">
              {links.map((link) => (
                <motion.li
                  key={link}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.05 }}
                >
                  <a
                    href={`#${link.toLowerCase()}`}
                    onClick={() => setMenuOpen(false)}
                    className="block text-gray-700 dark:text-gray-300 hover:text-blue-500"
                  >
                    {link}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
