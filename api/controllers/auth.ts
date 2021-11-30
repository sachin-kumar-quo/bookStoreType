import * as authService from "../services/authService";

const register = async (req, res) => {
  const { email, password, name } = req.body;
  const { token, user } = await authService.register(
    email,
    password,
    name
  );
  if (user) {
    res.status(200).header("auth-token", token).send({ user, token });
  } else {
    res.status(400).json({ message: "User already exists" });
  }
};

const login = async (req, res) => {
  const { email, password } = req.body;
  const { token, user } = await authService.login(email, password);
  if (user) {
    res.status(200).header("auth-token", token).send({ user, token });
  } else {
    res.status(400).json({ message: "Invalid credentials" });
  }
};

const isLoggedIn = async (req, res, next) => {
  const token: string = req.headers.authorization;
  const user = await authService.isLoggedIn(token);
  if (user) {
    next();
  } else {
    res.status(400).json({ message: "Invalid credentials" });
  }
};

export { register, login, isLoggedIn };
