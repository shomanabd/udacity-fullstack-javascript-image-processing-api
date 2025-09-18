import supertest from 'supertest';
import app from '../../index';

const request = supertest(app);

describe('GET /images', () => {
  it('should return 400 if query parameters are missing', async () => {
    const res = await request.get('/images');
    expect(res.status).toBe(400);
    expect(res.text).toBe(
      'Invalid query parameters. Please provide filename, width, and height.'
    );
  });

  it('should return 200 if valid query parameters are provided', async () => {
    const res = await request
      .get('/images')
      .query({ filename: 'fjord.jpg', width: '200', height: '200' });

    expect(res.status).toBe(200);
  });

  it('should throw an error when input width is invalid', async () => {
    const res = await request
      .get('/images')
      .query({ filename: 'fjord.jpg', width: '200fs', height: '200' });

    expect(res.status).toBe(400);
  });
});
