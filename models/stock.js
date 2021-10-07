import mongoose from "mongoose";
import { fruits } from "../utils/constants.js";

const { Schema } = mongoose;

export const stockSchema = new Schema(
  {
    item: { type: String, enum: fruits, required: true },
    quantity: { type: Number, required: true },
  },
  { timestamps: true }
);
