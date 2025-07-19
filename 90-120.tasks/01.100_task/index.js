// Напишите программу, которая сформирует следующую строку "-1-2-3-4-5-";

let numStr = "";

for (let i = 1; i <= 5; i++) {
  numStr += "-" + i;
}

numStr += "-";

console.log(numStr);
