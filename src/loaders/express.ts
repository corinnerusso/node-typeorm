import bodyParser from "body-parser";
import cors from "cors";
import { Application } from "express";

//gestion du cors & body-parser

export default async (app: Application) => {
  app.get("/status", (req, res) => {
    res.status(200).end();
  });
  app.head("/status", (req, res) => {
    res.status(200).end();
  });
  app.enable("trust proxy");

  app.use(cors());
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));

  // ...More middlewares

  // Return the express app
  return app;
};
