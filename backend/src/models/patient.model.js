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
    dob: {
      type: Date,
      required: true,
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
   

    refreshToken: {
      type: String,
    },
  },
  { timestamps: true }
);



export const Patient = mongoose.model("patient", patientSchema);
