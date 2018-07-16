const TestRunner = require('test-runner')
const RenamerCase = require('./')
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
    plugin: RenamerCase,
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
        plugin: RenamerCase,
        case: 'broken'
      })
    },
    /Invalid case/
  )
})
