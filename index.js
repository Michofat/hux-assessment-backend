import express from "express";
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
  res.send("Hello Hux Contact Manager!");
});

//error
app.use(errorHandler);

app.listen(process.env.PORT, () =>
  console.log(`Server is running on port 8000`)
);
