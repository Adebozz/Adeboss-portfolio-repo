"use client";
import { motion } from "framer-motion";
import { FaCode, FaBrain, FaServer } from "react-icons/fa";

const highlights = [
  {
    Icon: FaCode,
    title: "Full-Stack Development",
    desc: "End-to-end web apps with Next.js, TypeScript, and modern tooling — built for performance and maintainability.",
  },
  {
    Icon: FaBrain,
    title: "AI & Machine Learning",
    desc: "MSc in AI & Data Science from the University of Hull; building ML systems with monitoring, drift detection, and MLOps.",
  },
  {
    Icon: FaServer,
    title: "MLOps & Cloud",
    desc: "Docker images, Kubernetes manifests, Terraform, Prometheus monitoring, and CI/CD for taking models from training to serving.",
  },
];

export default function AboutSection() {
  return (
    <motion.section
      id="about"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="py-20 px-6 md:px-16 bg-white dark:bg-gray-800 w-full"
    >
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white text-center">
          About <span className="text-blue-600 dark:text-blue-400">Me</span>
        </h2>

        <p className="mt-6 text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto text-center leading-relaxed">
          I&apos;m a software developer who turns ideas into fast, intuitive,
          and reliable digital products. I&apos;ve built and supported live
          websites for an educational consultancy and a teaching hospital,
          and I hold a Master&apos;s in Artificial Intelligence and Data Science —
          building intelligent, data-driven systems that solve real problems.
        </p>

        <div className="mt-12 grid gap-6 sm:grid-cols-3">
          {highlights.map(({ Icon, title, desc }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="p-6 rounded-2xl bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 hover:border-blue-400/50 dark:hover:border-blue-500/50 hover:shadow-lg transition-all"
            >
              <div className="w-11 h-11 flex items-center justify-center rounded-xl bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-400 mb-4">
                <Icon size={20} />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                {title}
              </h3>
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                {desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
