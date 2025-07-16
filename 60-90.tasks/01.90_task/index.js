// Дано некоторое слово. Проверить, что это слово читается одинаково с любой стороны.

let string = "abcba";
let string2 = "abccba";
let string3 = "termin";

function isPalindrome(str) {
  str = str.toLowerCase().replace(/\W/g, "");
  const stringArray = [...str];
  const newArray = [];
  stringArray.forEach((index) => {
    newArray.unshift(index);
  });
  const reversedString = newArray.join("");
  console.log(str);
  return str === reversedString;
}

console.log(isPalindrome(string));
console.log(isPalindrome(string2));
console.log(isPalindrome(string3));
