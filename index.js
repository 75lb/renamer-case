const path = require('path')
const lodash = require('lodash')
const caseOptions = [ 'camel', 'kebab', 'lower', 'upper', 'snake', 'start' ]

module.exports = PluginBase => class RenamerCase extends PluginBase {
  optionDefinitions () {
    return [
      { name: 'case', description: `Renames the file using the specified case. Possible values: ${caseOptions.join(', ')}.`}
    ]
  }
  replace (filePath, options) {
    const basename = path.basename(filePath)
    const dirname = path.dirname(filePath)
    const extname = path.extname(filePath)
    const filename = path.basename(filePath, extname)
    if (options.case) {
      if (!caseOptions.includes(options.case)) {
        throw new Error(`Invalid case, possible values: ${caseOptions.join(', ')}.`)
      }
      const caseFunction = lodash[lodash.camelCase(options.case)]
      if (caseFunction) {
        return path.join(dirname, filename.replace(filename, caseFunction(filename)) + extname)
      }
    }
    return filePath
  }
}
