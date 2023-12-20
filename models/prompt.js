import { Schema, model, models } from "mongoose";

const PromptSchema = new Schema({
  creator: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  prompt: {
    type: String,
    required: [true, "Prompt is required!"],
  },
  tag: {
    type: String,
  },
  date:{
    type: Date,
 },
});

const Prompt = models.Prompt || model("Prompt", PromptSchema);

export default Prompt;
