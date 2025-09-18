import sharp from 'sharp';
import path from 'path';

const outputdir = 'thumb';

const resizeImage = async (
  inputPath: string,
  width: number,
  height: number
): Promise<string> => {
  try {
    if (width <= 0 || height <= 0) {
      throw new Error('Width and height must be positive integers.');
    }

    if (!width || !height) {
      throw new Error('Width and height are required parameters.');
    }

    if (!inputPath || typeof inputPath !== 'string') {
      throw new Error('Invalid input path provided.');
    }

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
