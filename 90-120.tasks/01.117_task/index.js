// Дана строка в формате: 'kebab-case'. Преобразуйте ее в формат: 'snake_case'

const toSnakeCase = (str) => {
  return str.toLowerCase().replace(/-/g, "_");
};

console.log(toSnakeCase("my-name"));
console.log(toSnakeCase("my-age"));
