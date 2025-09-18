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
});
