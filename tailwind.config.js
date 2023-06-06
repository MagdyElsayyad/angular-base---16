/** @type {import('tailwindcss').Config} */
const path = require("path");
const process = require("process");
const colors = require("tailwindcss/colors");
const defaultTheme = require("tailwindcss/defaultTheme");
const generatePalette = require(path.resolve(
  __dirname,
  "src/helpers/tailwind/utils/generate-palette"
));

const customPalettes = {
  brand: generatePalette("#29E7D6"),
};
const themes = {
  // Default theme is required for theming system to work correctly
  default: {
    primary: {
      ...customPalettes.brand,
      DEFAULT: customPalettes.brand[500],
    },
    accent: {
      ...colors.blueGray,
      DEFAULT: colors.blueGray[800],
    },
    warn: {
      ...colors.red,
      DEFAULT: colors.red[600],
    },
    "on-warn": {
      500: colors.red["50"],
    },
  },
  // Rest of the themes will use the 'default' as the base theme
  // and extend them with their given configuration
 
 
};
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
   
   
    extend: {
      fontFamily: {
        // Add a font for LTR
        body: ["Poppins", "sans-serif"],
        // Add a font for RTL
        bodyRTL: ["Cairo", "sans-serif"],
     },
      // spacing: {
      //   128: "32rem",
      //   144: "36rem",
      // },
      // borderRadius: {
      //   "4xl": "2rem",
      // },
    },
  },
  plugins: [
    
    require("tailwindcss"),
    require('tailwindcss-rtl'),
    require("autoprefixer"),
    require(path.resolve(__dirname, "src/helpers/tailwind/plugins/theming"))({
      themes,
    }),
  ],
};
