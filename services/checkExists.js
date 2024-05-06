//import { Op, Sequelize } from "sequelize";
import db from "../models/index.js";
const user = db.user;

export const emailExists = async (email) => {
  try {
    const result = await user.findOne({ where: { email } });
    return result;
  } catch (error) {
    console.error("Error checking:", error);
    throw error; // Rethrow the error for handling at a higher level
  }
};
