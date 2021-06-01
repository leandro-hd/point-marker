import { Request, Response } from 'express';
import * as yup from 'yup';
import Employee from '../../database/models/Employee';
import Marker from '../../database/models/Marker';
import { v4 as uuidv4 } from 'uuid';

class MarkerController {
  async create(request: Request, response: Response) {
    const { email, time_from, time_to, date } = request.body;

    const schema = yup.object().shape({
      email: yup.string().email().required(),
      time_from: yup.string().required(),
      date: yup.string().required()
    });

    try {
      await schema.validate(request.body, { abortEarly: false });
    } catch (err) {
      return response.status(400).json({ message: err });
    }

    const employeeAlreadyExists = await Employee.findOne({
      where: { email: email }
    });

    if (!employeeAlreadyExists) {
      return response.status(400).json({ message: 'Employee not exists' });
    }

    const id = uuidv4();

    const employee_id = employeeAlreadyExists.id;

    const marker = await Marker.create({ id, employee_id, time_from, time_to, date });

    return response.status(201).send();
  }
}

export { MarkerController };