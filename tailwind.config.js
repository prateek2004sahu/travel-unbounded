/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        forest: {
          50: "#f2f7f3",
          100: "#dfeee1",
          200: "#bfe0c4",
          300: "#93c99c",
          400: "#63ab70",
          500: "#428f4f",
          600: "#31723d",
          700: "#285a33",
          800: "#23482b",
          900: "#1e3c25",
        },
        sand: {
          50: "#fdfaf4",
          100: "#f9f0dd",
          200: "#f1ddb2",
          300: "#e7c47f",
          400: "#dda852",
          500: "#d18f33",
          600: "#b57228",
          700: "#915624",
          800: "#764523",
          900: "#623a20",
        },
      },
      fontFamily: {
        display: ["Georgia", "serif"],
        body: ["system-ui", "-apple-system", "Segoe UI", "sans-serif"],
      },
    },
  },
  plugins: [],
};
