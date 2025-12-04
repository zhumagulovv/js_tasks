// Сделайте функцию, которая вернет текущий день недели словом.

function getCurrentDay() {
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const today = new Date();
  return days[today.getDay()];
}

getCurrentDay()
