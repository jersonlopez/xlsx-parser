import { ErrorRequestHandler } from 'express';

// TO DO: To improve error handler, now it's only working with
// uncontrolled errors
export const errorHandler: ErrorRequestHandler = (error, req, res, next) => {
  console.error(error);
  return res.status(500).send({error: error.message});
};
