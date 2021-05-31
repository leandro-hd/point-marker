import { Router } from 'express';

const router = Router();

import { EmployeeController } from './app/controllers/EmployeeController';
import { MarkerController } from './app/controllers/MarkerController';
import { UpdateController } from './app/controllers/UpdateController';
import { FindController } from './app/controllers/FindController';

const employeeController = new EmployeeController();
const markerController = new MarkerController();
const updateController = new UpdateController();
const findController = new FindController();

router.post('/employees', employeeController.create);
router.post('/markers', markerController.create);
router.post('/update', updateController.update);
router.get('/find/:email', findController.findByEmail);
router.get('/find/:date_from/:date_to', findController.findByDate);

export { router };