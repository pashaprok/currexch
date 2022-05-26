import 'express-async-errors';
import { appConfig } from './config/app.config';

import app from './app';
import { AppDataSource } from './data-source';

AppDataSource.initialize()
  .then(async () => {
    app.listen(appConfig.port, () => {
      console.log(`App running on port ${appConfig.port}...`);
    });
  })
  .catch((error) => console.error('Error: ', error));
