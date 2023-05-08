import express from "express";
import { getDetail, getVideos } from "../controllers/xgroovy.js";

const router = express.Router();

router.get("/", getVideos);
router.get("/detail", getDetail);

export default router;
