// Даны два слова. Проверить, что последняя буква первого слова совпадает с первой буквой второго слова.

function checkWords(word1, word2) {
  lastLetterOfWord1 = word1.at(-1).toLowerCase();
  firstLetterOfWord2 = word2[0].toLowerCase();

  if (lastLetterOfWord1 === firstLetterOfWord2) {
    return `${lastLetterOfWord1} & ${firstLetterOfWord2} = равно`;
  } else {
    return `${lastLetterOfWord1} & ${firstLetterOfWord2} = не равны`;
  }
}

console.log(checkWords("Маша", "Том"));
console.log(checkWords("Афиша", "Атаман"));
