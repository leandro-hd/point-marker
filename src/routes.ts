import { Router } from 'express';

const router = Router();

import { EmployeeController } from './app/controllers/EmployeeController';
import { MarkerController } from './app/controllers/MarkerController';

const employeeController = new EmployeeController();
const markerController = new MarkerController();

router.post('/employees', employeeController.create);
router.post('/markers', markerController.create);

export { router };