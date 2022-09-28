let adContainer = document.querySelector(".adContainer");
let adForm = document.querySelector(".adForm");

let carUrl = "https://haldaranup.herokuapp.com/cars";
adForm.addEventListener("submit", addCar);

function addCar(e) {
  e.preventDefault();

  let brand = adForm.elements[0].value;
  let type = adForm.elements[1].value;
  let year = adForm.elements[2].value;
  let kms = adForm.elements[3].value;
  let Description = adForm.elements[4].value;
  let price = adForm.elements[5].value;

  let carDetails = { brand, type, year, kms, Description, price };

  fetch(carUrl, {
    method: "POST",
    body: JSON.stringify(carDetails),
    headers: {
      "Content-Type": "application/json",
    },
  }).then((r) => {
    if (r.status == 201) {
        alert("Ad posted successfully")
        window.location.href = "./cars.html"
    } else {
        alert("Something went wrong!")
    }
  });
}
