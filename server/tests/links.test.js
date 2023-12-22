const request = require('supertest');
const { Link } = require('../models/link');

let app;

describe('/links', () => {
  beforeEach(() => {
    app = require('../index');
  });
  afterEach(async () => {
    await app.close();
    await Link.deleteMany({});
  });

  describe('POST /', () => {
    it('returns a success message if link is created', async () => {
      const response = await request(app).post('/links').send({
        name: 'WECU',
        access_token: 'access-sandbox-abc-123',
        item_id: 'Aim3b'
      });

      expect(response.status).toBe(200);
      expect(response.body).toHaveProperty('id');
      expect(response.body).toHaveProperty(
        'message',
        'Link successfully created!'
      );
    });

    it('returns an error if link initialize data is missing', async () => {
      let response = await request(app).post('/links').send({
        name: 'WECU',
        item_id: 'Aim3b'
      });

      expect(response.status).toBe(422);
      expect(response.body).toHaveProperty(
        'error',
        '"access_token" is required'
      );

      response = await request(app).post('/links').send({
        access_token: 'access-sandbox-abc-123',
        item_id: 'Aim3b'
      });

      expect(response.status).toBe(422);
      expect(response.body).toHaveProperty('error', '"name" is required');

      response = await request(app).post('/links').send({
        name: 'WECU',
        access_token: 'access-sandbox-abc-123'
      });
      expect(response.status).toBe(422);
      expect(response.body).toHaveProperty('error', '"item_id" is required');
    });
  });

  describe('GET /', () => {
    it('returns all link', async () => {
      let response = await request(app).get('/links');

      expect(response.status).toBe(200);
      expect(response.body).toEqual([]);

      const links = [
        { name: 'WECU', access_token: 'access-token-1', item_id: 'item-id-1' },
        { name: 'Chase', access_token: 'access-token-2', item_id: 'item-id-2' },
        {
          name: 'Fidelity',
          access_token: 'access-token-3',
          item_id: 'item-id-3'
        }
      ];
      await Link.insertMany(links);
      response = await request(app).get('/links');

      expect(response.status).toBe(200);
      expect(response.body.length).toBe(3);
      // sorting validation
      expect(response.body[0].name).toBe('Chase');
      expect(response.body[1].name).toBe('Fidelity');
      expect(response.body[2].name).toBe('WECU');
    });
  });
});
