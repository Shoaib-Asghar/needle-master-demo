/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#111111",
        background: "#F8F6F2",
        secondary: "#EFEBE4",
        text: "#171717",
        muted: "#6F6B65",
        border: "#D9D4CC",
        accent: "#7A2E2E", // Deep Burgundy for premium accent
      },
      fontFamily: {
        serif: ['"Playfair Display"', "serif"],
        sans: ['"Inter"', "sans-serif"],
      }
    },
  },
  plugins: [],
}
