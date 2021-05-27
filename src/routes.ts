import { Router } from 'express';

const router = Router();

import { EmployeeController } from './app/controllers/EmployeeController';

const employeeController = new EmployeeController();

router.post('/employees', employeeController.create);

export { router };