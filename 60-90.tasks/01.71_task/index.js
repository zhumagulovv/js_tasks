// Дана некоторая строка. Удалить из этой строки все подстроки, в которых количество символов больше трех.

let str = "1 22 333 4444 22 5555 1";
let strArr = str.split(" ");
let result = [];

for (let i = 0; i < strArr.length; i++) {
  if (strArr[i].length <= 3) {
    result.push(strArr[i]);
  }
}

console.log(strArr);
console.log(result);
