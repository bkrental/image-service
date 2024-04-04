import { v2 as cloudinary } from "cloudinary";

class ImageService {
  constructor() {
    cloudinary.config({
      cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
      api_key: process.env.CLOUDINARY_API_KEY,
      api_secret: process.env.CLOUDINARY_API_SECRET,
    });
  }

  async uploadImage(file: string) {
    try {
      const option = {
        useFilename: true,
        uniqueFilename: false,
        ovewrite: true,
      };
      const uploadImage = await cloudinary.uploader.upload(file, option);
      console.log(uploadImage);
      return uploadImage;
    } catch (error) {
      console.log(error);
    }
  }
}

export default ImageService;
