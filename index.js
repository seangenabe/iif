module.exports = function iif(condition, ifTrue, ifFalse) {
  if (condition) {
    return ifTrue
  }
  return ifFalse
}
