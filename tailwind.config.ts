import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'title': '#3a436d',
        'page-bg': '#e8eaec',
      },
      fontFamily: {
        'crimson': ['Crimson Text', 'serif'],
      },
    },
  },
  plugins: [],
};

export default config; 