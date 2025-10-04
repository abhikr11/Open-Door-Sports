import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET,
});

export async function GET() {
  try {
    const result = await cloudinary.api.resources({
      type: "upload",
      max_results: 30,
    });

    // Only return what you need (URLs)
    const images = result.resources.map((img) => img.secure_url);

    return new Response(JSON.stringify(images), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
    });
  }
}
