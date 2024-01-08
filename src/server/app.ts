import express from "express";
import dotenv from "dotenv";
dotenv.config();
const app = express();

app.get("/home", (req, res) => {
  res.send("Serveur working well!");
});

export default app;
