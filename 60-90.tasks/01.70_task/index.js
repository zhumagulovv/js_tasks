// Дана строка с буквами. Проверить, что в этой строке не более двух заглавных букв.

let str = "Hello World!";
let count = 0;

for (let i = 0; i < str.length; i++) {
  if (str[i] >= "A" && str[i] <= "Z") {
    count++;
  }
}

console.log(count);

if (count <= 2) {
  console.log("В строке не более двух заглавных букв.");
} else {
  console.log("В строке больше двух заглавных букв.");
}
