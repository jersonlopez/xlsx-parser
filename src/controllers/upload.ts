import { NextFunction, Request, Response } from 'express';
import xlsx from 'xlsx';

import { Task } from '../models';
import { tasksQueue } from '../utils';

export const uploadFile = async (req: Request, res: Response, next: NextFunction): Promise<Response | void> => {
  try {
    if (!req.file || !req.body.mapping) {
      return res.status(400).send({ error: 'Must send a file and a mapping object' });
    }

    const { buffer, originalname } = req.file;

    const workbook = xlsx.read(buffer);
    const sheetName = workbook.SheetNames[0];
    const sheet = workbook.Sheets[sheetName];
    const rows = xlsx.utils.sheet_to_json(sheet, { header: 1 });
    const mapping = JSON.parse(req.body.mapping);

    const task = new Task({
      filename: originalname,
      mapping,
    });

    await task.save();

    await tasksQueue.add({ rows, task, mapping });

    return res.status(201).send({ taskId: task._id });
  } catch (error) {
    next(error);
  }
};
