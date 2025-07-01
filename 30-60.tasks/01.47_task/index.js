// Дана строка. Удалить предпоследний символ из этой строки.

function removeSecondLastChar(str) {
  if (str.length < 2) {
    return str;
  }

  return str.slice(0, str.length - 1);
}

console.log(removeSecondLastChar("Тома"));
