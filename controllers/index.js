import { retrieveStockByCity, insertStock } from "../services";

export const getStockByCity = async (req, res) => {
  const city = req.params.city;
  try {
    const stocks = await retrieveStockByCity(city);
    res.status(200).json({ stocks });
  } catch (error) {
    res.status(404).json({ message: "An error occured" });
  }
};

export const postStock = async (req, res) => {
  const stock = req.body;
  try {
    const result = await insertStock(stock);
    res.status(201).json({ result });
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};
