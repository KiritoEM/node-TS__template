import express from "express";
import dotenv from "dotenv";
import ConnectDB from "../config/db-config";

dotenv.config();
const app = express();

//connexion avec mongoDB
ConnectDB();

app.get("/home", (req, res) => {
  res.send("Serveur working well!");
});

export default app;
