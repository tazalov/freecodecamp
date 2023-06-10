/*
One of the simplest and most widely known ciphers is a Caesar cipher, also known as a shift cipher. In a shift cipher the meanings of the letters are shifted by some set amount.

A common modern use is the ROT13 cipher, where the values of the letters are shifted by 13 places. Thus A ↔ N, B ↔ O and so on.

Write a function which takes a ROT13 encoded string as input and returns a decoded string.

All letters will be uppercase. Do not transform any non-alphabetic character (i.e. spaces, punctuation), but do pass them on.
*/

function rot13(str) {
  const alph = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const strArr = str.split('');
  const newarr = strArr.map(el => {
    const indexInAlph = alph.indexOf(el);
    const indexExist = indexInAlph !== -1;
    if (indexExist && indexInAlph >= 13) {
      el = alph[indexInAlph - 13];
      return el;
    } else if (indexExist && indexInAlph < 13) {
      el = alph[alph.length - (13 - indexInAlph)];
      return el;
    }
    return el;
  })
  return newarr.join('');
}

rot13("SERR PBQR PNZC!");