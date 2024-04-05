import { Request, Response } from "express";
import ImageService from "../services/ImageService";

const ImageController = {
  uploadImage: async (req: Request, res: Response) => {
    // const { imagePath } = req.body;

    // // const buffer = Buffer.from(imagePath, "base64");

    // const imageService = new ImageService();
    // console.log(imagePath);
    // const uploadImage = await imageService.uploadImage(imagePath);
    // console.log(uploadImage);
    // res.send(uploadImage);
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
