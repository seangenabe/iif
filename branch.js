module.exports = function iifBranch(condition, ifTrueFunc, ifFalseFunc) {
  if (condition) {
    return (typeof ifTrueFunc === 'function') ? ifTrueFunc() : ifTrueFunc
  }
  return (typeof ifFalseFunc === 'function') ? ifFalseFunc() : ifFalseFunc
}
