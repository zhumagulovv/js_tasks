// Сделайте функцию, которая параметром будет принимать число и строку и обрезать эту строку до длины, заданной первым параметром.

function func(num, str) {
  return str.slice(0, num);
}

console.log(func(4, "rxdcftgvbhj"));
console.log(func(6, "qwertyui"));
