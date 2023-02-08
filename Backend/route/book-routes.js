const express = require('express');
const router = express.Router();
const Book = require("../model/Book");
const booksController = require("../controler/book-controler");


router.get("/",  booksController.getAllBook);
router.post("/", booksController.addBook);
router.get("/:id", booksController.getById);
router.put("/:id", booksController.updateBook);
router.delete("/:id",booksController.deleteBook);

module.exports = router;