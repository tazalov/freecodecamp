/*
Create a function that sums two arguments together. If only one argument is provided, then return a function that expects one argument and returns the sum.

For example, addTogether(2, 3) should return 5, and addTogether(2) should return a function.

Calling this returned function with a single argument will then return the sum:

var sumTwoAnd = addTogether(2);
sumTwoAnd(3) returns 5.

If either argument isn't a valid number, return undefined.
*/

function addTogether() {
  const argIsNum = checkArg([...arguments]);
  if (argIsNum && arguments.length === 2) {
    return arguments[0] + arguments[1];
  }
  if (argIsNum && arguments.length === 1) {
    const numAdd = arguments[0];
    return function (x) {
      const recArgIsNum = checkArg([...arguments]);
      return recArgIsNum ? x + numAdd : undefined;
    };
  }
  return undefined;
}

const checkArg = (arg) => {
  return [...arg].every((el) => typeof el === 'number');
};

addTogether(2, 3);