document.querySelector("#form").addEventListener('submit', formSubmit)
var bozazArr = JSON.parse(localStorage.getItem("bozazData")) || []

displayTable(bozazArr)

function formSubmit(event) {
    event.preventDefault()

    var bozazObj = {
        category: form.cat.value,
        title: form.title.value,
        description: form.desc.value,
        price: form.price.value
    }
    bozazArr.push(bozazObj)
    displayTable(bozazArr)
    localStorage.setItem("bozazData", JSON.stringify(bozazArr))
}

function displayTable(bozazArr) {
    var tbody = document.querySelector("tbody")
    tbody.textContent = ""
    bozazArr.map(function (elem) {
        var tr = document.createElement("tr")
        var td1 = document.createElement("td")
        var td2 = document.createElement("td")
        var td3 = document.createElement("td")
        var td4 = document.createElement("td")

        td1.textContent = elem.category
        td2.textContent = elem.title
        td3.textContent = elem.description
        td4.textContent = elem.price
        tr.append(td1, td2, td3, td4)
        tbody.append(tr)

    })
}
