// Сделайте функцию, которая параметром будет получать дату, а возвращать день недели словом, соответствующий этой дате.

function getCorrespondingDay(date) {
  let days = [
    "Воскресенье",
    "Понедельник",
    "Вторник",
    "Среда",
    "Четверг",
    "Пятница",
    "Суббота",
  ];

  //   for (let i = 0; i < days.length; i++) {
  //     if (days[i] === date) {
  //       return days[i];
  //     }
  //   }

  //   return days;

  return days[date.getDay()];
}

console.log(getCorrespondingDay(new Date()));
console.log(getCorrespondingDay(new Date("2025-08-26")));
