let loginContainer = document.querySelector(".loginContainer");

const handleLogin = (e) => {
  e.preventDefault();
  let password = document.getElementById("password").value;
  let username = document.getElementById("username").value;

  registerUser({ password, username });
};

btn.addEventListener("click", handleLogin);

const registerUser = (data = {}) => {
  fetch("https://masai-api-mocker.herokuapp.com/auth/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((res) => res.json())
    .then((r) => {
      if (r.error == true) {
        alert(r.message);
      } else {
        alert("Login Successfull");
        localStorage.setItem("username", JSON.stringify(data.username));
        localStorage.setItem("token", JSON.stringify(r.token));
        window.location.href = "./index.html";
      }
    })
    .catch((error) => {
      console.error("Error:", error);
    });
};
