'use strict';

const supertest = require('supertest');
const server = require('../src/server');
const request = supertest(server.app);

describe('Server Tests', () => {
  describe('GET requests', () => {
    it('Respond with 200 and generic route', async () => {
      try {
        const response = await request.get('/');
        expect(response.status).toEqual(200);
        expect(response.text).toEqual('Hello world');
      } catch (error) {
        console.error(error);
      }
    });

    test('Hello, this  works too', async () => {
      try {
        const response = await request.get('/hello');
        expect(response.status).toEqual(200);
        expect(response.text).toEqual('Hello world');
      } catch (error) {
        console.error(error);
      }
    });
  });
});
