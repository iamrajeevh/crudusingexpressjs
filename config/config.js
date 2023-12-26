
require('dotenv').config()
exports.dbconfig = {
    username: process.env.DB_USER_NAME || 'root',
    password: process.env.DB_PASSWORD || 'codefire',
    database: process.env.DB_NAME || 'express_crud',
    host: process.env.DB_HOST || 'localhost',
    dialect: 'mysql',
    logging: (sqlquery) => {
        // console.log('SqlQuery',sqlquery);
    },
}
