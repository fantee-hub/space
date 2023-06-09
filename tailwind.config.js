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
        "background-2": "url('../public/assets/background-2.png')",
        "background-3": "url('../public/assets/background-3.png')",
        "background-4": "url('../public/assets/background-4.jpg')",
        "background-tab-1": "url('../public/assets/bg-tab-1.png')",
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
        fair: ["Bellefair"],
      },
      screens: {
        "2xl": { max: "1535px" },

        xl: { max: "1279px" },

        lg: { max: "1023px" },

        md: { max: "767px" },

        sm: { max: "639px" },
        lgg: { min: "1024px" },
      },
    },
  },
  plugins: [],
};
