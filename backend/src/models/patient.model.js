import mongoose, { Schema } from "mongoose";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

const patientSchema = new Schema(
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
    
    bloodGroup:{
      type: String,
      required: true,
    },
    docterId:{
      type: String,
    },
    teacherId:{
      type:String,
    },
    prescription:{
      type: String,
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },

    refreshToken: {
      type: String,
    },
  },
  { timestamps: true }
);



export const Patient = mongoose.model("patient", patientSchema);
