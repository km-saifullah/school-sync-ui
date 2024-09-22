/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "320px",
      md: "640px",
      lg: "768px",
      xl: "1140px",
      "2xl": "1340px",
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        md: "2rem",
        lg: "4rem",
        xl: "1rem",
        "2xl": "2rem",
      },
    },
    extend: {
      colors: {
        primary: "#222222",
        secondary: "#E8505B",
        textPrimary: "#FDF5F5",
        textSecondary: "#181818",
        primaryBg: "rgba(34, 34, 34, 0.9)",
      },
      fontFamily: {
        ibmPlex: '"IBM Plex Sans", sans-serif',
        lato: '"Lato", sans-serif',
      },
    },
  },
  plugins: [],
};
