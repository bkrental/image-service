import ImageController from "../controllers/imageController";
import { Router } from "express";
const router = Router();
import multer from "multer";

const upload = multer({
  storage: multer.memoryStorage(),
  limits: {
    fileSize: 16 * 1024 * 1024, // 2 MB
    files: 1,
  },
});

router.post("/upload", upload.single("file"), ImageController.uploadImage);

export default router;
