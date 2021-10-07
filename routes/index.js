import { Router } from "express";
import { getStockByCity } from "../controllers/index.js";

const router = Router();

router.get("/:city", getStockByCity);

export default router;
