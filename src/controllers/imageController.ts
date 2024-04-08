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

  uploadMultipleImages: async (req: Request, res: Response) => {
    if (!req.files) {
      return res.status(400).json({ error: "No file uploaded" });
    }

    const imageService = new ImageService();
    const uploadImagesPromises = (req.files as Express.Multer.File[]).map(
      (file) => {
        return imageService.uploadImage(file);
      }
    );

    const uploadImages = await Promise.all(uploadImagesPromises);

    return res.json({
      urls: uploadImages.map((uploadImage) => uploadImage.url),
    });
  },
};

export default ImageController;
