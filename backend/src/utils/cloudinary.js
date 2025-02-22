import { v2 as cloudinary } from "cloudinary"; //5655
import fs from "fs";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const uploadOnCloudinary = async (localFilePath) => {
  try {
    if (!localFilePath) return null;
    // uploading
    const response = await cloudinary.uploader.upload(localFilePath, {
      resource_type: "auto",
    });
    // file uploaded
    // console.log("file uploaded", response);
    fs.unlinkSync(localFilePath);
    return response;
  } catch (error) {
    fs.unlinkSync(localFilePath); // remove the locally saved temp file as upload got failed
    throw new Error("cloudinary upload failed " + error.message);
  }
};

const deleteFromCloudinary = async (publicId) => {
  await cloudinary.uploader.destroy(publicId);
};

export { uploadOnCloudinary, deleteFromCloudinary };
