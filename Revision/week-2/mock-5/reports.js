let reportsContainer = document.querySelector(".reportsContainer");
let guestsNum = document.querySelector(".guestsNum");
let studentsNum = document.querySelector(".studentsNum");

let total = [];
let usersUrl = "https://haldaranup.herokuapp.com/users";
function fetchUsers() {
  fetch(usersUrl)
    .then((r) => r.json())
    .then((r) => {
      total = [...r];
      length = total.length
      renderReports(length)
    });
}

fetchUsers();

function renderReports (l){
    guestsNum.textContent = l
}
