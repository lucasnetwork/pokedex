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
}

export default Moves;
