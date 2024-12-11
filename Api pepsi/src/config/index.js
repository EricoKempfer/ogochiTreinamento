import { Sequelize } from "sequelize";
import 'dotenv/config';

export const sequelize = new Sequelize(
    process.env.POSTGRES_DB,
    process.env.POSTGRES_USERNAME,
    process.env.POSTGRES_PASSWORD,
    {
        host: process.env.POSTGRES_HOST,
        dialect: 'postgres'
    }
);