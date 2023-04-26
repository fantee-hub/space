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
        "nav-color": "rgba(255, 255, 255, 0.04)",
      },
    },
  },
  plugins: [],
};
