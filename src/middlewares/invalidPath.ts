import { NextFunction, Request, Response } from 'express';

export const invalidPathHandler = (_: Request, response: Response, next: NextFunction) => {
  return response.status(404).send({ error: 'invalid path' })
}
