"use client";
import { useState, useEffect } from "react";
import { FaBars, FaTimes, FaMoon, FaSun } from "react-icons/fa";

const NAV_ITEMS = ["home", "about", "skills", "projects", "contact"];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [theme, setTheme] = useState<"light" | "dark">("light");

  // load theme on mount
  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    const prefersDark =
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches;

    const finalTheme = storedTheme ?? (prefersDark ? "dark" : "light");
    setTheme(finalTheme);
    document.documentElement.classList.toggle("dark", finalTheme === "dark");
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
  };

  return (
    <header className="fixed top-0 left-0 w-full flex items-center justify-between px-6 py-3 bg-white/80 dark:bg-gray-900/80 backdrop-blur shadow-md z-50">
      {/* Logo */}
      <a href="#home" className="flex items-center gap-1">
        <div className="text-2xl font-bold text-black dark:text-white tracking-tight">
          ADE<span className="bg-gray-800 dark:bg-blue-500 text-white px-1 ml-1 rounded">BOSS</span>
        </div>
      </a>

      {/* Desktop nav */}
      <ul className="hidden md:flex gap-6">
        {NAV_ITEMS.map((item) => (
          <li key={item}>
            <a
              href={`#${item}`}
              className="text-sm uppercase tracking-wide text-gray-700 dark:text-gray-100 hover:text-blue-500 dark:hover:text-yellow-400 transition"
            >
              {item}
            </a>
          </li>
        ))}
      </ul>

      {/* Right side actions */}
      <div className="flex items-center gap-4">
        {/* Theme toggle */}
        <button
          onClick={toggleTheme}
          aria-label="Toggle theme"
          className="p-2 rounded-full bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-100 hover:scale-105 transition"
        >
          {theme === "light" ? <FaMoon /> : <FaSun />}
        </button>

        {/* Mobile menu button */}
        <button
          className="md:hidden p-2 text-gray-800 dark:text-gray-100"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden absolute top-14 left-0 w-full bg-white dark:bg-gray-900 border-t dark:border-gray-800">
          <ul className="flex flex-col gap-4 px-6 py-4">
            {NAV_ITEMS.map((item) => (
              <li key={item}>
                <a
                  href={`#${item}`}
                  onClick={() => setMenuOpen(false)}
                  className="block py-1 text-gray-800 dark:text-gray-100 hover:text-blue-500 dark:hover:text-yellow-400"
                >
                  {item.toUpperCase()}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
