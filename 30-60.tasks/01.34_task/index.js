// Дан массив со строками. Оставить в этом массиве только те строки, которые начинаются на http://.

let networks = [
  "https://google.com",
  "http://localhost:5000",
  "https://www.com",
  "https://youtube.com",
  "http://localhost:8080",
];
let searchNetwork = "http://";

for (let i = 0; i < networks.length; i++) {
  if (networks[i].startsWith(searchNetwork)) {
    console.log(networks[i]);
  }
}
