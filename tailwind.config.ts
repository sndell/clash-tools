import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        primary: "var(--primary)",
        accent: "var(--accent)",
        "text-primary": "var(--text-primary)",
        "text-primary-dark": "var(--text-primary-dark)",
        "border-primary": "var(--border-primary)",
        "border-accent": "var(--border-accent)",
      },
    },
  },
  plugins: [],
} satisfies Config;
