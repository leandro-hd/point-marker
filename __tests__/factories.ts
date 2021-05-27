import faker from 'faker';
import { factory } from 'factory-girl';
import Employee from '../src/database/models/Employee';
import { v4 as uuidv4 } from 'uuid';

factory.define('Employee', Employee, {
  id: uuidv4(),
  name: faker.name.findName(),
  email: faker.internet.email()
})

export { factory };