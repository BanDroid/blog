const colors = require("tailwindcss/colors");

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.njk", "./src/**/*.svg", "./src/assets/js/*.js"],
  screens: {
    sm: "576px",
    md: "768px",
    lg: "1024px",
    xl: "1280px",
  },
  theme: {
    // typography: (theme) => ({
    //   DEFAULT: {
    //     css: {
    //       color: theme("colors.sky.100"),
    //     },
    //   },
    // }),
    extend: {
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme("colors.sky.100"),
            "*:not(a)": {
              color: theme("colors.foreground"),
            },
            a: {
              color: theme("colors.primary"),
            },
            blockquote: {
              fontWeight: "normal",
              fontStyle: "normal",
              color: theme("colors.foreground"),
              backgroundColor: theme("colors.neutral.950"),
              borderRadius: ".25rem",
            },
            "blockquote p:first-of-type::before": {
              content: "",
            },
            "blockquote p:last-of-type::after": {
              content: "",
            },
            img: {
              width: "100%",
              maxWidth: theme("maxWidth.2xl"),
              margin: "auto",
            },
            // pre: {
            //   backgroundColor: theme("colors.neutral.800"),
            // },
          },
        },
      }),
      colors: {
        primary: colors.sky["600"],
        "primary-foreground": colors.sky["200"],
        surface: colors.black,
        background: colors.neutral["950"],
        foreground: colors.sky["100"],
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
