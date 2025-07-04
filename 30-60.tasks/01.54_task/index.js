//  Дан объект с ключами и значениями. Надо писать в первый массив ключи объекта, а во второй - значения.

const person = {
  name: "Jonh",
  age: 19,
};

const keys = Object.keys(person);
const values = Object.values(person);

console.log(person);
console.log(keys);
console.log(values);
