import 'reflect-metadata';
import { DataSource } from 'typeorm';
import { dbConfig } from './config/db.config';
import { CurrencyTable1653902049015 } from './migrations/1653902049015-CurrencyTable';
import { CurrenciesSeeding1653914505246 } from './migrations/1653914505246-CurrenciesSeeding';
import { Currency } from './entities/currency.entity';

export const AppDataSource: DataSource = new DataSource({
  type: dbConfig.type,
  host: dbConfig.host,
  port: dbConfig.port,
  username: dbConfig.userName,
  password: dbConfig.userPassword,
  database: dbConfig.databaseName,
  synchronize: false,
  logging: false,
  entities: [Currency],
  migrations: [CurrencyTable1653902049015, CurrenciesSeeding1653914505246],
  migrationsRun: true,
  migrationsTableName: 'migrations_TypeORM',
  subscribers: [`${__dirname}/subscribers/**/*{.ts,.js}`],
});
