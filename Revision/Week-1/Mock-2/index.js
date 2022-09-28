let container = document.querySelector(".container");
let lists = document.querySelector(".lists");
let btn = document.getElementById("btn")
let searchByLang = document.getElementById("searchByLang")

btn.addEventListener("click", searchVal())

const getData = async () => {
  try {
    let res = await fetch("./db.json");
    res = await res.json();
    renderData(res);
    return res
  } catch (error) {
    console.log("error:", error);
  }
};

getData();

function searchVal() {
    
}

const renderData = (data) => {
  data?.map((i) => {
    let leftCard = document.createElement("div");
    leftCard.className = "leftCard";
    let rightCard = document.createElement("div");
    rightCard.className = "rightCard";
    let cards = document.createElement("div");
    cards.className = "cards";
    let info = document.createElement("div");
    info.className = "info";
    let about = document.createElement("div");
    about.className = "about";
    let logo = document.createElement("img");
    logo.className = "logo";
    logo.src =
      "https://images-platform.99static.com/hEVT_Y_a6Jehq2xRaRuCz86FLpE=/204x204:1836x1836/500x500/top/smart/99designs-contests-attachments/118/118006/attachment_118006897";
    let company = document.createElement("p");
    company.className = "company";
    company.textContent = i.company;
    let postedAt = document.createElement("p");
    postedAt.textContent = i.postedAt;
    let city = document.createElement("p");
    city.textContent = i.city;
    let countryCode = document.createElement("p");
    countryCode.textContent = i.countryCode;
    let role = document.createElement("p");
    role.textContent = i.role;
    let level = document.createElement("p");
    level.textContent = i.level;
    let location = document.createElement("p");
    location.textContent = i.location;
    let contract = document.createElement("p");
    contract.textContent = i.contract;
    let position = document.createElement("p");
    position.className = "position";
    position.textContent = i.position;
    let language = document.createElement("p");
    language.textContent = i.language;

    rightCard.append(level, role, language);
    about.append(postedAt, contract, location);
    info.append(company, position, about);
    leftCard.append(logo, info);

    cards.append(leftCard, rightCard);
    lists.append(cards);
    container.append(lists);
  });
};
