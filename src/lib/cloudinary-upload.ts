import cloudinary from './cloudinary';

export async function uploadFile(file: File, folder = 'drive_files') {
  // Convert file to base64
  const base64data = await readFileAsBase64(file);

  // Upload to Cloudinary
  const result = await cloudinary.uploader.upload(base64data, {
    folder,
    resource_type: 'auto',
    public_id: `${Date.now()}-${file.name.replace(/\s+/g, '-')}`,
  });

  return {
    public_id: result.public_id,
    url: result.secure_url,
    format: result.format,
    resource_type: result.resource_type,
    size: result.bytes,
    ...(result.resource_type === 'image'
      ? { thumbnail_url: generateThumbnailUrl(result.public_id) }
      : {}),
  };
}

export function generateThumbnailUrl(publicId: string) {
  return cloudinary.url(publicId, {
    width: 200,
    height: 200,
    crop: 'fill',
    quality: 'auto',
    fetch_format: 'auto',
  });
}

async function readFileAsBase64(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = error => reject(error);
  });
}

export async function deleteFile(publicId: string) {
  return cloudinary.uploader.destroy(publicId);
}
