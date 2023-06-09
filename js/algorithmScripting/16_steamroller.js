/*
Flatten a nested array. You must account for varying levels of nesting.
*/

function steamrollArray(arr) {
  return arr.reduce((acc, el) => {
    if (Array.isArray(el)) {
      return acc.concat(steamrollArray(el))
    }
    return acc.concat(el)
  }, [])
}


steamrollArray([1, [2], [3, [[4]]]]);