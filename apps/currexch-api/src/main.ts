import 'express-async-errors';
import { appConfig } from './config/app.config';

import app from './app';
import { AppDataSource } from './data-source';
import { appWorkLogger } from './utils/logger';
import { apiPathPrefix } from './constants/paths.constants';

AppDataSource.initialize()
  .then(async () => {
    app.listen(appConfig.port, () => {
      appWorkLogger.info(
        `API is running at http://${appConfig.host}:${appConfig.port}${apiPathPrefix}`,
      );
    });
  })
  .catch((error) => appWorkLogger.error('Error: ', error));
