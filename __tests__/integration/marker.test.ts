import request from 'supertest';

import { app } from '../../src/app';
const truncate = require('../utils/truncate');

import { factory } from '../factories';

describe('Marker entry time and exit time', () => {
  beforeEach(async () => {
    await truncate();
  });

  it('Should marker entry time and exit time', async () => {
    await factory.create('Employee');
    const marker = await factory.create('Marker');

    const response = await request(app)
    .post('/markers')
    .send({
      id: marker.id,
      employee_id: marker.employee_id,
      time_from: marker.time_from,
      time_to: marker.time_to,
      date: marker.date
    });

    expect(response.status).toBe(201);
  });

  it('Should not marker time if employee not exists', async () => {
    await factory.create('Employee');

    try {
      await factory.create('Marker', {
        employee_id: 'anything'
      });
    } catch(err) {
      expect(err.original.errno).toEqual(19);
    }
  });
});