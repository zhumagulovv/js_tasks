// Дана строка в формате: 'snake_case'. Преобразуйте ее в формат: 'camelCase'

const toCamelCase = (str) => {
  return str
    .toLowerCase()
    .replace(/[_ -](\w)/g, (_, char) => char.toUpperCase());
};

console.log(toCamelCase("my_name"));
console.log(toCamelCase("my-age"));
