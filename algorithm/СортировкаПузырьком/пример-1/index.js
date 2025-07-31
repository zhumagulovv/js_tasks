let a = 5,
  b = 3;

if (a > b) {
  let temp = a;
  a = b;
  b = temp;
}

console.log(a, b);
