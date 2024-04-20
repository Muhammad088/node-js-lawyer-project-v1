import { Schema, model } from "mongoose";

const reviewSchema = Schema(
  {
    description: {
      type: String,
      required: [true, "description is required"],
      trim: true,
      minlength: [5, "Too short description"],
      maxlength: [125, "Too long description"],
    },
    creatorUserId: {
      type: Schema.ObjectId,
      ref: "user",
    },
    ownerUserId: {
      type: Schema.ObjectId,
      ref: "user",
    },
    taskId: {
      type: Schema.ObjectId,
      ref: "task",
    },
    rating: {
      type: Number,
      required: [true, "rating is required"],
      min: [0, "min length is 0"],
      max: [5, "max length is 5"],
    },
    approved: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);
const Review = model("review", reviewSchema);
export default Review;
