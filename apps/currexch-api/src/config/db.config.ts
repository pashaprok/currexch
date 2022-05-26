type DBConfig = {
  type: 'mysql';
  host: string;
  port: number;
  userName: string;
  userPassword: string;
  databaseName: string;
};

export const dbConfig: DBConfig = {
  type: 'mysql',
  host: process.env.DB_HOST,
  port: +process.env.DB_PORT,
  userName: process.env.DB_USER,
  userPassword: process.env.DB_USER_PASS,
  databaseName: process.env.DB_NAME,
};
