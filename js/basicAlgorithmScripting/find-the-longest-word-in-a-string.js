/*
Return the length of the longest word in the provided sentence.

Your response should be a number.
*/

function findLongestWordLength(str) {
  const strArray = str.split(' ');
  let result = strArray.reduce((acc, el) => {
    if (acc.length < el.length) {
      acc = el;
    }
    return acc;
  })
  return result.length;
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");