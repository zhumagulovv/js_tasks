// Сделайте функцию, которая параметром будет получать дату, а возвращать день недели словом, соответствующий этой дате.

function currentDay(dateString) {
  const [day, month, year] = dateString.split("-");
  let days = [
    "Sunday",
    "Monday",
    "Thuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let date = new Date(year, month - 1, day);

  return days[date.getDay()];
}

console.log(currentDay("16-10-2025"));
