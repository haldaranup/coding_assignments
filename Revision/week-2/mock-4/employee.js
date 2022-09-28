let employee = document.querySelector(".employee");
let cards = document.querySelector(".cards");
let sort = document.getElementById("sort");

const sortBy = () => {
  let sortValue = sort.value;
  getUsers(
    `https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-employees?orderBy=${sortValue}`
  );
};

const getUsers = (url) => {
  fetch(url)
    .then((r) => r.json())
    .then((r) => {
      showEmployee(r.data);
      console.log("r.data:", r.data);
      return r;
    })
    .catch((e) => console.log("error:", e));
};

getUsers(
  `https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-employees`
);

const showEmployee = (employee) => {
  employee?.map((i) => {
    let image = document.createElement("img");
    let name = document.createElement("p");
    let department = document.createElement("p");
    let gender = document.createElement("p");
    let salary = document.createElement("p");

    image.src = i.image;
    name.textContent = i.name;
    department.textContent = i.department;
    gender.textContent = i.gender;
    salary.textContent = i.salary;

    cards.append(image, name, department, gender, salary);
  });
};




