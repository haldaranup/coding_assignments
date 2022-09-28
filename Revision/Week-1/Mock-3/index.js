let container = document.querySelector(".container");
let lists = document.querySelector(".lists");
let sortValue;
let filterValue;


function getSort(){
    sortValue = document.getElementById("sortValue").value;
    console.log(sortValue)
    
    fetch(`https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-products?page=1&limit=40&orderBy=${sortValue}`)
    .then((r) => r.json())
    .then(r => {
        renderData(r.data)
        console.log(r.data)
    })
}

function getFilter(){
    filterValue = document.getElementById("filter").value
    fetch(`https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-products?page=1&limit=40&orderBy=${sortValue}&filter=${filterValue}`)
    .then((r) => r.json())
    .then(r => {
        console.log(r.data)
        renderData(r.data)
    })
}

const fetchData = async (url) => {
  try {
    let res = await fetch(url);
    res = await res.json();
    let data = res.data;
    renderData(data);
  } catch (error) {
    console.log("error:", error);
  }
};

fetchData('https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-products?page=1&limit=40');

const renderData = (data) => {
  data?.map((i) => {
    let cards = document.createElement("div");
    cards.className = "cards";

    let brand = document.createElement("p");
    brand.className = "brand";
    brand.textContent = i.brand;
    let title = document.createElement("p");
    title.textContent = i.title;

    let image = document.createElement("img");
    image.src = i.image;

    let category = document.createElement("p");
    category.textContent = i.category;
    let price = document.createElement("p");
    price.textContent = i.price;

    cards.append(image, title, price);
    lists.append(cards);
    container.append(lists);
  });
};
