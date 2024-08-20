/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "btn-blue": "#161459",
        "primary-50": "#ECF9EE",
        "primary-100": "#4FAE5A",
        "spring-green": {
          50: "#edfff5",
          100: "#d5ffea",
          200: "#aeffd7",
          300: "#70ffb9",
          400: "#2bfd93",
          500: "#00ff7f",
          600: "#00c05b",
          700: "#00964a",
          800: "#06753e",
          900: "#076036",
          950: "#00371c",
        },
      },
    },
  },
  plugins: [],
};
