import { Request, Response } from 'express';
import Employee from '../../database/models/Employee';
import Marker from '../../database/models/Marker';
import { Op } from 'sequelize';

class FindController {
  async findByEmail(request: Request, response: Response) {
    const { email } = request.params;

    const employeeAlreadyExists = await Employee.findOne({
      where: { email: email }
    });

    if (!employeeAlreadyExists) {
      return response.status(400).json({ message: 'Employee not exists' });
    }

    const employee_id = employeeAlreadyExists.id;

    const data = await Marker.findAll({ where: {
      employee_id: employee_id
    }});

    return response.status(201).json({ data });
  }

  async findByDate(request: Request, response: Response) {
    const { date_from, date_to } = request.params;

    const data = await Marker.findAll({ where: {
      date: {
        [ Op.between ]: [ date_from, date_to ]
      }
    }});

    return response.status(201).json({ data });
  }
}

export { FindController };