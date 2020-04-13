import dotenv from 'dotenv';
import mysql from 'mysql2/promise';

dotenv.config();
export const initializeDatabase = configs => {
    return mysql.createPool({
        host: process.env.MYSQL_HOST || configs.host,
        user: process.env.MYSQL_USER || configs.user,
        password: process.env.MYSQL_PASSWORD || configs.password,
        database: process.env.MYSQL_CONNECTION_DATABASE || configs.database,
        multipleStatements: process.env.MYSQL_MULTIPLE_STATEMENTS || configs.multipleStatements,
    });
}
// module.exports.init = function (configs) {
//     return mysql.createPool({
//         host: process.env.MYSQL_HOST || configs.host,
//         user: process.env.MYSQL_USER || configs.user,
//         password: process.env.MYSQL_PASSWORD || configs.password,
//         database: process.env.MYSQL_CONNECTION_DATABASE || configs.database,
//         multipleStatements: process.env.MYSQL_MULTIPLE_STATEMENTS || configs.multipleStatements,
//     });
// };

