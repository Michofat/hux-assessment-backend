import db from "../models/index.js";
import {
  createContactSchema,
  singleContactSchema,
  updateContactSchema,
} from "../validations/contact.js";

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

export const listContacts = async (req, res, next) => {
  try {
    const allContacts = await contact.findAll();
    return res.status(200).send({ allContacts });
  } catch (error) {}
};

export const contactDetails = async (req, res, next) => {
  try {
    const { contactId } = req.params;
    await singleContactSchema.validate({ contactId }, { abortEarly: false });
    const contactDetails = await contact.findAll({
      where: { contactId },
    });
    return res.status(200).send({ contactDetails });
  } catch (error) {}
};

export const updateContact = async (req, res, next) => {
  const { contactId } = req.params;
  const { firstName, lastName, phoneNumber } = req.body;

  await updateContactSchema.validate(
    { contactId, firstName, lastName, phoneNumber },
    { abortEarly: false }
  );
  const updateProps = { firstName, lastName, phoneNumber };
  const updatedRecord = await contact.update(
    { updateProps },
    { where: { contactId } }
  );
  return res
    .status(200)
    .send({ updatedRecord, message: "Contact updated successfully" });
};

export const deleteContact = async (req, res, next) => {
  try {
    const { contactId } = req.params;
    await singleContactSchema.validate({ contactId }, { abortEarly: false });
    await contact.destroy({
      where: { contactId },
    });
    return res.status(200).send({ message: "Contact deleted successfully" });
  } catch (error) {}
};
