import express from "express";
import mongoose from "mongoose";

const app = express();
app.use(express.json());

const port = process.env.PORT || 5000;
const hostname = "localhost";
app.get("/hello", (req, res) => res.end("Hello, world!"));

app.listen(port, hostname, () => console.log(`App listening on port ${port}`));
