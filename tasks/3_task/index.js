const myButton = document.getElementById("button");

myButton.addEventListener("click", () => {
  setTimeout(() => {
    document.body.style.backgroundColor = "#ff0000";
    const text = document.querySelector(".text");
    text.textContent = "Ты нажал кнопку!";
    text.style.color = "#fff";
  }, 1000);
});
