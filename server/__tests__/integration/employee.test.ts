import request from 'supertest';

import { app } from '../../src/app';
const truncate = require('../utils/truncate');

import { factory } from '../factories';

describe('Create employee', () => {
  beforeEach(async () => {
    await truncate();
  });

  it('Should create new employees with valid credentials', async () => {
    const employee = await factory.create('Employee');

    const response = await request(app)
    .post('/employees')
    .send({
      id: employee.id,
      name: employee.name,
      email: employee.email
    });

    expect(response.status).toBe(201);
  });

  it('Should not create new employee with existent email', async () => {
    const employee = await factory.create('Employee');

    try {
      await factory.create('Employee', {
        email: employee.email
      });
    } catch(err) {
      expect(err.original.errno).toEqual(19);
    }
  });
});