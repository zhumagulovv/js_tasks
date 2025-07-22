// Дана строка со словами. Отсортируйте слова в алфавитном порядке.

let strArray = ["alphabet", "world", "the", "best", "words", "banana"];

const sorted = strArray.sort((a, b) => {
  if (a.toLocaleLowerCase() < b.toLocaleLowerCase()) {
    return -1;
  }
  if (a.toLocaleLowerCase() > b.toLocaleLowerCase()) {
    return 1;
  }

  return 0;
});

console.log(strArray);
console.log(sorted);
