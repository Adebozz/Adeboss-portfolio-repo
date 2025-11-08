"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function HomeSection() {
  const [mounted, setMounted] = useState(false);
  const [roleIndex, setRoleIndex] = useState(0);

 const roles = [
  "Front-End Developer",
  "Full-Stack Developer",
  "AI & Data Science Enthusiast",
  "Software Developer",
  "UI/UX Engineer",
];


  useEffect(() => {
    setMounted(true);
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  if (!mounted) return null;

  return (
    <motion.section
      id="home"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="min-h-screen flex flex-row items-center justify-center gap-6 sm:gap-10 px-4 sm:px-6 lg:px-16 py-10 bg-white dark:bg-gray-900"
    >
      {/* Text */}
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-md sm:max-w-xl flex-1"
      >
        <h1 className="text-2xl sm:text-3xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4 leading-tight">
          Hi, I’m{" "}
          <span className="text-blue-600 dark:text-blue-400">Adeboss</span>
        </h1>

        {/* Animated Role */}
        <motion.p
          key={roleIndex}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.5 }}
          className="text-base sm:text-lg lg:text-xl text-gray-700 dark:text-gray-300 mb-4 sm:mb-6 h-6"
        >
          {roles[roleIndex]}
        </motion.p>

        <p className="text-sm sm:text-base lg:text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
          I help brands and businesses bring their ideas to life through clean,
          modern, and user-focused designs and web applications.
        </p>
      </motion.div>

      {/* Image */}
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="flex-shrink-0"
      >
        <Image
          src="/images/adebossPhoto.png"
          alt="Adeboss"
          width={350}
          height={350}
          className="rounded-2xl object-cover shadow-lg w-[200px] sm:w-[280px] lg:w-[350px] h-auto"
          priority
        />
      </motion.div>
    </motion.section>
  );
}
