function setData(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

function getData(key) {
  try {
    let data = localStorage.getItem(key);
    data = JSON.parse(data);
    return data;
  } catch (error) {
    console.log("error:", error);
  }
}

export { setData, getData };
