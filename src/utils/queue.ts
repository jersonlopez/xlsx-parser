import Queue from 'bull';

import { Task } from '../models/task';
import config from '../config';
import { parseExcelToJson } from '.';

const { password, host, port } = config.redis;

export const tasksQueue = new Queue('tasksQueue', {
  redis: { port, host, password },
});

tasksQueue.process(async (job) => {
  console.log('Process');
  const { rows, task, mapping } = job.data;

  try {
    const { data, errors } = parseExcelToJson(rows, mapping);

    await Task.findOneAndUpdate(
      { _id: task._id },
      {
        errors: errors.length, errorRows: errors, status: 'done', data,
      },
    );

    return { success: true };
  } catch (error) {
    console.log(`Error processing task ${task._id}`);

    // to retry the process
    await tasksQueue.add({ rows, task, mapping });

    return { success: false };
  }
});

tasksQueue.on('active', async (job) => {
  const { task } = job.data;

  await Task.findOneAndUpdate(
    { _id: task._id, status: { $ne: 'done' } },
    { status: 'processing' },
    {
      new: true,
    },
  );
});
