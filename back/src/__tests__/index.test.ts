import app from '@src/app';
import request from 'supertest';

describe('GET /', () => {
	it('returns status 304 Main /', async () => {
		const res = await request(app).get('/');

		expect(res.statusCode).toEqual(200);
	});
});
