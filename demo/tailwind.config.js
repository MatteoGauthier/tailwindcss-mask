const { theme } = require("tailwindcss/defaultConfig")

module.exports = {
  purge: false,
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", ...theme.fontFamily.sans],
      },
      colors: {
        vue: "#555555"
      }
    },
  },
  variants: {
    backgroundColor: ["responsive", "odd", "hover", "focus"],
  },
  masks: {
    grad: {
      mode: "image",
      property: {
        type: "linear-gradient",
        angle: "90deg",
        colors: ["transparent", "#000000", "transparent", "#000000"],
      },
    },
  },
  // plugins: [require("../src/index.js")],
}
