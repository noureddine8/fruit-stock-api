import express from "express";
import mongoose from "mongoose";
import { hostname, port } from "./utils/constants";

const app = express();
app.use(express.json());

app.listen(port, hostname, () => console.log(`App listening on port ${port}`));
