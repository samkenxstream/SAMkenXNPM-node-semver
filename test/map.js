const t = require('tap')
const { resolve, join, relative } = require('path')
const { statSync, readdirSync } = require('fs')
const map = require('../map.js')

const root = resolve(__dirname, '..')

const find = (folder, ignores = [], set = [], isRoot = true) => {
  const ent = readdirSync(folder)
  set.push(...ent.filter(f => /\.m?js$/.test(f)).map(f => join(folder, f)))
  for (const f of ent.filter(f => !ignores.includes(f) && !/\.m?js$/.test(f))) {
    if (statSync(join(folder, f)).isDirectory()) {
      find(join(folder, f), ignores, set, false)
    }
  }
  if (!isRoot) {
    return
  }
  return set
}

const normalize = (arr, dir) => arr
  .map(f => relative(root, f).replace(/\\/g, '/').replace(dir, ''))
  .sort((a, b) => a.localeCompare(b))

const sutLib = find(join(root, 'lib'))
const sutBin = find(join(root, 'bin'))
const sut = normalize(['map.js', ...sutLib, ...sutBin], 'lib/')
const tests = normalize(find(join(root, 'test'), ['fixtures']), 'test/')

t.strictSame(sut, tests, 'test files should match system files')

for (const testFile of tests) {
  t.test(testFile, t => {
    t.plan(1)
    // cast to an array, since map() can return a string or array
    const systemFiles = [].concat(map(testFile))
    t.ok(systemFiles.some(sys => sut.includes(sys)), 'test covers a file')
  })
}
