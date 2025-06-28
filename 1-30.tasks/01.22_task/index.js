// Дана некоторая строка. Перебрать и вывести в консоль по очереди все символы с конца строки.

const strings = "Hello World!";
const reversed = strings.split("").reverse("").join("");

for (let char of reversed) {
  console.log(char);
}
