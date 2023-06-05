/*
Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.
*/

function spinalCase(str) {
  const regex = /\s+|_+/g;
  let newStr = str.replace(/([a-z])([A-Z])/g, "$1 $2");
  return newStr.replace(regex, "-").toLowerCase();
}

spinalCase('This Is Spinal Tap');