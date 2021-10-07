import Store from "../models/store.js";
import { initialData } from "../utils/initialData.js";

export const retrieveStockByCity = async (city) => {
  try {
    return await Store.findOne({ city });
  } catch (error) {
    throw new Error(error.message);
  }
};
export const insertInitialData = async () => {
  try {
    const stores = await Store.find({});
    if (stores.length == 0) {
      return await Store.insertMany(initialData);
    }
    return;
  } catch (error) {
    throw new Error(error.message);
  }
};
