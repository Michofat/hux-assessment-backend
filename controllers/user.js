import db from "../models/index.js";
import { convertToLowerCase } from "../utils/string.js";
import { createUserSchema } from "../validations/user.js";

const user = db.user;

export const createUser = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    await createUserSchema.validate({ email, password }, { abortEarly: false });
    const record = {
      email: convertToLowerCase(email),
      password,
    };
    const result = await user.create(record);
    return res
      .status(201)
      .json({ result, message: "User created successfully" });
  } catch (error) {}
};
