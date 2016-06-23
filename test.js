const tap = require('tap')
const iif = require('./')

tap.ok(iif(true, 'a') === 'a')
tap.ok(iif(false, 'a') === undefined)
tap.ok(iif(true, 'a', 'b') === 'a')
tap.ok(iif(false, 'a', 'b') === 'b')

const b = require('./branch')

tap.ok(b(true, 'a') === 'a')
tap.ok(b(false, 'a') === undefined)
tap.ok(b(true, 'a', 'b') === 'a')
tap.ok(b(false, 'a', 'b') === 'b')
tap.ok(b(true, function() { return 1 }) === 1)
tap.ok(b(false, function() { return 1 }) === undefined)
tap.ok(b(true, function() { return 1 }, function() { return 2 }) === 1)
tap.ok(b(false, function() { return 1 }, function() { return 2 }) === 2)
