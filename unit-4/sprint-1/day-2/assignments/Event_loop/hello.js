const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Hello");
});

app.get("/books", (req, res) => {
  res.json([
      { "Atomic Habits": "1% better everyday"},
      { "Ikigai": "Live a long and happy life"},
      { "The Secret": "You don't know the secret"},
      { "The Psychology of Money": "Everything you need to know about money"},
    ]);
});

app.listen(3000, () => {
  console.log("Server is running!!");
});