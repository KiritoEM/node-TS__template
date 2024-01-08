import express, { Application, Request, Response } from "express";
import dotenv from "dotenv";
import ConnectDB from "../config/db-config";

dotenv.config();
const app: Application = express();

//connexion avec mongoDB
ConnectDB();

app.get("/home", (req: Request, res: Response) => {
  res.send("Serveur working well!");
});

export default app;
