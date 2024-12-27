import type { Config } from "tailwindcss";
import { addDynamicIconSelectors } from "@iconify/tailwind";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./features/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        background: "var(--background)",
        primary: "var(--primary)",
        'primary-light': "var(--border-primary)",
        accent: "var(--accent)",
      },
      textColor: {
        primary: "var(--text-primary)",
        "primary-dark": "var(--text-primary-dark)",
      },
      borderColor: {
        primary: "var(--border-primary)",
        accent: "var(--border-accent)",
      },
    },
  },
  plugins: [addDynamicIconSelectors()],
} satisfies Config;
