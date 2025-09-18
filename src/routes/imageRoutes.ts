import e, { Router } from 'express';
import resizeImage from '../utilities/imageProcessor';

const imageRoutes = Router();
imageRoutes.get('/', async (req, res) => {
  let filename: string;
  let width: number;
  let height: number;

  try {
    filename = req.query.filename as string;
    width = parseInt(req.query.width as string, 10);
    height = parseInt(req.query.height as string, 10);
  } catch (err) {
    res.status(400).send('Invalid query parameters');
    return;
  }

  try {
    await resizeImage(filename, width, height);
    res.status(200).send('Image resized successfully');
  } catch (err) {
    res.status(500).send(`Error processing image: ${err}`);
  }
});

export default imageRoutes;
