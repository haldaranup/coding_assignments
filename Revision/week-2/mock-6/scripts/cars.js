let carsContainer = document.querySelector(".carsContainer");
let sortFilter = document.querySelector(".sortFilter");
let carUrl = "https://haldaranup.herokuapp.com/cars";
let wishlisted_cars = "https://haldaranup.herokuapp.com/wishlisted_cars";

let sortbykms = document.querySelector(".sortbykms");
let sortbyprice = document.querySelector(".sortbyprice");
let filter = document.querySelector(".filter");

filter.addEventListener("change", getCars);

let allCars = [];
function getCars() {
  fetch(carUrl)
    .then((r) => r.json())
    .then((r) => {
      allCars = [...r];

      renderCars(r);
    })
    .catch((e) => alert("Something went wrong"));
}

getCars();

function renderCars(cars) {
  carsContainer.innerHTML = null;
  cars?.map((i) => {
    let card = document.createElement("div");
    card.className = "card";

    let image = document.createElement("img");
    image.className = "carImage";
    image.src =
      "https://static.autox.com/uploads/2021/06/McLaren-720S-Image-6-.jpg";
    let brand = document.createElement("p");
    brand.innerText = "Brand: " + i.brand;
    let type = document.createElement("p");
    type.innerText = "Type: " + i.type;
    let year = document.createElement("p");
    year.innerText = "Yesr: " + i.year;
    let kms = document.createElement("p");
    kms.innerText = "Kms: " + i.kms;
    let description = document.createElement("p");
    description.innerText = "Description: " + i.Description;
    let price = document.createElement("p");
    price.innerText = "Price: ₹" + i.price;

    let remove = document.createElement("button");
    remove.innerHTML = "Delete";
    remove.className = "btn delete";
    remove.addEventListener("click", () => deleteCar(i.id));
    let edit = document.createElement("button");
    edit.innerHTML = "Edit";
    edit.className = "btn edit";
    edit.addEventListener("click", () => {
      localStorage.setItem("carId", JSON.stringify(i.id));
      window.location.href = "./edit.html";
    });
    let wishList = document.createElement("img");
    wishList.className = "wishList";
    wishList.src =
      "https://static.vecteezy.com/system/resources/previews/000/552/161/non_2x/heart-romantic-love-graphic-vector.jpg";
    wishList.addEventListener("click", () => addWishList(i));

    let pre = document.createElement("div");
    pre.className = "pre";
    pre.append(edit, remove, wishList);
    let info = document.createElement("div");
    info.append(brand, type, year, kms, description, price);

    let allDetails = document.createElement("div");
    allDetails.className = "allDetails";
    allDetails.append(info, pre);
    card.append(image, allDetails);
    carsContainer.append(card);
  });
}

sortbykms.addEventListener("change", () => {
  let sortValue = sortbykms.value;
  if (sortValue == "asc") {
    allCars.sort(function (a, b) {
      return a.kms - b.kms;
    });
    renderCars(allCars);
  } else if (sortValue == "desc") {
    allCars.sort(function (a, b) {
      return b.kms - a.kms;
    });
    renderCars(allCars);
  } else renderCars(allCars);
});
sortbyprice.addEventListener("change", () => {
  let sortValue = sortbyprice.value;
  if (sortValue == "asc") {
    allCars.sort(function (a, b) {
      return a.price - b.price;
    });
    renderCars(allCars);
  } else if (sortValue == "desc") {
    allCars.sort(function (a, b) {
      return b.price - a.price;
    });
    renderCars(allCars);
  } else renderCars(allCars);
});

function addWishList(i) {
  fetch(wishlisted_cars, {
    method: "POST",
    body: JSON.stringify(i),
    headers: {
      "Content-Type": "application/json",
    },
  }).then((r) => {
    if (r.status == 201) {
      alert("Added to wishlist successfully");
    } else alert("Already in wishlist");
  });
}

function deleteCar(id) {
  fetch(carUrl + `/${id}`, {
    method: "DELETE",
  }).then((r) => {
    // console.log(r);
    getCars();
  });
}
