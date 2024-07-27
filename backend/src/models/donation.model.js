import mongoose, { Schema } from "mongoose";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

const donationSchema = new Schema(
  {
    fullName: {
        type: String,
        required: true,
        trim: true,
        index: true,
      },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },
    phoneNumber: {
      type: String,
      required: true,
      trim: true,
      index: true,
    },
    isDoner:{
      type: Boolean,
      default: false,
    },
    refreshToken: {
      type: String,
    },
  },
  { timestamps: true }
);



export const Donation = mongoose.model("Teacher", donationSchema);
