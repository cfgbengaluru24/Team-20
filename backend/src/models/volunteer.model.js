import mongoose, { Schema } from "mongoose";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

const volunteerSchema = new Schema(
  {
    fullName: {
        type: String,
        required: true,
        trim: true,
        index: true,
      },
    experience: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
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
    city: {
        type: String,
        required: true,
        trim: true,
        index: true,
      },
    dob: {
        type: Date,
        required: true,
      },
    resume: {
        type: String,
        required: true,
      },
    refreshToken: {
      type: String,
    },
  },
  { timestamps: true }
);



export const Volunteer = mongoose.model("Volunteer", volunteerSchema);
