import { retrieveStockByCity } from "../services";

export const getStockByCity = async (req, res) => {
  const city = req.params.city;
  try {
    const stocks = await retrieveStockByCity(city);
    res.status(200).json({ stocks });
  } catch (error) {
    res.status(404).json({ message: "An error occured" });
  }
};
