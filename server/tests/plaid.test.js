const request = require('supertest');
const axios = require('axios');
const app = require('../index');
jest.mock('axios');

describe('/plaid', () => {
  describe('POST /link_token', () => {
    it('returns a link_token if called with valid credentials', async () => {
      const mockPlaidResponse = {
        link_token: `link-sandbox-123-abc`,
        expiration: '2023-12-20T22:11:03Z',
        request_id: '123abc'
      };

      axios.post.mockResolvedValue({ data: mockPlaidResponse });

      const response = await request(app).post('/plaid/link_token');

      expect(response.status).toBe(200);
      expect(response.body).toEqual(mockPlaidResponse);
    });

    it('returns an error if called with invalid credentials', async () => {
      axios.post.mockRejectedValue({ response: { status: 400 } });

      const response = await request(app).post('/plaid/link_token');

      expect(response.status).toBe(400);
    });
  });

  describe('POST /reauthentication_link_token', () => {
    it('returns a link_token if called with a valid access_token', async () => {
      const mockPlaidResponse = {
        link_token: `link-sandbox-123-abc`,
        expiration: '2023-12-20T22:11:03Z',
        request_id: '123abc'
      };

      axios.post.mockResolvedValue({ data: mockPlaidResponse });

      const response = await request(app)
        .post('/plaid/reauthentication_link_token')
        .send({ access_token: 'access-sandbox-123-abc' });

      expect(response.status).toBe(200);
      expect(response.body).toEqual(mockPlaidResponse);
    });

    it('returns an error if called with an invalid access_token', async () => {
      axios.post.mockRejectedValue({ response: { status: 400 } });

      const response = await request(app)
        .post('/plaid/reauthentication_link_token')
        .send({ access_token: 'invalid-access-sandbox-123-abc' });

      expect(response.status).toBe(400);
    });
  });

  describe('POST /access_token', () => {
    it('exchanges a public_token for an access_token', async () => {
      const mockPlaidResponse = {
        access_token: 'access-sandbox-abc-123',
        item_id: '123',
        request_id: 'Aim3b'
      };

      axios.post.mockResolvedValue({ data: mockPlaidResponse });

      const response = await request(app).post('/plaid/access_token').send({
        public_token: 'public-sandbox-123-abc'
      });

      expect(response.status).toBe(200);
      expect(response.body).toEqual(mockPlaidResponse);
    });

    describe('returns an error if', () => {
      it('called with an invalid public_token', async () => {
        axios.post.mockRejectedValue({ response: { status: 400 } });

        const response = await request(app).post('/plaid/access_token').send({
          public_token: 'invalid-public-sandbox-123-abc'
        });

        expect(response.status).toBe(400);
      });

      it('called with no public_token', async () => {
        const response = await request(app)
          .post('/plaid/access_token')
          .send({});

        expect(response.status).toBe(400);
      });
    });
  });
});
