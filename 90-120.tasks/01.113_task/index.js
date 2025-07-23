// Дана строка. Удалите из нее все гласные буквы.

function disemvowel(str) {
  let arrVowels = ["a", "e", "i", "o", "u"];
  return str.split("").filter((char) => !arrVowels.includes(char));
}

let str = "Hello";
console.log(disemvowel(str));
