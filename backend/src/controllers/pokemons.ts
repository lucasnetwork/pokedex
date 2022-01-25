import { Response, Request } from "express";
import PokemonModel from "../models/pokemon";

class Pokemon {
  async create(req: Request, res: Response) {
    console.log(req.file);
    const type = new PokemonModel({
      name: req.body.name,
      image_url: req.body.imageUrl,
      types: req.body.typeIds,
      moves: req.body.moveIds,
      order_evolution: req.body.orderEvolution,
      height: req.body.height,
      weight: req.body.weight,
    });
    console.log(type);
    await type.save();
    return res.status(201).json(type);
  }

  async all(req: Request, res: Response) {
    console.log("pokemons");
    console.log(req.query);
    const pokemons = await PokemonModel.find()
      .skip(req.query.offset)
      .limit(req.query.limit)
      .populate("moves")
      .populate("types")
      .populate({
        path: "evolutions",
        populate: {
          path: "pokemons",
        },
      });

    return res.status(200).json(pokemons);
  }

  async index(req: Request, res: Response) {
    console.log("pokemons");
    const pokemon = await PokemonModel.findById(req.params.id)
      .populate("moves")
      .populate("types")
      .populate({
        path: "evolutions",
        populate: {
          path: "pokemons",
        },
      });

    return res.status(200).json(pokemon);
  }
}

export default Pokemon;
