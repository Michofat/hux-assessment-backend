import express from "express";
import rateLimit from "express-rate-limit";
import cors from "cors";
import bodyParser from "body-parser";
import { errorHandler } from "./error/error.js";
import dotenv from "dotenv";

const app = express();
app.use(
  cors({
    origin: [
      // provide valid frontend url ,
    ],
    credentials: true,
  })
);

dotenv.config();

// Hello Route
app.get("/", (req, res) => {
  res.send("Hello Hux!");
});

//error
app.use(errorHandler);

app.listen(8000, () => console.log(`Server is running on port 8000`));
