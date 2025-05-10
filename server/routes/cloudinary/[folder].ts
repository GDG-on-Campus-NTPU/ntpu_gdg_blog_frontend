import { v2 as cloudinary } from 'cloudinary';
import { defineEventHandler, getRouterParam } from 'h3';

interface CloudinaryImage {
  secure_url: string;
}

export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig();

  cloudinary.config({
    cloud_name: config.public.cloudinary.cloudName,
    api_key: config.cloudinary.apiKey,
    api_secret: config.cloudinary.apiSecret,
  });

  const folder = getRouterParam(event, 'folder');

  if (!folder) {
    return {
      error:
        'Folder name is required in the path (e.g., /cloudinary/highlights)',
    };
  }

  const result = await cloudinary.search
    .expression(`folder:"${folder}"`)
    .max_results(15)
    .execute();

  console.log('Found resources:', result.resources?.length);

  return result.resources.map((img: CloudinaryImage) => ({
    url: `${img.secure_url}?q_auto,f_auto`,
  }));
});
