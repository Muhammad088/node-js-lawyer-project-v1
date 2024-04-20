import { Schema, model } from "mongoose";

const complaintSchema = Schema(
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
    adminId: {
      type: Schema.ObjectId,
      ref: "user",
    },
    status: {
      type: String,
      enum: [`open`, `working`, `completed`],
      default: "open",
    },
  },
  { timestamps: true }
);
const Complaint = model("complaint", complaintSchema);
export default Complaint;
