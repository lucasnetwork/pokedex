import { model, Schema } from "mongoose";

interface MoveProps {
  name: string;
  description: string;
}

const schema = new Schema<MoveProps>({
  name: String,
  description: String,
});

const TypeModel = model<MoveProps>("moves", schema);

export default TypeModel;
