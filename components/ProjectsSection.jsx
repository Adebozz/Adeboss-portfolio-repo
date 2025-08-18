"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

export default function ProjectsSection() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  const projects = [
    {
      title: "E-Commerce Website",
      desc: "A modern full-stack e-commerce site with product listings, cart, and checkout.",
      tech: "Next.js, CSS, React.js, MongoDB",
      img: "/images/image.png",
      github: "https://github.com/Adebozz/dessystores",
      live: "https://dessystores.vercel.app/",
    },
    {
      title: "PDF Converter",
      desc: "Converts files to PDF and vice versa. Stores uploaded files securely.",
      tech: "React.js, TailwindCSS, MongoDB, CSS",
      img: "/images/pdf-convert.png",
      github: "https://github.com/Adebozz/my-pdf-file",
      live: "https://pdf-converter-demo.vercel.app",
    },
    {
      title: "Food Delivery Platform",
      desc: "Order food online with real-time order tracking and delivery status.",
      tech: "React.js, TailwindCSS, REST API, MongoDB",
      img: "/images/food-del.png",
      github: "https://github.com/username/food-delivery",
      live: "https://food-delivery-demo.vercel.app",
    },
  ];

  return (
    <section id="projects" className="py-12 px-6 bg-gray-50 dark:bg-gray-900">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-3xl font-bold text-center text-gray-900 dark:text-white"
      >
        Projects
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        viewport={{ once: true }}
        className="mt-3 text-center text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
      >
        A collection of web applications, graphic designs, and user interfaces I’ve worked on.
      </motion.p>

      {/* Cards */}
      <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        {projects.map((proj, i) => (
          <motion.div
            key={proj.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.15, duration: 0.6 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.03 }}
            className="group p-4 rounded-xl bg-white dark:bg-gray-800 shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all relative overflow-hidden"
          >
            {/* Image */}
            <div className="overflow-hidden rounded-lg">
              <img
                src={proj.img}
                alt={proj.title}
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>

            {/* Title */}
            <h3 className="mt-4 text-xl font-semibold text-gray-900 dark:text-white">
              {proj.title}
            </h3>
            <p className="mt-2 text-gray-700 dark:text-gray-300 text-sm">
              {proj.desc}
            </p>
            <p className="mt-3 text-xs text-blue-600 dark:text-blue-400 font-medium">
              {proj.tech}
            </p>

            {/* Hover Buttons */}
            <div className="absolute inset-0 bg-black/50 flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <a
                href={proj.live}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white text-sm px-4 py-2 rounded-lg transition-transform transform hover:scale-105"
              >
                <FaExternalLinkAlt /> View Website
              </a>
              <a
                href={proj.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-gray-700 hover:bg-gray-800 text-white text-sm px-4 py-2 rounded-lg transition-transform transform hover:scale-105"
              >
                <FaGithub /> View Code
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
