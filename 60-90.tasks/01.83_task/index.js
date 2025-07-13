// Выведите в консоль все числа в промежутке от 10 до 1000, у которых предпоследняя цифра четная.

for (let i = 10; i <= 1000; i++) {
  let numstr = i.toString();
  let penultimateDigit =
    numstr.length > 2 ? Number(numstr[numstr.length - 2]) : 0;
  if (penultimateDigit % 2 === 0) {
    console.log(parseInt(penultimateDigit));
  }
}
