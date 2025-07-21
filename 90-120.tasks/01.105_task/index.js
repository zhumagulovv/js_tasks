// Задача: "Сгруппировать одинаковые слова"(анаграмма)

const words = ["listen", "silent", "enlist", "hello", "ohlle", "world"];

function groupAnagrams(words) {
  const map = {};

  for (let word of words) {
    const key = word.split("").sort().join("");

    if (!map[key]) {
      map[key] = [];
    }

    map[key].push(word);
  }

  return Object.values(map);
}

console.log(groupAnagrams(words));
