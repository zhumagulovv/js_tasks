// Сделайте функцию, которая параметром будет принимать секунды, а возвращать количество суток, соответствующих этим секундам.

function getCorrespondingDayy(sec) {
  let second = 60 * 60 * 24;
  return Math.floor(sec / second);
}

console.log(getCorrespondingDayy(86400), "суток");
console.log(getCorrespondingDayy(667766), "суток");
