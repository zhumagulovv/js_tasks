// Дан массив с дробями. Округлить эти дроби до одного знака в дробной части.

let scores = [1.456, 2.125, 3.32, 4.1, 5.34];
let totalScore = 0;

for (let i = 0; i < scores.length; i++) {
  totalScore += scores[i];
}

let averageScore = totalScore / scores.length;
console.log(averageScore);
