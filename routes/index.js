import { Router } from "express";
import { getStockByCity, postStock } from "../controllers";

const router = Router();

router("/:city", getStockByCity);
router.post("/", postStock);

export default router;
