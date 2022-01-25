import { model, Schema } from "mongoose";

interface TypeProps {
  name: string;
  color: string;
}

const schema = new Schema({
  name: String,
  image_url: String,
  order_evolutin: Number,
  weight: String,
  height: String,
  types: [{ type: Schema.Types.ObjectId, ref: "types" }],
  moves: [{ type: Schema.Types.ObjectId, ref: "moves" }],
  evolutions: [{ type: Schema.Types.ObjectId, ref: "evolutions" }],
});

const TypeModel = model("pokemons", schema);

export default TypeModel;
