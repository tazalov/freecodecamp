/*
Complete the code for the squareList function using any combination of map(), filter(), and reduce(). The function should return a new array containing the squares of only the positive integers (decimal numbers are not integers) when an array of real numbers is passed to it. An example of an array of real numbers is [-3, 4.8, 5, 3, -3.2].

Note: Your function should not use any kind of for or while loops or the forEach() function.
*/

const squareList = arr => {
  // Only change code below this line
  const filteredArr = arr.filter(el => el > 0);
  const squareArray = filteredArr.reduce((acc, el) => {
    if (el % 1 === 0) {
      acc.push(Math.pow(el,2));
    }
    return acc;
  },[])
  return squareArray;
  // Only change code above this line
};

const squaredIntegers = squareList([-3, 4.8, 5, 3, -3.2]);
console.log(squaredIntegers);