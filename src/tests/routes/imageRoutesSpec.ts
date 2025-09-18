import supertest from 'supertest';
import app from '../../index';

const request = supertest(app);

describe('GET /api/images', () => {
  it('should return 400 if query parameters are missing', async () => {
    const res = await request.get('/api/images');
    expect(res.status).toBe(400);
    expect(res.text).toBe('Invalid query parameters');
  });

  it('should return 200 if valid query parameters are provided', async () => {
    const res = await request
      .get('/api/images')
      .query({ filename: 'test.jpg', width: '200', height: '200' });

    expect(res.status).toBe(200);
    expect(res.text).toBe('Image resized successfully');
  });
});
