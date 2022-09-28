let container = document.getElementById("container")
let admin = document.getElementById("admin")
let user = document.getElementById("user")

// https://haldaranup.herokuapp.com/users

admin.addEventListener("click", linkAdmin)
user.addEventListener("click", linkUser)

function linkAdmin (){
    window.location.href = "./admin.html"
}
function linkUser (){
    window.location.href = "./user.html"
}