import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import dbConnection from './src/db/dbConnection.js';

const app = express();
dotenv.config({path: './config/config.env'});

app.use(
    cors({
        origin: [],
        methods: ['GET', 'PUT', 'DELETE', 'POST'],
        credentials: true
    }
));

dbConnection();

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

export default app;