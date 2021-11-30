import { IUser } from "../interfaces";
import User from "../models/user";

const createUser = async (user) => {
  const newUser = new User(user);
  return await newUser.save();
};

const getUser = async (userId) => {
  return await User.findById(userId);
};

const getUserByEmail = async (email: string): Promise<IUser> => {
  return await User.findOne({ email });
};

const getUsers = async () => {
  return await User.find();
};

const updateUser = async (userId, user) => {
  return await User.findOneAndUpdate(userId, user);
};
const deleteUser = async (userId) => {
  return await User.findByIdAndDelete(userId);
};

export {
  createUser,
  getUser,
  getUserByEmail,
  getUsers,
  updateUser,
  deleteUser,
};
