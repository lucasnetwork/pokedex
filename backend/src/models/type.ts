import { model, Schema } from "mongoose";

interface TypeProps {
  name: string;
  color: string;
}

const schema = new Schema({
  name: String,
  color: String,
  pokemons: [{ type: Schema.Types.ObjectId, ref: "pokemons" }],
});

const TypeModel = model("types", schema);

export default TypeModel;
