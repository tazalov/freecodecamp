/*
Write your own Array.prototype.myFilter(), which should behave exactly like Array.prototype.filter(). You should not use the built-in filter method. The Array instance can be accessed in the myFilter method using this.
*/

Array.prototype.myFilter = function(callback) {
  const newArray = [];
  // Only change code below this line
  for (let i = 0; i < this.length; i++) {
    const newItemArray = callback(this[i], i, this);
    if (newItemArray != false) {
      newArray.push(this[i]);
    }
  }
  // Only change code above this line
  return newArray;
};