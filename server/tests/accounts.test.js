const request = require('supertest');
const { Account } = require('../models/account');

let app;

describe('/accounts', () => {
  beforeEach(() => {
    app = require('../index');
  });
  afterEach(async () => {
    await app.close();
    await Account.deleteMany({});
  });

  describe('POST /', () => {
    it('returns a success message if account is created', async () => {
      const response = await request(app).post('/accounts').send({
        name: 'WECU',
        access_token: 'access-sandbox-abc-123',
        item_id: 'Aim3b'
      });

      expect(response.status).toBe(200);
      expect(response.body).toHaveProperty('id');
      expect(response.body).toHaveProperty(
        'message',
        'Account successfully created!'
      );
    });

    it('returns an error if account initialize data is missing', async () => {
      let response = await request(app).post('/accounts').send({
        name: 'WECU',
        item_id: 'Aim3b'
      });

      expect(response.status).toBe(422);
      expect(response.body).toHaveProperty(
        'error',
        '"access_token" is required'
      );

      response = await request(app).post('/accounts').send({
        access_token: 'access-sandbox-abc-123',
        item_id: 'Aim3b'
      });

      expect(response.status).toBe(422);
      expect(response.body).toHaveProperty('error', '"name" is required');

      response = await request(app).post('/accounts').send({
        name: 'WECU',
        access_token: 'access-sandbox-abc-123'
      });
      expect(response.status).toBe(422);
      expect(response.body).toHaveProperty('error', '"item_id" is required');
    });
  });

  describe('GET /', () => {
    it('returns all accounts', async () => {
      let response = await request(app).get('/accounts');

      expect(response.status).toBe(200);
      expect(response.body).toEqual([]);

      const accounts = [
        { name: 'WECU', access_token: 'access-token-1', item_id: 'item-id-1' },
        { name: 'Chase', access_token: 'access-token-2', item_id: 'item-id-2' },
        {
          name: 'Fidelity',
          access_token: 'access-token-3',
          item_id: 'item-id-3'
        }
      ];
      await Account.insertMany(accounts);
      response = await request(app).get('/accounts');

      expect(response.status).toBe(200);
      expect(response.body.length).toBe(3);
      expect(response.body.some(a => a.name === 'WECU')).toBeTruthy();
      expect(response.body.some(a => a.name === 'Chase')).toBeTruthy();
      expect(response.body.some(a => a.name === 'Fidelity')).toBeTruthy();
    });
  });
});
