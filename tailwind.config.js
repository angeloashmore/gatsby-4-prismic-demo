module.exports = {
  mode: "jit",
  purge: ["./src/**/*.ts", "./src/**/*.tsx"],
  darkMode: false,
  theme: {
    fontFamily: {
      sans: ["Inter", "sans-serif"],
    },
    capsize: {
      fontMetrics: {
        sans: {
          capHeight: 2048,
          ascent: 2728,
          descent: -680,
          lineGap: 0,
          unitsPerEm: 2816,
        },
        mono: {
          capHeight: 730,
          ascent: 1020,
          descent: -300,
          lineGap: 0,
          unitsPerEm: 1000,
        },
      },
    },
    extend: {},
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [
    require("@themosaad/tailwindcss-capsize"),
    require("@tailwindcss/aspect-ratio"),
  ],
};
