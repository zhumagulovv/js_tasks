// Сделайте функцию, которая вернет текущий день недели словом.

function getCurrentDay() {
  const days = [
    "Воскресенье",
    "Понедельник",
    "Вторник",
    "Среда",
    "Четверг",
    "Пятница",
    "Суббота",
  ];
  let today = new Date();
  return days[today.getDay()];
}

console.log(getCurrentDay());
