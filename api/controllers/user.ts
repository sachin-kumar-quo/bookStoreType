import * as userService from "../services/userService";

const createUser = async (req, res) => {
  try {
    const author = await userService.createUser(req.body);
    res.status(201).json(author);
  } catch (error) {
    res.status(500).json({
      message: "unable to Create User",
      error: error.message,
    });
  }
};

const getUser = async (req, res) => {
  const id = req.params.id;
  try {
    const user = await userService.getUser(id);
    res.status(201).json(user);
  } catch (error) {
    res.status(500).json({
      message: "unable to get User",
      error: error.message,
    });
  }
};

const getUsers = async (req, res) => {
  try {
    const users = await userService.getUsers();
    res.status(201).json(users);
  } catch (error) {
    res.status(500).json({
      message: "unable to get Users",
      error: error.message,
    });
  }
};

const updateUser = async (req, res) => {
  try {
    const user = await userService.updateUser(
      req.params.id,
      req.body
    );
    res.status(200).json(user);
  } catch (error) {
    console.log(error);
  }
};

const deleteUser = async (req, res) => {
  try {
    await userService.deleteUser(req.params.id);
    res.status(200).json({
      message: "User Deleted",
    });
  } catch (error) {
    res.status(500).json({
      message: "unable to delete User",
      error: error.message,
    });
  }
};

export { createUser, getUser, getUsers, updateUser, deleteUser };
