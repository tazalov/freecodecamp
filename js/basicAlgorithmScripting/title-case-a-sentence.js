/*
Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.

For the purpose of this exercise, you should also capitalize connecting words like the and of.
*/

function titleCase(str) {
  let strArray = str.split(' ');
  const newStrArray = strArray.map(el => {
    return el = el[0].toUpperCase() + el.slice(1).toLowerCase();
  });
  return newStrArray.join(' ')
}

titleCase("I'm a little tea pot");