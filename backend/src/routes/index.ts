import { Router } from "express";
import Moves from "../controllers/moves";
import Types from "../controllers/types";

const routes = Router();
const typesController = new Types();
const movesController = new Moves();

routes.post("/types", typesController.create);
routes.post("/move", movesController.create);

export default routes;
