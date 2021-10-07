import mongoose from "mongoose";
import { cities } from "../utils/constants.js";
import { stockSchema } from "./stock.js";

const { Schema, model } = mongoose;

const storeSchema = new Schema(
  {
    city: { type: String, enum: cities, required: true, unique: true },
    stocks: [stockSchema],
  },
  { timestamps: true }
);

const Store = model("Store", storeSchema);
export default Store;
