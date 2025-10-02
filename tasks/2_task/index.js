const template = document.getElementById("cardTemplate");

let card = template.content.cloneNode(true);

let img = card.querySelector("img");
let h2 = card.querySelector("h2");
let p = card.querySelector("p");

h2.textContent = "Title";
p.textContent = "description";

document.body.appendChild(card);
