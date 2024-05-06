import express from "express";
import {
  contactDetails,
  createContact,
  deleteContact,
  listContacts,
  login,
  logout,
  updateContact,
} from "../controllers/contact.js";

const routes = express.Router({
  mergeParams: true,
});

routes.post("/contact", createContact);
routes.get("/contacts", listContacts);
routes.get("/contact/:contactId", contactDetails);
routes.patch("/contact/:contactId", updateContact);
routes.delete("/contact/:contactId", deleteContact);

export default routes;
