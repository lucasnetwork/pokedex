import express, { Express } from "express";
import { connect } from "mongoose";
import routes from "./routes";

class App {
  app: Express;

  constructor() {
    connect(
      "mongodb+srv://lucas:@cluster0.msdz9.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
    ).then(() => console.log("funcionou"));
    this.app = express();
    this.app.use(express.json());
    this.app.use(routes);
  }
}

export default new App().app;
