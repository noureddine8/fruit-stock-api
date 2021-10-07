import express from "express";
import mongoose from "mongoose";
import stockRouter from "./routes";
import config from "config";
import { hostname, port } from "./utils/constants";

const app = express();
app.use(express.json());

app.use("/stock", stockRouter);

mongoose
  .connect(config.get("mongoUri"), {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then(() => {
    console.log("Connected to database successfully");
    app.listen(port, hostname, () =>
      console.log(`App listening on port ${port}`)
    );
  });
