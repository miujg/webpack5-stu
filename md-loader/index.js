const loaderUtils = require('loader-utils')
module.exports = function(source) {
  const options = loaderUtils.getOptions(this) || {}
  console.log('~~~~~~~~~~~~~~~~')
  console.log(JSON.stringify(options))
  // console.log(source)
  console.log('~~~~~~~~~~~~~~~~')
  // return `${source}`
  const loaderContext = this;
  console.log('xxxxxx', loaderContext.resourcePath)
  this.callback(null, `${source}`)
}

