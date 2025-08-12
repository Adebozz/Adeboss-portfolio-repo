"use client";
import { useState, useEffect } from "react";
import { FaBars, FaTimes, FaMoon, FaSun } from "react-icons/fa";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [theme, setTheme] = useState("light");

  // Load theme from localStorage
  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme) {
      setTheme(storedTheme);
      document.documentElement.classList.toggle("dark", storedTheme === "dark");
    }
  }, []);

  // Toggle theme
  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
  };

  return (
    <header className="fixed top-0 left-0 w-full flex items-center justify-between px-6 py-4 bg-white/80 dark:bg-gray-900/80 shadow-md z-50">
      {/* Logo */}
      <div className="border p-2 text-2xl font-bold text-black dark:text-white">
        ADE <span className="bg-gray-400 text-white px-1">BOSS</span>
      </div>

      {/* Desktop Menu */}
      <ul className="hidden md:flex gap-6">
        {["HOME", "ABOUT", "SKILLS", "PROJECTS", "CONTACT"].map((item) => (
          <li key={item}>
            <a
              href={`#${item.toLowerCase()}`}
              className="text-black dark:text-white hover:text-blue-500 dark:hover:text-yellow-400"
            >
              {item}
            </
