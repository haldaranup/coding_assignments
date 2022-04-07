const express = require("express");

const bookController = require("./controllers/book.controller");
const authorController = require("./controllers/book.controller");
const sectionController = require("./controllers/book.controller");

const app = express();
app.use(express.json())

app.use("/book", bookController);
app.use("/author", sectionController);
app.use("/section", authorController);

module.exports = app;
