import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import stockRouter from "./routes/index.js";
import config from "config";
import { hostname, port } from "./utils/constants.js";
import { insertInitialData } from "./services/index.js";

const app = express();
app.use(express.json());
app.use(cors());
app.use("/stock", stockRouter);

mongoose
  .connect(config.get("mongoUri"), {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to database successfully");
    app.listen(port, hostname, () =>
      console.log(`App listening on port ${port}`)
    );
  })
  .then(() => {
    insertInitialData();
  })
  .catch((err) => console.log(err));
