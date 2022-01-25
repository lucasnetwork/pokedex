import { Response, Request } from "express";
import EvolutionModel from "../models/evolution";
import PokemonModel from "../models/pokemon";

class Evolution {
  async create(req: Request, res: Response) {
    const type = new EvolutionModel({
      pokemons: req.body.evolutionsId,
    });
    console.log(type);
    await type.save();
    for (let i = 0; i < req.body.evolutionsId.length; i++) {
      await PokemonModel.findByIdAndUpdate(req.body.evolutionsId[i], {
        $push: { evolutions: type._id },
      });
    }
    return res.status(201).json(type);
  }
}

export default Evolution;
