import express, { Express } from "express";

class App {
  app: Express;

  constructor() {
    this.app = express();
  }
}

export default new App().app;
