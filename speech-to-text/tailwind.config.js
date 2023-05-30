/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        opensans: ["Open Sans", "sans-serif"],
      },
      colors: {
        primary: "#4EFFBB",
        secondary: "#222051",
        accent: "#302C58",
        "primary-dark": "#2DDFAF",
        "primary-light": "#B6FFEF",
        "secondary-dark": "#16132E",
        "secondary-light": "#4C476C",
        "accent-dark": "#281F43",
        "accent-light": "#5C578F",
      },
    },
  },
  plugins: [],
};
