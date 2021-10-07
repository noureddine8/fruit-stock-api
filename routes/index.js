import { Router } from "express";
import { getStockByCity } from "../controllers";

const router = Router();

router("/:city", getStockByCity);
