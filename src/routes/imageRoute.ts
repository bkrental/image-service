import ImageController from "../controllers/imageController";
import { Router } from "express";
const router = Router();

router.post("/upload", ImageController.uploadImage);

export default router;
