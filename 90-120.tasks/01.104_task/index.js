// Задача: Группировка по первому символу

const input = ["Apple", "apricot", "banana", "Avocado", "Blueberry", "cherry"];

function groupByFirstLetter(input) {
  let result = {};
  for (let i = 0; i < input.length; i++) {
    let key = input[i].charAt(0).toLowerCase();
    if (!result[key]) {
      result[key] = [];
    }
    result[key].push(input[i]);
  }

  return result;
}

const result = groupByFirstLetter(input);
console.log(result);

// let groupByFirstLetter = Object.groupBy(input, (letter) =>
//   letter.charAt(0).toLowerCase()
// );

// console.log(groupByFirstLetter);
