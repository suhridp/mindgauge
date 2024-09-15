/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      backgroundImage: {
        "gradient-light": "linear-gradient(to right, #ffff, #808080)", // Black to grey gradient
        "gradient-dark": "linear-gradient(to right, #000000, #001f3f)", // Black to navy gradient
      },
    },
  },
  plugins: [],
};
