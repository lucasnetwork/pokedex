import express, { Express } from "express";
import { connect } from "mongoose";
import routes from "./routes";

class App {
  app: Express;

  constructor() {
    connect(
      "mongodb+srv://lucas:8674293150@cluster0.msdz9.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
    );
    this.app = express();
    this.app.use(express.json());
    this.app.use(routes);
  }
}

export default new App().app;
