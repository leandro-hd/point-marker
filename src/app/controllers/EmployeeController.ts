import { Request, Response } from 'express';
import * as yup from 'yup';
import Employee from '../../database/models/Employee';
import { v4 as uuidv4 } from 'uuid';

class EmployeeController {
  async create (request: Request, response: Response) {
    const { name, email } = request.body;

    const schema = yup.object().shape({
      name: yup.string().required(),
      email: yup.string().email().required()
    });

    try {
      await schema.validate(request.body, { abortEarly: false });
    } catch (err) {
      return response.status(400).json({ message: err });
    }

    const employeeAlreadyExists = await Employee.findOne({
      where: { email: email }
    });

    if (employeeAlreadyExists) {
      return response.status(400).json({ message: 'Employee already exists' });
    }

    const id = uuidv4();

    const employee = await Employee.create({ id, name, email });

    return response.status(201).json(employee);
  }
}

export { EmployeeController };