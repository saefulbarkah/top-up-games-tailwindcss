/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: "#171F45",
        background: "#141B3D",
        orange: "#FF5C00",
      },
      fontFamily: {
        sans: ["Poppins"],
      },
    },
  },
  plugins: [],
};
