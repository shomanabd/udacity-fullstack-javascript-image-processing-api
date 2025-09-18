import sharp from 'sharp';
import path from 'path';

const outputdir = 'thumb';

const resizeImage = async (
  inputPath: string,
  width: number,
  height: number
): Promise<string> => {
  try {
    const filename = path.basename(inputPath);
    inputPath = path.resolve('images', inputPath);
    const outputPath = path.resolve(
      outputdir,
      `${width}x${height}-${filename}`
    );
    await sharp(inputPath).resize(width, height).toFile(outputPath);
    return outputPath;
  } catch (err) {
    throw new Error(`Error processing image: ${err}`);
  }
};

export default resizeImage;
