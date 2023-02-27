# Changelog

### [7.3.8](https://github.com/samkenxstream/node-semver/compare/v7.3.7...v7.3.8) (2022-04-19)


### Bug Fixes

* 160 update cli -h output in readme ([832845a](https://github.com/samkenxstream/node-semver/commit/832845ab755e2bdf3542aee60257432138892714))
* 2.0.0-rc1 should never be included in ^1.0.0 ([044c54c](https://github.com/samkenxstream/node-semver/commit/044c54cc7c10cacc2c87a7e0fd57c0166c6c6c62))
* 21 Error parsing comparators with spaces and ranges ([6425710](https://github.com/samkenxstream/node-semver/commit/6425710716d30d4831244e3e63d7b67ee987d5b3))
* 34 Don't return undefined in SemVer.toString ([c8d3e10](https://github.com/samkenxstream/node-semver/commit/c8d3e10a3834893c6d5a8656a1d220b3012188bb))
* 7 Split tests into separate file ([d8811f6](https://github.com/samkenxstream/node-semver/commit/d8811f60c262dc8da0ac1f2cc158f505c192da6a))
* allow node >=10 ([85b269a](https://github.com/samkenxstream/node-semver/commit/85b269a90806713d2a41e8e990b0ea6bc274b171))
* **bin:** get correct value from arg separated by equals ([#449](https://github.com/samkenxstream/node-semver/issues/449)) ([4ceca76](https://github.com/samkenxstream/node-semver/commit/4ceca76729c577166395f19172854cbbcce3cec1)), closes [#431](https://github.com/samkenxstream/node-semver/issues/431)
* ensure SemVer instance passed to inc are not modified ([#427](https://github.com/samkenxstream/node-semver/issues/427)) ([f070dde](https://github.com/samkenxstream/node-semver/commit/f070dde0cc22894ac254e281cb36a79ab790272d))
* Fix non-satisfiable ranges so they no longer intersect with anything ([9b8e961](https://github.com/samkenxstream/node-semver/commit/9b8e961c0cf3efd71a83c4658cc32a64f9bbf9a4))
* Fix Range intersects algorithm ([8473d65](https://github.com/samkenxstream/node-semver/commit/8473d6534e1db6a030eaf9dd9633301d78fd1f58))
* Handle prereleases properly in 'X - Y' ranges ([1bd5bdd](https://github.com/samkenxstream/node-semver/commit/1bd5bdd9aba7be6e1aa90728faf135b4ed425880))
* https://github.com/npm/node-semver/issues/329 ([cb1ca1d](https://github.com/samkenxstream/node-semver/commit/cb1ca1d5480a6c07c12ac31ba5f2071ed530c4ed))
* Improve performance of isSatisfiable function ([673e820](https://github.com/samkenxstream/node-semver/commit/673e820718acdcf466c5555fa2d75874622da243))
* inc prerelease with numeric preid ([#380](https://github.com/samkenxstream/node-semver/issues/380)) ([802e161](https://github.com/samkenxstream/node-semver/commit/802e16174fe2a704dba16e97891ce36dc4f2ad76))
* properly escape dots in `GTE0` regexes ([#432](https://github.com/samkenxstream/node-semver/issues/432)) ([11494f1](https://github.com/samkenxstream/node-semver/commit/11494f1446a907c8fa5d9cfbc9fab04d553311f5))
* replace deprecated String.prototype.substr() ([#445](https://github.com/samkenxstream/node-semver/issues/445)) ([e2d55e7](https://github.com/samkenxstream/node-semver/commit/e2d55e79f0d288ea88c0e0ba6620fe5636a4a552))
* replace regex used to split ranges ([#434](https://github.com/samkenxstream/node-semver/issues/434)) ([9ab7b71](https://github.com/samkenxstream/node-semver/commit/9ab7b717dd7848c639b8ce3366d2241d430cdad2))
* **subset:** check any as superset ([15ed208](https://github.com/samkenxstream/node-semver/commit/15ed20833cb5377ba3a219f6a86b5deabd806f20)), closes [#375](https://github.com/samkenxstream/node-semver/issues/375)


### Documentation

* add * and "" range styles and * as x synonym ([e17dc0a](https://github.com/samkenxstream/node-semver/commit/e17dc0a535ae3aa3d8a20d4537ed5a180339441e))
* add `W` := `W.x` & `W.Y` := `W.Y.x`; clarify that `W.Y.Z` := `=W.Y.Z` ([bf0ecdd](https://github.com/samkenxstream/node-semver/commit/bf0ecdd9398d6df2048e66faaa2201e5cfda64b5))
* clarify * range behavior ([cb1ca1d](https://github.com/samkenxstream/node-semver/commit/cb1ca1d5480a6c07c12ac31ba5f2071ed530c4ed))


### Dependencies

* lru-cache@7.4.0 ([#442](https://github.com/samkenxstream/node-semver/issues/442)) ([9a3064c](https://github.com/samkenxstream/node-semver/commit/9a3064c242cdce3c1c39cae37a83d93ead363b37))
* revert to lru-cache@6 ([22ae54d](https://github.com/samkenxstream/node-semver/commit/22ae54d66c2dec8200947066dbb9c33bb729b8a8))
* tap@16.0.0 ([#439](https://github.com/samkenxstream/node-semver/issues/439)) ([60cbb3f](https://github.com/samkenxstream/node-semver/commit/60cbb3fd4a4d32979f3aa0a2aa4e185753106545))

### [7.3.7](https://github.com/npm/node-semver/compare/v7.3.6...v7.3.7) (2022-04-11)


### Bug Fixes

* allow node >=10 ([85b269a](https://github.com/npm/node-semver/commit/85b269a90806713d2a41e8e990b0ea6bc274b171))
* **bin:** get correct value from arg separated by equals ([#449](https://github.com/npm/node-semver/issues/449)) ([4ceca76](https://github.com/npm/node-semver/commit/4ceca76729c577166395f19172854cbbcce3cec1)), closes [#431](https://github.com/npm/node-semver/issues/431)
* ensure SemVer instance passed to inc are not modified ([#427](https://github.com/npm/node-semver/issues/427)) ([f070dde](https://github.com/npm/node-semver/commit/f070dde0cc22894ac254e281cb36a79ab790272d))
* inc prerelease with numeric preid ([#380](https://github.com/npm/node-semver/issues/380)) ([802e161](https://github.com/npm/node-semver/commit/802e16174fe2a704dba16e97891ce36dc4f2ad76))


### Dependencies

* revert to lru-cache@6 ([22ae54d](https://github.com/npm/node-semver/commit/22ae54d66c2dec8200947066dbb9c33bb729b8a8))

### [7.3.6](https://github.com/npm/node-semver/compare/v7.3.5...v7.3.6) (2022-04-05)


### Bug Fixes

* https://github.com/npm/node-semver/issues/329 ([cb1ca1d](https://github.com/npm/node-semver/commit/cb1ca1d5480a6c07c12ac31ba5f2071ed530c4ed))
* properly escape dots in `GTE0` regexes ([#432](https://github.com/npm/node-semver/issues/432)) ([11494f1](https://github.com/npm/node-semver/commit/11494f1446a907c8fa5d9cfbc9fab04d553311f5))
* replace deprecated String.prototype.substr() ([#445](https://github.com/npm/node-semver/issues/445)) ([e2d55e7](https://github.com/npm/node-semver/commit/e2d55e79f0d288ea88c0e0ba6620fe5636a4a552))
* replace regex used to split ranges ([#434](https://github.com/npm/node-semver/issues/434)) ([9ab7b71](https://github.com/npm/node-semver/commit/9ab7b717dd7848c639b8ce3366d2241d430cdad2))


### Documentation

* clarify * range behavior ([cb1ca1d](https://github.com/npm/node-semver/commit/cb1ca1d5480a6c07c12ac31ba5f2071ed530c4ed))


### Dependencies

* lru-cache@7.4.0 ([#442](https://github.com/npm/node-semver/issues/442)) ([9a3064c](https://github.com/npm/node-semver/commit/9a3064c242cdce3c1c39cae37a83d93ead363b37))
* tap@16.0.0 ([#439](https://github.com/npm/node-semver/issues/439)) ([60cbb3f](https://github.com/npm/node-semver/commit/60cbb3fd4a4d32979f3aa0a2aa4e185753106545))

## 7.3.0

* Add `subset(r1, r2)` method to determine if `r1` range is entirely
  contained by `r2` range.

## 7.2.3

* Fix handling of `includePrelease` mode where version ranges like `1.0.0 -
  2.0.0` would include `3.0.0-pre` and not `1.0.0-pre`.

## 7.2.2

* Fix bug where `2.0.0-pre` would be included in `^1.0.0` if
  `includePrerelease` was set to true.

## 7.2.0

* Add `simplifyRange` method to attempt to generate a more human-readable
  range expression that is equivalent to a supplied range, for a given set
  of versions.

## 7.1.2

* Remove fancy lazy-loading logic, as it was causing problems for webpack
  users.

## 7.1.0

* Add `require('semver/preload')` to load the entire module without using
  lazy getter methods.

## 7.0.0

* Refactor module into separate files for better tree-shaking
* Drop support for very old node versions, use const/let, `=>` functions,
  and classes.

## 6.3.0

* Expose the token enum on the exports

## 6.2.0

* Coerce numbers to strings when passed to semver.coerce()
* Add `rtl` option to coerce from right to left

## 6.1.3

* Handle X-ranges properly in includePrerelease mode

## 6.1.2

* Do not throw when testing invalid version strings

## 6.1.1

* Add options support for semver.coerce()
* Handle undefined version passed to Range.test

## 6.1.0

* Add semver.compareBuild function
* Support `*` in semver.intersects

## 6.0

* Fix `intersects` logic.

    This is technically a bug fix, but since it is also a change to behavior
    that may require users updating their code, it is marked as a major
    version increment.

## 5.7

* Add `minVersion` method

## 5.6

* Move boolean `loose` param to an options object, with
  backwards-compatibility protection.
* Add ability to opt out of special prerelease version handling with
  the `includePrerelease` option flag.

## 5.5

* Add version coercion capabilities

## 5.4

* Add intersection checking

## 5.3

* Add `minSatisfying` method

## 5.2

* Add `prerelease(v)` that returns prerelease components

## 5.1

* Add Backus-Naur for ranges
* Remove excessively cute inspection methods

## 5.0

* Remove AMD/Browserified build artifacts
* Fix ltr and gtr when using the `*` range
* Fix for range `*` with a prerelease identifier
