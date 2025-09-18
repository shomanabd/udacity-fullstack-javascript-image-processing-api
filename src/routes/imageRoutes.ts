import Router from 'express';
import resizeImage from '../utilities/imageProcessor';
import path from 'path';

const imageRoutes = Router();
imageRoutes.get('/', async (req, res) => {
  const filename: string = req.query.filename as string;
  const width: number = Number(req.query.width);
  const height: number = Number(req.query.height);

  if (!filename || isNaN(width) || isNaN(height)) {
    return res
      .status(400)
      .send(
        'Invalid query parameters. Please provide filename, width, and height.'
      );
  }

  try {
    const resizedImage: string = await resizeImage(filename, width, height);
    res.status(200).sendFile(path.resolve(resizedImage));
  } catch (err) {
    res.status(500).send(`Error processing image: ${err}`);
  }
});

export default imageRoutes;
