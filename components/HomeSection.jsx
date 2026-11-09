"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState, useEffect } from "react";
import { FaGithub, FaLinkedin, FaEnvelope, FaArrowRight } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function HomeSection() {
  const [roleIndex, setRoleIndex] = useState(0);

  const roles = [
    "Software Developer",
    "Full-Stack Developer",
    "AI & Data Science Enthusiast",
    "Machine Learning Engineer",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col-reverse sm:flex-row items-center justify-center gap-10 sm:gap-14 px-6 lg:px-16 pt-28 pb-16 bg-white dark:bg-gray-900 overflow-hidden"
    >
      {/* Decorative background glow */}
      <div
        aria-hidden="true"
        className="absolute -top-32 -right-32 w-96 h-96 bg-blue-500/10 dark:bg-blue-500/20 rounded-full blur-3xl pointer-events-none"
      />
      <div
        aria-hidden="true"
        className="absolute -bottom-32 -left-32 w-96 h-96 bg-indigo-500/10 dark:bg-indigo-500/10 rounded-full blur-3xl pointer-events-none"
      />

      {/* Text */}
      <div className="max-w-xl flex-1 text-center sm:text-left relative z-10 motion-safe:animate-hero-left">
        <span className="inline-flex items-center gap-2 text-xs font-medium px-3 py-1.5 rounded-full bg-green-50 dark:bg-green-900/30 text-green-700 dark:text-green-400 border border-green-200 dark:border-green-800 mb-5">
          <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
          Available for opportunities
        </span>

        <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-4 leading-tight">
          Hi, I&apos;m{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-500 dark:from-blue-400 dark:to-indigo-400">
            Adeboss
          </span>
        </h1>

        {/* Animated Role */}
        <motion.p
          key={roleIndex}
          initial={roleIndex === 0 ? false : { opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-lg sm:text-xl lg:text-2xl font-medium text-blue-600 dark:text-blue-400 mb-5 h-8"
        >
          {roles[roleIndex]}
        </motion.p>

        <p className="text-base lg:text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-8">
          I build modern, user-focused web applications and end-to-end ML
          systems — from adaptive study tools to real-time fraud detection.
        </p>

        {/* CTAs */}
        <div className="flex flex-wrap items-center justify-center sm:justify-start gap-4">
          <a
            href="#projects"
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-3 rounded-lg shadow-lg shadow-blue-600/20 transition-all hover:-translate-y-0.5"
          >
            View my work <FaArrowRight size={13} />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 font-medium px-6 py-3 rounded-lg border border-gray-300 dark:border-gray-600 text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 transition-all hover:-translate-y-0.5"
          >
            Get in touch
          </a>
          <div className="flex items-center gap-3 sm:ml-2">
            <a
              href="https://github.com/Adebozz"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="p-2.5 rounded-full text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            >
              <FaGithub size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/adeboss/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="p-2.5 rounded-full text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            >
              <FaLinkedin size={20} />
            </a>
            <a
              href="https://x.com/Adeboss02"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="X (Twitter)"
              className="p-2.5 rounded-full text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            >
              <FaXTwitter size={20} />
            </a>
            <a
              href="mailto:ademolaadeigbe3@gmail.com"
              aria-label="Email"
              className="p-2.5 rounded-full text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            >
              <FaEnvelope size={20} />
            </a>
          </div>
        </div>
      </div>

      {/* Image */}
      <div className="flex-shrink-0 relative z-10 motion-safe:animate-hero-right">
        <div className="relative">
          <div
            aria-hidden="true"
            className="absolute -inset-3 bg-gradient-to-tr from-blue-600/30 to-indigo-500/30 rounded-3xl blur-xl"
          />
          <Image
            src="/images/adebossPhoto.png"
            alt="Adeboss"
            width={350}
            height={350}
            className="relative rounded-2xl object-cover shadow-xl w-[220px] sm:w-[280px] lg:w-[350px] h-auto ring-1 ring-gray-200 dark:ring-gray-700"
            priority
          />
        </div>
      </div>
    </section>
  );
}
