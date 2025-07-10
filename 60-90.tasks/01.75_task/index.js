// Дана строка с буквами и цифрами. Проверить, что в строке не более трех букв.

let str = "123cdd";
let count = 0;

for (let i = 0; i < str.length; i++) {
  if (str[i] >= "a" && str[i] <= "z") {
    count++;
  }
}

console.log(count);

if (count <= 3) {
  console.log("В строке не более трех букв.");
} else {
  console.log("В строке больше трех букв.");
}
