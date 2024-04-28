import { Request, Response } from "express";
import ImageService from "../services/ImageService";
import { v2 as cloudinary } from "cloudinary";

const ImageController = {
  uploadImage: async (req: Request, res: Response) => {
    if (!req.file) {
      return res.status(400).json({ error: "No file uploaded" });
    }

    const imageService = new ImageService();
    const uploadedImage = await imageService.uploadImage(req.file);

    return res.json({
      url: cloudinary.url(uploadedImage.public_id, {
        height: 600,
        width: 900,
        crop: "fill",
      }),
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
