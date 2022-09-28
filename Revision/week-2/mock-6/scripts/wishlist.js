let carsContainer = document.querySelector(".carsContainer");
let wishlisted_cars = "https://haldaranup.herokuapp.com/wishlisted_cars";
let allCars = [];
function getCars() {
  fetch(wishlisted_cars)
    .then((r) => r.json())
    .then((r) => {
      console.log("r:", r);
      allCars = [...r];
      renderWishlist(r);
    });
}

getCars();

function renderWishlist(wish) {
    carsContainer.innerHTML = null;
  wish?.map((i) => {
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


    let info = document.createElement("div");
    info.append(brand, type, year, kms, description, price);

    let allDetails = document.createElement("div");
    allDetails.className = "allDetails";
    allDetails.append(info);
    card.append(image, allDetails);
    carsContainer.append(card);
  });
}
