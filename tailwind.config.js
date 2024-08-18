/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "btn-blue": "#161459",
        "primary-50": "#ECF9EE",
        "primary-100": "#4FAE5A",
      },
    },
  },
  plugins: [],
};
