'use strict'
const path = require('path')
const kebabCase = require('lodash.kebabcase')

module.exports = PluginBase => class RenamerCase extends PluginBase {
  replace (file) {
    const basename = path.basename(file)
    const dirname = path.dirname(file)
    const extname = path.extname(file)
    const filename = path.basename(file, extname)
    return path.join(dirname, filename.replace(filename, kebabCase(filename)) + extname)
  }
}
