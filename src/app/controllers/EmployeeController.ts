import { Request, Response } from 'express';

class EmployeeController {
  async create(request: Request, response: Response) {
    return response.status(201).send();
  }
}

export { EmployeeController };