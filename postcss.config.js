let sassSyntax = require("postcss-scss")
let sassPlugin = require("@csstools/postcss-sass")
let autoprefixer = require("autoprefixer")
let cssnano = require("cssnano")

module.exports = {
  // postcss-scss lets postcss understand sass syntax
  syntax: sassSyntax,
  // postcss-sass uses dart-sass to transform sass to css
  plugins: [
    sassPlugin,
    autoprefixer,
    ...(process.env.HUGO_ENVIRONMENT === "production"
      ? [
          cssnano({
            preset: ["default", { discardComments: false }]
          })
        ]
      : [])
  ]
}
