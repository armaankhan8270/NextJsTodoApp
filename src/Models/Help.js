import { Schema, mongoose, model, models } from "mongoose";
const helpSchema = new Schema({
  username: {
    type: String,
    required: true,
    // unique: true,
  },
  message: {
    type: String,
    required: true,
    unique: true,
  },
});

const Help = models.Help || model("Help", helpSchema);

export default Help;
