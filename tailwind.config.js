/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "background-1": "url('../public/assets/Bg-1.png')",
      },
      colors: {
        "nav-color": "rgba(255, 255, 255, 0.04)",
      },
      letterSpacing: {
        wide: "2.7px",
      },
      backdropBlur: {
        xs: "40.7742px",
      },
      fontFamily: {
        body: ["Barlow", "sans-serif"],
        con: ["Barlow", "Condensed"],
      },
    },
  },
  plugins: [],
};
