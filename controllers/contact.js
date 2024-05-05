import db from "../models/index.js";
import { createContactSchema } from "../validations/contact.js";

const contact = db.contact;

export const login = async (req, res, next) => {};

export const logout = async (req, res, next) => {};

export const createContact = async (req, res, next) => {
  try {
    const { firstName, lastName, phoneNumber } = req.body;
    await createContactSchema.validate(
      { firstName, lastName, phoneNumber },
      { abortEarly: false }
    );
    const record = {
      firstName: capitalizeFirstLetter(firstName),
      lastName: capitalizeFirstLetter(lastName),
    };
    const result = await ticket.create(record);
    return res
      .status(201)
      .json({ result, message: "Contact created successfully" });
  } catch (error) {}
};

export const listContacts = async (req, res, next) => {};

export const singleContact = async (req, res, next) => {};

export const updateContact = async (req, res, next) => {};

export const deleteContact = async (req, res, next) => {};
