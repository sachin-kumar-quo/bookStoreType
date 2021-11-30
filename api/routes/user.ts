import express from "express";

import * as userController from "../controllers/user";

const router = express.Router();

let userRoutes = () => {
  router.get("/", userController.getUsers);
  // router.post("/", userController.createUser);
  router.get("/:id", userController.getUser);
  router.put("/:id", userController.updateUser);
  router.delete("/:id", userController.deleteUser);

  return router;
};

export default userRoutes;
