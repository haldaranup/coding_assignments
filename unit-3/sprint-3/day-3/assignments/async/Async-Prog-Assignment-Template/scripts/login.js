let users = localStorage.getItem("users");
  if (!users) {
    users = [];
  } else {
    users = JSON.parse(users);
    // console.log("users:", users);
  }

  let count = 0;

  let btn = document.querySelector(".submit");
  btn.addEventListener("click", (e) => {
    e.preventDefault();
    let email = document.querySelector(".email").value;
    let pass = document.querySelector(".password").value;

    for (let i = 0; i < users.length; i++) {
      if (users[i].email == email && users[i].password == pass) {
        alert("login success");
        window.location.href = "index.html"
      } else {
        count++;
      }
    }
    if (count == users.length) {
      alert("Wrong Credentials");
    }
  });