import { Schema, model } from "mongoose";

const contractSchema = Schema(
  {
    creatorUserId: {
      type: Schema.ObjectId,
      ref: "user",
    },
    employeeUserId: {
      type: Schema.ObjectId,
      ref: "user",
    },
    description: {
      type: String,
      required: [true, "name is required"],
      trim: true,
      minlength: [5, "Too short name"],
      maxlength: [1000, "Too long name"],
    },
    points: {
      type: Number,
      required: [true, "points is required"],
      min: [100, "min length is 100"],
      max: [10000, "max length is 10000"],
    },
    status: {
      type: String,
      enum: [`pending`, `accepted`, `cacelled`],
      default: "pending",
    },
  },
  { timestamps: true }
);
const Contract = model("contract", contractSchema);
export default Contract;
