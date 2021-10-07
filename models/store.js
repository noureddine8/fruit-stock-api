import { Schema, model } from "mongoose";
import { cities } from "../utils/constants";
import Stock from "./stock";

const storeSchema = new Schema({
  city: { type: String, enum: cities, required: true },
  stocks: [Stock],
});

const Store = model("Store", storeSchema);
export default Store;
