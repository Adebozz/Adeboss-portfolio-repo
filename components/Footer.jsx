"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

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
      <p>© {new Date().getFullYear()} MyPortfolio. All rights reserved.</p>
    </motion.footer>
  );
}
