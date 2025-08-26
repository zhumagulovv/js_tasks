// Сделайте функцию, которая будет возвращать сколько дней прошло или осталось до заданной даты в году, в зависимости от того, была уже эта дата или нет.

function totalDate(date) {
  let today = new Date();

  let targetDate = new Date(
    today.getFullYear(),
    date.getMonth(),
    date.getDate()
  );

  let diff = targetDate - today;

  let days = Math.ceil(diff / (1000 * 60 * 60 * 24));

  if (days > 0) {
    return `До этой даты осталось ${days} дней`;
  } else if (days < 0) {
    return `После этой даты прошло ${Math.abs(days)} дней`;
  } else {
    return "Сегодня эта дата!";
  }
}

console.log(totalDate(new Date(2025, 11, 4))); // 4 декабря любого года
console.log(totalDate(new Date(2025, 7, 26))); // 26 сентября
console.log(totalDate(new Date(2025, 0, 1))); // 1 января
console.log(totalDate(new Date(2025, 9, 10))); // 10 октября

// 0 - Январь
// 1 - Февраль
// 2 - Март
// 3 - Апрель
// 4 - Май
// 5 - Июль
// 6 - Июнь
// 7 - Август
// 8 - Сентябрь
// 9 - Октябрь
// 10 - Ноябрь
// 11 - Декабрь
