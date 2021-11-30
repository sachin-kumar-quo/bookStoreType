import config from "../../config";
import * as userService from "./userService";
import jwt from "jsonwebtoken";

const login = async (email: string, password: string) => {
  const user = await userService.getUserByEmail(email);
  if (user) {
    const matched = user.authenticate(password);
    if (matched) {
      const payload = { email: user.email, name: user.name };
      const token = jwt.sign(payload, config.tokenSecret, {
        expiresIn: "1h",
      });
      return { token, user };
    }
  }
  return { token: null, user: null };
};

const register = async (
  email: string,
  password: string,
  name: string
) => {
  const user = await userService.getUserByEmail(email);
  var token = null;
  if (!user) {
    const newUser = await userService.createUser({
      email,
      password,
      name,
    });
    const payload = { email, name };
    token = jwt.sign(payload, config.tokenSecret, {
      expiresIn: "1h",
    });
    return { token, user: newUser };
  }
  return { token, user: null };
};

const isLoggedIn = async (token: string) => {
  try {
    token = token.split(" ")[1];
    const payload = jwt.verify(token, config.tokenSecret);
    const user = await userService.getUserByEmail(payload.email);
    if (user) {
      return user;
    }
  } catch (err) {
    return null;
  }
};

export { login, register, isLoggedIn };
