let registerContainer = document.querySelector(".registerContainer");
let form = document.getElementById("form");
let btn = document.getElementById("btn");

const handleForm = (e) => {
  e.preventDefault();
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;
  let username = document.getElementById("username").value;
  let mobile = document.getElementById("mobile").value;
  let description = document.getElementById("description").value;

  registerUser({ name, email, password, username, mobile, description });
};

btn.addEventListener("click", handleForm);

const registerUser = (data = {}) => {
  fetch("https://masai-api-mocker.herokuapp.com/auth/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((res) => res.json())
    .then((data) => {
      if (data.error == true) {
        alert(data.message);
      } else {
        alert(data.message);
        window.location.href = "/login.html";
      }
    })
    .catch((error) => {
      console.error("Error:", error);
    });
};
