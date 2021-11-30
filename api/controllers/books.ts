// while using local JSON as data source, we can use the below code
// import BookService from "../services/books";
// const bookStore = new BookService("db/books.json");

import * as bookService from "../services/booksService";

const createBook = async (req, res) => {
  try {
    const { title, author, published, publisher } = req.body;
    const result = await bookService.addBook(
      title,
      author,
      published,
      publisher
    );
    return res.status(200).json({
      book: result,
      message: "book created successfully",
    });
  } catch (error) {
    return res.status(500).json({
      message: "Internal Server Error",
      error: error.message,
    });
  }
};

const getBooks = async (req, res) => {
  const params = req.query;
  try {
    const books = await bookService.getBooks(params);
    return res.json(books);
  } catch (error) {
    return res.status(500).json({
      message: "Internal Server Error",
      error: error.message,
    });
  }
};

const getBook = async (req, res) => {
  try {
    const book = await bookService.getBook(req.params.id);
    return res.json(book);
  } catch (error) {
    return res.status(500).json({
      message: "Internal Server Error",
      error: error.message,
    });
  }
};

const updateBook = async (req, res) => {
  try {
    const book = await bookService.updateBook(
      req.params.id,
      req.body
    );
    return res.json({
      book,
      message: "Book updated successfully",
    });
  } catch (error) {
    return res.status(500).json({
      message: "Internal Server Error",
      error: error.message,
    });
  }
};

const deleteBook = async (req, res) => {
  try {
    await bookService.deleteBook(req.params.id);
    return res.status(200).json({
      message: "Book deleted successfully",
    });
  } catch (error) {
    return res.status(500).json({
      message: "Internal Server Error",
      error: error.message,
    });
  }
};

export { createBook, getBooks, getBook, updateBook, deleteBook };
