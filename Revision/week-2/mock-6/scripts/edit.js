let editForm = document.querySelector(".editForm");

editForm.addEventListener("submit", editUser);

let carsUrl = "https://haldaranup.herokuapp.com/cars";
function editUser(e) {
  e.preventDefault();
  let price = +editForm.elements[0].value;
  console.log('price:', price)
  let carId = JSON.parse(localStorage.getItem("carId"));
  console.log("carId:", carId);
  let editedData = { price };
  fetch(carsUrl + "/" + carId, {
    method: "PATCH",
    body: JSON.stringify(editedData),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((r) => {
      alert("Edited Successfully");
      window.location.href = "./cars.html";
    })
    .catch((e) => alert("Failed"));
}
