import request from 'supertest';
import app from '../app';
import dotenv from 'dotenv';
dotenv.config();

describe('City management', () => {
  it('It should fetch cities with forcast', async (done) => {
    const res = await request(app).get(`/api/cities/forecasts`).send();
    console.log('STATUS_RES', res.body.data);
    expect(res.status).toBe(200);
    expect(res.body.message).toEqual('Successfully fetch cities');
    done();
  }, 30000);
});
