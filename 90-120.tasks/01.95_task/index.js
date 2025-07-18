// Дан текст со словами. Написать в массив все слова, начинающиеся на букву 'a'.

let array = [];

function wordsStartingWithA(text) {
  const words = text.split(" ");
  const result = [];
  for (let i = 0; i < words.length; i++) {
    if (words[i].startsWith("a")) {
      result.push(words[i]);
    }
  }
  return result;
}

let text = "apple banana avocado orange juice";
console.log(wordsStartingWithA(text));
