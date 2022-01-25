import { model, Schema } from "mongoose";

interface TypeProps {
  name: string;
  color: string;
}

const schema = new Schema<TypeProps>({
  name: String,
  color: String,
});

const TypeModel = model<TypeProps>("types", schema);

export default TypeModel;
