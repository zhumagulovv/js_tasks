// Дан массив со строками. Оставить в этом массиве только те строки, которые заканчиваются на .html.

let files = ["index.js", "index.html", "script.js", "style.css", "cart.html"];

let filterFile = files.filter((file) => file.endsWith(".html"));

console.log(filterFile);
