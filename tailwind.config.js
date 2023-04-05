/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        duo: "480px",
        sixh: "600px",
      },
    },
    fontFamily: {
      roboto: ["Radio Canada", "sans-serif"],
      roboto2: ["Roboto Serif", "serif"],
    },
  },
  plugins: [],
};
