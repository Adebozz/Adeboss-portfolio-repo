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
        I’m a passionate software developer specializing in modern web development, UI/UX design, and visual storytelling. 
        I build intuitive, high-performance, and visually engaging digital experiences tailored to each client’s goals. 
        Over the years, I’ve collaborated with businesses across various industries, delivering creative and functional 
        solutions that blend innovation with practicality. I’m currently pursuing a Master’s degree in Artificial Intelligence 
        and Data Science to deepen my technical expertise and expand my ability to create intelligent, data-driven products.
      </p>

    </motion.section>
  );
}
