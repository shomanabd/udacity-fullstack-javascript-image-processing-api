import fs from 'fs';
import resizeImage from '../../utilities/imageProcessor';

describe('resizeImage function', () => {
  const testFile = 'santamonica.jpg';
  const width = 200;
  const height = 200;
  let outputPath: string;

  it('should return a string path', async () => {
    // Call the resize function
    outputPath = await resizeImage(testFile, width, height);

    // Expect the output to be a string
    expect(typeof outputPath).toBe('string');
  });

  it('should create the resized image in the output folder', () => {
    // Expect the file to exist
    const exists = fs.existsSync(outputPath);
    expect(exists).toBeTrue();
  });

  afterAll(() => {
    // Clean up the generated file after tests
    if (fs.existsSync(outputPath)) {
      fs.unlinkSync(outputPath);
    }
  });

  it('should throw an error when input file does not exist', async () => {
    const nonExistentFile = 'nonexistent.jpg';

    await expectAsync(
      resizeImage(nonExistentFile, width, height)
    ).toBeRejectedWithError(/Error processing image/);
  });

  it('should throw an error when width is invalid (0)', async () => {
    await expectAsync(resizeImage(testFile, 0, height)).toBeRejectedWithError(
      /Width and height must be positive integers./
    );
  });

  it('should throw an error when height is invalid (0)', async () => {
    await expectAsync(resizeImage(testFile, width, 0)).toBeRejectedWithError(
      /Width and height must be positive integers./
    );
  });

  it('should throw an error when width is negative', async () => {
    await expectAsync(
      resizeImage(testFile, -100, height)
    ).toBeRejectedWithError(/Width and height must be positive integers./);
  });

  it('should throw an error when height is negative', async () => {
    await expectAsync(resizeImage(testFile, width, -100)).toBeRejectedWithError(
      /Error processing image/
    );
  });
});
