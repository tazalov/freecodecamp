/*
Write a function that takes two or more arrays and returns a new array of unique values in the order of the original provided arrays.

In other words, all values present from all arrays should be included in their original order, but with no duplicates in the final array.

The unique numbers should be sorted by their original order, but the final array should not be sorted in numerical order.

Check the assertion tests for examples.
*/

/*function uniteUnique(arr) {
  const array = [...arguments];
  const formatedArr = array.reduce((acc, el) => {
    el.forEach(element => acc.push(element));
    return acc;
  }, [])
  return [...new Set(formatedArr)];
}*/

function uniteUnique(arr) {
  const array = [...arguments].flat(2);
  return [...new Set(array)];
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);