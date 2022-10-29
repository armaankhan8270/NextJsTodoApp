import { Schema, mongoose, model, models } from "mongoose";

const testSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    unique: true,
  },
});

const Test = models.Test || model("Test", testSchema);

export default Test;
