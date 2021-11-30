import express from "express";

import * as authController from "../controllers/auth";

const router = express.Router();

let auhtRoutes = () => {
  router.post("/login", authController.login);
  router.post("/register", authController.register);

  return router;
};
export default auhtRoutes;
