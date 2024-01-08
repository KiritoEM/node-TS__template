import express, { Application, Request, Response } from "express";
import dotenv from "dotenv";
import ConnectDB from "../config/db-config";
import cors from "cors";
import compression from "compression";
import morgan from "morgan";

dotenv.config();
const app: Application = express();

//middalware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(compression());
app.use(morgan("dev"));

//connexion avec mongoDB
ConnectDB();

app.get("/home", (req: Request, res: Response) => {
  res.send("Serveur working well!");
});

// App routes
app.use("/pokemon", require("./../routes/pokemon.routes"));

export default app;
