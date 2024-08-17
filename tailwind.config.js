/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "btn-blue": "#161459",
        "primary-txt": "#161459",
      },
    },
  },
  plugins: [],
};
