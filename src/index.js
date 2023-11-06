
import { Sequelize } from "sequelize";
import express from "express";
import dotenv from 'dotenv';
import db from './config/db.js'
dotenv.config();

const app = express()

try {
    await db.authenticate()
    console.log("Nos conectamos a la base de datos.");
} catch (error) {
    console.log(error)
}

app.listen(process.env.HOST_PORT, () => {
    console.log(`Servidor ejecutandose en http://${process.env.HOST_IP}:${process.env.HOST_PORT}`)
})