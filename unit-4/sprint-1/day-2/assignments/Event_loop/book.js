const express = require("express");

const app = express();

app.get("/books", (req, res) => {
  res.send({AtomicHabits: "1% better everyday"});
  
});

app.listen(3001, () => {
  console.log("Server is running at 3001");
});


