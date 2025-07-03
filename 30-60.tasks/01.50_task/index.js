// Дана некоторая строка. Найти позицию третьего нуля в строке.

function findThirdZeroMatchAll(str) {
  const matches = str.matchAll(/0/g);
  const positions = Array.from(matches, (match) => match.index);
  return positions.length >= 3 ? positions[2] : -1;
}

console.log(findThirdZeroMatchAll("1022830jsdhuj0"));
