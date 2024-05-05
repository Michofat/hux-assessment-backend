import express from "express";

const routes = express.Router({
  mergeParams: true,
});

routes.post("/user", createUser);

export default routes;
