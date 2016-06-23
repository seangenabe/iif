# iif

The IIf function in Javascript

[![npm](https://img.shields.io/npm/v/iif.svg?style=flat-square)](https://www.npmjs.com/package/iif)
[![Build Status](https://img.shields.io/travis/seangenabe/iif/master.svg?style=flat-square)](https://travis-ci.org/seangenabe/iif)
[![Coverage Status](https://img.shields.io/coveralls/seangenabe/iif/master.svg?style=flat-square)](https://coveralls.io/github/seangenabe/iif?branch=master)

## Usage

### `iif(condition, ifTrue, [ifFalse])`

`var iif = require('iif')`

Returns `ifTrue` if `condition` is truthy. Otherwise, returns `ifFalse`.

### `iifBranch(condition, ifTrueFunc, [ifFalseFunc])`

`var iif = require('iif/branch')`

Same as above, but additionally calls the argument being returned if it's a function.

## License

CC0-1.0
