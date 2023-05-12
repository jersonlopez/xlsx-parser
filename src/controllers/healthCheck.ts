import { Request, Response } from 'express';

export const healthCheck = async (_: Request, res: Response): Promise<Response> => res.status(200).send({ uptime: process.uptime() });
