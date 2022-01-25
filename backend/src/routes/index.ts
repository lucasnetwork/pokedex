import { Router } from "express";
import Evolution from "../controllers/evolutions";
import Moves from "../controllers/moves";
import Pokemon from "../controllers/pokemons";
import Types from "../controllers/types";

const routes = Router();
const typesController = new Types();
const movesController = new Moves();
const pokemonController = new Pokemon();
const evolutionController = new Evolution();

routes.post("/types", typesController.create);
routes.post("/move", movesController.create);
routes.post("/pokemon", pokemonController.create);
routes.get("/pokemon", pokemonController.all);
routes.post("/evolutions", evolutionController.create);

export default routes;