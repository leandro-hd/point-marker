import faker from 'faker';
import { factory } from 'factory-girl';
import Employee from '../src/database/models/Employee';
import Marker from '../src/database/models/Marker';
import { v4 as uuidv4 } from 'uuid';

const employee = factory.define('Employee', Employee, {
  id: uuidv4(),
  name: faker.name.findName(),
  email: faker.internet.email()
});

factory.define('Marker', Marker, {
  id: uuidv4(),
  employee_id: employee.initializer.id,
  time_from: '08:00',
  date: '2021-05-28'
});

factory.extend('Marker', 'timeTo', { time_to: '12:00' });

factory.build('timeTo').then(Marker => {
  console.log('Updated marker with success');
});

export { factory };