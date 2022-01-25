import { Response, Request } from "express";
import Type from "../models/type";

class Types {
  async create(req: Request, res: Response) {
    const type = new Type({
      color: req.body.color,
      name: req.body.name,
    });
    console.log(type);
    await type.save();
    return res.status(201).json(type);
  }
}

export default Types;
