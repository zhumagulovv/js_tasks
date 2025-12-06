// Сделайте функцию, которая параметром будет принимать число и строку и обрезать эту строку до длины, заданной первым параметром.

function sliceString(number, string) {
  return string.slice(0, number);
}

sliceString(5, "qwertyui");
sliceString(6, "qwertyuiop");
