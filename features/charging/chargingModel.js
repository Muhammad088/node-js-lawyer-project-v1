import { Schema, model } from "mongoose";

const chargingSchema = Schema(
  {
    description: {
      type: String,
      required: [true, "description is required"],
      trim: true,
      minlength: [5, "Too short description"],
      maxlength: [125, "Too long description"],
    },
    userId: {
      type: Schema.ObjectId,
      ref: "user",
    },
    taskId: {
      type: Schema.ObjectId,
      ref: "task",
    },
    points: {
      type: Number,
      required: [true, "points is required"],
    },
  },
  { timestamps: true }
);
const Message = model("msg", chargingSchema);
export default Message;
