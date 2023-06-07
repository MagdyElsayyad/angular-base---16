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
    require("daisyui"),
    require("tailwindcss-rtl"),
    require("autoprefixer"),
    require(path.resolve(__dirname, "src/helpers/tailwind/plugins/theming"))({
      themes,
    }),
  ],

  // daisyUI config (optional - here are the default values)
  daisyui: {
    themes: true, // true: all themes | false: only light + dark | array: specific themes like this ["light", "dark", "cupcake"]
    darkTheme: "mytheme", // name of one of the included themes for dark mode
    base: false, // applies background color and foreground color for root element by default
    styled: true, // include daisyUI colors and design decisions for all components
    utils: true, // adds responsive and modifier utility classes
    rtl: false, // rotate style direction from left-to-right to right-to-left. You also need to add dir="rtl" to your html tag and install `tailwindcss-flip` plugin for Tailwind CSS.
    prefix: "", // prefix for daisyUI classnames (components, modifiers and responsive class names. Not colors)
    logs: true, // Shows info about daisyUI version and used config in the console when building your CSS
    themes: [
      {
        mytheme: {
          primary: themes.default.primary.DEFAULT,

          secondary: themes.default.accent.DEFAULT,

          accent:  themes.default.accent.DEFAULT,

          neutral: "#2b3440",

          "base-100": "#ffffff",

          info: "#3abff8",

          success: colors.green[50],

          warning: colors.yellow[50],

          error: themes.default.warn.DEFAULT,
        },
      },
    ],
  },
};
