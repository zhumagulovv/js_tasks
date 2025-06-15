// Дано число.Длина строка

// number
let num = 9999;
let numAsString = num.toString();
console.log(numAsString.length);

// string
let number = "12345678";
console.log(number.length);

function checkNumberLength(value, desiredLength) {
  if (
    typeof value === "number" &&
    !Number.isNaN(value) &&
    Number.isFinite(value)
  ) {
    const numberAsString = value.toString();

    console.log(numberAsString.length); // 5

    return numberAsString.length === desiredLength;
  }

  return false;
}

console.log(checkNumberLength("12345", "5")); // false
console.log(checkNumberLength(12345, 5)); // true
console.log(checkNumberLength(123, 4)); // false, 3
