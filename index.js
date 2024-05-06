import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import { errorHandler } from "./error/error.js";
import dotenv from "dotenv";
import userRoutes from "./routes/user.js";
import contactRoutes from "./routes/contact.js";

const app = express();
app.use(
  cors({
    origin: [
      // provide valid frontend url ,
    ],
    credentials: true,
  })
);

http: app.use(bodyParser.json());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

dotenv.config();

//routes
app.use("/api/v1", contactRoutes);
app.use("/api/v1", userRoutes);

// Home Route
app.get("/", (req, res) => {
  res.send("Hello Hux Contact Manager!");
});

//error
app.use(errorHandler);

app.listen(process.env.PORT, () =>
  console.log(`Server is running on port 8000`)
);
