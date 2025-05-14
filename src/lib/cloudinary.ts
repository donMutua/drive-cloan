import { v2 as cloudinary } from 'cloudinary';

cloudinary.config({
  cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
  api_key: process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
  secure: true,
});

// Function to generate a signature for authenticated uploads
export const generateSignature = (params: Record<string, any>) => {
  const apiSecret = process.env.CLOUDINARY_API_SECRET!;
  return cloudinary.utils.api_sign_request(params, apiSecret);
};

export default cloudinary;
