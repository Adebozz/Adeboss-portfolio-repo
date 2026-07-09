"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => setIsMounted(true), []);
  if (!isMounted) return null;

  return (
    <motion.footer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="bg-gray-900 text-gray-300 py-6 text-center"
    >
      <div className="flex justify-center gap-5 mb-3">
        <a
          href="https://github.com/Adebozz"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          className="hover:text-white transition-colors"
        >
          <FaGithub size={20} />
        </a>
        <a
          href="mailto:ademolaadeigbe3@gmail.com"
          aria-label="Email"
          className="hover:text-white transition-colors"
        >
          <FaEnvelope size={20} />
        </a>
      </div>
      <p>© {new Date().getFullYear()} Adeboss. All rights reserved.</p>
    </motion.footer>
  );
}
