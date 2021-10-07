import { Schema, model } from "mongoose";
import { cities } from "../utils/constants";
import Stock from "./stock";

const storeSchema = new Schema(
  {
    city: { type: String, enum: cities, required: true, unique: true },
    stocks: [Stock],
  },
  { timestamps: true }
);

const Store = model("Store", storeSchema);
export default Store;
