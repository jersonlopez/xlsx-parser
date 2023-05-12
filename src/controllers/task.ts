import { NextFunction, Request, Response } from 'express';
import { Task } from '../models';

export const getAll = async (_: Request, res: Response, next: NextFunction): Promise<Response | void> => {
  try {
  const tasks = await Task.find({}, '-_id -__v');
  if (!tasks) {
    return res.status(404).send({ error: 'Tasks not found' });
  }

  return res.send({ tasks });
  } catch (error) {
    next(error)
  }
};

export const get = async (req: Request, res: Response, next: NextFunction): Promise<Response | void> => {
  try {
  const task = await Task.findById(req.params.taskId, '-_id -__v');
  if (!task) {
    return res.status(404).send({ error: 'Task not found' });
  }

  return res.status(200).send(task);
  } catch (error) {
    next(error);
  }
};

// export const getController = async (id: string): Promise<ITask> => {
//   try {
//     // Find the task document in the database
//     const task = await Task.findById(id);
//     console.log('Task: ', { task });

//     if (!task) {
//       throw new Error('Task not found')
//       // return res.status(404).send({ error: 'Task not found' });
//     }

//     // if (task) {
//     //   throw new Error('Error en el controller!!')
//     // }

//     // Return the task status and error count
//     return task;
//     // res.send({ status: task.status, errors: task.errors });
//   } catch (error) {
//     console.log({error});
//     throw error;
//   }
// };

// export const get = (req: Request, res: Response, next: NextFunction): Promise<Response | void> =>
//   getController(req.params.taskId)
//     .then((task) => res.status(200).send(task))
//     .catch(next)

export const getErrors = async (req: Request, res: Response, next: NextFunction): Promise<Response | void> => {
  try {
    const task = await Task.findById(req.params.taskId, '-_id -__v');
  if (!task) {
    return res.status(404).send({ error: 'Task not found' });
  }

  const pageSize = req.query.pageSize ? parseInt(req.query.pageSize as string) : 10;
  const page = req.query.page ? parseInt(req.query.page as string) : 1;
  const startIndex = (page - 1) * pageSize;
  const endIndex = page * pageSize;

  const rows = task.errorRows?.slice(startIndex, endIndex);
  return res.status(200).send({ rows });
  } catch (error) {
    next(error);
  }
};
