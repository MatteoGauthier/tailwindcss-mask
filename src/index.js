const defaultConfig = require("./defaultConfig")
const { map } = require("lodash")
const { isPlainObject } = require("./_lib/utils")
// console.log(map)
function parseConfigItem({ mode, property }) {
  if (mode == "image") {
    if (property.type == "linear-gradient" || "radial-gradients") {
      return {
        "-webkit-mask-image": `${property.type}(${[property.angle, property.colors].filter(Boolean)})`,
      }
    }
  }
}

module.exports = function ({ addUtilities, e, theme, variants }) {
  const masks = Object.assign(defaultConfig, theme("masks", {}))
  const utils = map(masks, (mask, name) => {
    const mode = isPlainObject(mask) && mask.hasOwnProperty("mode") ? mask.mode : "image"
    const property = isPlainObject(mask) && mask.property ? mask.property : new Error(`${name} mask must contain property key`)

    return {
      [`.mask-image-${e(name)}`]: parseConfigItem({ mode, property }),
    }
  })

  addUtilities(utils, variants("masks", []))
}
