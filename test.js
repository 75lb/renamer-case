const TestRunner = require('test-runner')
const renamerCase = require('./')
const Renamer = require('renamer')
const mkdirp = require('mkdirp2')
const path = require('path')
const fs = require('fs')
const a = require('assert')
const rimraf = require('rimraf')

const runner = new TestRunner()

function createFixture (filePath) {
  const dirname = path.dirname(filePath)
  mkdirp.sync(dirname)
  fs.writeFileSync(filePath, 'test')
  return filePath
}

const testRoot = `tmp/${path.basename(__filename)}`
rimraf.sync(testRoot)

runner.test('simple', function () {
  createFixture(`${testRoot}/${this.index}/one two`)
  const renamer = new Renamer()
  renamer.rename({
    files: `${testRoot}/${this.index}/one two`,
    plugin: renamerCase,
    case: 'camel'
  })
  a.strictEqual(fs.existsSync(`${testRoot}/${this.index}/one two`), false)
  a.strictEqual(fs.existsSync(`${testRoot}/${this.index}/oneTwo`), true)
})

runner.test('invalid case', function () {
  createFixture(`${testRoot}/${this.index}/one two`)
  const renamer = new Renamer()
  a.throws(
    () => {
      renamer.rename({
        files: `${testRoot}/${this.index}/one two`,
        plugin: renamerCase,
        case: 'broken'
      })
    },
    /Invalid case/
  )
})

runner.test('optionDefinitions', function () {
  const Plugin = renamerCase(class {})
  const plugin = new Plugin()
  const result = plugin.optionDefinitions()
  a.strictEqual(result.length, 1)
})

runner.test('description', function () {
  const Plugin = renamerCase(class {})
  const plugin = new Plugin()
  const result = plugin.description()
  a.ok(result)
})
