import express from "express";

import * as booksController from "../controllers/books";
import * as authcontroller from "../controllers/auth";

const router = express.Router();

let bookRoutes = () => {
  router.get(
    "/",
    authcontroller.isLoggedIn,
    booksController.getBooks
  );
  router.post("/", booksController.createBook);
  router.get("/:id", booksController.getBook);
  router.put("/:id", booksController.updateBook);
  router.delete("/:id", booksController.deleteBook);

  return router;
};
export default bookRoutes;
