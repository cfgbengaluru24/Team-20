import mongoose, { Schema } from "mongoose";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

const teacherSchema = new Schema(
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

    avatar: {
      type: String,
      required: true,
      unique: true,
    },
    patients:[
      {
        type: Schema.Types.ObjectId,
        ref: "Teacher",
      }
    ],

    isTeacher: {
      type: Boolean,
      default: false,
    },

    refreshToken: {
      type: String,
    },
  },
  { timestamps: true }
);



export const Teacher = mongoose.model("Teacher", teacherSchema);
