/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ['Helvetica', 'sans-serif'],
    },
    extend: {
      fontFamily: {
        burtons: "burtons",
      },
    },
  },
  plugins: [],
};
