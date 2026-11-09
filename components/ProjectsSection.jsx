"use client";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt, FaStar } from "react-icons/fa";

export default function ProjectsSection() {
  const projects = [
    {
      title: "Real-Time Fraud Detection",
      desc: "End-to-end MLOps system trained on 284,807 real card transactions. PR-AUC 0.882 and about 1 ms per request when benchmarked locally, with drift detection, shadow deployment, and drift-gated champion/challenger retraining, exercised against simulated traffic.",
      tech: ["XGBoost", "FastAPI", "MLflow", "Kubernetes", "Terraform", "Prometheus"],
      img: "/images/fraud-detection.png",
      github: "https://github.com/Adebozz/fraud-detection-mlops",
      live: "https://fraud-detect-it.streamlit.app/",
      demoNote: "Hosted on Streamlit's free tier. If the demo is asleep, wake it with the button on that page and allow a minute or so.",
      featured: true,
    },
    {
      title: "UK Visa RAG Assistant",
      desc: "Answers visa questions from official gov.uk guidance with enforced citations, and refuses when retrieval confidence is low. Adding cross-encoder reranking to hybrid search raised top-result accuracy from 53% to 74% on a 100-question evaluation, for about 95 ms of extra latency.",
      tech: ["Python", "Claude API", "BM25", "Sentence Transformers", "FastAPI", "Streamlit"],
      img: "/images/uk-visa-rag.png",
      github: "https://github.com/Adebozz/uk-visa-rag",
      featured: true,
    },
    {
      title: "University IT Support RAG (MSc)",
      desc: "Answers IT-support questions with cited sources, using a classifier-assisted retriever and a locally hosted Mistral 7B model. On held-out out-of-scope questions it declined 8 of 10, where BM25 alone declined none, trading hit@3 from 0.97 to 0.90.",
      tech: ["Python", "scikit-learn", "BM25", "Ollama", "Mistral 7B", "FastAPI"],
      img: "/images/hull-it-rag.png",
      github: "https://github.com/Adebozz/hull-it-support-rag-assistant",
      demoNote: "Independent MSc project at the University of Hull. Not an official University service.",
      featured: true,
    },
    {
      title: "Cognify — AI Study Engine",
      desc: "Adaptive exam-prep app that turns uploaded study material into a 3-phase revision session: knowledge scan, weak-spot drill, and final challenge. Runs on a free rule-based demo engine by default, with optional AI question generation through OpenAI or Claude.",
      tech: ["Next.js", "TypeScript", "OpenAI & Claude APIs"],
      img: "/images/cognify.png",
      github: "https://github.com/Adebozz/cognify",
      live: "https://cognify-exam.vercel.app/",
    },
    {
      title: "Dessy Stores",
      desc: "Full-stack e-commerce monorepo with a customer storefront, admin panel, and REST API, including Paystack checkout.",
      tech: ["React", "TypeScript", "Express", "MongoDB"],
      img: "/images/image.png",
      live: "https://dessystores.vercel.app/",
    },
    {
      title: "PDF Toolkit",
      desc: "Web-based PDF toolkit to compress, convert, merge, split, rotate, protect, and OCR documents.",
      tech: ["Next.js", "TypeScript", "pdf-lib", "Tesseract.js"],
      img: "/images/pdf-convert.png",
      github: "https://github.com/Adebozz/pdf-converter",
      live: "https://pdf-convert-set.vercel.app/",
    },
  ];

  return (
    <section id="projects" className="py-20 px-6 bg-gray-50 dark:bg-gray-900 w-full">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center text-gray-900 dark:text-white"
        >
          Featured <span className="text-blue-600 dark:text-blue-400">Projects</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-3 text-center text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
        >
          From ML systems to full-stack web apps — a selection of
          things I&apos;ve designed, built, and shipped.
        </motion.p>

        {/* Cards */}
        <div className="mt-12 grid gap-8 sm:grid-cols-2">
          {projects.map((proj, i) => (
            <motion.div
              key={proj.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ y: -6 }}
              className="group flex flex-col rounded-2xl bg-white dark:bg-gray-800 shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-2xl hover:border-blue-400/50 dark:hover:border-blue-500/50 transition-all overflow-hidden"
            >
              {/* Image */}
              <div className="relative overflow-hidden">
                <img
                  src={proj.img}
                  alt={proj.title}
                  className="w-full h-52 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {proj.featured && (
                  <span className="absolute top-3 right-3 flex items-center gap-1 text-xs font-semibold bg-blue-600 text-white px-3 py-1 rounded-full shadow">
                    <FaStar size={10} /> Featured
                  </span>
                )}
              </div>

              <div className="flex flex-col flex-1 p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                  {proj.title}
                </h3>
                <p className="mt-2 text-gray-600 dark:text-gray-300 text-sm leading-relaxed flex-1">
                  {proj.desc}
                </p>

                {/* Tech pills */}
                <div className="mt-4 flex flex-wrap gap-2">
                  {proj.tech.map((t) => (
                    <span
                      key={t}
                      className="text-xs font-medium px-2.5 py-1 rounded-full bg-blue-50 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 border border-blue-100 dark:border-blue-800"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="mt-5 flex gap-3">
                  {proj.live && (
                    <a
                      href={proj.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium px-4 py-2 rounded-lg transition-colors"
                    >
                      <FaExternalLinkAlt size={12} /> Live Demo
                    </a>
                  )}
                  {proj.github && (
                    <a
                      href={proj.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm font-medium px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                    >
                      <FaGithub size={14} /> Code
                    </a>
                  )}
                </div>
                {proj.demoNote && (
                  <p className="mt-3 text-xs text-gray-500 dark:text-gray-400">
                    {proj.demoNote}
                  </p>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
