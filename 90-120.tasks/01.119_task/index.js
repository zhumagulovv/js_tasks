// Дана строка в формате: 'camelCase'. Преобразуйте ее в формат: 'snake_case'

const toSnakeCase = (str) => {
  return str.replace(/([A-Z])/g, "_$1").toLowerCase();
};

console.log(toSnakeCase("myName"));
