"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  SiOpenjdk,
  SiPython,
  SiTypescript,
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiSpringboot,
  SiFastapi,
  SiNodedotjs,
  SiPostgresql,
  SiMongodb,
  SiScikitlearn,
  SiAnthropic,
  SiHuggingface,
  SiMlflow,
  SiDocker,
  SiKubernetes,
  SiTerraform,
  SiGithubactions,
  SiPrometheus,
  SiGrafana,
  SiJunit5,
  SiK6,
} from "react-icons/si";
import { FaCube } from "react-icons/fa";

// Kept short on purpose: what each project used in depth. The project cards list the rest.
const skillGroups = [
  {
    category: "Languages",
    skills: [
      { name: "Java", Icon: SiOpenjdk, color: "currentColor" },
      { name: "Python", Icon: SiPython, color: "#3776AB" },
      { name: "TypeScript", Icon: SiTypescript, color: "#3178C6" },
      { name: "JavaScript", Icon: SiJavascript, color: "#F7DF1E" },
    ],
  },
  {
    category: "Frontend",
    skills: [
      { name: "React", Icon: SiReact, color: "#61DAFB" },
      { name: "Next.js", Icon: SiNextdotjs, color: "currentColor" },
      { name: "Tailwind", Icon: SiTailwindcss, color: "#06B6D4" },
    ],
  },
  {
    category: "Backend & Data",
    skills: [
      { name: "Spring Boot", Icon: SiSpringboot, color: "#6DB33F" },
      { name: "FastAPI", Icon: SiFastapi, color: "#009688" },
      { name: "Node.js / Express", Icon: SiNodedotjs, color: "#5FA04E" },
      { name: "PostgreSQL", Icon: SiPostgresql, color: "#4169E1" },
      { name: "MongoDB", Icon: SiMongodb, color: "#47A248" },
    ],
  },
  {
    category: "AI & ML",
    skills: [
      { name: "scikit-learn", Icon: SiScikitlearn, color: "#F7931E" },
      { name: "XGBoost" },
      { name: "Claude & OpenAI APIs", Icon: SiAnthropic, color: "currentColor" },
      { name: "Sentence Transformers", Icon: SiHuggingface, color: "#FFD21E" },
      { name: "MLflow", Icon: SiMlflow, color: "#0194E2" },
    ],
  },
  {
    category: "DevOps",
    skills: [
      { name: "Docker", Icon: SiDocker, color: "#2496ED" },
      { name: "Kubernetes", Icon: SiKubernetes, color: "#326CE5" },
      { name: "Terraform", Icon: SiTerraform, color: "#844FBA" },
      { name: "GitHub Actions", Icon: SiGithubactions, color: "#2088FF" },
      { name: "Prometheus", Icon: SiPrometheus, color: "#E6522C" },
      { name: "Grafana", Icon: SiGrafana, color: "#F46800" },
    ],
  },
  {
    category: "Testing",
    skills: [
      { name: "JUnit 5", Icon: SiJunit5, color: "#25A162" },
      { name: "Testcontainers" },
      { name: "Playwright" },
      { name: "k6", Icon: SiK6, color: "#7D64FF" },
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
                {group.skills.map(({ name, Icon = FaCube, color = "currentColor" }) => (
                  <span
                    key={name}
                    className="inline-flex items-center gap-2 px-3.5 py-2 rounded-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-sm font-medium text-gray-800 dark:text-gray-200 shadow-sm hover:shadow-md hover:border-blue-400/50 dark:hover:border-blue-500/50 hover:-translate-y-0.5 transition-all"
                  >
                    {/* Tools without a brand icon get a neutral one. */}
                    <Icon
                      size={16}
                      color={color}
                      className="shrink-0 text-gray-900 dark:text-white"
                      aria-hidden="true"
                    />
                    {name}
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
