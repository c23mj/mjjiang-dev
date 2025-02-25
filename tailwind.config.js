/** @type {import('tailwindcss').Config} */
export default {
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
      }
    },
  },
  plugins: [],
} 