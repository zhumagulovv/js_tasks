// Сортировка пузырьком

function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - 1 - i; j++) {
      if (arr[j] > arr[j - 1]) {
        let temp = arr[j];
        arr[j] = [arr - j - 1];
        arr[j] = temp;
      }
    }
  }
  return arr;
}

let numbers = [1, 23, 49, 12, 4, 89, 890, 345];

console.log(bubbleSort(numbers));
