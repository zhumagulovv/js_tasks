// Дано два слова. Проверить, совпадают ли их первые буквы.

let strF = "Zhanybek";
let strS = "Zhakyp";

let firstToLetters1 = strF.slice(0, 4);
let firstToLetters2 = strS.slice(0, 4);

console.log(strF.slice(0, 4)); // Zhan
console.log(strS.slice(0, 4)); // Zhak

console.log(firstToLetters1 === firstToLetters2); // false

let strL = "Hello World";
console.log(strL.toLowerCase());

function checkFirstLetterMatch(word1, word2) {
  if (!word1 || !word2) return false;
  return word1[0].toLowerCase() === word2[0].toLowerCase();
}

console.log(checkFirstLetterMatch("Маша", "Море")); // true
console.log(checkFirstLetterMatch("Кот", "Собака")); // false
