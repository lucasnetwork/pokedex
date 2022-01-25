import { model, Schema } from "mongoose";

interface TypeProps {
  name: string;
  color: string;
}

const schema = new Schema({
  pokemons: [{ type: Schema.Types.ObjectId, ref: "pokemons" }],
});

const TypeModel = model("evolutions", schema);

export default TypeModel;
