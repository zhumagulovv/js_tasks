// Сделайте функцию, которая параметром будет принимать год и проверять, високосный он или нет.

function checkYear(year) {
  let leap;

  if (year % 400 === 0) {
    leap = true;
  } else if (year % 100 === 0) {
    leap = false;
  } else if (year % 4 === 0) {
    leap = true;
  } else {
    leap = false;
  }

  return `${year} год ${leap ? "" : "не"} високосный`;
}

console.log(checkYear(2000));
console.log(checkYear(1900));
console.log(checkYear(1916));
console.log(checkYear(2025))
