// Сделайте функцию, которая вернет предыдущий, текущий и следующий дни недели словом в виде следующего объекта:
// {
// 	next: 'пн',
// 	curr: 'вс',
// 	prev: 'сб',
// }

function days() {
  let days = ["вс", "пн", "вт", "ср", "чт", "пт", "сб"];
  let today = new Date();
  let currentDay = today.getDay();

  let prevDay = (currentDay - 1 + 7) % 7;
  let nextDay = (currentDay + 1) % 7;

  return {
    prev: days[prevDay],
    curr: days[currentDay],
    next: days[nextDay],
  };
}

console.log(days());
