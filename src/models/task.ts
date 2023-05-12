import { Schema, model } from 'mongoose';
import { ITask } from '../types/task';

const taskSchema = new Schema<ITask>({
  filename: { type: String, required: true },
  mapping: { type: Object, required: true },
  status: { type: String, enum: ['pending', 'processing', 'done'], default: 'pending' },
  data: [{type: Schema.Types.Mixed}],
  errors: { type: Number, default: 0 },
  errorRows: [{ row: Number, col: Number, error: String }],
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

export const Task = model<ITask>('Task', taskSchema);
