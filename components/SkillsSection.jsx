"use client";
import React from "react";
import { motion } from "framer-motion";


const skillsData = [
  { name: "JavaScript", img: "../../images/jasp.jpg" },
  { name: "PHP", img: "../../images/PHP-logo.svg.png" },
  { name: "HTML", img: "../../images/icons8-html-5-480.png" },
  { name: "CSS", img: "../../images/icons8-css3-240.png" },
  { name: "WordPress", img: "../../images/Wordpress_Blue_logo.png" },
  { name: "MySQL", img: "../../images/sql.jpg" },
  { name: "Figma", img: "../../images/icons8-figma-512.png" },
  { name: "Next.js", img: "../../images/icons8-visual-studio-code-2019-480.png" },
  { name: "Tailwind", img: "../../images/sql.jpg" },
  { name: "TypeScript", img: "../../images/typescript.png" },
  { name: "Vercel", img: "../../images/vercel.png" },
  { name: "GitHub", img: "../../images/github (1).png" },
];

export default function Skills() {
  return (
    <section id="skills" className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h1 className="text-4xl font-bold mb-10 dark:text-white">Tech Stack</h1>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8">
          {skillsData.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="flex flex-col items-center p-4 bg-white dark:bg-gray-800 rounded-xl shadow hover:shadow-lg transition"
            >
              <img
                src={skill.img}
                alt={skill.name}
                className="w-16 h-16 object-contain mb-3"
              />
              <h3 className="text-lg font-semibold dark:text-gray-200">
                {skill.name}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
