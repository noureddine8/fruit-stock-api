import Stock from "../models/stock";

export const retrieveStockByCity = async (city) => {
  try {
    return await Stock.findOne({ city });
  } catch (error) {
    throw new Error(error.message);
  }
};
