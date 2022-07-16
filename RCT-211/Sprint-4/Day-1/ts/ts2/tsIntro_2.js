function getName(_a) {
    var fName = _a.fName, lName = _a.lName;
    if (lName)
        return fName + " " + lName;
    else
        return fName;
}
var ans = getName({ fName: "anup" });
console.log(ans);
