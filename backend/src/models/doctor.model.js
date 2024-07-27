import mongoose, { Schema } from "mongoose";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

const doctorSchema = new Schema(
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
      unique: true,
    },
    avatar: {
      type: String,
      required: true,
      unique: true,
    },
   
    specilization:{
      type: String,
      required: true
    },

    isDocter: {
      type: Boolean,
      default: false,
    },

    patients:[
      {
        type: Schema.Types.ObjectId,
        ref: "Doctor",
      }
    ],

    refreshToken: {
      type: String,
     
    },
  },
  { timestamps: true }
);


export const Doctor = mongoose.model("Doctor", doctorSchema);
