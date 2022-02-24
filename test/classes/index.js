const t = require('tap')
t.same(require('../../lib/classes'), {
  SemVer: require('../../lib/classes/semver'),
  Range: require('../../lib/classes/range'),
  Comparator: require('../../lib/classes/comparator'),
}, 'export all classes at semver/lib/classes')
