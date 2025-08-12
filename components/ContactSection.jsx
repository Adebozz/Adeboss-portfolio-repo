"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function ContactSection() {
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => setIsMounted(true), []);
  if (!isMounted) return null;

  return (
    <motion.section
      id="contact"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="min-h-screen flex flex-col justify-center items-center bg-white dark:bg-gray-800 p-8"
    >
      <h2 className="text-3xl font-semibold text-gray-900 dark:text-white">Contact Me</h2>
      <form className="mt-6 w-full max-w-md space-y-4">
        <input type="text" placeholder="Your Name" className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white"/>
        <input type="email" placeholder="Your Email" className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white"/>
        <textarea placeholder="Your Message" className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white" rows="4"></textarea>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="w-full p-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
        >
          Send Message
        </motion.button>
      </form>
    </motion.section>
  );
}
