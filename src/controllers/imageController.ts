import { Request, Response } from "express";
import ImageService from "../services/ImageService";

const ImageController = {
  uploadImage: async (req: Request, res: Response) => {
    const { imagePath } = req.body;

    // const buffer = Buffer.from(imagePath, "base64");

    const imageService = new ImageService();
    const uploadImage = await imageService.uploadImage(imagePath);
    console.log(uploadImage);
    res.send(uploadImage);
  },
};

export default ImageController;
