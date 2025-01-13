import express from "express";
import dotenv from "dotenv";
dotenv.config();
const port = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI;
import mongoose from "mongoose";
import cookieParser from "cookie-parser";
import userRouter from "./routes/userRoute.js";
import { notFound, errorHandler } from "./middlwares/errorMiddlware.js";

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}))

app.use(cookieParser());

app.use("/api/user", userRouter);

app.get("/", (req, res) => res.send("server is ready"));

app.use(notFound);
app.use(errorHandler);

mongoose
  .connect(MONGO_URI)
  .then(() => {
    console.log(`mongodb connection successfull in port${port}`);
    app.listen(port, () =>
      console.log(`server running is  http://localhost:${port}`)
    );
  })
  .catch((err) => {
    console.log(`mongodb connection is error : ${err.message}`);
  });
