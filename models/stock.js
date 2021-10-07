import { Schema, model } from "mongoose";
import { fruits } from "../utils/constants";

const stockSchema = new Schema(
  {
    item: { type: String, enum: fruits, required: true },
    quantity: { type: Number, required: true },
  },
  { timestamps: true }
);

const Stock = model("Stock", stockSchema);
export default Stock;
