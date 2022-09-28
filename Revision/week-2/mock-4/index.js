let container = document.querySelector(".container");
let card = document.querySelector(".card");

let username = JSON.parse(localStorage.getItem("username"));
let token = JSON.parse(localStorage.getItem("token"));

const getUsers = () => {
  fetch(`https://masai-api-mocker.herokuapp.com/user/${username}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  })
    .then((r) => r.json())
    .then((r) => {
      showUser([r]);
      return r;
    })
    .catch((e) => console.log("error:", e));
};

getUsers();

const showUser = (user) => {
  user?.map((i) => {
    let name = document.createElement("p");
    let email = document.createElement("p");
    let username = document.createElement("p");
    let mobile = document.createElement("p");
    let description = document.createElement("p");
    name.textContent = "Name: " + i.name;
    email.textContent = "Email: " + i.email;
    username.textContent = "Username: " + i.username;
    mobile.textContent = "Mobile: " + i.mobile;
    description.textContent = "Description: " + i.description;

    card.append(name, email, username, mobile, description);
  });
};
