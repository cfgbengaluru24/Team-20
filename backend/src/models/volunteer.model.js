import mongoose, { Schema } from "mongoose";

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
    },

    email: {
      type: String,
      required: true,
      unique: true,
    },
    phoneNumber: {
      type: String,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
    dob: {
      type: String,
      required: true,
    },
    resume: {
      type: String,
    },
  },
  { timestamps: true }
);

export const Volunteer = mongoose.model("Volunteer", volunteerSchema);
