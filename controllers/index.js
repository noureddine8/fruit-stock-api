import { retrieveStockByCity, transferQuantity } from "../services/index.js";

export const getStockByCity = async (req, res) => {
  const city = req.params.city;
  try {
    const store = await retrieveStockByCity(city);
    res.status(200).json({ store });
  } catch (error) {
    res.status(404).json({ message: "An error occured" });
  }
};

export const putItemQuantity = async (req, res) => {
  const { senderCity, recieverCity, item } = req.params;
  const { quantity } = req.body;
  try {
    const store = await retrieveStockByCity(senderCity);
    const stock = store.stocks.filter((element) => element.item === item)[0];

    if (stock.quantity < quantity) {
      res.status(400).json({ message: "You don't have enough quantity" });
    } else {
      await transferQuantity(senderCity, recieverCity, item, quantity);
      res.status(200).json({ message: "Done" });
    }
  } catch (error) {
    console.log(error);
    res.status(404).json({ message: "An error occured" });
  }
};
