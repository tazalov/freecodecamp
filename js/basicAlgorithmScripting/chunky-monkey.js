/*
Write a function that splits an array (first argument) into groups the length of size (second argument) and returns them as a two-dimensional array.
*/

function chunkArrayInGroups(arr, size) {
  const resultArray = [];
  const copyArray = [...arr]
  while (copyArray.length) {
    resultArray.push(copyArray.splice(0,size))
  }
  return resultArray;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);