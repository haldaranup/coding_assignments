var fullName;
var age;
var isFetching;
var arr;
var arrStr;
var tuple;
var user;
(function (user) {
    user[user["User"] = 0] = "User";
    user[user["SuperUser"] = 1] = "SuperUser";
    user[user["Admin"] = 2] = "Admin";
    user[user["SuperAdmin"] = 3] = "SuperAdmin";
})(user || (user = {}));
function product(x, y) {
    return x * y;
}
function divide(x, y) {
    return x / y;
}
function isName(x) {
    console.log(x);
}
isName("Anup");
