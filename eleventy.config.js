module.exports = function (config) {
  // set custom liquid instance
  let liquidJs = require("liquidjs");
  let options = {
    extname: ".html",
    dynamicPartials: true,
    strict_filters: true,
    root: ["./src/partials", "./src/layouts"]
  };

  config.setLibrary("liquid", liquidJs(options));
  
  return {
    dir: {
      input: 'src',
      layouts: 'layouts',
      includes: 'partials',
      data: '../data'
    }
  }
}
