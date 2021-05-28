import { Request, Response } from 'express';

class MarkerController {
  async create(request: Request, response: Response) {
    return response.status(201).send();
  }
}

export { MarkerController };