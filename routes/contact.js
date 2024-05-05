import express from "express";

const routes = express.Router({
  mergeParams: true,
});

routes.post("/login", login);
routes.post("/logout", logout);
routes.post("/contact", createContact);
routes.get("/contact", listContacts);
routes.get("/contact/:contactId", singleContact);
routes.patch("/contact/:contactId", updateContact);
routes.delete("/contact/:contactId", deleteContact);

export default routes;
