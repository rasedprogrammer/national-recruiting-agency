import "dotenv/config";
import express, { Request, Response } from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import { config } from "./config/app.config";
import connectDatabase from "./database/models/database";

const app = express();
// const BASE_PATH = config.BASE_PATH;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    origin: config.APP_ORIGIN,
    credentials: true,
  })
);

app.use(cookieParser());

app.get("/", (req: Request, res: Response) => {
  res.status(200).json({
    message: "Hello Backend!",
  });
});

app.listen(config.PORT, async () => {
  console.log(`App listening on port ${config.PORT} in ${config.NODE_ENV}`);
  await connectDatabase();
});
