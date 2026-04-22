/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'tranquil-blue': '#4A90E2',
        'healing-green': '#43C6AC',
        'off-white': '#F8F9FA',
      }
    },
  },
  plugins: [],
}