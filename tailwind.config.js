/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "wosker": ["wosker", "sans-serif"],
        "Poppins": ["Poppins", "sans-serif"],
      },
      colors: {
        "brand1": "#E7DCBA",
        "brand2": "#FFBF00",
      },
    },
  },
  plugins: [],
}