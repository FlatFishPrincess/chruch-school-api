import dotenv from 'dotenv';
import { createConnection } from 'typeorm';

dotenv.config();
export const initializeDatabase = async (configs) => {
    const connection = await createConnection({
        type: "mysql",
        host: process.env.MYSQL_HOST || configs.host,
        username: process.env.MYSQL_USER || configs.user,
        password: process.env.MYSQL_PASSWORD || configs.password,
        database: process.env.MYSQL_CONNECTION_DATABASE || configs.database,
        entities: [
            __dirname + "/entity/*.ts"
        ]
    });
    return connection;
}

