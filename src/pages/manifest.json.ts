import type { APIRoute } from "astro";
import { getImage } from "astro:assets";
import favicon from "../assets/images/logos-og/favicon.png";

const faviconPngSizes = [192, 512];

export const GET: APIRoute = async () => {
  const icons = await Promise.all(
    faviconPngSizes.map(async (size) => {
      const image = await getImage({
        src: favicon,
        width: size,
        height: size,
        format: "png",
      });
      return {
        src: image.src,
        type: `image/${image.options.format}`,
        sizes: `${image.options.width}x${image.options.height}`,
      };
    }),
  );

  const manifest = {
    name: "Elite Commercial Door",
    description: "The elite choice for all your commercial door projects",
    start_url: "/",
    display: "standalone",
    id: "https://elite-door.com/",
    icons,
  };

  return new Response(JSON.stringify(manifest));
};
