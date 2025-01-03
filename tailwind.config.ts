import type { Config } from 'tailwindcss';
import { addDynamicIconSelectors } from '@iconify/tailwind';

export default {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './features/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundColor: {
        background: 'var(--background)',
        primary: 'var(--primary)',
        'primary-light': 'var(--border-primary)',
        accent: 'var(--accent)',
        'accent-light': 'var(--accent-light)',
      },
      textColor: {
        primary: 'var(--text-primary)',
        'primary-dark': 'var(--text-primary-dark)',
        'primary-darker': 'var(--text-primary-darker)',
        'accent-light': 'var(--accent-light)',
        accent: 'var(--accent)',
        error: 'var(--error)',
      },
      borderColor: {
        primary: 'var(--border-primary)',
        accent: 'var(--accent-light)',
        error: 'var(--error)',
      },
      borderRadius: {
        '2.5xl': '1.25rem',
      },
    },
  },
  plugins: [addDynamicIconSelectors()],
} satisfies Config;
