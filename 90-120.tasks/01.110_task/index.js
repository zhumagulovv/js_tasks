//  Дано число. Проверьте, что у этого числа есть только один делитель, кроме него самого и единицы.

function isPrime(n) {
  if (n < 2) return false;
  for (let i = 2; i < Math.sqrt(n); i++) {
    if (n % i === 0) return false;
  }
  return true;
}

function hasOnlyOneExtraDivisor(num) {
  const root = Math.sqrt(num);
  return Number.isInteger(root) && isPrime(root);
}

console.log(hasOnlyOneExtraDivisor(6));
console.log(hasOnlyOneExtraDivisor(5));
console.log(hasOnlyOneExtraDivisor(10));
console.log(hasOnlyOneExtraDivisor(25));



