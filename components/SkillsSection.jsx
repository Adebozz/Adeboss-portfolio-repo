"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  SiJavascript,
  SiTypescript,
  SiPython,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiHtml5,
  SiCss3,
  SiNodedotjs,
  SiPhp,
  SiMysql,
  SiMongodb,
  SiFastapi,
  SiScikitlearn,
  SiMlflow,
  SiStreamlit,
  SiDocker,
  SiKubernetes,
  SiTerraform,
  SiPrometheus,
  SiGrafana,
  SiGit,
  SiGithub,
  SiVercel,
  SiWordpress,
} from "react-icons/si";

const skillGroups = [
  {
    category: "Frontend",
    skills: [
      { name: "JavaScript", Icon: SiJavascript, color: "#F7DF1E" },
      { name: "TypeScript", Icon: SiTypescript, color: "#3178C6" },
      { name: "React", Icon: SiReact, color: "#61DAFB" },
      { name: "Next.js", Icon: SiNextdotjs, color: "currentColor" },
      { name: "Tailwind", Icon: SiTailwindcss, color: "#06B6D4" },
      { name: "HTML", Icon: SiHtml5, color: "#E34F26" },
      { name: "CSS", Icon: SiCss3, color: "#1572B6" },
    ],
  },
  {
    category: "Backend & Data",
    skills: [
      { name: "Python", Icon: SiPython, color: "#3776AB" },
      { name: "Node.js", Icon: SiNodedotjs, color: "#5FA04E" },
      { name: "FastAPI", Icon: SiFastapi, color: "#009688" },
      { name: "PHP", Icon: SiPhp, color: "#777BB4" },
      { name: "MySQL", Icon: SiMysql, color: "#4479A1" },
      { name: "MongoDB", Icon: SiMongodb, color: "#47A248" },
    ],
  },
  {
    category: "AI & MLOps",
    skills: [
      { name: "scikit-learn", Icon: SiScikitlearn, color: "#F7931E" },
      { name: "MLflow", Icon: SiMlflow, color: "#0194E2" },
      { name: "Streamlit", Icon: SiStreamlit, color: "#FF4B4B" },
      { name: "Docker", Icon: SiDocker, color: "#2496ED" },
      { name: "Kubernetes", Icon: SiKubernetes, color: "#326CE5" },
      { name: "Terraform", Icon: SiTerraform, color: "#844FBA" },
      { name: "Prometheus", Icon: SiPrometheus, color: "#E6522C" },
      { name: "Grafana", Icon: SiGrafana, color: "#F46800" },
    ],
  },
  {
    category: "Tools",
    skills: [
      { name: "Git", Icon: SiGit, color: "#F05032" },
      { name: "GitHub", Icon: SiGithub, color: "currentColor" },
      { name: "Vercel", Icon: SiVercel, color: "currentColor" },
      { name: "WordPress", Icon: SiWordpress, color: "#21759B" },
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-900 w-full">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 dark:text-white">
          Tech <span className="text-blue-600 dark:text-blue-400">Stack</span>
        </h2>
        <p className="mt-3 text-center text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          The tools I use to design, build, ship, and monitor software — from
          pixel to production.
        </p>

        <div className="mt-12 max-w-4xl mx-auto space-y-8">
          {skillGroups.map((group) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex flex-col sm:flex-row sm:items-start gap-3 sm:gap-6"
            >
              <h3 className="sm:w-36 shrink-0 sm:pt-2 text-sm font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400">
                {group.category}
              </h3>

              <div className="flex flex-wrap gap-2.5">
                {group.skills.map((skill) => (
                  <span
                    key={skill.name}
                    className="inline-flex items-center gap-2 px-3.5 py-2 rounded-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-sm font-medium text-gray-800 dark:text-gray-200 shadow-sm hover:shadow-md hover:border-blue-400/50 dark:hover:border-blue-500/50 hover:-translate-y-0.5 transition-all"
                  >
                    <skill.Icon
                      size={16}
                      color={skill.color}
                      className="shrink-0 text-gray-900 dark:text-white"
                      aria-label={skill.name}
                    />
                    {skill.name}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
