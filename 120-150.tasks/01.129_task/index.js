// Сделайте функцию, которая параметром будет принимать число и удалять из него нули.

function removeZero(num) {
  let deleteNumber = "0";
  let numStr = num.toString().split("");

  for (let i = 0; i < numStr.length; i++) {
    if (numStr[i] === deleteNumber) {
      numStr.splice(i, 1);
      i--;
    }
  }
  return Number(numStr.join(""));
}

console.log(removeZero(100));
console.log(removeZero(10293023));
console.log(removeZero(334422003323));
