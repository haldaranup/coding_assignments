let userContainer = document.querySelector(".userContainer");
let userForm = document.querySelector(".userForm");
let batchContainer = document.getElementById("batchContainer");
let proContainer = document.getElementById("proContainer");
let selectBatch = document.getElementById("selectBatch");
let selectPro = document.getElementById("selectPro");

userForm.addEventListener("submit", addUser);

function addUser(e) {
  e.preventDefault();
  let name = userForm.elements[0].value;
  let age = userForm.elements[1].value;
  let place = userForm.elements[2].value;
  let batch_name = selectBatch.value;
  let profession = selectPro.value;

  let userData = { name, age, place, batch_name, profession };

  fetch("https://haldaranup.herokuapp.com/users", {
    method: "POST",
    body: JSON.stringify(userData),
    headers: {
      "Content-Type": "application/json",
    },
  }).then((r) => {
    if (r.status == 201) {
      alert("Added Successfully!!");
      window.location.href = "./data.html"
    } else {
      alert("Something went wrong!!");
    }
  });
}
