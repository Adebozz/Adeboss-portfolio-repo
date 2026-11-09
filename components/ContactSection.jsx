"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaGithub, FaPaperPlane } from "react-icons/fa";

export default function ContactSection() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio inquiry from ${form.name}`);
    const body = encodeURIComponent(
      `${form.message}\n\nFrom: ${form.name} (${form.email})`
    );
    window.location.href = `mailto:ademolaadeigbe3@gmail.com?subject=${subject}&body=${body}`;
  };

  const inputClass =
    "w-full p-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition";

  return (
    <motion.section
      id="contact"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="py-20 px-6 bg-white dark:bg-gray-800 w-full"
    >
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white text-center">
          Let&apos;s <span className="text-blue-600 dark:text-blue-400">Talk</span>
        </h2>
        <p className="mt-3 text-center text-gray-600 dark:text-gray-300 max-w-xl mx-auto">
          Have a project in mind, a role to fill, or just want to say hi? My
          inbox is always open.
        </p>

        <div className="mt-12 grid gap-10 md:grid-cols-5 items-start">
          {/* Info */}
          <div className="md:col-span-2 space-y-4">
            <a
              href="mailto:ademolaadeigbe3@gmail.com"
              className="flex items-center gap-4 p-4 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 hover:border-blue-400/50 hover:shadow-md transition-all"
            >
              <span className="w-10 h-10 flex items-center justify-center rounded-lg bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-400">
                <FaEnvelope />
              </span>
              <span className="min-w-0">
                <span className="block text-sm font-semibold text-gray-900 dark:text-white">
                  Email
                </span>
                <span className="block text-sm text-gray-600 dark:text-gray-300 truncate">
                  ademolaadeigbe3@gmail.com
                </span>
              </span>
            </a>

            <a
              href="https://github.com/Adebozz"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-4 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 hover:border-blue-400/50 hover:shadow-md transition-all"
            >
              <span className="w-10 h-10 flex items-center justify-center rounded-lg bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-400">
                <FaGithub />
              </span>
              <span>
                <span className="block text-sm font-semibold text-gray-900 dark:text-white">
                  GitHub
                </span>
                <span className="block text-sm text-gray-600 dark:text-gray-300">
                  github.com/Adebozz
                </span>
              </span>
            </a>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="md:col-span-3 space-y-4">
            <div className="grid gap-4 sm:grid-cols-2">
              <input
                type="text"
                required
                placeholder="Your Name"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className={inputClass}
              />
              <input
                type="email"
                required
                placeholder="Your Email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className={inputClass}
              />
            </div>
            <textarea
              required
              placeholder="Your Message"
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className={inputClass}
              rows="5"
            ></textarea>
            <motion.button
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center justify-center gap-2 w-full p-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 shadow-lg shadow-blue-600/20 transition-colors"
            >
              <FaPaperPlane size={14} /> Send Message
            </motion.button>
          </form>
        </div>
      </div>
    </motion.section>
  );
}
