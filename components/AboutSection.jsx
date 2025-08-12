"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function AboutSection() {
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => setIsMounted(true), []);
  if (!isMounted) return null;

  return (
    <motion.section
      id="about"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="min-h-screen flex flex-col justify-center p-8 md:p-16 bg-white dark:bg-gray-800"
    >
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
        About Me
      </h2>
      <p className="mt-4 text-lg text-gray-700 dark:text-gray-300 max-w-3xl leading-relaxed">
        I am a software developer with expertise in web development, UI/UX, and
        graphic design. I create modern, user-friendly, and visually appealing
        solutions tailored to client needs. I have collaborated with businesses
        across diverse industries, delivering projects that combine creativity,
        functionality, and the latest trends. I am currently pursuing my
        Master’s degree in Artificial Intelligence and Data Science to further
        enhance my technical expertise and innovative capabilities.
      </p>
    </motion.section>
  );
}
