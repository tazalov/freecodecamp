/*
We'll pass you an array of two numbers. Return the sum of those two numbers plus the sum of all the numbers between them. The lowest number will not always come first.

For example, sumAll([4,1]) should return 10 because sum of all the numbers between 1 and 4 (both inclusive) is 10.
*/

function sumAll(arr) {
  const copyArr = [...arr].sort((a,b) => a-b);
  let sum = 0;
  for(let i = copyArr[0]; i <= copyArr[1]; i++) {
    sum+=i;
  }
  return sum;
}

sumAll([1, 4]);