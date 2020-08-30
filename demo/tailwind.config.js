const { theme } = require("tailwindcss/defaultConfig")

module.exports = {
  purge: ["src/**/*.html", "src/**/*.vue", "src/**/*.js", "**/*.html"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", ...theme.fontFamily.sans],
      },
    },
  },
  variants: {
    backgroundColor: ["responsive", "odd", "hover", "focus"],
  },
  plugins: [require("../src/index.js")],
}
