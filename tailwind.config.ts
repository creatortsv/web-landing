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
        background: '#070A12',
        foreground: '#F8FAFC',
        card: {
          DEFAULT: '#0D1322',
          hover: '#131B2E',
          elevated: '#111827',
        },
        border: {
          DEFAULT: 'rgba(51, 65, 85, 0.5)',
          subtle: 'rgba(30, 41, 59, 0.6)',
          active: 'rgba(0, 245, 155, 0.4)',
        },
        primary: {
          DEFAULT: '#00F59B',
          foreground: '#070A12',
          glow: 'rgba(0, 245, 155, 0.25)',
        },
        accent: {
          DEFAULT: '#00C2FF',
          glow: 'rgba(0, 194, 255, 0.25)',
        },
        profit: '#00F59B',
        loss: '#EF4444',
      },
      fontFamily: {
        sans: [
          'var(--font-sans)',
          'Inter',
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'Roboto',
          '"Helvetica Neue"',
          'Arial',
          'sans-serif',
        ],
        mono: [
          'var(--font-mono)',
          'JetBrains Mono',
          'ui-monospace',
          'SFMono-Regular',
          'Menlo',
          'Monaco',
          'Consolas',
          '"Liberation Mono"',
          'monospace',
        ],
      },
      boxShadow: {
        'glow-emerald': '0 0 35px -5px rgba(0, 245, 155, 0.25)',
        'glow-cyan': '0 0 35px -5px rgba(0, 194, 255, 0.25)',
        'glow-subtle': '0 10px 30px -10px rgba(0, 0, 0, 0.5), 0 0 20px -5px rgba(0, 245, 155, 0.1)',
        'glass-card': '0 8px 32px 0 rgba(0, 0, 0, 0.4)',
      },
    },
  },
  plugins: [],
};

export default config;
