let editForm = document.querySelector(".editForm");

editForm.addEventListener("submit", editUser);

let usersUrl = "https://haldaranup.herokuapp.com/users";
function editUser(e) {
    let name = editForm.elements[0].value
    let age = editForm.elements[1].value
    let userId = JSON.parse(localStorage.getItem("userId"))
    let editedDAta = {name, age}
  e.preventDefault();
  fetch(usersUrl+"/"+userId, {
    method: "PATCH",
    body: JSON.stringify(editedDAta),
    headers: {
      "Content-Type": "application/json",
    },
  })
  .then(r => {
    alert("Edited Successfully")
    window.location.href = "./data.html"
  }).catch(e => alert("Failed"))
}
