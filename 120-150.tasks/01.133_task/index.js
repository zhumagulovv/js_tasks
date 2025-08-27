// Сделайте функцию, которая будет возвращать сколько дней осталось до конца текущего месяца.

function getDaysRemainingUntilEndOfMonth() {
  let today = new Date();
  let lastDayOfMonth = new Date(today.getFullYear(), today.getMonth() + 1, 0);
  let totalDaysInMoth = lastDayOfMonth.getDate();
  let currentDay = today.getDate();
  let days = totalDaysInMoth - currentDay;

  return days;
}

console.log(getDaysRemainingUntilEndOfMonth());
