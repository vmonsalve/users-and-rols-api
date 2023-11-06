import { Sequelize } from "sequelize";
import dotenv from 'dotenv';
dotenv.config();

const db = new Sequelize(
    process.env.DBA_NAME, 
    process.env.DBA_USER, 
    process.env.DBA_PASS,
    {
        host: process.env.DBA_SERVER,
        port: process.env.DBA_PORT,
        dialect: 'mysql',
        define: {
            timestamps: true
        },
        pool: {
            max: 5,
            min: 0,
            acquire: 30000,
            idle: 10000
        }
    }
);

export default db;