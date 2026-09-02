import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: ['class'],
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#090D16',
        foreground: '#F8FAFC',
        card: '#0D1322',
        border: '#1E293B',
        primary: {
          DEFAULT: '#00F59B',
          foreground: '#090D16',
        },
        accent: '#00C2FF',
        profit: '#00F59B',
        loss: '#EF4444',
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'sans-serif'],
        mono: ['var(--font-jetbrains)', 'monospace'],
      },
    },
  },
  plugins: [],
};

export default config;
