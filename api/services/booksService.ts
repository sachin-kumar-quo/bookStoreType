import Book from "../models/books";

import ShortUniqueId from "short-unique-id";
import { IBook } from "../interfaces";
const uid = new ShortUniqueId();

const addBook = (
  title: string,
  author: string,
  published: string,
  publisher: string
) => {
  return new Promise((resolve, reject) => {
    let book = new Book({
      book_id: uid.randomUUID(12),
      title: title,
      author: author,
      published: published,
      publisher: publisher,
    });
    book.save((err, data) => {
      if (err) {
        reject(err.message);
      } else {
        resolve("Book Added Successfully!!");
      }
    });
  });
};

const getBooks = (params: any) => {
  const { limit = 10, page = 1, sort = "_id", order = 1 } = params;
  return new Promise((resolve, reject) => {
    Book.find(
      {},
      {},
      {
        limit: parseInt(limit),
        skip: (parseInt(page) - 1) * parseInt(limit),
        sort: { [sort]: parseInt(order) },
      }
    )
      .populate("author", "name email age")
      .exec((err, data) => {
        if (err) {
          reject(err.message);
        } else {
          resolve(data);
        }
      });
  });
};

const getBook = (book_id: string) => {
  return new Promise((resolve, reject) => {
    Book.find({ book_id: book_id })
      .populate("author", "name email age")
      .exec((err, data) => {
        if (err) {
          reject(err.message);
        } else {
          resolve(data);
        }
      });
  });
};
const updateBook = (book_id: string, book: IBook) => {
  console.log(book);
  return new Promise((resolve, reject) => {
    Book.findOneAndUpdate(
      { book_id: book_id },
      {
        $set: {
          title: book.title,
          author: book.author,
          published: book.published,
          publisher: book.publisher,
        },
      },
      { new: true },
      (err, data) => {
        console.log(data);
        if (err) {
          reject(err.message);
        } else {
          resolve(data);
        }
      }
    );
  });
};
const deleteBook = (book_id: string) => {
  return new Promise((resolve, reject) => {
    Book.findOneAndRemove({ book_id: book_id }, (err, data) => {
      if (err) {
        reject(err.message);
      } else {
        resolve(data);
      }
    });
  });
};

export { addBook, getBooks, getBook, updateBook, deleteBook };
