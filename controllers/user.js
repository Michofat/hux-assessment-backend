import db from "../models/index.js";
import { emailExists } from "../services/checkExists.js";
import { convertToLowerCase } from "../utils/string.js";
import { createUserSchema, loginSchema } from "../validations/user.js";
import bcrypt from "bcrypt";
import dotenv from "dotenv";
import { generateToken } from "../utils/token.js";

const user = db.user;
dotenv.config();
const secretPrefix = process.env.SECRET_PREFIX;

export const createUser = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    await createUserSchema.validate({ email, password }, { abortEarly: false });
    const combinedPassword = secretPrefix + password;
    const saltRounds = 10;
    const salt = await bcrypt.genSalt(saltRounds);
    const hashedPassword = await bcrypt.hash(combinedPassword, salt);

    const record = {
      email: convertToLowerCase(email),
      hashedPassword,
    };
    const result = await user.create(record);
    return res
      .status(201)
      .json({ result, message: "User created successfully" });
  } catch (error) {}
};

export const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    await loginSchema.validate(
      { email, password },
      {
        abortEarly: false,
      }
    );

    const emailChecker = await emailExists(email);
    if (!emailChecker) {
      return res.status(404).send({
        message: "Sorry, email does not exist.",
      });
    }

    const combinedPassword = secretPrefix + password;

    const isMatch = await bcrypt.compare(
      combinedPassword,
      emailChecker?.hashedPassword
    );

    if (!isMatch) {
      return res.status(404).json({
        message: "Password incorrect, please try again",
      });
    }

    const token = generateToken(emailChecker);
    res.setHeader("Authorization", `Bearer ${token}`);
    return res.status(200).json({ token });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

export const logout = async (req, res, next) => {};
