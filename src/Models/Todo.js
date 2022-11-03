import { Schema, mongoose, model, models } from "mongoose";
const todoSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    // unique: true,
  },
});

const Todo = models.TODO || model("TODO", todoSchema);

export default Todo;
