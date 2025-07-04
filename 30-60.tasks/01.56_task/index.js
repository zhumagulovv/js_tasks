// Дана некоторая строка: Переводить в верхний регистр все нечетные буквы этой строки.

const str = "abcde";
let result = "";

for (let i = 0; i < str.length; i++) {
  const letter = str[i].toLowerCase();
  const code = letter.charCodeAt(0) - 96;


  if (code % 2 === 1) {
    result += str[i].toUpperCase();
  } else {
    result += str[i];
  }
}

console.log(result);
