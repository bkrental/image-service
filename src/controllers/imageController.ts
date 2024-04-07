import { Request, Response } from "express";
import ImageService from "../services/ImageService";

const ImageController = {
  uploadImage: async (req: Request, res: Response) => {
    if (!req.file) {
      return res.status(400).json({ error: "No file uploaded" });
    }

    const imageService = new ImageService();
    const uploadImage = await imageService.uploadImage(req.file);

    return res.json({
      url: uploadImage.url,
    });
  },
};

export default ImageController;
