const express = require("express");

const Book = require("../models/books.model");

const app = express();

app.get("/", async (req, res) => {
  try {
    const books = await Book.find().lean().exec();
    return res.status(200).send(books);
    // return res.send("Working!!")
  } catch (error) {
    console.log("error:", error);
  }
});

app.post("/", async (req, res) => {
  try {
    const book = await Book.create(req.body);
    return res.status(201).send(book);
  } catch (error) {
    console.log("error:", error);
  }
});

app.delete("/:id", async (req, res) => {
  const book = await Book.findByIdAndDelete(req.params.id).lean().exec();
  return res.send(book)
});

app.patch("/:id", async (req, res)=>{
    const books = await Book.findOneAndUpdate({_id: req.params.id}, req.body, {new: true})

    return res.send(books)
})

module.exports = app;
