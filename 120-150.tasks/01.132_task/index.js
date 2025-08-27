// Сделайте функцию, которая вернет массив всех високосных годов за предыдущие сто лет.

function getLast100Year() {
  let date = new Date();
  let currentYear = date.getFullYear();
  let years = [];

  for (let i = 0; i < 100; i++) {
    let year = currentYear - i;
    let getLeapYear = year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0);
    if (getLeapYear) {
      years.push(year);
    }
  }

  return years;
}

console.log(getLast100Year());
