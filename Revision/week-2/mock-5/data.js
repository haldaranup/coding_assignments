let dataContainer = document.querySelector(".dataContainer");
let sorting = document.getElementById("sorting");
let searchBtn = document.getElementById("searchBtn");

let usersUrl = "https://haldaranup.herokuapp.com/users";

searchBtn.addEventListener("click", searchByName);

function searchByName() {
  fetch(usersUrl)
    .then((r) => r.json())
    .then((r) => {
      let search = document.querySelector(".search").value;
      search = search.toLowerCase();
      let nameData = r.filter((i) => {
        let setName = i.name.toLowerCase();
        if (setName.indexOf(search) != -1) {
          return true;
        }
      });

      renderUsers(nameData);
    });
}

let allUsers = [];

function fetchUsers() {
  fetch(usersUrl)
    .then((r) => r.json())
    .then((r) => {
      allUsers = [...r];
      //   console.log("allUsers:", allUsers);

      let filtering = document.getElementById("filtering");

      filtering.addEventListener("change", () => {
        let selectedBatch = filtering.value;

        fetch(usersUrl + `?batch_name=${selectedBatch}`)
          .then((r) => r.json())
          .then((r) => {
            allUsers = [...r];
            renderUsers(r);
          });
      });
      renderUsers(r);
    });
}

fetchUsers();

function renderUsers(data) {
  dataContainer.innerHTML = null;
  data?.map((i) => {
    let cards = document.createElement("div");
    cards.className = "cards";
    let name = document.createElement("h4");
    name.textContent = i.name;
    let age = document.createElement("p");
    age.textContent = "Age :" + i.age;
    let place = document.createElement("p");
    place.textContent = "Place :" + i.place;
    let batch_name = document.createElement("p");
    batch_name.textContent = "Batch Name :" + i.batch_name;
    let profession = document.createElement("p");
    profession.textContent = "Profession :" + i.profession;

    let remove = document.createElement("button");
    remove.className = "deleteBtn";
    remove.innerText = "Delete";
    remove.addEventListener("click", () => {
      deleteUser(i.id);
    });
    let edit = document.createElement("button");
    edit.className = "editBtn";
    edit.innerText = "Edit";
    edit.addEventListener("click", () => {
      localStorage.setItem("userId", JSON.stringify(i.id));
      window.location.href = "./edit.html";
    });

    cards.append(name, age, place, batch_name, profession, edit, remove);
    dataContainer.append(cards);
  });
}

sorting.addEventListener("change", () => {
  let sortValue = sorting.value;
  if (sortValue == "asc") {
    allUsers.sort(function (a, b) {
      return a.age - b.age;
    });
    renderUsers(allUsers);
  } else if (sortValue == "desc") {
    allUsers.sort(function (a, b) {
      return b.age - a.age;
    });
    renderUsers(allUsers);
  }
});

function deleteUser(id) {
  fetch(usersUrl + `/${id}`, {
    method: "DELETE",
  }).then((r) => {
    // console.log(r);
    fetchUsers();
  });
}
