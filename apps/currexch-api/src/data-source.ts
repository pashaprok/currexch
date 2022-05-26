import 'reflect-metadata';
import { DataSource } from 'typeorm';
import { dbConfig } from './config/db.config';

export const AppDataSource = new DataSource({
  type: dbConfig.type,
  host: dbConfig.host,
  port: dbConfig.port,
  username: dbConfig.userName,
  password: dbConfig.userPassword,
  database: dbConfig.databaseName,
  synchronize: false,
  logging: false,
  entities: [`${__dirname}/entities/**/*{.ts,.js}`],
  migrations: [`${__dirname}/migrations/**/*{.ts,.js}`],
  migrationsTableName: 'migrations_TypeORM',
  subscribers: [`${__dirname}/subscribers/**/*{.ts,.js}`],
});
