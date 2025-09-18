import express from 'express';
import imageRoutes from './routes/imageRoutes';

const app = express();
const port = 3000;

app.use('/images', imageRoutes);

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});

export default app;
