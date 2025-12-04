// Сделайте функцию, которая параметром будет принимать секунды, а возвращать количество суток, соответствующих этим секундам.

function getFullDays(seconds) {
  const SECOND_PER_DAY = 86400;
  return Math.floor(seconds / SECOND_PER_DAY)
}

console.log(getFullDays(500500))