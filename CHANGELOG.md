# Changelog

[//]: # (>>   The order of list items should be: Critical/Fixes, New, Update, Remove, Underpinnings   <<)
[//]: # (>>   ## [UNRELEASED]https://github.com/roydukkey/clean-package/compare/v2.1.0...master   <<)

## [2.1.0](https://github.com/roydukkey/clean-package/compare/v2.0.1...2.1.0)

* Add `onClean` and `onRestore` events
* Update README options for readability

## [2.0.1](https://github.com/roydukkey/clean-package/compare/v2.0.0...2.0.1)

* Fix documentation for changed default value of the `remove` option.
* Add documentation for function types of the `remove` and `replace` options.

## [2.0.0](https://github.com/roydukkey/clean-package/compare/v1.0.1...2.0.0)

* Complete rewrite in TypeScript, adding unit tests [#13](https://github.com/roydukkey/clean-package/pull/13)
* Add a second positional argument to allow changing the path to the source `package.json` [#7](https://github.com/roydukkey/clean-package/issues/7)
* Add `clean-package/common` shareable configuration with common settings which can be extended [#10](https://github.com/roydukkey/clean-package/issues/10)
* Add `--config` option to supply a custom config path [#1](https://github.com/roydukkey/clean-package/issues/1)
* Add `--extends` option for extending sharable configurations [#5](https://github.com/roydukkey/clean-package/issues/5)
* Add `--print-config` option to print the combine configuration without executing command
* Add `--version` option to print the version number [#10](https://github.com/roydukkey/clean-package/issues/10)
* Expose code interface: `load()`, `clean()`, `restore()`, `version()`

## [1.0.1](https://github.com/roydukkey/clean-package/compare/v1.0.0...v1.0.1)

* Fix CLI JSON primitive transformer
* Improve CLI key/value parser
* Suggest installing as development dependency
* Update spelling and grammar

## 1.0.0

* Initial release!
