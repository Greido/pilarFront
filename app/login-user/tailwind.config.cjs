/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./page.jsx",
    "./**/*.{js,ts,jsx,tsx}",
    
  ],
  darkMode: false,
  theme: {
    extend: {
      fontFamily: {
        staatliches: ['Staatliches', 'cursive'],
      },
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      white: "#ffffff",
      purple: "#D41931",
      purple2: "#CECEFD",
      metal: "#565584",
      tahiti: "#3ab7bf",
      silver: "#ecebff",
      "bubble-gum": "#ff77e9",
      bermuda: "#78dcca",
    },
  },

  plugins: [
    require('@tailwindcss/forms')
  ],
};
