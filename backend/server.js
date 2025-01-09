import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
const port =process.env.PORT || 5000;
import userRouter from './routes/userRoute.js';
import { notFound,errorHandler } from './middlwares/errorMiddlware.js';

const app=express();

app.use('/api/user',userRouter);

app.get('/',(req,res)=>res.send('server is ready'));

app.use(notFound);
app.use(errorHandler);

app.listen(port,()=>console.log (`server running is port ${port}`));

