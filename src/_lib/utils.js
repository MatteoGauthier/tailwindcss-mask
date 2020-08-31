var isPlainObject = function (obj) {
  return Object.prototype.toString.call(obj) === "[object Object]"
}
function map(array, iteratee) {
  let index = -1
  const length = array == null ? 0 : array.length
  const result = new Array(length)

  while (++index < length) {
    result[index] = iteratee(array[index], index, array)
  }
  return result
}

module.exports = { isPlainObject, map }
