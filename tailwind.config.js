const withMT = require("@material-tailwind/react/utils/withMT");
/** @type {import('tailwindcss').Config} */
module.exports = withMT({
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        sky: {
          400: "#38bdf8",
          500: "#0ea5e9",
          600: "#0284c7",
          700: "#0369a1",
          800: "#075985",
          900: "#0c4a6e",
        },
        gray: {
          200: "#e5e7eb", // Border color in dark mode
          600: "#4b5563", // Dark border color in dark mode
          800: "#1f2937",
          900: "#111827", // Dark mode background color
        },
        slate: {
          50: "#f8fafc",
          950: "#020617", // Example light slate color
        },
      },
    },
  },
  plugins: [],
});
