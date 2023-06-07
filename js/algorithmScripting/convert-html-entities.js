/*
Convert the characters &, <, >, " (double quote), and ' (apostrophe), in a string to their corresponding HTML entities.
*/

function convertHTML(str) {
  const char = {
    '&' : '&amp;',
    '<' : '&lt;',
    '>' : '&gt;',
    '\"' : '&quot;',
    '\'' : '&apos;',
  }
  const strArr = str.split('');
  const resultArr = [];
  strArr.forEach(el => {
    if (char.hasOwnProperty(el)) {
      resultArr.push(char[el])
    } else {
      resultArr.push(el)
    }
  })
  return resultArr.join('');
}

convertHTML("Dolce & Gabbana");