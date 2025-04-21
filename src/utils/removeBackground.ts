
import { pipeline, env } from "@huggingface/transformers";

env.allowLocalModels = false;
env.useBrowserCache = false;

const MAX_IMAGE_DIMENSION = 512;

function resizeImageIfNeeded(canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D, image: HTMLImageElement) {
  let width = image.naturalWidth;
  let height = image.naturalHeight;

  if (width > MAX_IMAGE_DIMENSION || height > MAX_IMAGE_DIMENSION) {
    if (width > height) {
      height = Math.round((height * MAX_IMAGE_DIMENSION) / width);
      width = MAX_IMAGE_DIMENSION;
    } else {
      width = Math.round((width * MAX_IMAGE_DIMENSION) / height);
      height = MAX_IMAGE_DIMENSION;
    }
  }

  canvas.width = width;
  canvas.height = height;
  ctx.drawImage(image, 0, 0, width, height);
}

export async function removeBackgroundFromImageUrl(imageUrl: string): Promise<string> {
  const img = new window.Image();
  img.crossOrigin = "Anonymous";
  img.src = imageUrl;
  await new Promise((resolve, reject) => {
    img.onload = resolve;
    img.onerror = reject;
  });
  const canvas = document.createElement("canvas");
  const ctx = canvas.getContext("2d");
  if (!ctx) throw new Error("Could not get canvas context");

  resizeImageIfNeeded(canvas, ctx, img);

  const imageDataUrl = canvas.toDataURL("image/png", 1.0);

  // Segment the image
  const segmenter = await pipeline(
    "image-segmentation",
    "Xenova/segformer-b0-finetuned-ade-512-512",
    {
      device: "webgpu",
    }
  );

  const result = await segmenter(imageDataUrl);

  // Expect result[0].mask.data to be mask array matching image pixels
  const outputCanvas = document.createElement("canvas");
  outputCanvas.width = canvas.width;
  outputCanvas.height = canvas.height;
  const outputCtx = outputCanvas.getContext("2d");
  if (!outputCtx) throw new Error("No output ctx");

  outputCtx.drawImage(canvas, 0, 0);
  const outImageData = outputCtx.getImageData(0, 0, outputCanvas.width, outputCanvas.height);
  const data = outImageData.data;
  const mask = result[0].mask.data;

  for (let i = 0; i < mask.length; i++) {
    // Invert mask for alpha: 1 is background, 0 is subject
    data[i * 4 + 3] = Math.round((1 - mask[i]) * 255);
  }
  outputCtx.putImageData(outImageData, 0, 0);

  return outputCanvas.toDataURL("image/png", 1.0);
}
