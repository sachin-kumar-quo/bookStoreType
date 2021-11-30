import Author from "../models/author";
import ShortUniqueId from "short-unique-id";
import { IAuthor } from "../interfaces";
const uid = new ShortUniqueId();

const createAuthor = (author: IAuthor) => {
  return new Promise((resolve, reject) => {
    let newAuthor = new Author({
      author_id: uid.randomUUID(12),
      name: author.name,
      email: author.email,
      phone: author.phone,
      age: author.age,
    });
    newAuthor.save((err, author: IAuthor) => {
      if (err) {
        reject(err);
      } else {
        resolve(author);
      }
    });
  });
};

const getAuthor = (author_id) => {
  return new Promise((resolve, reject) => {
    Author.findOne({ author_id: author_id }, (err, author) => {
      if (err) {
        reject(err);
      } else {
        resolve(author);
      }
    });
  });
};
const getAuthors = (params) => {
  const { limit = 10, page = 1, sort = "_id", order = 1 } = params;
  return new Promise((resolve, reject) => {
    Author.find(
      {},
      {},
      {
        skip: (parseInt(page) - 1) * parseInt(limit),
        limit: parseInt(limit),
        sort: { [sort]: parseInt(order) },
      },
      (err, authors) => {
        if (err) {
          reject(err);
        } else {
          resolve(authors);
        }
      }
    );
  });
};
const updateAuthor = (author_id, author) => {
  return new Promise((resolve, reject) => {
    Author.findOneAndUpdate(
      { author_id: author_id },
      {
        $set: {
          name: author.name,
          email: author.email,
          phone: author.phone,
          age: author.age,
        },
      },
      { new: true },
      (err, author) => {
        if (err) {
          reject(err);
        } else {
          resolve(author);
        }
      }
    );
  });
};
const deleteAuthor = (author_id) => {
  return new Promise((resolve, reject) => {
    Author.deleteOne({ author_id: author_id }, (err, author) => {
      if (err) {
        reject(err);
      } else {
        resolve(author);
      }
    });
  });
};

export {
  createAuthor,
  getAuthor,
  getAuthors,
  updateAuthor,
  deleteAuthor,
};
