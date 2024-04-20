import { Schema, model } from "mongoose";

const messageSchema = Schema(
  {
    description: {
      type: String,
      required: [true, "description is required"],
      trim: true,
      minlength: [5, "Too short description"],
      maxlength: [125, "Too long description"],
    },
    key: {
      type: String,
      required: [true, "description is required"],
      trim: true,
    },
    fromUserId: {
      type: Schema.ObjectId,
      ref: "user",
    },
    toUserId: {
      type: Schema.ObjectId,
      ref: "user",
    },
    taskId: {
      type: Schema.ObjectId,
      ref: "task",
    },
    isDeleted: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

// messageSchema.pre(/^find/, function (next) {
//   this.populate({
//     path: `creatorUserId`,
//     select: "name lawyerNumber",
//   });
//   next();
// });
const Message = model("msg", messageSchema);
export default Message;
