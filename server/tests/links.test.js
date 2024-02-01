const request = require('supertest');
const axios = require('axios');
const app = require('../index');
const mockingoose = require('mockingoose');
const { Link } = require('../models/link');
jest.mock('axios');

describe('/links', () => {
  describe('GET /', () => {
    it('returns all links sorted by institution name', async () => {
      const mockLinks = [
        { name: 'Bank of America' },
        { name: 'Chase' },
        { name: 'Wells Fargo' }
      ];

      mockingoose(Link).toReturn(mockLinks, 'find');

      const response = await request(app).get('/links');

      expect(response.status).toBe(200);
      const names = response.body.map(link => link.name);
      expect(names).toEqual(['Bank of America', 'Chase', 'Wells Fargo']);
    });
  });

  describe('POST /', () => {
    it('creates a new link', async () => {
      const mockLink = {
        name: 'Wells Fargo',
        access_token: 'access-sandbox-123-abc',
        item_id: 'item-sandbox-123-abc'
      };

      mockingoose(Link).toReturn(mockLink, 'save');

      const response = await request(app).post('/links').send(mockLink);

      expect(response.status).toBe(200);
      const { name, access_token, item_id } = response.body;
      expect({ name, access_token, item_id }).toEqual(mockLink);
    });
  });

  describe('DELETE /links/:id', () => {
    it('deletes a link', async () => {
      const id = '123abc';
      mockingoose(Link).toReturn(
        {
          id: id,
          message: 'Link deleted successfully'
        },
        'findOneAndDelete'
      );

      const response = await request(app).delete(`/links/${id}`);

      expect(response.status).toBe(200);
      expect(response.body).toEqual({
        id,
        message: 'Link deleted successfully'
      });
    });
  });
});
