import config from './config';
import app from './app';

import { connectDatabase } from './db/mongoose';

connectDatabase().then(() => {
  console.log('Connected to MongoDB');
  app.listen(config.port, () => {
    console.log(`App is running at http://localhost:${config.port}/`);
  });
})
.catch((err) => {
  console.error('Error connecting to MongoDB', err);
});
