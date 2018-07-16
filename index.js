const path = require('path')
const lodash = require('lodash')
const caseOptions = [ 'camel', 'kebab', 'lower', 'upper', 'snake', 'start' ]

module.exports = PluginBase => class RenamerCase extends PluginBase {
  optionDefinitions () {
    return [
      {
        name: 'case',
        description: `Renames the file using the specified case. Possible values: ${caseOptions.join(', ')}.`
      }
    ]
  }
  replace (filePath, options) {
    const file = path.parse(filePath)
    let output = filePath
    if (options.case) {
      if (!caseOptions.includes(options.case)) {
        throw new Error(`Invalid case, possible values: ${caseOptions.join(', ')}.`)
      }
      const caseFunction = lodash[lodash.camelCase(options.case + '-case')]
      if (caseFunction) {
        output = path.join(file.dir, file.name.replace(file.name, caseFunction(file.name)) + file.ext)
      }
    }
    return output
  }
}
