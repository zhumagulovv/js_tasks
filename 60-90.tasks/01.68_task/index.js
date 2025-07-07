// Дан символ. Надо узнать, в каком регистре этот символ - в верхнем или нижнем.

function checkCase(char) {
  if (char.length !== 1) {
    return "Входные данные должны быть одним символом";
  }

  const upperCase = char.toUpperCase();
  const lowerCase = char.toLowerCase();

  if (char === upperCase && char !== lowerCase) {
    return "Верхний регистр";
  } else if (char === lowerCase && char !== upperCase) {
    return "Нижний регистр";
  } else {
    return "Не удалось определить регистр";
  }
}

const char1 = "A";
const char2 = "a";

console.log(`${char1} - ${checkCase(char1)}`);
console.log(`${char2} - ${checkCase(char2)}`);
