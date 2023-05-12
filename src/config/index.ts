import * as dotenv from 'dotenv';

dotenv.config();

type DBEnv = {
  host: string;
  port: number;
  name: string;
  username: string;
  password: string;
}

type RedisEnv = {
  host: string;
  port: number;
  password: string;
}

interface Env {
  port: number;
  database: DBEnv;
  redis: RedisEnv;
}

const config: Env = {
  port: Number(process.env.APP_PORT) || 5000,
  database: {
    host: process.env.DB_HOST || 'host',
    port: Number(process.env.DB_PORT),
    name: process.env.DB_NAME || 'db_name',
    username: process.env.DB_USERNAME || 'db_username',
    password: process.env.DB_PASSWORD || 'db_password',
  },
  redis: {
    host: process.env.REDIS_HOST || 'host',
    port: Number(process.env.REDIS_PORT),
    password: process.env.REDIS_PASSWORD || 'db_password',
  }
};

export default config;
