import { Request, Response } from 'express';
import * as yup from 'yup';
import Employee from '../../database/models/Employee';
import Marker from '../../database/models/Marker';

class UpdateController {
  async update(request: Request, response: Response) {
    const { email, date, time_to } = request.body;

    const schema = yup.object().shape({
      email: yup.string().email().required(),
      date: yup.string().required(),
      time_to: yup.string().required(),
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

    const employee_id = employeeAlreadyExists.id;

    const marker = await Marker.update({ time_to: time_to }, {
      where: {
        employee_id: employee_id,
        date: date
      }
    });

    return response.status(201).send();
  }
}

export { UpdateController };