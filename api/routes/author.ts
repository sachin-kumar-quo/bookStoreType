import express from "express";

import * as authorController from "../controllers/author";

const router = express.Router();

let authorRoutes = () => {
  router.get("/", authorController.getAuthors);
  router.post("/", authorController.createAuthor);
  router.get("/:id", authorController.getAuthor);
  router.put("/:id", authorController.updateAuthor);
  router.delete("/:id", authorController.deleteAuthor);

  return router;
};
export default authorRoutes;
