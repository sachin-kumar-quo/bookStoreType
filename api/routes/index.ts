import express from "express";

import authRoutes from "./auth";
import bookRoutes from "./book";
import authorRoutes from "./author";
import userRoutes from "./user";

const router = express.Router();

let routes = () => {
  router.get("/", (req, res) => {
    res.send("Welcome to Book Store API SERVER");
  });
  router.use("/auth", authRoutes());
  router.use("/book", bookRoutes());
  router.use("/author", authorRoutes());
  router.use("/user", userRoutes());

  return router;
};
export default routes;
