import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        gold: '#F5A623',
        'navy-black': '#0D0D0D',
        carbon: '#111827',
        'near-black': '#0a0a0a',
        'kc-navy': '#1B3A6B',
        'royal-blue': '#2563EB',
        concrete: '#9CA3AF',
        'off-white': '#F9FAFB',
      },
      fontFamily: {
        display: ['"Barlow Condensed"', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

export default config;
