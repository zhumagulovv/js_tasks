class User {
  constructor(id, username, surname, experience, position) {
    this.id = id;
    this.username = username;
    this.surname = surname;
    this.experience = experience;
    this.position = position;
  }
}

class UserMaster {
  constructor() {
    const savedUsers = localStorage.getItem("users");
    this.users = savedUsers ? JSON.parse(savedUsers) : [];
  }

  addUser(user) {
    this.users.push(user);
    this.saveLocalStorage();
  }

  getAllUsers() {
    return this.users;
  }

  updateUser(id, updateFields) {
    this.users = this.users.map((user) =>
      user.id === id ? { ...user, ...updateFields } : user
    );
    this.saveLocalStorage();
  }

  removeUser(id) {
    this.users = this.users.filter((user) => user.id !== id);
    this.saveLocalStorage();
  }

  saveLocalStorage() {
    localStorage.setItem("users", JSON.stringify(this.users));
  }
}

const addUser = document.getElementById("add-user");
const userName = document.getElementById("username");
const surName = document.getElementById("surname");
const workExperience = document.getElementById("work-experience");
const positionWork = document.getElementById("position");
const users = document.querySelector(".users");

const master = new UserMaster();

function renderUsers() {
  users.innerHTML = "";
  master.getAllUsers().forEach((user) => {
    const li = document.createElement("li");
    const h2 = document.createElement("h2");
    const topDesc = document.createElement("div");
    const bottomDesc = document.createElement("div");
    const experienceTag = document.createElement("span");
    const positionTag = document.createElement("span");
    const removeUser = document.createElement("button");
    const updateUser = document.createElement("button");

    h2.textContent = `${user.surname} ${user.username}`;
    experienceTag.textContent = `Стаж: ${user.experience} ${getYearWord(
      user.experience
    )}. `;
    positionTag.textContent = `Должность: ${user.position}`;
    removeUser.textContent = "Удалить";
    updateUser.textContent = "Обновить";

    li.classList.add("user");
    bottomDesc.classList.add("user__btns");

    removeUser.addEventListener("click", function () {
      master.removeUser(user.id);
      renderUsers();
    });

    updateUser.addEventListener("click", function () {
      const newUsername = prompt("Введите новую имю", user.username);
      const newSurname = prompt("Введите новую фамилию", user.surname);
      const newWorkExperience = prompt("Введите новый стаж:", user.experience);
      const newPosition = prompt("Введите новую должность", user.position);

      if (newUsername && newSurname && newWorkExperience && newPosition) {
        master.updateUser(user.id, {
          username: capitalizeFirstLetter(newUsername),
          surname: capitalizeFirstLetter(newSurname),
          workExperience: checkNumbers(newWorkExperience),
          position: capitalizeFirstLetter(newPosition),
        });
        renderUsers();
      }
    });

    topDesc.append(experienceTag, positionTag);
    bottomDesc.append(removeUser, updateUser);
    li.append(h2, topDesc, bottomDesc);
    users.appendChild(li);
  });
}

addUser.addEventListener("submit", function (e) {
  e.preventDefault();

  if (
    !userName.value.trim() ||
    !surName.value.trim() ||
    !workExperience.value.trim() ||
    !positionWork.value.trim()
  ) {
    alert("Заполните все поля");
    return;
  }

  const id =
    master.users.length > 0 ? master.users[master.users.length - 1].id + 1 : 1;

  const newUser = new User(
    id,
    capitalizeFirstLetter(userName.value),
    capitalizeFirstLetter(surName.value),
    checkNumbers(workExperience.value),
    capitalizeFirstLetter(positionWork.value)
  );

  master.addUser(newUser);

  renderUsers();

  addUser.reset();
});

renderUsers();

function checkNumbers(str) {
  let number = "";
  for (let i = 0; i < str.length; i++) {
    if (!isNaN(str[i]) && str[i] !== " ") {
      number += str[i];
    }
  }
  return number;
}

function getYearWord(number) {
  if (number % 10 === 1 && number % 100 === 1) {
    return "год";
  } else if (
    [2, 3, 4].includes(number % 10) &&
    ![12, 13, 14].includes(number % 100)
  ) {
    return "года";
  } else {
    return "лет";
  }
}

function capitalizeFirstLetter(str) {
  if (!str) return "";
  return str[0].toUpperCase() + str.slice(1);
}
