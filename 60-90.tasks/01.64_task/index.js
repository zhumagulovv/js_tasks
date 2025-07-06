// Дана некоторая строка. Сменить регистр букв строки на противоположный.

let str = "AbCdE";
let result = "";

for (let i = 0; i < str.length; i++) {
  const char = str[i];

  if (char === char.toUpperCase()) {
    result += char.toLowerCase();
  } else {
    result += char.toUpperCase();
  }
}

console.log(result);
