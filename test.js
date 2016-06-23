const tap = require('tap')
const iif = require('./')

tap.ok(iif(true, 'a') === 'a')
tap.ok(iif(false, 'a') === undefined)
tap.ok(iif(true, 'a', 'b') === 'a')
tap.ok(iif(false, 'a', 'b') === 'b')
