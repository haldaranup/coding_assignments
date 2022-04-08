let users = localStorage.getItem("users");
if (!users) {
  users = [];
} else {
  users = JSON.parse(users);
}
class Users {
  constructor(a, b, c, d) {
    this.username = a;
    this.email = b;
    this.phone = c;
    this.password = d;
  }
}

let submitbtn = document.querySelector(".submit");
submitbtn.addEventListener("click", (e) => {
  e.preventDefault();
  let username = document.querySelector(".name").value;
  let email = document.querySelector(".email").value;
  let phone = document.querySelector(".phone").value;
  let password = document.querySelector(".password").value;

  let allUsers = new Users(username, email, phone, password);

  if (username && email && password && phone) {
    users.push(allUsers);
    localStorage.setItem("users", JSON.stringify(users));
    setTimeout(() => {
      alert("Sign Up Successful");
      window.location.href = "login.html";
    }, 3000);
  } else {
    alert("Please fill all the input");
  }
});
