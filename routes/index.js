import { Router } from "express";
import { getStockByCity, putItemQuantity } from "../controllers/index.js";

const router = Router();

router.get("/:city", getStockByCity);
router.put("/:senderCity/:recieverCity/:item", putItemQuantity);

export default router;
