import { Response, Request } from "express";
import Move from "../models/move";

class Moves {
  async create(req: Request, res: Response) {
    const move = new Move({
      name: req.body.name,
      description: req.body.description,
    });
    console.log(move);
    await move.save();
    return res.status(201).json(move);
  }

  async all(req: Request, res: Response) {
    console.log("pokemons");
    const moves = await Move.find();

    return res.status(200).json(moves);
  }
}

export default Moves;
