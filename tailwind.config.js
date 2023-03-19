/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      height: {
        navbar: "112px",
        content: "calc(100vh - 112px)",
        searchWrapper: "40px",
      },
      colors: {
        primary: "#f3f5f9",
        bg: "#F6F9FC",
      },
      fontFamily: {
        Roboto: "Roboto, sans-serif",
      },
      padding: {},
    },
  },
  plugins: [],
};