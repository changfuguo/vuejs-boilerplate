const postcss = require('postcss');
module.exports = {
  plugins: [
    require('postcss-cssnext')({ 
        browsers: ["last 2 versions", "Android >= 4.0","iOS >= 8"],
    }),
  ]
}
