//my code
function reduce(arr, fn, initial) {

    if(arr.length === 0) return initial;

    initial = fn(initial, arr[0], 0, arr);
    arr = arr.slice(1)
    return reduce(arr, fn, initial)
}

module.exports = reduce

//standard answer
  function reduce(arr, fn, initial) {
    return (function reduceOne(index, value) {
      if (index > arr.length - 1) return value
      return reduceOne(index + 1, fn(value, arr[index], index, arr))
    })(0, initial)
  }

  module.exports = reduce
