/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        transparent: "transparent",
        white: "#ffffff",
        gray: "#464646",
        two: "#1f1f1f",
        main: "#BF40BF",
        lightGray: "#292A2D",
      },
      fontFamily: {
        iranSans: ["Iran-Sans"],
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
