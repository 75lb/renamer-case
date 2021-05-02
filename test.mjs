import Renamer from 'renamer'
import assert from 'assert'
import rimraf from 'rimraf'
import fs from 'fs'
import path from 'path'
import TestRunner from 'test-runner'
import RenamerCase from 'renamer-case'
import mkdirp from 'mkdirp2'
import getModulePaths from 'current-module-paths'
const a = assert.strict
const __filename = getModulePaths(import.meta.url).__filename

function createFixture (filePath) {
  const dirname = path.dirname(filePath)
  mkdirp.sync(dirname)
  fs.writeFileSync(filePath, 'test')
  return filePath
}

const tom = new TestRunner.Tom()

const testRoot = `tmp/${path.basename(__filename)}`
rimraf.sync(testRoot)

tom.test('simple', async function () {
  createFixture(`${testRoot}/${this.index}/one two`)
  const renamer = new Renamer()
  await renamer.rename({
    files: `${testRoot}/${this.index}/one two`,
    chain: RenamerCase,
    case: 'camel'
  })
  a.equal(fs.existsSync(`${testRoot}/${this.index}/one two`), false)
  a.equal(fs.existsSync(`${testRoot}/${this.index}/oneTwo`), true)
})

tom.test('invalid case', async function () {
  createFixture(`${testRoot}/${this.index}/one two`)
  const renamer = new Renamer()
  await a.rejects(
    () => {
      return renamer.rename({
        files: `${testRoot}/${this.index}/one two`,
        chain: RenamerCase,
        case: 'broken'
      })
    },
    /Invalid case/
  )
})

tom.test('optionDefinitions', async function () {
  const plugin = new RenamerCase()
  const result = plugin.optionDefinitions()
  a.equal(result.length, 1)
})

tom.test('description', async function () {
  const plugin = new RenamerCase()
  const result = plugin.description()
  a.ok(result)
})

export default tom
