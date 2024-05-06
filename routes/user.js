import express from "express";
import { createUser, login, logout } from "../controllers/user.js";

const routes = express.Router({
  mergeParams: true,
});

routes.post("/user", createUser);
routes.post("/login", login);
routes.post("/logout", logout);

export default routes;
