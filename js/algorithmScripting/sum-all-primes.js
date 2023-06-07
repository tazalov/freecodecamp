/*
Rewrite sumPrimes so it returns the sum of all prime numbers that are less than or equal to num.
*/

function sumPrimes(num) {
  let sum = 0;
  for (let i = 0; i <=num; i++) {
    if (isPrime(i)) {
      sum+=i;
    }
  }
  return sum;
}

function isPrime(num) {
  if (num < 2) return false;
  for (let i = 2; i < num; i++) {
    if (num % i == 0) return false;
  }
  return true;
}


sumPrimes(10);