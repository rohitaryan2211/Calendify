/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "*",
  ],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#958df8",
        secondary: "#8c52ff",
      },
      fontFamily: {
        barlow: ["Barlow", "sans-serif"],
      }
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [],
}
