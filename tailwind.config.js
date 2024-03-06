/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      primary: "#0052FE",
      secondary: "#ffbf10",
      transparent: "transparent",
      white: "#ffffff",
      black: "#0F1629",
      gray: {
        100: "#f7f7f7",
        200: "#e1e1e1",
        300: "#cfcfcf",
        400: "#b1b1b1",
        500: "#9e9e9e",
        600: "#7e7e7e",
        700: "#626262",
        800: "#515151",
        900: "#3b3b3b",
      },
    },
    extend: {},
  },
  plugins: [],
};

