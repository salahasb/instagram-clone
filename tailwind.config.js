import defaultTheme from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        brand: { 400: "#4CB5F9", 500: "#0095F6", 600: "#1877f2" },
      },
      screens: {
        xs: "28.12em",
        ...defaultTheme.screens,
        54.68: "54.68em",
      },
    },

    container: {
      center: true,
      padding: "2rem",
      screens: {
        ...defaultTheme.screens,
      },
    },
  },
  darkMode: "selector",
  plugins: [],
};
