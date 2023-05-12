import mongoose from 'mongoose';

import config from '../config';

const {
  username, password, host, port, name,
} = config.database;

const mongodbUrl = `mongodb://${username}:${password}@${host}:${port}/${name}?authSource=admin`;

export const connectDatabase = async () => mongoose.connect(mongodbUrl);
