"use client";
import { motion } from "framer-motion";
import { FaBriefcase, FaGraduationCap } from "react-icons/fa";

const experience = [
  {
    role: "Software Developer",
    org: "Doyse Educational Consults",
    href: "https://www.doyseedu.com",
    place: "Remote",
    dates: "Oct 2022 – Jan 2025",
    points: [
      "Developed and supported a live educational consultancy website with React and Next.js.",
      "Turned requirements from staff, content, and design stakeholders into usable web features.",
      "Integrated APIs and reusable frontend components, and investigated issues on live pages.",
    ],
  },
  {
    role: "Junior Web Developer Intern",
    org: "Lagos State University Teaching Hospital",
    place: "Lagos, Nigeria",
    dates: "May 2022 – Oct 2022",
    points: [
      "Helped build and maintain web pages and the staff website with HTML, CSS, JavaScript, and React.",
      "Investigated frontend and API issues by reproducing problems and tracing data flow.",
      "Applied feedback and tested pages across devices to improve responsiveness.",
    ],
  },
];

const education = [
  {
    role: "MSc Artificial Intelligence & Data Science — Merit",
    org: "University of Hull",
    place: "Hull, United Kingdom",
    dates: "2025 – 2026",
    points: [
      "Dissertation: A RAG-based Small Language Model System for University IT Support Query Resolution.",
    ],
  },
  {
    role: "BSc Computer Science — Second Class Upper",
    org: "Fountain University",
    place: "Osogbo, Nigeria",
    dates: "2019 – 2023",
    points: [],
  },
];

function Timeline({ Icon, title, items }) {
  return (
    <div>
      <h3 className="flex items-center gap-3 text-xl font-bold text-gray-900 dark:text-white">
        <span className="w-10 h-10 flex items-center justify-center rounded-lg bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-400">
          <Icon size={18} />
        </span>
        {title}
      </h3>

      <div className="mt-6 space-y-5">
        {items.map(({ role, org, href, place, dates, points }, i) => (
          <motion.div
            key={role}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="p-6 rounded-2xl bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700"
          >
            <h4 className="font-semibold text-gray-900 dark:text-white">{role}</h4>
            <p className="mt-1 text-sm text-gray-600 dark:text-gray-300">
              {href ? (
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 dark:text-blue-400 hover:underline"
                >
                  {org}
                </a>
              ) : (
                org
              )}{" "}
              · {place}
            </p>
            <p className="mt-1 text-xs font-medium text-gray-500 dark:text-gray-400">
              {dates}
            </p>
            {points.length > 0 && (
              <ul className="mt-3 space-y-2 list-disc pl-4 text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                {points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-20 px-6 bg-white dark:bg-gray-800 w-full">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 dark:text-white">
          Experience &amp; <span className="text-blue-600 dark:text-blue-400">Education</span>
        </h2>

        <div className="mt-12 grid gap-10 md:grid-cols-2 items-start">
          <Timeline Icon={FaBriefcase} title="Experience" items={experience} />
          <Timeline Icon={FaGraduationCap} title="Education" items={education} />
        </div>
      </div>
    </section>
  );
}
