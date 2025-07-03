// Преобразовать дату в объект

const date = new Date();

const str = date.getFullYear() + "-" + date.getMonth() + "-" + date.getDate();

const year = date.getFullYear();
const month = date.getMonth();
const dateN = date.getDate();

const dateObject = {
  year: year,
  month: month,
  date: dateN,
};

Date.prototype.format = function (format = "yyyy-mm-dd") {
  const replaces = {
    yyyy: this.getFullYear(),
    mm: ("0" + (this.getMonth() + 1)).slice(-2),
    dd: ("0" + this.getDate()).slice(-2),
    hh: ("0" + this.getHours()).slice(-2),
    MM: ("0" + this.getMinutes()).slice(-2),
    ss: ("0" + this.getSeconds()).slice(-2),
  };

  let result = format;
  for (const replace in replaces) {
    result = result.replace(replace, replaces[replace]);
  }
  return result;
};

console.log(date);
console.log(str);
console.log(dateObject);
console.log(new Date().format("yyyy-mm-dd hh:MM:ss"));
