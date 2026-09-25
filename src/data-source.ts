import { join } from "node:path";
import { DataSource, DataSourceOptions } from "typeorm"
import { User } from "./users/entities/user.entity.js";
import * as dotenv from 'dotenv';
import { getEnvVarFile } from "./helpers/env-vars.helper.js";


dotenv.config({
    path: getEnvVarFile(process.env.NODE_ENV)
});

export const dataSourceOptions: DataSourceOptions = {
    type: 'postgres',
    host: process.env.DB_HOST,
    port: parseInt(process.env.DB_PORT || '5432', 10),
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    synchronize: process.env.NODE_ENV !== 'production',
    entities: [User],
    ssl: process.env.DB_SSL === 'true'
        ? { rejectUnauthorized: false }
        : false,
    migrations: process.env.LOAD_MIGRATIONS === 'true'
        ? [
            join(import.meta.dirname, '..', 'migrations', '**', '*{.js,.ts}'),
            join(import.meta.dirname, '..', 'seed-migrations', '**', '*{.js,.ts}')
        ]
        : [],
};

export const AppDataSource = new DataSource(dataSourceOptions);