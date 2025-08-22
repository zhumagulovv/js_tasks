class Student {
  #id;
  #surname;
  #username;
  #lastname;
  #age;
  #hobby;
  constructor(id, surname, username, lastname, age, hobby) {
    this.#id = id;
    this.#surname = surname;
    this.#username = username;
    this.#lastname = lastname;
    this.#age = age;
    this.#hobby = hobby;
  }

  toJSON() {
    return {
      id: this.#id,
      surname: this.#surname,
      username: this.#username,
      lastname: this.#lastname,
      age: this.#age,
      hobby: this.#hobby,
    };
  }

  getData() {
    return this.toJSON();
  }
}

class Students {
  constructor() {
    const savedStudents = localStorage.getItem("students");
    let parsed = savedStudents ? JSON.parse(savedStudents) : [];

    this.students = parsed
      .filter((s) => s && s.id && s.surname)
      .map(
        (s) =>
          new Student(s.id, s.surname, s.username, s.lastname, s.age, s.hobby)
      );
  }
  addNewStudent(student) {
    this.students.push(student);
    this.saveLocalStorage();
    return student;
  }
  removeStudent() {}
  updateStudent() {}
  getStudent() {}
  getAllStudents() {
    return this.students;
  }

  saveLocalStorage() {
    localStorage.setItem("students", JSON.stringify(this.students));
  }
}

let addStudents = document.querySelector(".add-students");
let surname = document.querySelector(".surname");
let username = document.querySelector(".username");
let lastname = document.querySelector(".lastname");
let age = document.querySelector(".age");
let hobby = document.querySelector(".hobby");
let resultStudents = document.querySelector(".result-students");
let alphabetButton = document.querySelector(".alphabet");
let ageA = document.querySelector(".age-a");
let ageB = document.querySelector(".age-b");

let nStudent = new Students();

function renderStudents(students) {
  resultStudents.innerHTML = "";
  students.forEach((student) => {
    const { id, surname, username, lastname, age, hobby } = student.getData();

    let currentYear = new Date().getFullYear();
    let birthYear = currentYear - age;

    const tr = document.createElement("tr");
    tr.classList.add("table-body");
    tr.innerHTML = `
      <td>${surname} ${username} ${lastname}</td>
      <td>${age}</td>
      <td>${birthYear}</td>
      <td>${hobby}</td>
    `;

    resultStudents.appendChild(tr);
  });
}

addStudents.addEventListener("submit", (e) => {
  e.preventDefault();
  if (
    !surname.value.trim() ||
    !username.value.trim() ||
    !lastname.value.trim() ||
    !age.value.trim() ||
    !hobby.value.trim()
  ) {
    alert("Заполните все поля");
    return;
  }

  const id =
    nStudent.students.length > 0
      ? nStudent.students[nStudent.students.length - 1].getData().id + 1
      : 1;

  const newStudent = new Student(
    id,
    capitalizeFirstWord(surname.value),
    capitalizeFirstWord(username.value),
    capitalizeFirstWord(lastname.value),
    checkNumber(age.value),
    capitalizeFirstWord(hobby.value)
  );

  nStudent.addNewStudent(newStudent);

  renderStudents(nStudent.getAllStudents());

  addStudents.reset();
});

renderStudents(nStudent.getAllStudents());

function capitalizeFirstWord(str) {
  if (!str) return "";
  return str[0].toUpperCase() + str.slice(1);
}

function checkNumber(str) {
  let number = "";
  for (let i = 0; i < str.length; i++) {
    if (!isNaN(str[i]) && str[i] !== " ") {
      number += str[i];
    }
  }
  return number;
}

function sortedByAlphabet(students) {
  let sortedBySurname = [...students].sort((a, b) =>
    a.getData().surname.localeCompare(b.getData().surname)
  );

  return renderStudents(sortedBySurname);
}

function sortedByAgeAsc(students) {
  let sortedByAgeAsc = [...students].sort(
    (a, b) => a.getData().age - b.getData().age
  );

  return renderStudents(sortedByAgeAsc);
}

alphabetButton.addEventListener("click", () => {
  sortedByAlphabet(nStudent.getAllStudents());
});

ageA.addEventListener("click", () => {
  sortedByAgeAsc(nStudent.getAllStudents());
});
