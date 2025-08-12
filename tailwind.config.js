// tailwind.config.ts
import type { Config } from "tailwindcss";

export default {
  darkMode: "class", // <-- Important
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
} satisfies Config;
