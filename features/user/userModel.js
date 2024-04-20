import { Schema, model } from "mongoose";

const userSchema = Schema(
  {
    name: {
      type: String,
      required: [true, "name is required"],
      trim: true,
      minlength: [5, "Too short name"],
      maxlength: [32, "Too long name"],
    },
    fullName: {
      type: String,
      trim: true,
      required: [true, "fullname is required"],
      minlength: [15, "Too short fullname"],
      maxlength: [45, "Too long fullname"],
    },
    lawyerNumber: {
      type: String,
      trim: true,
      unique: true,
      dropDups: true,
      required: [true, "lawyer number is required"],
      minlength: [5, "Too short lawyer number"],
      maxlength: [7, "Too long lawyer number"],
    },
    nationalId: {
      type: String,
      trim: true,
      unique: [true, "national id is exists"],
      required: [true, "national id is required"],
      minlength: [14, "Too short national id"],
      maxlength: [14, "Too long national id"],
    },
    lawyerCardImg: String,
    profileImg: String,
    registrationGrade: {
      type: String,
      enum: [`partial`, `primary`, `appeal`, `cassation `],
      default: "partial",
    },
    phoneNumber: String,
    points: {
      type: Number,
      default: 0,
    },
    address: {
      type: String,
      trim: true,
    },
    ratingAverage: {
      type: Number,
      min: [1, "Rating must be bigger than or equal to 1.0"],
      max: [5, "Rating must be less than or equal to 5.0"],
    },
    ratingsQuantity: {
      type: Number,
      default: 0,
    },
    status: {
      type: String,
      enum: [`user`, `admin`, `idle`, `block`],
      default: "user",
    },
    approved: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);
const User = model("user", userSchema);
export default User;
