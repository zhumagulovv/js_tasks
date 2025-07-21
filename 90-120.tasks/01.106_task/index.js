// Задача: Расчет средней оценки

function calculateAverage(grades) {
  if (grades.length === 0) {
    return 0;
  }

  const sum = grades.reduce((acc, cur) => acc + cur, 0);

  const average = sum / grades.length;

  return average;
}

let grades = [1, 2, 4, 5, 6, 7, 8, 9, 10];

console.log(calculateAverage(grades));
