import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();
export const generateToken = (user) => {
  const token = jwt.sign(
    {
      userId: user.userId,
      firstName: user.firstName,
      email: user.email,
    },
    process.env.secretKey,
    {
      expiresIn: "1d",
    }
  );
  return token;
};
