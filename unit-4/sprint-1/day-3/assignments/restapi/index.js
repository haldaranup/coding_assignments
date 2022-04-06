const express = require("express");

const app = express();


app.get("/books", allBooks, (req, res) => {
  res.send("Fetching all books");
});

app.get("/book/:name", singleBook, (req, res) => {

    res.send({bookName: req.name})
    
});

function allBooks(req, res, next) {
  
  console.log('Fetching all books')
  next();
}

function singleBook(req, res, next) {
  req.name = req.params.name
  next()
}

app.listen(3000, () => {
  try {
    console.log("Listening on port 3000");
  } catch (error) {
    console.log('error:', error)
    
  }
  
});