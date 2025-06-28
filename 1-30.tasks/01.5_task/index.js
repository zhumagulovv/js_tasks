// Дано слово. Нужно получить последнюю букву. Если слово оканчивается на мягкий знак (ь), то получить предпоследнюю букву.

function getLastLetter(word) {
  if (word.endsWith("ь")) {
    return word.slice(-2, -1);
  }
  return word.slice(-1);
}

console.log(getLastLetter("словарь")); // Вывод ь
console.log(getLastLetter("маша")); // Вывод а

function getLastLetter1(word) {
  if (!word) return "";
  if (word[word.length - 1].toLowerCase() === "ь") {
    return word.length > 1 ? word[word.length - 2] : "";
  }
  return word[word.length - 1];
}

console.log(getLastLetter1("медведь"));
console.log(getLastLetter1("лощадь"));
console.log(getLastLetter1("кот"));
