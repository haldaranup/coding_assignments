let loginForm = document.querySelector(".loginForm");

loginForm.addEventListener("submit", loginAdmin);

function loginAdmin(e) {
  e.preventDefault();
  let email = loginForm.elements[0].value;
  let password = loginForm.elements[1].value;
  let adminData = { email, password };

  fetch("https://reqres.in/api/login", {
    method: "POST",
    body: JSON.stringify(adminData),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((r) => {
        
      if (r.status == 200) {
        alert("Login Successfull");
        window.location.href = "./data.html";
      } else {
        alert("Invalid Credentials")
      }
    })
    .catch((e) => {
      alert(e);
    });
}
