import { handleUserData } from "../controllers/user";
import express from "express";

const router = express.Router();

router.get("/", handleUserData);

export default router;



