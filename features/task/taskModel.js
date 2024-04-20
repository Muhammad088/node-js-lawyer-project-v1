import { Schema, model } from "mongoose";

const taskSchema = Schema(
  {
    title: {
      type: String,
      required: [true, "title is required"],
      trim: true,
      minlength: [5, "Too short title"],
      maxlength: [32, "Too long title"],
    },
    description: {
      type: String,
      trim: true,
      required: [true, "description is required"],
      minlength: [15, "Too short description"],
      maxlength: [1000, "Too long description"],
    },
    destination: {
      type: String,
      required: [true, "destination is required"],
      trim: true,
      minlength: [5, "Too short destination"],
      maxlength: [32, "Too long destination"],
    },
    address: {
      type: String,
      trim: true,
    },
    governorate: {
      type: String,
      trim: true,
    },
    pdfLink: String,
    mustCompleteIn: {
      type: Boolean,
      default: true,
    },
    date: {
      type: Date,
      required: [true, "date required"],
    },
    startedAt: Date,
    completedAt: Date,
    contract: {
      type: Schema.ObjectId,
      ref: "contract",
    },
    creatorUserId: {
      type: Schema.ObjectId,
      required: [true, "creator user is required"],
      ref: "user",
    },
    assistantUserId: {
      type: Schema.ObjectId,
      ref: "user",
    },
    points: {
      type: Number,
      required: [true, "points is required"],
      min: [50, "min length is 50"],
      max: [10000, "max length is 10000"],
    },
    contractId: {
      type: Schema.ObjectId,
      ref: "contract",
    },
    status: {
      type: String,
      enum: [`open`, `working`, `completed`, `paid`],
      default: "open",
    },
    approved: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);
taskSchema.pre(/^find/, function (next) {
  this.populate({
    path: `creatorUserId`,
    select: "name lawyerNumber",
  });
  next();
});
const Task = model("task", taskSchema);
export default Task;
