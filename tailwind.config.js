const { heroui } = require("@heroui/react");

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      "font-family": "Mulish",
    },
  },
    darkMode: "class",
  plugins: [require("daisyui"),heroui()],
};
